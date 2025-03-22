import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import RedCode from "../assets/level3-redcode.png";
import { FaTerminal } from 'react-icons/fa'; // Optional, for a terminal icon
import Terminal2 from './Terminal2'; // Import the Terminal2 component

const Level3Deep = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false); // State to control modal visibility

  // Function to handle button click
  const handleButtonClick = () => {
    setIsTerminalOpen(true); // Open the terminal game in a modal
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setIsTerminalOpen(false); // Close the modal
  };

  // Function to handle the 'd' key press
  const handleKeyPress = (event) => {
    if (event.key === 'd' || event.key === 'D') {
      disableCloudflare();
    }
  };

  // Function to turn everything white except the terminal button
  const disableCloudflare = () => {
    const level3Elements = document.querySelectorAll('.level3-element');  // Adjust based on your structure
    level3Elements.forEach(element => {
      if (!element.classList.contains('terminal-button')) {  // Exclude terminal button
        element.style.backgroundColor = 'white';
        element.style.color = 'black';  // Change text color to black for readability
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
      <section className="relative w-full h-screen flex flex-col justify-start items-center px-8 level3-element">
        {/* Content */}
        <div className="relative z-10 bg-black p-8 rounded-lg text-center level3-element">
          <h1 className="text-5xl font-bold text-white">
            TESTING !!!
          </h1>

          {/* Command Prompt Styled Button */}
          <button
            onClick={handleButtonClick}
            className="mt-10 ml-20 flex items-center justify-center py-3 px-3 bg-gray-800 text-white rounded-lg border-2 border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 terminal-button"
          >
            <FaTerminal className="mr-2" /> {/* Terminal Icon */}
          </button>
        </div>
      </section>

      {/* Modal for Terminal Game */}
      {isTerminalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 level3-element">
          <div className="bg-black text-white p-8 rounded-lg w-115 h-60 level3-element">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-xl"
            >
              X
            </button>
            <Terminal2 /> {/* Render the Terminal2 component inside the modal */}
          </div>
        </div>
      )}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Level3Deep;
