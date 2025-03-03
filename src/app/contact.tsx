const Contact = () => {
    return (
      <section id="contact" className="py-20 px-6 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" rows={4}></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">Send Message</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  