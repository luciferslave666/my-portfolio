const Hero = () => {
    return (
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white px-6">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-400 mt-4">I build modern web applications with Next.js & Tailwind CSS</p>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
        >
          See My Work
        </a>
      </section>
    );
  };
  
  export default Hero;
  