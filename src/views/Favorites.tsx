import { useState, useEffect, useRef } from "react";
import type { Favorite } from "../types/TGame";
import { removeFavoriteById } from "../services/favoriteService";
import FavoriteList from "../components/FavoriteList";

function Favorites() {
  const [favoriteGames, setFavoriteGames] = useState<Favorite[]>([]);
  const hasHydrated = useRef(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("favoriteGames");
    if (stored) {
      setFavoriteGames(JSON.parse(stored) as Favorite[]);
    }

    setTimeout(() => {
      hasHydrated.current = true;
    }, 0);
  }, []);

  // Save to localStorage after hydration
  useEffect(() => {
    if (hasHydrated.current) {
      localStorage.setItem("favoriteGames", JSON.stringify(favoriteGames));
    }
  }, [favoriteGames]);

  const handleDeleteFavorite = (id: number) => {
    setFavoriteGames((prev) => removeFavoriteById(prev, id));
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-white tracking-tight">
          🎮 My Favorite Games
        </h1>

        {favoriteGames.length === 0 ? (
          <div className="text-center p-6 rounded-lg bg-gray-800 border border-gray-700">
            <p className="text-gray-400 text-lg">
              No favorites added yet. Start exploring!
            </p>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
            <ul className="space-y-6">
              <FavoriteList
                favoriteGames={favoriteGames}
                onDeleteFavorite={handleDeleteFavorite}
              />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
