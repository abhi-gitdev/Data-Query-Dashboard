const About = () => {
  return (
    <div className="p-8 text-center bg-white shadow-2xl rounded-lg max-w-2xl mx-auto text-black border border-gray-300">
      <h2 className="text-3xl font-semibold">About AI QueryVista</h2>
      <p className="mt-4 text-gray-600">
        The AI Data Query Dashboard is a smart platform that allows users to
        search for business insights effortlessly. Built with React, Redux, and
        Tailwind CSS, it provides real-time query responses, a clean UI, and a
        seamless user experience.
      </p>

      <p className="mt-6 text-gray-500">
        Start exploring insights now and get the data you need in seconds!
      </p>

      {/* Developer Info */}
      <div className="mt-8 p-4 border-t border-gray-300 text-left">
        <h3 className="text-xl font-semibold">👨‍💻 Developer Information:</h3>
        <p className="mt-2 text-gray-700">
          <strong>Name:</strong> Abhishek Hole
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:abhishekhole26@gmail.com"
            className="text-blue-500 hover:underline"
          >
            abhishekhole26@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
