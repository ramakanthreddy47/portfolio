const Experience = () => {
  return (
    <section id="experience" className="py-24 px-5">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 mb-12">
          Experience
        </h2>

        <div className="space-y-10">

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">
              International Battery Company
            </h3>

            <p className="text-blue-400">
              Tosca Automation Engineer | Jun 2024 – Present
            </p>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Improved test reusability by 30%</li>
              <li>• Automated SAP OTC business processes</li>
              <li>• Built TCD & TDS frameworks</li>
              <li>• Increased automation coverage to 75%</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">
              Next Cloudwave Solutions
            </h3>

            <p className="text-blue-400">
              Tosca Automation Engineer | Jan 2023 – May 2024
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">
              VHS Consulting India
            </h3>

            <p className="text-blue-400">
              Automation Test Engineer | Apr 2022 – Dec 2022
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;