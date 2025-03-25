import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Footer from './Footer';
import Jonathan from "/Jonathan.jpg"
import Claire from "/Claire.jpg"
import Marcus from "/Marcus.jpg"
import Riley from "/Riley.jpg"



const About = () => {
  return (
    <div className="font-sans p-8 bg-black text-bright-gold">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto p-4 mb-8 border border-gold rounded-lg bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
        <header className="p-4 pt-2">
          <h1 className="text-4xl font-bold">
            <span className="bg-bright-gold text-black px-4 py-1 shadow-md">
              Welcome to Draconis Squamae
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl text-left">
            🐲 The concept of Dragons (Draconis) and their Scales (Squamae)
            emerged from ancient China during the Shang and Zhou dynasties.
            <br /><br />
            🐲 Traditionally, dragons symbolized imperial power and were believed
            to control water and weather.
            <br /><br />
            🐲 Today, we draw parallels between these ancient legends and modern
            cybersecurity tactics—both require foresight, resilience, and the
            right tools.
            <br /><br />
            🐲 Our organization is dedicated to arming students with cutting-edge
            skills to become formidable assets in the digital world.
          </p>
        </header>
      </div>

      {/* About Us Section */}
      <div className="max-w-3xl mx-auto mt-8 p-4 border border-gold rounded-lg bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
        <section className="my-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold">
            <span className="bg-bright-gold text-black px-4 py-1 shadow-md">
              About Us
            </span>
          </h2>
          <p className="mt-4 max-w-4xl text-lg text-gray-300">
            We are a multi-disciplinary, cybersecurity-focused student organization
            with chapters across a wide range of academic institutions. In addition
            to promoting safe, secure digital practices, we host workshops, hackathons,
            and training seminars to empower students and foster innovative thinking.
          </p>
        </section>
      </div>

      {/* Current Officers Section */}
      <div className="max-w-6xl mx-auto mt-8 p-4 border border-gold rounded-lg bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
        <section className="my-12 flex flex-col items-center text-center">
          <h2 className="text-3xl p-2 font-semibold">
            <span className="bg-bright-gold text-black px-4 py-1 shadow-md">
              Current Officers
            </span>
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Marcus */}
            <div className="w-64 bg-gray-800 p-4 rounded-md shadow-md flex flex-col items-center">
              <img
                src={Marcus}
                alt="Marcus"
                className="w-48 h-64 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold text-bright-gold">
                Marcus
              </h3>
              <p className="text-sm text-gray-300">Club President</p>
            </div>
            {/* Riley */}
            <div className="w-64 bg-gray-800 p-4 rounded-md shadow-md flex flex-col items-center">
              <img
                src={Riley}
                alt="Riley"
                className="w-48 h-64 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold text-bright-gold">
                Riley
              </h3>
              <p className="text-sm text-gray-300">Administrator</p>
            </div>
            {/* Jonathan */}
            <div className="w-64 bg-gray-800 p-4 rounded-md shadow-md flex flex-col items-center">
              <img
                src={Jonathan}
                alt="Jonathan"
                className="w-48 h-64 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold text-bright-gold">
                Jonathan
              </h3>
              <p className="text-sm text-gray-300">Chief Technical Officer</p>
            </div>
            {/* Claire */}
            <div className="w-64 bg-gray-800 p-4 rounded-md shadow-md flex flex-col items-center">
              <img
                src={Claire}
                alt="Claire"
                className="w-48 h-64 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold text-bright-gold">
                Claire
              </h3>
              <p className="text-sm text-gray-300">Community Engagement</p>
            </div>
          </div>
        </section>
      </div>

      {/* Training Courses Section */}
      <div className="mt-10 text-center">
        <div className="max-w-4xl mx-auto mt-8 p-4 border border-gold rounded-lg bg-black text-center shadow-[0_0_15px_2px_rgba(189,158,80,0.7)]">
          <h2 className="text-3xl font-semibold mb-6">
            <span className="bg-bright-gold text-black px-4 py-1 shadow-md">
              Currently Available Training Courses
            </span>
          </h2>
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
                src="/EthicalHacking101.jpg"
                alt="Ethical Hacking 101"
                className="max-w-[800px] h-auto aspect-[16/9] object-contain rounded-lg mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <img
                src="/SecurityPrepCourse.jpg"
                alt="Security Prep Course"
                className="max-w-[800px] h-auto aspect-[16/9] object-contain rounded-lg mx-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
