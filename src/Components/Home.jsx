

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <header className="bg-white text-black p-8 flex flex-col items-center shadow-xl">
        <h1 className="text-4xl font-bold">Welcome to Our School Club!</h1>
        <p className="mt-4 text-lg text-center max-w-2xl">
          Your go-to place for all things related to our club&apos;s activities and events.
        </p>
      </header>

      {/* About Us Section */}
      <section className="my-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold text-black">About Us</h2>
        <p className="mt-4 max-w-4xl text-lg">
          We are a student-run club focused on creating a positive impact in our community.
          Whether you&apos;re here to make new friends, develop leadership skills, or give back to the community,
          we have something for everyone!
        </p>
      </section>

      {/* Upcoming Events Section */}
      <section className="my-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold text-black">Upcoming Events</h2>
        <ul className="mt-4 flex flex-col items-center space-y-4 max-w-3xl">
          <li className="bg-gray-100 p-4 rounded-md shadow-md w-full">Club Meeting - March 15, 2025</li>
          <li className="bg-gray-100 p-4 rounded-md shadow-md w-full">Community Service Day - April 5, 2025</li>
          <li className="bg-gray-100 p-4 rounded-md shadow-md w-full">Annual Club Picnic - May 10, 2025</li>
        </ul>
      </section>

      {/* How to Get Involved Section */}
      <section className="my-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold text-black">How to Get Involved</h2>
        <p className="mt-4 max-w-2xl text-lg">
          Interested in joining? We welcome all students to be part of our club!
          Just fill out the form below or reach out to us at <strong>club@example.com</strong>.
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

export default Home;
