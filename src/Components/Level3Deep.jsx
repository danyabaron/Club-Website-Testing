import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import RedCode from "/level3-redcode.png";
import { FaTerminal } from 'react-icons/fa';
import Terminal2 from './Terminal2';
import bgVideo from '/clubBG.mp4';

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

  // Smooth scroll to section when nav link is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
    <div className="w-full overflow-y-auto flex flex-col gap-6 relative min-h-screen bg-black scroll-smooth level3-element">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-30 w-full bg-black border-b border-metal-gold shadow-[0_0_15px_rgba(255,0,0,0.8)] level3-element">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <span className="text-[#ff4d62] font-bold text-lg mr-4"
                  style={{
                    textShadow: `
                      0 0 5px rgba(255, 0, 0, 0.8), 
                      0 0 10px rgba(255, 0, 0, 0.8)
                    `
                  }}
                >ADMIN LEVEL CLI</span>
                <button 
                  onClick={() => scrollToSection('club-structure')} 
                  className="text-bright-gold hover:text-[#ff4d62] px-3 py-2 transition duration-150"
                >
                  Structure
                </button>
                <button 
                  onClick={() => scrollToSection('meetings-communication')} 
                  className="text-bright-gold hover:text-[#ff4d62] px-3 py-2 transition duration-150"
                >
                  Meetings
                </button>
                <button 
                  onClick={() => scrollToSection('target-selection')} 
                  className="text-bright-gold hover:text-[#ff4d62] px-3 py-2 transition duration-150"
                >
                  Targets
                </button>
                <button 
                  onClick={() => scrollToSection('selection-process')} 
                  className="text-bright-gold hover:text-[#ff4d62] px-3 py-2 transition duration-150"
                >
                  Process
                </button>
                <button 
                  onClick={() => scrollToSection('do-not-associate')} 
                  className="text-bright-gold hover:text-[#ff4d62] px-3 py-2 transition duration-150"
                >
                  Blacklist
                </button>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={handleButtonClick}
                className="py-2 px-2 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 terminal-button"
              >
                <FaTerminal />
              </button>
            </div>
            <div className="hidden md:block">
              <button
                onClick={handleButtonClick}
                className="py-2 px-3 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 terminal-button flex items-center"
              >
                <FaTerminal className="mr-2" />
                <span>Terminal</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Left side border video with red overlay */}
      <div className="w-64 h-full absolute left-0 top-0 overflow-hidden z-10">
        <video
          className="absolute inset-0 object-cover w-full h-full opacity-80"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-red opacity-50 mix-blend-multiply"></div>
      </div>

      {/* Right side border video with red overlay */}
      <div className="w-64 h-full absolute right-0 top-0 overflow-hidden z-10">
        <video
          className="absolute inset-0 object-cover w-full h-full opacity-80"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-red opacity-50 mix-blend-multiply"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-fit flex flex-col gap-6 justify-start items-center px-8 level3-element">
        {/* Content */}
        <div className="relative z-20 bg-black p-8 rounded-lg text-center level3-element">
          <h1 className="text-3xl font-bold text-white">
            Draco Admin Level Charlie CLI
          </h1>

          {/* Command Prompt Styled Button */}
          {/* <button
            onClick={handleButtonClick}
            className="mt-10 ml-20 flex right-0 py-3 px-3 bg-gray-800 text-white rounded-lg border-2 border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 terminal-button"
          >
            <FaTerminal className="mr-2" />
          </button> */}
        </div>
      </section>

      <section id="club-structure" className="p-12 h-full flex flex-col gap-8 items-center justify-center text-bright-gold">
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
          
          <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-center items-start gap-8 px-4">
              <div className="border border-metal-gold rounded-lg p-4 h-40 flex flex-col justify-center items-center bg-black text-center 
              shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                  <div className="flex justify-center items-center w-full">
                      <h3 className="text-md font-bold text-bright-gold text-center" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `, /* Red glow effect */
                        }}>Director</h3>
                  </div>
                  <div className="flex-grow flex items-center justify-center w-full">
                      <p className="text-sm text-white text-center">Controls operations across all chapters. Approves major plans and ensures alignment with general objectives.</p>
                  </div>
              </div>
              
              <div className="border border-metal-gold rounded-lg p-4 h-40 flex flex-col justify-center items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                  <div className="flex justify-center items-center w-full">
                      <h3 className="text-md font-bold text-bright-gold text-center" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `, /* Red glow effect */
                        }}>Operations Coordinators</h3>
                  </div>
                  <div className="flex-grow flex items-center justify-center w-full">
                      <p className="text-sm text-white text-center">Lead local chapters and manage recruitment, internal security, and data collection.</p>
                  </div>
              </div>
          </div>

          <div className="max-w-6xl mx-auto flex flex-row flex-wrap justify-center items-start gap-8 px-4">
              <div className="border border-metal-gold rounded-lg p-4 h-40 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                  <div className="flex justify-center items-center w-full">
                      <h3 className="text-md font-bold text-bright-gold text-center" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `, /* Red glow effect */
                        }}>Data Analysts</h3>
                  </div>
                  <div className="flex-grow flex items-center justify-center w-full">
                      <p className="text-sm text-white text-center">Process and categorize sensitive information gathered from members and recruits.</p>
                  </div>
              </div>
              
              <div className="border border-metal-gold rounded-lg p-4 h-40 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                  <div className=" flex justify-center items-center w-full">
                      <h3 className="text-md font-bold text-bright-gold text-center" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `, /* Red glow effect */
                        }}>Compiance Officers</h3>
                  </div>
                  <div className="flex-grow flex items-center justify-center w-full">
                      <p className="text-sm text-white text-center">Ensure each chapter follows security protocols and manage risks.</p>
                  </div>
              </div>
              
              <div className="border border-metal-gold rounded-lg p-4 h-40 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                  <div className=" flex justify-center items-center w-full">
                      <h3 className="text-md font-bold text-bright-gold text-center" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `, /* Red glow effect */
                        }}>Recruitment Specialists</h3>
                  </div>
                  <div className="flex-grow flex items-center justify-center w-full">
                      <p className="text-sm text-white text-center">Identify and integrate new members into the club hierarchy.</p>
                  </div>
              </div>
          </div>
      </section>

      <section id="meetings-communication" className="p-12 h-full flex flex-col gap-8 items-center justify-center text-bright-gold">
          <h1 className="text-2xl font-bold text-[#ff4d62]" style={{
                    textShadow: `
                      0 0 5px rgba(255, 0, 0, 0.8), 
                      0 0 10px rgba(255, 0, 0, 0.8), 
                      0 0 15px rgba(255, 0, 0, 0.8), 
                      0 0 20px rgba(255, 0, 0, 0.8)
                    `, /* Red glow effect */
              }}>
            Meetings & Communication
          </h1>
           
          <div className='flex flex-row gap-8 items-start justify-center'>
            <div className="border border-metal-gold rounded-lg p-4 h-96 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                <h3 className="text-md font-bold text-bright-gold"  style={{
                        textShadow: `
                          0 0 5px rgba(255, 0, 0, 0.8), 
                          0 0 10px rgba(255, 0, 0, 0.8), 
                          0 0 15px rgba(255, 0, 0, 0.8), 
                          0 0 20px rgba(255, 0, 0, 0.8)
                        `, /* Red glow effect */
                  }}>Weekly Local Meetings (Every Tuesday, 7:00pm)</h3>
                <p className="text-sm mt-4 text-white">
                  <ul className="list-disc text-left pt-3 px-6">
                    <li>Recruitment progress reports</li>
                    <li>Review of operations</li>
                    <li>Assignment of tasks to new recruits</li>
                    <li>Discussions on target evaluations</li>
                  </ul>
                </p>
                
          </div>

          <div className="border border-metal-gold rounded-lg p-4 flex flex-col h-96 items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                <h3 className="text-md font-bold text-bright-gold"  style={{
                        textShadow: `
                          0 0 5px rgba(255, 0, 0, 0.8), 
                          0 0 10px rgba(255, 0, 0, 0.8), 
                          0 0 15px rgba(255, 0, 0, 0.8), 
                          0 0 20px rgba(255, 0, 0, 0.8)
                        `, /* Red glow effect */
                  }}>Monthly Cross-Chapter Conferences (Remote)</h3>
                 
                 <p className="text-sm mt-4 text-white">
                  <ul className="list-disc text-left pt-3 px-6">
                    <li>Operational updates from each chapter.</li>
                    <li>Sharing progress and challenges in recruitment and data collection.</li>
                    <li>Evaluation of security breaches and strategy</li>
                    <li>Discussion on rising threats and risk management</li>
                    <li> Approval for new recruitment waves or changes to protocols</li>
                  </ul>
                </p>
            
           </div>

           <div className="border border-metal-gold rounded-lg p-4 flex flex-col h-96 items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                <h3 className="text-md font-bold text-bright-gold"  style={{
                        textShadow: `
                          0 0 5px rgba(255, 0, 0, 0.8), 
                          0 0 10px rgba(255, 0, 0, 0.8), 
                          0 0 15px rgba(255, 0, 0, 0.8), 
                          0 0 20px rgba(255, 0, 0, 0.8)
                        `, /* Red glow effect */
                  }}>Annual Leadership Summit (Location Undisclosed)</h3>
                
                
                <p className="text-sm mt-4 text-white">
                  <ul className="list-disc text-left pt-3 px-6">
                    <li>Strategic planning for the next academic cycle</li>
                    <li>Establishment of long-term objectives</li>
                    <li>Reviewing security protocols and refining infiltration methods</li>
                    <li>Discussion on rising threats and risk management</li>
                    <li>Confidential evaluations of chapter loyalty and individual member performance</li>
                  </ul>
                </p>
            
         
            
           </div>

          </div>
      </section>

      <section id="target-selection" className="p-12 h-full flex flex-col gap-8 items-center justify-center text-bright-gold">
          <h1 className="text-2xl font-bold text-[#ff4d62]" style={{
                    textShadow: `
                      0 0 5px rgba(255, 0, 0, 0.8), 
                      0 0 10px rgba(255, 0, 0, 0.8), 
                      0 0 15px rgba(255, 0, 0, 0.8), 
                      0 0 20px rgba(255, 0, 0, 0.8)
                    `, /* Red glow effect */
              }}>
            Target Selection Process
          </h1>
          
          <div className='flex flex-row gap-8 justify-center items-stretch h-64 overflow-hidden w-full max-w-3xl'>
              <div className="border border-metal-gold rounded-lg p-4 flex-1 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-64">
                  <div className="flex items-center mb-4">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `, /* Red glow effect */
                        }}>Criteria for Primary Targets (Potential Members)
                      </h3>
                  </div>
                  
                  <div className="flex-grow flex items-start justify-center w-full pb-6 px-3 ">
                      <p className="text-sm text-white">
                          <ul className="list-disc text-left p-6">
                              <li>Students in leadership roles in student organizations pr administration</li>
                              <li>Students with access to university data systems (IT interns, assistants, TAs)</li>
                              <li>Students identified as easily influenced or vulnerable (financial hardship, legal risks)</li>
                          </ul>
                      </p>
                  </div>
              </div>

              <div className="border border-metal-gold rounded-lg p-4 flex-1 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-64">
                  <div className="flex items-center mb-4">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `, /* Red glow effect */
                        }}>Criteria for Secondary Targets (Sources of Desired Information)
                      </h3>
                  </div>
                  
                  <div className="flex-grow flex items-start justify-center w-full pb-6 px-3 ">
                      <p className="text-sm text-white">
                          <ul className="list-disc text-left p-6">
                              <li>Faculty members involved in academic decisions or policy creation</li>
                              <li>Staff with administrative access to sensitive records</li>
                              <li>External contacts with potential university influence (donors, alumni)</li>
                          </ul>
                      </p>
                  </div>
              </div>
          </div>
      </section>

      <section id="selection-process" className="p-12 h-full flex flex-col gap-8 items-center justify-center text-bright-gold">
          <h1 className="text-2xl font-bold text-[#ff4d62]" style={{
                    textShadow: `
                      0 0 5px rgba(255, 0, 0, 0.8), 
                      0 0 10px rgba(255, 0, 0, 0.8), 
                      0 0 15px rgba(255, 0, 0, 0.8), 
                      0 0 20px rgba(255, 0, 0, 0.8)
                    `, /* Red glow effect */
              }}>
            Selection Process
          </h1>
           
          <div className='flex flex-col flex-wrap gap-8 justify-center items-start'>
              {/* All cards use the same height and padding structure */}
              <div className='flex-row gap-3 flex justify-center'>
                    <div className="border border-metal-gold rounded-lg p-4 h-40 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                        <div className="h-12 flex items-center">
                            <h3 className="text-md font-bold text-bright-gold" style={{
                                    textShadow: `
                                      0 0 5px rgba(255, 0, 0, 0.8), 
                                      0 0 10px rgba(255, 0, 0, 0.8), 
                                      0 0 15px rgba(255, 0, 0, 0.8), 
                                      0 0 20px rgba(255, 0, 0, 0.8)
                                    `, /* Red glow effect */
                              }}>1. Observation
                            </h3>
                        </div>
                        <div className="flex-grow">
                            <p className="text-sm text-white">Monitor online behavior, social activity and academic performance</p>
                        </div>
                    </div>

                    <div className="border border-metal-gold rounded-lg p-4 h-40 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                        <div className="h-12 flex items-center">
                            <h3 className="text-md font-bold text-bright-gold" style={{
                                    textShadow: `
                                      0 0 5px rgba(255, 0, 0, 0.8), 
                                      0 0 10px rgba(255, 0, 0, 0.8), 
                                      0 0 15px rgba(255, 0, 0, 0.8), 
                                      0 0 20px rgba(255, 0, 0, 0.8)
                                    `, /* Red glow effect */
                              }}>2. Evaluation
                            </h3>
                        </div>
                        <div className="flex-grow">
                            <p className="text-sm text-white">Test if the target's is "hackable", determine if the target is vulnerable enough to extract the desired information</p>
                        </div>
                    </div>
                
              </div>

              <div className='flex-row gap-3 flex justify-center'>

                    <div className="border border-metal-gold rounded-lg p-4 h-40 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                        <div className="h-12 flex items-center">
                            <h3 className="text-md font-bold text-bright-gold" style={{
                                    textShadow: `
                                      0 0 5px rgba(255, 0, 0, 0.8), 
                                      0 0 10px rgba(255, 0, 0, 0.8), 
                                      0 0 15px rgba(255, 0, 0, 0.8), 
                                      0 0 20px rgba(255, 0, 0, 0.8)
                                    `, /* Red glow effect */
                              }}>3. Engagement
                            </h3>
                        </div>
                        <div className="flex-grow">
                            <p className="text-sm text-white">Convince or coerce the target into joining the club</p>
                        </div>
                    </div>

                    <div className="border border-metal-gold rounded-lg p-4 h-40 flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] flex-shrink-0 w-64">
                        <div className="h-12 flex items-center">
                            <h3 className="text-md font-bold text-bright-gold" style={{
                                    textShadow: `
                                      0 0 5px rgba(255, 0, 0, 0.8), 
                                      0 0 10px rgba(255, 0, 0, 0.8), 
                                      0 0 15px rgba(255, 0, 0, 0.8), 
                                      0 0 20px rgba(255, 0, 0, 0.8)
                                    `, /* Red glow effect */
                              }}>4. Control & Follow-Up
                            </h3>
                        </div>
                        <div className="flex-grow">
                            <p className="text-sm text-white">Harvest and utilize the data to ensure long-term compliance or silence</p>
                        </div>
                    </div>

              </div>
              

             
          </div>
      </section>


      <section id="do-not-associate" className="p-12 h-full flex flex-col gap-8 items-center justify-center text-bright-gold">
          <h1 className="text-2xl font-bold text-[#ff4d62]" style={{
                    textShadow: `
                      0 0 5px rgba(255, 0, 0, 0.8), 
                      0 0 10px rgba(255, 0, 0, 0.8), 
                      0 0 15px rgba(255, 0, 0, 0.8), 
                      0 0 20px rgba(255, 0, 0, 0.8)
                    `, /* Red glow effect */
              }}>
            Do Not Associate List
          </h1>
           
          <div className='flex flex-wrap gap-4 justify-center items-start max-w-5xl mx-auto'>
              {/* Row 1 */}
              <div className="border border-metal-gold rounded-lg p-4 h-full flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-60">
                  <div className="h-12 flex items-center justify-center">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `
                        }}>Daniel Vargas</h3>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <p className="text-sm mt-4 text-gray-300">UCF ID: 561884</p>
                    <p className="text-sm mt-2 text-gray-300">Status: Monitored</p>
                    <p className="text-sm mt-2 text-gray-300">Reason: Unauthorized access to restricted files. Potential whistleblower.</p>
                  </div>
              </div>

              <div className="border border-metal-gold rounded-lg p-4 h-full flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-60">
                  <div className="h-12 flex items-center justify-center">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `
                        }}>Lina Patel</h3>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <p className="text-sm mt-4 text-gray-300">UCF ID: 567123</p>
                    <p className="text-sm mt-2 text-gray-300">Status: Under Review</p>
                    <p className="text-sm mt-2 text-gray-300">Reason: Refusal to comply with operational protocols. Questionable loyalty.</p>
                  </div>
              </div>

              <div className="border border-metal-gold rounded-lg p-4 h-full flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-60">
                  <div className="h-12 flex items-center justify-center">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `
                        }}>Alex Valegro</h3>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <p className="text-sm mt-4 text-gray-300">UCF ID: 563790</p>
                    <p className="text-sm mt-2 text-gray-300">Status: Neutralized</p>
                    <p className="text-sm mt-2 text-gray-300">Reason: Breach of confidentiality. Intentions of imminent information spread.</p>
                  </div>
              </div>

              <div className="border border-metal-gold rounded-lg p-4 h-full flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-60">
                  <div className="h-12 flex items-center justify-center">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `
                        }}>James Ortez</h3>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <p className="text-sm mt-4 text-gray-300">UCF ID: 562478</p>
                    <p className="text-sm mt-2 text-gray-300">Status: Isolated</p>
                    <p className="text-sm mt-2 text-gray-300">Reason: Attempted unauthorized data export. Contact terminated.</p>
                  </div>
              </div>

              <div className="border border-metal-gold rounded-lg p-4 h-full flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-60">
                  <div className="h-12 flex items-center justify-center">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `
                        }}>Erica Monroe</h3>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <p className="text-sm mt-4 text-gray-300">UCF ID: 569114</p>
                    <p className="text-sm mt-2 text-gray-300">Status: Surveilled</p>
                    <p className="text-sm mt-2 text-gray-300">Reason: Public questioning of club practices. Security risk.</p>
                  </div>
              </div>

              {/* Row 2 */}
              <div className="border border-metal-gold rounded-lg p-4 h-full flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-60">
                  <div className="h-12 flex items-center justify-center">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `
                        }}>Kevin Liu</h3>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <p className="text-sm mt-4 text-gray-300">UCF ID: 560778</p>
                    <p className="text-sm mt-2 text-gray-300">Status: Flagged</p>
                    <p className="text-sm mt-2 text-gray-300">Reason: Data breach suspicion. Potential outside informant.</p>
                  </div>
              </div>

              <div className="border border-metal-gold rounded-lg p-4 h-full flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-60">
                  <div className="h-12 flex items-center justify-center">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `
                        }}>Rachel Gomez</h3>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <p className="text-sm mt-4 text-gray-300">UCF ID: 566889</p>
                    <p className="text-sm mt-2 text-gray-300">Status: Observed</p>
                    <p className="text-sm mt-2 text-gray-300">Reason: Conflict with leadership. Untrustworthy behavior.</p>
                  </div>
              </div>

              <div className="border border-metal-gold rounded-lg p-4 h-full flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-60">
                  <div className="h-12 flex items-center justify-center">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `
                        }}>Isaac Turner</h3>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <p className="text-sm mt-4 text-gray-300">UCF ID: 565331</p>
                    <p className="text-sm mt-2 text-gray-300">Status: Classified</p>
                    <p className="text-sm mt-2 text-gray-300">Reason: Violation of data protection standards.</p>
                  </div>
              </div>

              <div className="border border-metal-gold rounded-lg p-4 h-full flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-60">
                  <div className="h-12 flex items-center justify-center">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `
                        }}>Melissa Cain</h3>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <p className="text-sm mt-4 text-gray-300">UCF ID: 568221</p>
                    <p className="text-sm mt-2 text-gray-300">Status: Shadowed</p>
                    <p className="text-sm mt-2 text-gray-300">Reason: Unauthorized external communication. Risk level: High.</p>
                  </div>
              </div>

              <div className="border border-metal-gold rounded-lg p-4 h-full flex flex-col items-center bg-black text-center shadow-[0_0_15px_rgba(255,0,0,0.8)] w-60">
                  <div className="h-12 flex items-center justify-center">
                      <h3 className="text-md font-bold text-bright-gold" style={{
                              textShadow: `
                                0 0 5px rgba(255, 0, 0, 0.8), 
                                0 0 10px rgba(255, 0, 0, 0.8), 
                                0 0 15px rgba(255, 0, 0, 0.8), 
                                0 0 20px rgba(255, 0, 0, 0.8)
                              `
                        }}>Samantha Reyes</h3>
                  </div>
                  <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <p className="text-sm mt-4 text-gray-300">UCF ID: 563991</p>
                    <p className="text-sm mt-2 text-gray-300">Status: Redacted</p>
                    <p className="text-sm mt-2 text-gray-300">Reason: Discovered anomalies in operational systems.</p>
                  </div>
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
