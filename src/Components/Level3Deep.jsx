import React from "react";
import Footer from "./Footer";
import RedCode from "../assets/level3-redcode.png";


const Level3Deep = () => {




    
  return (
    <div className="w-full overflow-y-auto relative min-h-screen bg-black scroll-smooth">


        {/* left side border image */}
        <div className="w-fit h-full absolute left-0 top-0 ">
            <img src={RedCode} alt="Red Code" className="w-28 opacity-80 h-full object-cover"/>
        </div>

        {/* right side border image */}
        <div className="w-fit h-full absolute right-0 top-0 z-10">
            <img src={RedCode} alt="Red Code" className="w-28 opacity-80 h-full object-cover"/>
        </div>




  
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col justify-start items-center px-8">
          
          {/* Content */}
          <div className="relative z-10 bg-black p-8 rounded-lg">
            <h1 className="text-5xl font-bold text-white ">
              TESTING !!!
            </h1>
           
          </div>
        </section>

       

        {/* Footer */}
        {/* <Footer /> */}
      
    </div>
  );
};

export default Level3Deep;
