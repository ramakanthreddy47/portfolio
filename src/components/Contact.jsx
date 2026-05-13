const Contact = () => {
  return (
    <section id="contact" className="py-24 px-5 bg-slate-800">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-blue-400 mb-10">
          Contact
        </h2>

        <p className="text-xl">
          Email: ramakanthreddy497@gmail.com
        </p>

        <div className="mt-8 flex justify-center gap-8">

          <a
            href="https://github.com/ramakanthreddy47"
            className="text-blue-400"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ramakanth-reddy-e/"
            className="text-blue-400"
            target="_blank"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;