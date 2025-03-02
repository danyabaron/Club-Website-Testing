import bgVideo from '../assets/clubBG.mp4';
import backgroundPattern from '../assets/background-pattern.jpg';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';
import discord from '../assets/discord.png';
import meetings from '../assets/meetings.jpg';
import workshops from '../assets/workshops.jpg';
import hackathons from '../assets/hackathons.jpg';
import membership from '../assets/membership.jpeg';

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
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0"></div>
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-bright-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
            Welcome to Our Club!
          </h1>
          <p className="mt-4 text-2xl text-bright-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
            Discover more about us and get in touch.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="relative flex items-center gap-2 px-6 py-3 text-lg font-bold text-gold border-2 border-gold rounded-full bg-black transition-all duration-300 ease-in-out hover:bg-gold hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              <a href="#about" className="block w-full h-full text-center">
                About Us
              </a>
            </button>
            <button className="relative flex items-center gap-2 px-6 py-3 text-lg font-bold text-gold border-2 border-gold rounded-full bg-black transition-all duration-300 ease-in-out hover:bg-gold hover:shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              <a href="#contact" className="block w-full h-full text-center">
                Contact
              </a>
            </button>
          </div>
        </div>


      </section >


      {/* Background wrapper with imported image */}
      <div
        className="bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${backgroundPattern})`
        }
        }
      >

        <section id="about" className="py-12  text-bright-gold">
          <h2 className="text-3xl font-bold text-center mb-8 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">Explore Our Club</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* Card 1 */}
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
              <h3 className="text-xl font-bold text-bright-gold">Meetings</h3>
              <img src={meetings} alt="club members meeting" className="w-80 h-50" />
              <p className="text-sm mt-4 text-gray-300">
                We hold meetings during the fall and spring semesters...
              </p>
              <button className="bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6">
                View Calendar
              </button>
            </div>
            {/* Card 2 */}
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
              <h3 className="text-xl font-bold text-bright-gold">Workshops</h3>
              <img src={workshops} alt="Cybersecurity workshop" className="w-80 h-50" />
              <p className="text-sm mt-4 text-gray-300">
                Our teams learn defensive strategies to protect systems...
              </p>
              <button className="bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6">
                About CCDC
              </button>
            </div>
            {/* Card 3 */}
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
              <h3 className="text-xl font-bold text-bright-gold">Hackathons</h3>
              <img src={hackathons} alt="Hackathon event" className="w-80 h-50" />
              <p className="text-sm mt-4 text-gray-300">
                Our CTFs let members learn how attackers exploit systems...
              </p>
              <button className="bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6">
                About CTFs
              </button>
            </div>
            {/* Card 4 */}
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
              <h3 className="text-xl font-bold text-bright-gold">Membership</h3>
              <img src={membership} alt="Club members smiling together" className="w-60 h-40" />
              <p className="text-sm mt-4 text-gray-300">
                Interested in joining? We welcome all skill levels...
              </p>
              <button className="bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6">
                Join Now
              </button>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 flex justify-center ">
          <div className="border border-metal-gold rounded-lg p-6 bg-black shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] text-center max-w-lg w-full">
            <h3 className="text-2xl font-bold text-bright-gold mb-4">Connect with Us</h3>
            <p className="text-gray-300 text-sm mb-6">
              Follow us on our platforms to stay updated on club events and discussions.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-80">
                <img src={instagram} alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:opacity-80">
                <img src={discord} alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:opacity-80">
                <img src={github} alt="Instagram" className="w-10 h-10" />

              </a>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="bg-black text-gray-400 py-4">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2025 Cyber Club. All Rights Reserved.</p>
          </div>
        </footer>
      </div >
    </div >
  );
}

export default Home;
