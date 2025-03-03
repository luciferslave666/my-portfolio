const projects = [
    {
      title: "Project One",
      description: "A simple weather app",
      link: "https://cuaca-eight.vercel.app/",
      image: "/images/cuaca.png", // Ganti dengan path gambar kamu
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
  
        {/* Grid yang menyesuaikan jumlah project */}
        <div
          className={`grid gap-6 max-w-4xl mx-auto ${
            projects.length === 1 ? "grid-cols-1 place-items-center" : "md:grid-cols-2"
          }`}
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition w-full md:w-auto"
            >
              {/* Gambar Project */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  