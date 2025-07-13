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

    // Move this to a timeout to allow state to update before hydration
    setTimeout(() => {
      hasHydrated.current = true;
    }, 0);
  }, []);

  // Save changes to localStorage after hydration
  useEffect(() => {
    if (hasHydrated.current) {
      localStorage.setItem("favoriteGames", JSON.stringify(favoriteGames));
    }
  }, [favoriteGames]);

  // Delete favorite handler
  const handleDeleteFavorite = (id: number) => {
    setFavoriteGames((prev) => removeFavoriteById(prev, id));
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">My Favorite Games</h1>
      {favoriteGames.length === 0 ? (
        <p className="text-center text-gray-500">No favorites added yet.</p>
      ) : (
        <FavoriteList
          favoriteGames={favoriteGames}
          onDeleteFavorite={handleDeleteFavorite}
        />
      )}
    </div>
  );
}

export default Favorites;
