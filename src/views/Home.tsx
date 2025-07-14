import { useEffect, useRef, useState } from "react";
import type { Game, Favorite } from "../types/TGame";

import { fetchGames } from "../services/gameService";
import {
  createFavorite,
  removeFavoriteById,
} from "../services/favoriteService";

import GameCard from "../components/GameCard";
import FavoriteList from "../components/FavoriteList";
import Button from "../components/Button";

function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [favoriteGames, setFavoriteGames] = useState<Favorite[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoading, setIsLoading] = useState(true);
  const hasHydrated = useRef(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Load games and favorites on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load favorites from localStorage
        const storedFavorites = localStorage.getItem("favoriteGames");
        if (storedFavorites) {
          setFavoriteGames(JSON.parse(storedFavorites) as Favorite[]);
        }

        // Fetch games from API
        const games = await fetchGames();
        setGames(games);
      } catch (error) {
        console.error("Error fetching games:", error);
      } finally {
        hasHydrated.current = true;
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Sync favoriteGames to localStorage only after hydration
  useEffect(() => {
    if (hasHydrated.current) {
      localStorage.setItem("favoriteGames", JSON.stringify(favoriteGames));
    }
  }, [favoriteGames]);

  // Add game to favorites
  const handleAddFavorite = (game: Game) => {
    if (!hasHydrated.current) return;
    const newEntry = createFavorite(game);
    const alradyExists = favoriteGames.find((fav) => fav.id === newEntry.id);
    if (alradyExists) {
      return alert(`Game already added to favorites!`);
    }
    setFavoriteGames((prev) => [...prev, newEntry]);
  };

  // Delete game from favorites
  const handleDeleteFavorite = (id: number) => {
    if (!hasHydrated.current) return;
    setFavoriteGames((prev) => removeFavoriteById(prev, id));
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading games...</p>
      </div>
    );
  }

  // filter games based on search term from the input search bar

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-4 space-y-8">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg mb-6">
        MMO Game Browser
      </h1>

      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-1/2 mx-auto block px-4 py-3 rounded-md border border-gray-600 bg-gray-900 text-white placeholder-gray-400 shadow-md
    focus:outline-none focus:ring-2 focus:ring-white
    hover:border-white transition-colors duration-300"
      />

      {/* Game Browser Section */}
      {games.length === 0 ? (
        <p className="text-center text-gray-500">
          No games found. Try refreshing.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredGames.slice(0, visibleCount).map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onAddToFavorites={handleAddFavorite}
              favoriteGames={favoriteGames}
            />
          ))}
        </div>
      )}

      {/* Show More Button */}
      {visibleCount < games.length && (
        <div className="text-center mt-4">
          <Button
            label="Show More"
            onClick={() => setVisibleCount((prev) => prev + 12)}
            variant="primary"
          />
        </div>
      )}

      {/* Favorite Games Section */}
      <h2 className="text-3xl font-semibold text-center text-purple-300 drop-shadow-md mt-12 mb-4 border-t border-gray-700 pt-6">
        Favorite Games
      </h2>
      <FavoriteList
        favoriteGames={favoriteGames}
        onDeleteFavorite={handleDeleteFavorite}
      />
    </div>
  );
}

export default Home;
