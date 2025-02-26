export default function HeroSection() {
    return (
      <div className="w-full py-16 px-6 text-center bg-gradient-to-r from-[#e09b3d] via-[#3e587b] to-[#1c3a64]">
        {/* Small Text */}
        <p className="text-xs text-gray-200 tracking-widest uppercase">1% of the Industry</p>
  
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Welcome to your new digital reality. <span className="text-white">Now.</span>
        </h2>
  
        {/* Email Input Form */}
        <div className="mt-6 flex justify-center">
          <div className="relative flex items-center bg-white rounded-full shadow-lg overflow-hidden w-full max-w-lg">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full py-3 px-6 text-gray-600 outline-none"
            />
  
            {/* Submit Button */}
            <button className="bg-[#f7a832] hover:bg-[#e09b3d] text-white font-semibold px-6 py-3">
              Submit
            </button>
  
            {/* Floating Icons */}
            <span className="absolute left-5 -top-5 bg-white shadow-md rounded-full p-1">
              <img src="/badgeA.png" alt="A" className="w-6 h-6" />
            </span>
            <span className="absolute left-1/2 -top-5 bg-white shadow-md rounded-full p-1 transform -translate-x-1/2">
              <img src="/badgeA.png" alt="A" className="w-6 h-6" />
            </span>
            <span className="absolute right-14 -top-5 bg-white shadow-md rounded-full p-1">
              <img src="/badgeA.png" alt="A" className="w-6 h-6" />
            </span>
          </div>
        </div>
  
        {/* Features */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-white text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              ✔
            </span>
            Instant results
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              ✔
            </span>
            User-friendly interface
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              ✔
            </span>
            Personalized customization
          </div>
        </div>
      </div>
    );
  }
  