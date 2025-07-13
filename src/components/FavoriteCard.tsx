import type { Favorite } from "../types/TGame";
import Button from "./Button";

type Props = {
  favorite: Favorite;
  onDelete: (id: number) => void;
};

export function FavoriteCard({ favorite, onDelete }: Props) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
      <div>
        <strong>{favorite.title}</strong>
        <div className="text-sm text-gray-600">
          Added: {new Date(favorite.addedAt).toLocaleString()}
        </div>

        <Button
          label="Remove"
          variant="seconday"
          onClick={() => onDelete(favorite.id)}
        />
      </div>
    </li>
  );
}
