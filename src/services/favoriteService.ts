import type { Game, Favorite } from "../types/TGame";

export function createFavorite(game: Game): Favorite {
  return {
    id: game.id,
    title: game.title,
    addedAt: new Date().toLocaleString(),
  };
}

export function removeFavoriteById(
  favorites: Favorite[],
  id: number
): Favorite[] {
  return favorites.filter((fav) => fav.id !== id);
}
