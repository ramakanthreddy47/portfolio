import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-2xl font-bold text-blue-400">
          Ramakanth
        </h1>

        <div className="space-x-6 hidden md:flex">

          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-400">
            About
          </Link>

          <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-blue-400">
            Skills
          </Link>

          <Link to="experience" smooth duration={500} className="cursor-pointer hover:text-blue-400">
            Experience
          </Link>

          <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-400">
            Projects
          </Link>

          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-400">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;