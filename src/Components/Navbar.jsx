

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <span>ClubName</span>
        </div>

        {/* Navigation links */}
        <div className="flex space-x-6">
          <a href="/" className="text-white hover:text-gray-200">Home</a>
          <a href="/about" className="text-white hover:text-gray-200">About</a>
          <a href="/events" className="text-white hover:text-gray-200">Events</a>
          <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
        </div>

        {/* Optional: Add a button like "Sign In" or "Join" */}
        <div className="flex space-x-4">
          <a href="/login" className="text-black font-bold px-4 py-2 rounded bg-metal-gold">Login</a>
          <a href="/join" className="text-black font-bold px-4 py-2 rounded bg-metal-gold ">Join</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
