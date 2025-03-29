const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-center py-4 mt-8 shadow-inner">
      <p className="text-lg font-medium">
        © {new Date().getFullYear()} Data Query Dashboard. All rights reserved.
      </p>
      <p className="text-sm mt-1">
        Built with <strong>React, Redux, Tailwind CSS</strong> ✨
      </p>
    </footer>
  );
};

export default Footer;
