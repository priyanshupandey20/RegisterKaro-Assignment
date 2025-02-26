export default function StatsSection() {
    return (
      <div className="py-16 px-6 text-center bg-white">
        {/* Section Title */}
        <p className="text-sm tracking-widest text-[#b27941] uppercase">Why Register Karo</p>
        <h2 className="text-2xl font-bold text-[#4a3627] mt-2">Some Numbers are important</h2>
  
        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-12">
          {/* Customers */}
          <div>
            <p className="text-3xl font-bold text-[#4a3627]">
              1M<span className="text-[#b27941]">+</span>
            </p>
            <p className="text-sm text-gray-600">CUSTOMERS</p>
          </div>
  
          {/* Years of Excellence */}
          <div>
            <p className="text-3xl font-bold text-[#b27941] flex items-center justify-center">
              12
              {/* Badge Icons */}
             
            </p>
            <p className="text-sm text-gray-600">YEARS OF EXCELLENCE</p>
          </div>
  
          {/* R&D Engineers */}
          <div>
            <p className="text-3xl font-bold text-[#4a3627] flex items-center justify-center">
              41
              <span className="text-[#b27941]">+</span>
              {/* Badge Icons */}
             
            </p>
            <p className="text-sm text-gray-600">R&D ENGINEERS</p>
          </div>
  
          {/* Countries */}
          <div>
            <p className="text-3xl font-bold text-[#4a3627]">
              78<span className="text-[#b27941]">+</span>
            </p>
            <p className="text-sm text-gray-600">COUNTRIES</p>
          </div>
  
          {/* Partners */}
          <div>
            <p className="text-3xl font-bold text-[#4a3627]">
              3287<span className="text-[#b27941]">+</span>
            </p>
            <p className="text-sm text-gray-600">PARTNERS</p>
          </div>
  
          {/* Awards Received */}
          <div>
            <p className="text-3xl font-bold text-[#4a3627]">
              41<span className="text-[#b27941]">+</span>
            </p>
            <p className="text-sm text-gray-600">AWARDS RECEIVED</p>
          </div>
        </div>
      </div>
    );
  }
  