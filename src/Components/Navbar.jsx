const Navbar = () => {
  return (
    <nav className="bg-gold p-3 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-xl font-bold">
          <span>Draconis Squamae</span>
        </div>

        {/* Navigation links */}
        <div className="flex space-x-6">
          <a href="/" className="text-black font-bold rounded-md p-3
          transition-all ease-in-out duration-300 hover:text-white  hover:bg-black">Home</a>
          <a href="/about" className="text-black font-bold rounded-md p-3
          transition-all ease-in-out duration-300 hover:text-white hover:bg-black">About</a>
          <a href="/events" className="text-black font-bold rounded-md p-3
          transition-all ease-in-out duration-300 hover:text-white hover:bg-black">Events</a>
          <a href="/contact" className="text-black font-bold rounded-md p-3
          transition-all ease-in-out duration-300 hover:text-white hover:bg-black">Contact</a>
        </div>

        {/* Optional: Add a button like "Sign In" or "Join" */}
        <div className="flex space-x-4">
          <a href="/login" className="text-white font-bold px-4 py-2 rounded-md bg-black shadow-xl
          transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">Join</a>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
