import { useParams } from "react-router-dom";
import { restaurants } from "@/data/dummyData";
import { menus } from "@/data/dummyData";
import { RestaurantHeader } from "@/features/restaurant/components/RestaurantHeader";
import { MenuItemCard } from "@/features/restaurant/components/MenuItemCard";

const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();

  // find restaurant by id
  const restaurant = restaurants.find((r) => r.id === id);

  // filter menu items by restaurant id
  const items = menus.filter((item) => item.restaurantId === id);

  if (!restaurant) {
    return <p className="p-4">Restaurant not found.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* header */}
      <RestaurantHeader
        name={restaurant.name}
        image={restaurant.image}
        location={restaurant.location}
        cuisines={restaurant.cuisines}
        rating={restaurant.rating}
      />

      {/* menu */}
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <div className="space-y-4">
        {items.length === 0 ? (
          <p className="text-gray-500">No menu items available.</p>
        ) : (
          items.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onAdd={() => console.log("Add to cart:", item)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
