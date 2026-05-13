const skills = [
  "Tosca",
  "SAP Testing",
  "API Testing",
  "Jenkins",
  "Azure DevOps",
  "Power BI",
  "SQL",
  "REST/SOAP",
  "TCD",
  "TDS",
  "DEX",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-5 bg-slate-800">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-400 mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-2xl text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;