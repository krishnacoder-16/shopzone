function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Info Section */}
        <div className="bg-gray-100 p-8 rounded-xl shadow-md space-y-6">
          <h3 className="text-2xl font-semibold mb-4">
            Contact Information
          </h3>

          <div>
            <p className="font-medium">📞 Phone</p>
            <a
              href="tel:+919811945632"
              className="text-blue-600 hover:underline"
            >
              +91 9811945632
            </a>
          </div>

          <div>
            <p className="font-medium">📧 Email</p>
            <a
              href="mailto:support@shopzone.com"
              className="text-blue-600 hover:underline"
            >
              support@shopzone.com
            </a>
          </div>

          <div>
            <p className="font-medium">📍 Address</p>
            <p className="text-gray-600">
              123 React Street, Web City, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
