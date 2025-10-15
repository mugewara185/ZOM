// import { useNavigate } from "react-router-dom";
// import type{ Restaurant } from "@/features/restaurant/types";

// const RestaurantCard = ({ id, name, image, location, cuisines, rating }: Restaurant) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="bg-white/0 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
//       onClick={() => navigate(`/restaurant/${id}`)}
//     >
//       <img
//         src={image}
//         alt={name}
//         className="h-40 w-full object-cover rounded-t-xl"
//       />
//       <div className="p-4">
//         <h3 className="font-bold text-lg">{name}</h3>
//         <p className="text-sm text-gray-500">{location}</p>
//         <p className="text-sm">{cuisines.join(", ")}</p>
//         <p className="text-yellow-600 font-medium">⭐ {rating}</p>
//       </div>
//     </div>
//   );
// };

// export default RestaurantCard;


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Restaurant } from "@/features/restaurant/type";

const RestaurantCard = ({ id, name, image, location, cuisines, rating }: Restaurant) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      onClick={() => navigate(`/restaurant/${id}`)}
      className="bg-gray-600/10 rounded-xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
    >
      <img src={image} alt={name} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm">{cuisines.join(", ")}</p>
        <p className="text-yellow-600 font-medium mt-1">⭐ {rating}</p>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
