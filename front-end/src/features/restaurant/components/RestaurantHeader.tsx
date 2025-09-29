import { Star } from "lucide-react";

type Props = {
  name: string;
  image: string;
  location: string;
  cuisines: string[];
  rating: number;
};

export const RestaurantHeader = ({ name, image, location, cuisines, rating }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 mb-6">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
      <p className="flex items-center gap-1 text-yellow-600 mt-1">
        <Star className="w-4 h-4" /> {rating}
      </p>
    </div>
  );
};
