import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
// import Profile from "./pages/Profile";
import  MainLayout  from "./layouts/MainLayout";
import RestaurantDetails  from "./pages/RestaurantDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="restaurant/:id" element={<RestaurantDetails />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
