import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";


const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <header className="bg-white text-black p-8 flex flex-col items-center shadow-xl">
        <h1 className="text-4xl font-bold">Welcome to Draconis Squamae</h1>
        <p className="mt-4 text-lg text-left max-w-2xl">
         🐲 The concept of Dragons (Draconis) and their Scales (Squamae) emerged from ancient China in the Shang and Zhou dynasties. <br /><br /><p></p>🐲 Dragons were traditionally viewed as symbols of imperial power, often with control over water or the weather. <br /><br /><p></p>🐲 In modern times, the principles of power and control are similar to the tools of offensive and defensive Cybersecurity tactics. <br /><br /><p></p>🐲 Our organization seeks to arm students with the tools necessary to be valuable assets in their chosen career fields.  
        </p>
      </header>

      {/* About Us Section */}
      <section className="my-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold text-black">About Us</h2>
        <p className="mt-4 max-w-4xl text-lg">
        We are a multi-disciplinary, Cybersecurity focused student organization with multiple chapters spanning a wide variety of academic institutions. In addition to promoting safe and secure local and web based activities, we sponsor a variety of workshops, training seminars and certification prep courses that enable students to learn and grow in their Cybersecurity journey!
        </p>
      </section>

 {/* Current Officers Section */}
<section className="my-12 flex flex-col items-center text-center">
  <h2 className="text-3xl font-semibold text-black">Current Officers</h2>
  <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Marcus */}
    <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center w-64">
      <img
        src="/path-to-image1.jpg"
        alt="Marcus"
        className="w-48 h-64 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">Marcus</h3>
      <p className="text-sm text-gray-600">Club President</p>
    </div>
    
    {/* Riley */}
    <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center w-64">
      <img
        src="/path-to-image2.jpg"
        alt="Riley"
        className="w-48 h-64 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">Riley</h3>
      <p className="text-sm text-gray-600">Administrator</p>
    </div>

    {/* Jonathan */}
    <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center w-64">
      <img
        src="/path-to-image3.jpg"
        alt="Jonathan"
        className="w-48 h-64 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">Jonathan</h3>
      <p className="text-sm text-gray-600">Chief Technical Officer</p>
    </div>
    
    {/* Claire */}
    <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center w-64">
      <img
        src="/path-to-image3.jpg"
        alt="Claire"
        className="w-48 h-64 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">Claire</h3>
      <p className="text-sm text-gray-600">Community Engagement</p>
    </div>
  </div>
</section>


    


<div className="mt-10 text-center">
  <h2 className="text-3xl font-semibold text-black mb-6">Currently Available Courses</h2>



  <Swiper
  spaceBetween={10}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  modules={[Navigation, Pagination]}
  className="w-full flex justify-center" // Centers the Swiper
>
  <SwiperSlide className="flex justify-center">
    <img 
      src="/Images/EthicalHacking101.jpg" 
      alt="Description 1" 
      className="max-w-[800px] h-auto aspect-[16/9] object-contain rounded-lg mx-auto" 
    />
  </SwiperSlide>
  <SwiperSlide className="flex justify-center">
    <img 
      src="/images/SecurityPrepCourse.jpg" 
      alt="Description 2" 
      className="max-w-[800px] h-auto aspect-[16/9] object-contain rounded-lg mx-auto" 
    />
  </SwiperSlide>
  <SwiperSlide className="flex justify-center">
    <img 
      src="/images/image3.jpg" 
      alt="Description 3" 
      className="max-w-[800px] h-auto aspect-[16/9] object-contain rounded-lg mx-auto" 
    />
  </SwiperSlide>
</Swiper>

</div>

  {/* How to Get Involved Section */}
  <section className="my-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold text-black">How to Get Involved</h2>
        <p className="mt-4 max-w-2xl text-lg">
          We welcome all students to be part of our club!
          Just fill out the form below!
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold text-lg rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Join Now
        </button>
      </section>






      {/* Footer Section */}
      <footer className="mt-12 flex justify-center items-center text-center text-gray-600">
        <p>&copy; 2025 School Club. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default About;
