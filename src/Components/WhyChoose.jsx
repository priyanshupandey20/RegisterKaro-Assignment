export default function WhyChoose() {
    const features = [
      {
        title: "No Hidden Fee",
        description: "Everything is put before you with no hidden charges or conditions",
        icon: "✅",
        bgColor: "bg-green-50",
      },
      {
        title: "Guaranteed Satisfaction",
        description: "We ensure that you stay 100% satisfied with our offered services",
        icon: "🔵",
        bgColor: "bg-blue-50",
      },
      {
        title: "Expert CA/CS Assistance",
        description: "Prompt support from our in-house expert professionals",
        icon: "👔",
        bgColor: "bg-pink-50",
      },
      {
        title: "Confidential & Safe",
        description: "All your private information is safe with us",
        icon: "🛡️",
        bgColor: "bg-orange-50",
      },
    ];
  
    return (
      <section className="py-16 bg-white flex justify-center">
        <div className="container mx-auto max-w-6xl text-center px-6">
          {/* Header */}
          <h2 className="text-sm text-orange-500 uppercase tracking-wide">
            Why RegisterKaro.in
          </h2>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">
            Why Choose Register Karo
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            It is with consistent services and results that build trust with the people and 
            that in turn help us to serve the business better.
          </p>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${feature.bgColor} text-center border border-gray-200`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  