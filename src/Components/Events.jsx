import CommunityUpdates from "./CommunityUpdates";
import Footer from "./Footer";
import workshops from "/workshops.jpg";
import hackathons from "/hackathons.jpg";
import Calendar from "./Calendar";


const Events = () => {
  return (
    <>
      <section className="py-12 bg-black text-bright-gold">
        <h2 className="text-3xl font-bold text-center mb-8 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
          <span className="bg-bright-gold text-black px-4 py-1  shadow-md">
            Events
          </span>

        </h2>

        <div className="max-w-6xl mx-auto px-4 space-y-8">
          {/* Workshops Card */}
          <div className="flex flex-col md:flex-row items-center border border-metal-gold rounded-lg shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] bg-black">
            {/* Text Section */}
            <div className="md:w-1/2 p-8 space-y-4">
              <h3 className="text-2xl font-bold">
                <span className="bg-bright-gold text-black px-4 py-1  shadow-md">
                  Workshops
                </span>
              </h3>
              <p className="text-gray-300">
                Expand your skills with hands-on workshops led by industry
                professionals and experienced mentors. Whether you&apos;re a beginner
                looking to get started or an expert aiming to refine your
                techniques, our workshops cover a wide range of topics, from
                coding and cybersecurity to design and AI. Join us to gain
                practical knowledge, connect with like-minded peers, and take
                your expertise to the next level!
              </p>
              <p className="text-gray-300">
                Check our calendar for upcoming workshops or see our community
                posts to read about past workshops we&apos;ve held!
              </p>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={workshops}
                alt="Cybersecurity workshop"
                className="w-full h-auto object-cover rounded-r-lg"
              />
            </div>
          </div>

          {/* Hackathons Card */}
          <div className="flex flex-col md:flex-row-reverse items-center border border-gold rounded-lg shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] bg-black">
            {/* Text Section */}
            <div className="md:w-1/2 p-8 space-y-4 text-right">
              <h3 className="text-2xl font-bold">
                <span className="bg-bright-gold text-black px-4 py-1  shadow-md">
                  Hackathons
                </span>
              </h3>
              <p className="text-gray-300">
                Push your creativity and problem-solving skills to the limit in
                our high-energy hackathons! Collaborate with talented
                developers, designers, and innovators to build something amazing
                in a limited time. Compete for prizes, network with industry
                leaders, and turn your ideas into reality. Whether you&apos;re a
                seasoned hacker or a first-time participant, there&apos;s a place for
                you in the challenge!
              </p>
              <p className="text-gray-300">
            <a
           href="/hackathons"
          className="underline hover:text-yellow-500"
          >
         Click here
          </a>{" "}
          to view local events or below for Hack the Box Competitions!
          </p>
          <a
       href="https://www.hackthebox.com/"
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
>
  Hack the Box
</a>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={hackathons}
                alt="Hackathon event"
                className="w-full h-auto object-cover rounded-l-lg"
              />
            </div>
          </div>
        </div>

         {/* Calendar Section */}
         <div className="max-w-6xl mx-auto mt-12 px-4">
          <h3 className="text-2xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
            <span className="bg-bright-gold text-black px-4 py-1 shadow-md">
              Calendar
            </span>
          </h3>
          <div className="border border-metal-gold rounded-lg overflow-hidden shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
            {/* Insert the Calendar component here */}
            <Calendar />
          </div>
        </div>
      </section>

      <CommunityUpdates />
      <Footer />
    </>
  );
};

export default Events;
