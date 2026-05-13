const Projects = () => {
  return (
    <section id="projects" className="py-24 px-5 bg-slate-800">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-900 p-8 rounded-2xl">

            <h3 className="text-2xl font-bold mb-4">
              ETroc
            </h3>

            <p className="text-gray-300 leading-8">
              Automated SAP SD business processes including
              Order-to-Cash workflows using Tosca automation frameworks.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <span className="bg-blue-500 px-3 py-1 rounded-full">
                Tosca
              </span>

              <span className="bg-blue-500 px-3 py-1 rounded-full">
                SAP
              </span>

              <span className="bg-blue-500 px-3 py-1 rounded-full">
                Jenkins
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;