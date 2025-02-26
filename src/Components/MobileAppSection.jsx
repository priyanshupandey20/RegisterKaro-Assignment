import appStore from "../assets/app.png";
import playStore from "../assets/play.png";
import phone1 from "../assets/phone1.png"; 
import phone2 from "../assets/phone2.png";

export default function MobileAppSection() {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between bg-[#0a3d62] px-6 md:px-10  text-white">
      {/* Right Phone Section - Adjusted for Mobile */}
      <div className="w-full lg:w-[40%] flex justify-center lg:justify-end mt-8 lg:mt-0">
        <div className="flex flex-wrap justify-center items-end gap-4 w-full">
          <img src={phone2} alt="Big Phone" className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64" />
          <img src={phone1} alt="Small Phone" className="w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60" />
        </div>
      </div>

      {/* Left Content Section */}
      <div className="max-w-lg text-center lg:text-left space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Manage Your Services by Your Mobile Phone</h2>
        <p className="text-sm sm:text-lg">
          Download our app to manage and track your services. Our app enables you
          to stay in touch with our experts and helps you track your progress.
        </p>
        {/* Store Buttons */}
        <div className="flex justify-center lg:justify-start gap-4">
          <img src={appStore} alt="App Store" className="w-28 sm:w-36 md:w-40" />
          <img src={playStore} alt="Google Play" className="w-28 sm:w-36 md:w-40" />
        </div>
      </div>
    </div>
  );
}
