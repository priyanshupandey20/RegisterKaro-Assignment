import Aboutpic from '../assets/About.avif'


export default function About() {
    return (
      <section className="py-12 bg-gray-50 flex justify-center">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 px-6">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-sm text-orange-500 uppercase tracking-wide">
              Welcome to RegisterKaro.in
            </h2>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              About <span className="text-orange-500">Register Karo</span>
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We have been using Intelegencia as our DevOps vendor for our field service
              applications over the last couple of years and I’m extremely pleased with
              their performance, ability to execute, and willingness to adapt in our ever-changing
              environment. <span className="font-semibold">Perry is an outstanding leader</span> who is 
              fanatical about customer satisfaction. He has built a solid team which has consistently delivered 
              on projects, thereby exceeding everyone’s expectations.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I would strongly recommend their services to any organization that is looking 
              for solid, reliable, and predictable outcomes.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
              Learn More ➔
            </button>
          </div>
  
          {/* Right Side: Image */}
          <div className="md:w-1/2">
            <div className="relative bg-white rounded-lg overflow-hidden border shadow-lg">
              <img
                src={Aboutpic}
                alt="Team of Register Karo"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  