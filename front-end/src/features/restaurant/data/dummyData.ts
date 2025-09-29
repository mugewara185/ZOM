  export const restaurantNames: string[] = [
    "Spice Symphony", "Biryani Junction", "Cafe Rasoda", "Taste of Punjab", "Shanghai Chilli",
    "Madras Meals", "Namma Thindi", "Tandoori Trails", "Rolls & Bowls", "Butterfly Cafe",
    "The Dosa Den", "Flavours of India", "Swaad Express", "Sizzlin’s Curry", "Bamboo Basket",
    "Café Filtered", "Chettinad Chill", "Wrap & Go", "Tandoori Tales", "Masala Mirage",
    "Urban Biryani", "Roti Republic", "The Noodle Nook", "South Spice Kitchen", "Chatpata Chowk",
    "Curry & Crust", "Taste Sutra", "Royal Thali", "The Café Cloud", "Momo Station",
    "Masala Mandi", "Paratha Nation", "Thattukada Street", "Mughal-e-Tandoor", "Idli & More",
    "The Kebab Cart", "Zest Kitchen", "Thamizh Thattai", "Curry Avenue", "Biryani Bros",
    "Cloud Café", "Biryani Bazooka", "Food Factory", "Veggie Vogue", "Tikka Time",
    "South Feast Hub", "Dilli Chaat House", "Hunger Highway", "Tandoori Temptations", "Spice Route",
    "Masala Works", "Momo Magic", "Chilli Chaat", "Taste Town", "Coastal Cravings",
    "Kothu Kadai", "Thali Temptations", "Cream & Curry", "Swagatha Kitchen", "Sambar Station"
  ]
type Menu={
  name:string;
  description:string;
  basePrice:number;
  isVeg:boolean;
  image:string;
};

  export const menuIts: Menu[]=[
  { name: "Idli", description: "Soft steamed rice cakes", basePrice: 40, isVeg: true, image: "idli.jpg" },
  { name: "Chicken Biryani", description: "Spicy layered rice with chicken", basePrice: 160, isVeg: false, image: "biryani.jpg" },
  { name: "Paneer Butter Masala", description: "Creamy tomato gravy with paneer", basePrice: 120, isVeg: true, image: "paneer.jpg" },
  { name: "Hakka Noodles", description: "Stir-fried noodles with veggies", basePrice: 90, isVeg: true, image: "noodles.jpg" },
  { name: "Gulab Jamun", description: "Sweet syrupy dessert balls", basePrice: 50, isVeg: true, image: "gulabjamun.jpg" },
  { name: "Tandoori Chicken", description: "Char-grilled spicy chicken", basePrice: 180, isVeg: false, image: "tandoori.jpg" },
  ]