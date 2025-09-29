// import Button from "@/shared/ui/button";
import type{MenuItem} from "../types";

type Props = {
  item: MenuItem;
  onAdd: () => void;
};

export const MenuItemCard = ({ item, onAdd }: Props) => {
  return (
    <div className="flex justify-between items-start p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
        <p className="text-sm font-medium mt-1">₹{item.price}</p>
        {item.isVeg && <span className="text-green-600 text-xs">Veg</span>}
      </div>
      <div className="flex flex-col items-center gap-2">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <button onClick={onAdd} className="bg-red-600 text-white text-sm px-3 py-1 rounded">
          Add
        </button>
      </div>
    </div>
  );
};
