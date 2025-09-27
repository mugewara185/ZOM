const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-400 text-white py-16 px-6 rounded-2xl mb-8 shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">Discover Great Food</h1>
        <p className="text-lg mb-6 opacity-90">Order from your favorite restaurants near you</p>
        <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Explore Restaurants
        </button>
      </div>
    </section>
  );
};
export default Hero;
