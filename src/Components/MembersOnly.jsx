import { useEffect } from "react";
import Footer from "./Footer";
import backgroundPattern from "../assets/background-pattern.jpg";


function MembersOnly() {
  // Your deployed Google Apps Script URL (same as in Login.jsx)
  const scriptURL = "https://script.google.com/macros/s/AKfycbyf1ApsCNdUv_-NMI5Tc1ljuMldxmil0ZkvnF7vpt-KOgIqExhow36xzVNYGL7q6COJaA/exec";

  useEffect(() => {
    // Get the player ID from localStorage
    const playerId = localStorage.getItem("argPlayerId");

    if (playerId) {
      // Trigger the fourth email when MembersOnly component loads
      fetch(`${scriptURL}?pid=${encodeURIComponent(playerId)}&trigger=membersOnly`)
        .then(response => response.json())
        .then(data => {
          console.log("Fourth email trigger response:", data);
        })
        .catch(error => {
          console.error("Error triggering fourth email:", error);
        });
    }
  }, []);

  return (
    <div className="w-full overflow-y-auto scroll-smooth">
      {/* Background wrapper with imported image */}
      <div
        className="bg-cover bg-center bg-fixed h-full"
        style={{
          backgroundImage: `url(${backgroundPattern})`,
        }}
      >
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center px-8">
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          {/* Content */}
          <div className="relative z-10 text-center bg-black p-8 rounded-lg shadow-metal-gold shadow-lg">
            <h1 className="text-5xl font-bold text-bright-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
              Members Only
            </h1>
            <p className="mt-4 text-2xl text-bright-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
              Exclusive content for verified members.
            </p>
          </div>
        </section>

        {/* Club Members List Section */}
        <section id="club-members" className="p-12 h-full flex flex-col gap-8 items-center justify-center text-bright-gold">
          <h2 className="text-3xl w-fit font-bold text-center relative z-10 bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
            Club Members List
          </h2>
          <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-center gap-8 px-4">
            {/* Example Member Card */}
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Marcus</h3>
              <p className="text-sm mt-4 text-gray-300">Role: President / Founder</p>
              <p className="text-sm mt-2 text-gray-300">Joined: 2023</p>
            </div>
            {/* Add more member cards here */}
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Riley </h3>
              <p className="text-sm mt-4 text-gray-300">Role: Administrative Officer</p>
              <p className="text-sm mt-2 text-gray-300">Joined: 2023</p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Jonathan</h3>
              <p className="text-sm mt-4 text-gray-300">Role: Lead Programmer / Security Specialist</p>
              <p className="text-sm mt-2 text-gray-300">Joined: 2023</p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Claire</h3>
              <p className="text-sm mt-4 text-gray-300">Role: PR</p>
              <p className="text-sm mt-2 text-gray-300">Joined: 2023</p>
            </div>
          </div>
          {/* Add more member cards here */}

        </section>

        {/* Do Not Associate List Section */}
        {/* Do Not Associate List Section */}
        <section id="do-not-associate" className="p-12 h-full flex flex-col gap-8 items-center justify-center text-bright-gold">
          <h2 className="text-3xl w-fit font-bold text-center relative z-10 bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
            Do Not Associate List
          </h2>
          <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-center gap-8 px-4">
            {/* Member Cards for Do Not Associate List */}
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Daniel Vargas</h3>
              <p className="text-sm mt-4 text-gray-300">UCF ID: 1618842</p>
              <p className="text-sm mt-2 text-gray-300">Status: Monitored</p>
              <p className="text-sm mt-2 text-gray-300">Reason: Tried to access private club materials without permission.</p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Lina Patel</h3>
              <p className="text-sm mt-4 text-gray-300">UCF ID: 1671234</p>
              <p className="text-sm mt-2 text-gray-300">Status: Under Review</p>
              <p className="text-sm mt-2 text-gray-300">Reason: Did not follow the club’s participation rules.</p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Alex Valegro</h3>
              <p className="text-sm mt-4 text-gray-300">UCF ID: 1637909</p>
              <p className="text-sm mt-2 text-gray-300">Status: Resolved</p>
              <p className="text-sm mt-2 text-gray-300">Reason: Broke confidentiality and ignored club guidelines.</p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">James Ortez</h3>
              <p className="text-sm mt-4 text-gray-300">UCF ID: 1624781</p>
              <p className="text-sm mt-2 text-gray-300">Status: Under Review</p>
              <p className="text-sm mt-2 text-gray-300">Reason: Broke the club’s behavior rules.</p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Erica Monroe</h3>
              <p className="text-sm mt-4 text-gray-300">UCF ID: 1691145</p>
              <p className="text-sm mt-2 text-gray-300">Status: Monitored</p>
              <p className="text-sm mt-2 text-gray-300">Reason: Shared internal discussions without approval.</p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Kevin Liu</h3>
              <p className="text-sm mt-4 text-gray-300">UCF ID: 1607783</p>
              <p className="text-sm mt-2 text-gray-300">Status: Under Review</p>
              <p className="text-sm mt-2 text-gray-300">Reason: Concerns about protecting member information.</p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Rachel Gomez</h3>
              <p className="text-sm mt-4 text-gray-300">UCF ID: 1668899</p>
              <p className="text-sm mt-2 text-gray-300">Status: Monitored</p>

              {/* LINK TO LEVEL 3 USING TROJAN CLUE */}
              <p className="text-sm mt-2 text-gray-300">
                Reason: Caused disruptions affecting{" "}
                <a href="/level3" className="hover:text-bright-gold hover:underline">
                  Trojan 
                </a>{" "}
                 club teamwork.
              </p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Isaac Turner</h3>
              <p className="text-sm mt-4 text-gray-300">UCF ID: 1653310</p>
              <p className="text-sm mt-2 text-gray-300">Status: Monitored</p>
              <p className="text-sm mt-2 text-gray-300">Reason: Did not follow security steps correctly.</p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Melissa Cain</h3>
              <p className="text-sm mt-4 text-gray-300">UCF ID: 1682217</p>
              <p className="text-sm mt-2 text-gray-300">Status: Under Review</p>
              <p className="text-sm mt-2 text-gray-300">Reason: Broke club rules about communication with others.</p>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Samantha Reyes</h3>
              <p className="text-sm mt-4 text-gray-300">UCF ID: 1639910</p>
              <p className="text-sm mt-2 text-gray-300">Status: Monitored</p>
              <p className="text-sm mt-2 text-gray-300">Reason: Unclear issues with following club rules.</p>
            </div>
          </div>
        </section>

        {/* Member Only Event List Section */}
        <section id="member-events" className="p-12 h-full flex flex-col gap-8 items-center justify-center text-bright-gold">
          <h2 className="text-3xl w-fit font-bold text-center relative z-10 bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
            Member Only Event List
          </h2>
          <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-center gap-8 px-4">
            {/* Example Member Card */}
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Member Name</h3>
              <p className="text-sm mt-4 text-gray-300">Role: Member</p>
              <p className="text-sm mt-2 text-gray-300">Joined: 2023</p>

              <button className="bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6">
                RSVP
              </button>
            </div>
            {/* Add more member cards here */}
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Member Name</h3>
              <p className="text-sm mt-4 text-gray-300">Role: Member</p>
              <p className="text-sm mt-2 text-gray-300">Joined: 2023</p>
              <button className="bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6">
                RSVP
              </button>
            </div>
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] flex-shrink-0 w-64">
              <h3 className="text-xl font-bold text-bright-gold">Member Name</h3>
              <p className="text-sm mt-4 text-gray-300">Role: Member</p>
              <p className="text-sm mt-2 text-gray-300">Joined: 2023</p>
              <button className="bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6">
                RSVP
              </button>
            </div>


            {/* Add more event cards here */}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default MembersOnly;