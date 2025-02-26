export default function ApplicationProcess() {
  const steps = [
    { icon: "📄", text: "Fill up Application Form", color: "bg-red-500" },
    { icon: "💳", text: "Make Online Payment", color: "bg-green-500" },
    { icon: "⚙️", text: "Executive will Process Application", color: "bg-orange-500" },
    { icon: "📩", text: "Get Confirm Mail", color: "bg-gray-500" },
  ];

  return (
    <div className="bg-orange-500 py-8 px-6 md:px-12 w-full rounded-lg">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl ${step.color}`}
            >
              {step.icon}
            </div>
            <span className="text-white font-semibold text-sm md:text-base lg:text-lg">{step.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
