// import type { Favorite } from "../types/TGame";
// import Button from "./Button";

// type Props = {
//   favorite: Favorite;
//   onDelete: (id: number) => void;
// };

// function FavoriteCard({ favorite, onDelete }: Props) {
//   return (
//     <li className=" mb-4 border-2  border-gray-500 bg-gray-500 flex justify-between items-center hover:-translate-y-2 hover:scale-105 transform transition-all duration-300 ease-in-out rounded-2xl p-4">
//       <div>
//         <strong className="text-white">{favorite.title}</strong>
//         <div className="text-sm text-white pb-2">
//           Added: {new Date(favorite.addedAt).toLocaleString()}
//         </div>

//         <Button
//           label="Remove"
//           variant="secondary"
//           onClick={() => onDelete(favorite.id)}
//         />
//       </div>
//     </li>
//   );
// }

// export default FavoriteCard;

import { useState } from "react";
import type { Favorite } from "../types/TGame";
import Button from "./Button";

type Props = {
  favorite: Favorite;
  onDelete: (id: number) => void;
};

function FavoriteCard({ favorite, onDelete }: Props) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveClick = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onDelete(favorite.id);
    }, 300); // match this duration with CSS animation duration
  };

  return (
    <li
      className={`mb-4 border-2 border-gray-500 bg-gray-500 flex justify-between items-center rounded-2xl p-4
    transform transition-opacity duration-300 ease-in-out
    ${isRemoving ? "opacity-0 scale-95" : ""}
    hover:transition-transform hover:duration-500 hover:ease-in-out
    hover:-translate-y-2 hover:scale-105
  `}
    >
      <div>
        <strong className="text-white">{favorite.title}</strong>
        <div className="text-sm text-white pb-2">
          Added: {new Date(favorite.addedAt).toLocaleString()}
        </div>
        <Button
          label="Remove"
          variant="secondary"
          onClick={handleRemoveClick}
        />
      </div>
    </li>
  );
}

export default FavoriteCard;
