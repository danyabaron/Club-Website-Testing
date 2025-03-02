
import bgVideo from '../assets/clubBG.mp4';

function Home() {
  return (
    <div className="w-full overflow-y-auto scroll-smooth">
      {/* Hero Section */}
      <section className="relative w-full h-[850px] flex items-center justify-center px-8">
        {/* Background Video */}
        <video
          className="absolute inset-0 object-cover w-full h-full"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0"></div>
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white">Welcome to Our Club!</h1>
          <p className="mt-4 text-2xl text-white">
            Discover more about us and get in touch.
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="#about"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 text-center bg-black">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 max-w-4xl mx-auto text-lg">
          We are a dynamic club focused on cybersecurity, hacking, and community outreach.
          Learn more about our events, workshops, and initiatives.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 text-center bg-black">
        <h2 className="text-3xl font-bold text-white">Quick Links</h2>
        <p className="mt-4 max-w-4xl mx-auto text-lg">
          Get in touch via email at <strong>club@example.com</strong> or follow us on social media.
        </p>
      </section>
    </div>
  );
}

export default Home;
