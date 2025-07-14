import type { Favorite } from "../types/TGame";
import FavoriteCard from "./FavoriteCard";

type Props = {
  favoriteGames: Favorite[];
  onDeleteFavorite: (id: number) => void;
};

function FavoriteList({ favoriteGames, onDeleteFavorite }: Props) {
  if (favoriteGames.length === 0) {
    return <p className="text-gray-500">No favorites added yet</p>;
  }

  return (
    <ul className=" rounded-2xl p-4 space-y-2 mt-2">
      {favoriteGames.map((fav) => (
        <FavoriteCard
          key={fav.id}
          favorite={fav}
          onDelete={() => onDeleteFavorite(fav.id)}
        />
      ))}
    </ul>
  );
}

export default FavoriteList;
