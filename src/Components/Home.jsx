import Footer from "./Footer";
import bgVideo from '/clubBG.mp4';
import backgroundPattern from '/background-pattern.jpg';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';
import discord from '../assets/discord.png';
import meetings from '/meetings.jpg';
import workshops from '/workshops.jpg';
import hackathons from '/hackathons.jpg';
import membership from '/membership.jpeg';

function Home() {
  return (
    <div className="w-full overflow-y-auto scroll-smooth">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center px-8 overflow-hidden">
        {/* Background pattern behind video */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${backgroundPattern})`
          }}
        ></div>

        {/* Background Video on top of background pattern */}
        <video
          className="absolute inset-0 object-cover w-full h-full z-10 opacity-0 transition-opacity duration-1000"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={(e) => e.currentTarget.style.opacity = 0.8} // Fade in video after it loads
        />

        {/* Content on top */}
        <img
          src="/DraconisLogo.png"
          className="relative z-20 w-100 h-64 object-cover rounded-md"
        />

        <div className="relative z-20 text-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-bright-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
            Welcome to Draconis Squamae
          </h1>
          <p className="mt-4 text-2xl text-bright-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
            Interdisciplinary. Multi Chapter. Educational. Cybersecurity.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {/* Your buttons here */}
          </div>
        </div>
      </section>

      {/* Background wrapper with imported image */}
      <div
        className="bg-cover bg-center bg-fixed h-full"
        style={{
          backgroundImage: `url(${backgroundPattern})`
        }}
      >

        <section id="about" className="p-12 h-full flex flex-col gap-8 items-center justify-center  text-bright-gold">
          <h2 className="text-3xl w-fit font-bold text-center 
          relative z-10 bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">Explore Our Club</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* Card 1 */}
            <div className=" gap-4 border border-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] justify-between">
              <h3 className="text-xl font-bold text-bright-gold">Meetings</h3>
              <img src={meetings} alt="club members meeting" className="w-80 h-50" />
              <p className="text-sm mt-4 text-gray-300">
                Join Draconis Squamae on Saturdays at 8 PM to discuss a variety of topics! The UCF chapter of Draconis Squamae is dedicated to making its presence known and helping you to become a safer netizen! Locations will be announced the mornings of meeting days.
              </p>
              <button className="bg-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6 ">
                <a href="/events" className="block w-full h-full text-center">
                  View Calendar
                </a>
              </button>
            </div>
            {/* Card 2 */}
            <div className="border border-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] justify-between">
              <h3 className="text-xl font-bold text-bright-gold mb-6">Workshops</h3>
              <img src={workshops} alt="Cybersecurity workshop" className="w-80 h-50" />
              <p className="text-sm mt-4 text-gray-300">
                Join us for workshops on cybersecurity best practices. From Cybersecurity Fundamentals to Advanced Wireless & Local Threat Protection,  we offer guidance and development in a number of fields to help you improve as a safe, informed, and skilled netizen.
              </p>
              <button className="bg-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6 ">
                <a href="/events" className="block w-full h-full text-center">
                  Check Events
                </a>
              </button>
            </div>
            {/* Card 3 */}
            <div className="border border-gold rounded-lg p-4 flex flex-col gap-4 items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] justify-between">
              <h3 className="text-xl font-bold text-bright-gold">Hackathons</h3>
              <img src={hackathons} alt="Hackathon event" className="w-80 h-50" />
              <p className="text-sm mt-4 text-gray-300">
                Interested in ethical hacking? Our quarterly hackathon competitions are a great way to put your skills to use for a charitable cause! See below for a schedule of upcoming hackathons. Note: CEH Certification & Club Membership are Prerequisites for Participation.
              </p>
              <button className="bg-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6 ">
                <a href="/events" className="block w-full h-full text-center">
                  See Schedule
                </a>
              </button>
            </div>
            {/* Card 4 */}
            <div className="border border-gold rounded-lg p-4 flex flex-col gap-1 items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] justify-between">
              <h3 className="text-xl font-bold text-bright-gold">Membership</h3>

              <img src={membership} alt="Club members smiling together" className="w-60 h-40" />

              <p className="text-sm mt-4 text-gray-300">
                Interested in becoming a Draconis? We welcome all skill levels! Technical knowledge is not required to get started! Many of Our Members Came in With Non-Technical Degrees and are Exceeding Expectations in Their Career Fields!
              </p>
              <button className="bg-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6">
                <a href="/login" className="block w-full h-full text-center">
                  Join Now
                </a>
              </button>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 flex justify-center ">
          <div className="border border-gold rounded-lg p-6 bg-black shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] text-center max-w-lg w-full">
            <h3 className="text-2xl font-bold text-bright-gold mb-4">Connect with Us</h3>
            <p className="text-gray-300 text-sm mb-6">
              Follow us on Instagram to stay updated on club events and discussions.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center">
          <a
             href="https://www.instagram.com/draconis.squamae?igsh=d3F2ZmpmNTM3d3A5&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-80"
  >
    <img src={instagram} alt="Instagram" className="w-10 h-10" />
  </a>
</div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
