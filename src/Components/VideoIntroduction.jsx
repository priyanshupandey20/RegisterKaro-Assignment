export default function VideoIntroduction() {
    return (
      <section className="py-16 bg-[#1E3A5F] flex justify-center">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-lg uppercase tracking-wider font-semibold text-blue-200">
                Our Video Introductions
              </h2>
              <h1 className="text-3xl font-bold mt-2">Our Video Introductions</h1>
              <p className="mt-4 text-gray-300 max-w-md leading-relaxed">
                Velit purus egestas tellus pharetra. Mattis eget sed faucibus magna 
                vulputate pellentesque a diam tincidunt.
              </p>
  
              {/* Features List */}
              <div className="mt-6 space-y-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-full">
                    <span className="text-white text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Explore ideas together</h3>
                    <p className="text-gray-300 text-sm">
                      Engage audience segments and finally create actionable insights.
                      Amplify vertical integration.
                    </p>
                  </div>
                </div>
  
                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-full">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Bring those ideas to life</h3>
                    <p className="text-gray-300 text-sm">
                      Engage audience segments and finally create actionable insights.
                      Amplify vertical integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Content (YouTube Video) */}
            <div className="relative w-full">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="w-full h-64 md:h-80 rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video link
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  