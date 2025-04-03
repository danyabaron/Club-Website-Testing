import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import RedCode from "/level3-redcode.png";
import { FaTerminal } from 'react-icons/fa';
import Terminal2 from './Terminal2';

const Level3Deep = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setIsTerminalOpen(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setIsTerminalOpen(false);
  };

  // Function to handle the '|' key press
  const handleKeyPress = (event) => {
    if (event.key === '|' || event.key === '|') {
      disableCloudflare();
    }
  };

  // Function to turn everything white except the terminal button
  const disableCloudflare = () => {
    const level3Elements = document.querySelectorAll('.level3-element');
    level3Elements.forEach(element => {
      if (!element.classList.contains('terminal-button')) {
        element.style.backgroundColor = 'white';
        element.style.color = 'black';
      }
    });
  };

  // Add event listener on component mount
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="w-full overflow-y-auto relative min-h-screen bg-black scroll-smooth level3-element">
      {/* Left side border image */}
      <div className="w-fit h-full absolute left-0 top-0">
        <img src={RedCode} alt="Red Code" className="w-28 opacity-80 h-full object-cover" />
      </div>

      {/* Right side border image */}
      <div className="w-fit h-full absolute right-0 top-0 z-10">
        <img src={RedCode} alt="Red Code" className="w-28 opacity-80 h-full object-cover" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-fit flex flex-col gap-6 justify-start items-center px-8 level3-element">
        {/* Content */}
        <div className="relative z-10 bg-black p-8 rounded-lg text-center level3-element">
          <h1 className="text-3xl font-bold text-white">
            Draco Admin Level Charlie CLI
          </h1>

          {/* Command Prompt Styled Button */}
          <button
            onClick={handleButtonClick}
            className="mt-10 ml-20 flex right-0 py-3 px-3 bg-gray-800 text-white rounded-lg border-2 border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 terminal-button"
          >
            <FaTerminal className="mr-2" />
          </button>

          {/* General Club Structure Section with Red Drop Shadow */}
          {/* <div className="relative text-center bg-black p-8 rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.8)]  mt-6">
            <h1 className="text-xl font-bold text-bright-gold ">
              General Club Structure
            </h1>
          </div> */}
        </div>
      </section>

      <section id="club-members" className="p-12 h-full flex flex-col gap-8 items-center justify-center text-bright-gold">
          {/* <div className="relative text-center bg-black p-8 rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.8)]  mt-6"> */}
            <h1 className="text-2xl font-bold text-[#ff4d62]" style={{
                      textShadow: `
                        0 0 5px rgba(255, 0, 0, 0.8), 
                        0 0 10px rgba(255, 0, 0, 0.8), 
                        0 0 15px rgba(255, 0, 0, 0.8), 
                        0 0 20px rgba(255, 0, 0, 0.8)
                      `, /* Red glow effect */
                }}>
              General Club Structure
            </h1>
          {/* </div>
   */}
          <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-center gap-8 px-4">
            {/* Example Member Card */}
            <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
              <h3 className="text-md font-bold text-bright-gold"  style={{
                      textShadow: `
                        0 0 5px rgba(255, 0, 0, 0.8), 
                        0 0 10px rgba(255, 0, 0, 0.8), 
                        0 0 15px rgba(255, 0, 0, 0.8), 
                        0 0 20px rgba(255, 0, 0, 0.8)
                      `, /* Red glow effect */
                }}>Director</h3>
              <p className="text-sm mt-4 text-white">Controls operations across all chapters. Approves major plans and ensures alignment with genral objectives.</p>
              
              </div>
              <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
              <h3 className="text-md font-bold text-bright-gold"  style={{
                      textShadow: `
                        0 0 5px rgba(255, 0, 0, 0.8), 
                        0 0 10px rgba(255, 0, 0, 0.8), 
                        0 0 15px rgba(255, 0, 0, 0.8), 
                        0 0 20px rgba(255, 0, 0, 0.8)
                      `, /* Red glow effect */
                }}>Director</h3>
              <p className="text-sm mt-4 text-white">Controls operations across all chapters. Approves major plans and ensures alignment with genral objectives.</p>
              
              </div>

              </div>
              <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-center gap-8 px-4">
              <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
              <h3 className="text-md font-bold text-bright-gold"  style={{
                      textShadow: `
                        0 0 5px rgba(255, 0, 0, 0.8), 
                        0 0 10px rgba(255, 0, 0, 0.8), 
                        0 0 15px rgba(255, 0, 0, 0.8), 
                        0 0 20px rgba(255, 0, 0, 0.8)
                      `, /* Red glow effect */
                }}>Director</h3>
              <p className="text-sm mt-4 text-white">Controls operations across all chapters. Approves major plans and ensures alignment with genral objectives.</p>
              
              </div>
              
              <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
              <h3 className="text-md font-bold text-bright-gold"  style={{
                      textShadow: `
                        0 0 5px rgba(255, 0, 0, 0.8), 
                        0 0 10px rgba(255, 0, 0, 0.8), 
                        0 0 15px rgba(255, 0, 0, 0.8), 
                        0 0 20px rgba(255, 0, 0, 0.8)
                      `, /* Red glow effect */
                }}>Director</h3>
              <p className="text-sm mt-4 text-white">Controls operations across all chapters. Approves major plans and ensures alignment with genral objectives.</p>
              </div>
              
            </div>
      </section>



      {/* Modal for Terminal Game */}
      {isTerminalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 level3-element">
          <div className="bg-black text-white p-8 rounded-lg w-full max-w-2xl h-auto level3-element">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-xl hover:text-red transition-colors"
            >
              X
            </button>
            <Terminal2 />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Level3Deep;
