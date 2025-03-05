import Footer from "./Footer";
import bgVideo from '../assets/clubBG.mp4';
import backgroundPattern from '../assets/background-pattern.jpg';

function Contact() {
  return (
    <div className="w-full overflow-y-auto scroll-smooth">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center px-8">
        {/* Background Video */}
        <video
          className="absolute inset-0 object-cover w-full h-full"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0"></div>
        {/* Content */}
        <div className="relative z-10 text-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-bright-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
            Contact Us
          </h1>
          <p className="mt-4 text-2xl text-bright-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
            We&apos;d love to hear from you. Get in touch with us!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-cover bg-center bg-fixed h-full" style={{ backgroundImage: `url(${backgroundPattern})` }}>
        <div className="flex flex-col items-center justify-center p-12">
          <form className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2">
            <h2 className="text-3xl text-bright-gold font-bold mb-6 text-center">Get In Touch</h2>

            <div className="mb-4">
              <label htmlFor="name" className="text-bright-gold text-lg">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 mt-2 text-black rounded-md bg-white"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-bright-gold text-lg">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 text-black rounded-md bg-white"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="text-bright-gold text-lg">Your Message</label>
              <textarea
                id="message"
                className="w-full p-3 mt-2 text-black rounded-md bg-white"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-lg font-bold text-black bg-bright-gold rounded-full transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:shadow-[0_0_10px_rgba(255,215,0,0.7)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
