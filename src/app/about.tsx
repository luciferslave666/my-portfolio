const About = () => {
    return (
      <section id="about" className="py-20 px-6 bg-slte-800 text-gray-900">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Foto Profil */}
          <img
            src="/images/pp.jpg" // Ganti dengan gambar kamu
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-gray-300 shadow-lg"
          />
  
          {/* Teks About */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Hi, I'm Sendi Dwi Putra 👋</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Saya seorang main character di dunia ini. Seorang yang beriman, santun, dan memiliki inisiatif yang besar.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Selain menjadi main character, saya juga seorang programmer yang sangat profesional(meren).
            </p>
            <p className="text-lg text-gray-600 mt-4">
                jadi buat sararia yeuhnya yang mau buat website bisa chat aing ya.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  