import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl">

        <motion.div
          initial={{ opacity:0, x:-50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="flex justify-center"
        >

          <img
            src="/portfolio/profile.jpg"
            alt="profile"
            className="w-80 rounded-3xl border-4 border-blue-500 shadow-2xl"
          />

        </motion.div>

        <motion.div
          initial={{ opacity:0, x:50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
        >

          <h1 className="text-5xl font-bold mb-4">
            E RAMAKANTH <span className="text-blue-400">REDDY</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Tosca Automation Engineer",
              2000,
              "SAP Testing Specialist",
              2000,
              "API Automation Engineer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl text-gray-300"
          />

          <p className="mt-6 text-gray-400 leading-8">
            Experienced Tosca Automation Engineer specializing in enterprise automation,
            SAP testing, API testing, and CI/CD integration.
          </p>

          <div className="flex gap-5 mt-8">

            <a
              href="/portfolio/resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/ramakanthreddy47"
              target="_blank"
              className="text-3xl hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ramakanth-reddy-e/"
              target="_blank"
              className="text-3xl hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;