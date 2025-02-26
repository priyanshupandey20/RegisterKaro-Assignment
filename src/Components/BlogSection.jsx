import business1 from '../assets/Small business & Startup.jpg';
import Scale from '../assets/Scale-Up.webp';
import Growing from '../assets/Growing.avif';



export default function BlogSection() {
    const blogs = [
      {
        author: "Prabhash Mishra",
        date: "1 Jan 2023 • Today",
        title: "Small business & Startup",
        description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        tags: ["Tax & Audit", "Management"],
        image:business1,
      },
      {
        author: "Mahesh Kumar",
        date: "1 Jan 2023",
        title: "Scale-Up Company Offer",
        description: "Mental models are simple expressions of complex processes or relationships.",
        tags: ["Tax", "Research", "Compliance"],
        image: Scale,
      },
      {
        author: "Rakhi Verma",
        date: "1 Jan 2023",
        title: "Growing Business Package",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        tags: ["Audit", "Money Back"],
        image: Growing,
      },
      {
        author: "Karan Kumar",
        date: "1 Jan 2023",
        title: "Scale-Up Company Offer",
        description: "Collaboration can make our teams stronger, and our individual designs better.",
        tags: ["Money", "Management"],
        image:business1,
      },
      {
        author: "Richa Singh",
        date: "1 Jan 2023",
        title: "Scale-Up Company Offer",
        description: "JavaScript frameworks make development easy with extensive features and functionalities.",
        tags: ["Tax Return", "News", "Audit"],
        image:Growing,
      },
      {
        author: "Miss Nora",
        date: "1 Jan 2023",
        title: "Scale-Up Company Offer",
        description: "Starting a community doesn’t need to be complicated, but how do you get started?",
        tags: ["Private Limited Company", "Customer Success"],
        image:Scale,
      },
    ];
  
    return (
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-white">
        <h3 className="text-orange-500 text-sm uppercase text-center">Explore Our Blogs</h3>
        <h2 className="text-3xl font-bold text-center text-gray-900 mt-2">
          Accelerate Digital Transformation
        </h2>
  
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />
              <div className="p-5">
                <p className="text-gray-500 text-sm">{blog.author} • {blog.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">{blog.title} <span className="inline-block transform rotate-45">↗</span></h3>
                <p className="text-gray-600 mt-2 text-sm">{blog.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-10 flex justify-center">
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800">
            Show more blogs
          </button>
        </div>
      </section>
    );
  }
  