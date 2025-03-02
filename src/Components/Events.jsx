import CommunityUpdates from "./CommunityUpdates";
const Events = () => {
  return (
    <>
      <section className="py-12 bg-black text-bright-gold">
        <h2 className="text-3xl font-bold text-center mb-8 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
          Upcoming Events
        </h2>
        <div className="max-w-6xl mx-auto space-y-12 px-4">
          {/* Card 1: Workshops - text on left, image on right */}
          <div className="flex flex-col md:flex-row items-center bg-black border border-metal-gold rounded-lg shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4">Workshops</h3>
              <p className="text-gray-300 mb-4">
                Hands-on cybersecurity workshops designed to boost your skills and knowledge.
              </p>
              <a
                href="/workshops"
                className="inline-block bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
              >
                View Schedule
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="workshopImage.jpg"
                alt="Cybersecurity Workshop"
                className="w-full h-full object-cover rounded-r-lg"
              />
            </div>
          </div>

          {/* Card 2: Hackathons - text on right, image on left */}
          <div className="flex flex-col md:flex-row-reverse items-center bg-black border border-metal-gold rounded-lg shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4">Hackathons</h3>
              <p className="text-gray-300 mb-4">
                Join exciting hackathons, test your limits, and collaborate with peers to win prizes!
              </p>
              <a
                href="/hackathons"
                className="inline-block bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
              >
                See Events
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="hackathonImage.jpg"
                alt="Hackathon Event"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
          </div>
        </div>

        {/* Google Calendar Embed */}
        <div className="max-w-6xl mx-auto mt-12 px-4">
          <h3 className="text-2xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">Event Calendar</h3>
          <div className="border border-metal-gold rounded-lg overflow-hidden shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Your_Timezone"
              className="w-full h-[600px]"
              frameBorder="0"
              scrolling="no"
              title="Cybersecurity Club Events"
            ></iframe>
          </div>
        </div>
      </section>
      <CommunityUpdates />
    </>
  );
};

export default Events;
