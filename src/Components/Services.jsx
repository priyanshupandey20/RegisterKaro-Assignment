import { Link } from "react-router-dom";


export default function Services() {
    const services = [
      { title: "Company Formation", description: "Build web-based solutions that enhance customer experience.", icon: "⚙️" },
      { title: "Company Support & Services", description: "Make data-driven decisions and utilize technology to reach business goals.", icon: "📊" },
      { title: "Virtual Office Address", description: "Foster customer relationships by effectively serving your market.", icon: "🌟" },
      { title: "Annual Compliance Services", description: "Turn your ideas into modern products with our design experts.", icon: "🛠️" },
      { title: "Payroll Services", description: "Expand your business across the globe with minimal effort.", icon: "🌍" },
      { title: "Bookkeeping Services", description: "Steering user behaviours with creative design, data insights & technology.", icon: "📜" },
    ];
  
    return (
      <section className="py-12 bg-gray-50 flex justify-center">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-sm text-orange-500 uppercase tracking-wide">Welcome to RegisterKaro.in</h2>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Explore Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-orange-400">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <Link to="#" className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
                  Learn More ➔
                  </Link>
              </div>
            ))}
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-700">
            See All Services
          </button>
        </div>
      </section>
    );
  }
  