export default function About() {
    return (
      <div className="flexbg-gray-100 min-h-screen " id="about">
        <header className="bg-blue-900 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2">Know more about who we are and what we do.</p>
        </header>
  
        {/* About Section */}
        <section className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-semibold text-blue-900">Who We Are</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We are a passionate team dedicated to providing top-notch services to our clients.
            Our mission is to deliver high-quality solutions that help businesses grow and succeed.
          </p>
        </section>
  
        {/* Team Section */}
        <section className="bg-white py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-blue-900">Meet Our Team</h2>
            <p className="text-gray-700 mt-4">
              Our team is made up of experienced professionals dedicated to excellence.
            </p>
  
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900">Jane Smith</h3>
                <p className="text-gray-600">CTO & Lead Developer</p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-900">Alice Johnson</h3>
                <p className="text-gray-600">Head of Marketing</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="text-center py-12 bg-blue-900 text-white">
          <h2 className="text-3xl font-semibold">Let's Work Together</h2>
          <p className="mt-4 text-lg">Join us on our journey to make a difference.</p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600">
            Contact Us
          </button>
        </section>
      </div>
    );
  }
  