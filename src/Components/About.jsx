import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";


const About = () => {
  return (
    <div className="font-sans bg-black text-white">
      {/* Header Section with Border */}
      <div className="border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] justify-between max-w-3xl mx-auto">
        <header className="p-4 pt-2">
          <h1 className="text-4xl font-bold">Welcome to Draconis Squamae</h1>
          <p className="mt-4 text-lg text-left max-w-2xl">
            🐲 The concept of Dragons (Draconis) and their Scales (Squamae) emerged from ancient China in the Shang and Zhou dynasties. <br /><br />
            🐲 Dragons were traditionally viewed as symbols of imperial power, often with control over water or the weather. <br /><br />
            🐲 In modern times, the principles of power and control are similar to the tools of offensive and defensive Cybersecurity tactics. <br /><br />
            🐲 Our organization seeks to arm students with the tools necessary to be valuable assets in their chosen career fields.
          </p>
        </header>
      </div>

{/* About Us Section with Border and Spacing */}
<div className="mt-8 border border-metal-gold rounded-lg p-4 pt-2 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] max-w-3xl mx-auto">
  <section className="my-12 flex flex-col items-center text-center">
    <h2 className="text-3xl font-semibold text-white">About Us</h2>
    <p className="mt-4 max-w-4xl text-lg">
      We are a multi-disciplinary, Cybersecurity-focused student organization with multiple chapters spanning a wide variety of academic institutions. In addition to promoting safe and secure local and web-based activities, we sponsor a variety of workshops, training seminars, and certification prep courses that enable students to learn and grow in their Cybersecurity journey!
    </p>
  </section>
</div>

{/* Current Officers Section with Border and Spacing */}
<div className="mt-8 border border-metal-gold rounded-lg p-4 pt-2 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] max-w-6xl mx-auto">
  <section className="my-12 flex flex-col items-center text-center">
    <h2 className="text-3xl font-semibold text-white">Current Officers</h2>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Marcus */}
      <div className="bg-gray-800 p-4 rounded-md shadow-md flex flex-col items-center w-64">
        <img src="/path-to-image1.jpg" alt="Marcus" className="w-48 h-64 object-cover rounded-md" />
        <h3 className="mt-2 text-lg font-semibold text-white">Marcus</h3>
        <p className="text-sm text-gray-300">Club President</p>
      </div>

      {/* Riley */}
      <div className="bg-gray-800 p-4 rounded-md shadow-md flex flex-col items-center w-64">
        <img src="/path-to-image2.jpg" alt="Riley" className="w-48 h-64 object-cover rounded-md" />
        <h3 className="mt-2 text-lg font-semibold text-white">Riley</h3>
        <p className="text-sm text-gray-300">Administrator</p>
      </div>

      {/* Jonathan */}
      <div className="bg-gray-800 p-4 rounded-md shadow-md flex flex-col items-center w-64">
        <img src="/path-to-image3.jpg" alt="Jonathan" className="w-48 h-64 object-cover rounded-md" />
        <h3 className="mt-2 text-lg font-semibold text-white">Jonathan</h3>
        <p className="text-sm text-gray-300">Chief Technical Officer</p>
      </div>

      {/* Claire */}
      <div className="bg-gray-800 p-4 rounded-md shadow-md flex flex-col items-center w-64">
        <img src="/path-to-image3.jpg" alt="Claire" className="w-48 h-64 object-cover rounded-md" />
        <h3 className="mt-2 text-lg font-semibold text-white">Claire</h3>
        <p className="text-sm text-gray-300">Community Engagement</p>
      </div>
    </div>
  </section>
</div>




<div className="mt-10 text-center">
  <h2 className="text-3xl font-semibold text-white mb-6"></h2>



{/* Courses Section with Border and Spacing */}
<div className="mt-8 border border-metal-gold rounded-lg p-4 flex flex-col items-center bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)] max-w-4xl mx-auto">
  <h2 className="text-3xl font-semibold text-white mb-6">Currently Available Training Courses</h2>

  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    modules={[Navigation, Pagination]}
    className="w-full flex justify-center"
  >
    <SwiperSlide className="flex justify-center">
      <img 
        src="/src/assets/EthicalHacking101.jpg" 
        alt="Ethical Hacking 101" 
        className="max-w-[800px] h-auto aspect-[16/9] object-contain rounded-lg mx-auto" 
      />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center">
      <img 
        src="/src/assets/SecurityPrepCourse.jpg" 
        alt="Security Prep Course" 
        className="max-w-[800px] h-auto aspect-[16/9] object-contain rounded-lg mx-auto" 
      />
    </SwiperSlide>
  </Swiper>
</div>


</div>




      {/* Footer Section */}
      <footer className="mt-12 flex justify-center items-center text-center text-gray-600">
        <p>&copy; 2025 School Club. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default About;
