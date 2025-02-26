import shopify from "../assets/shopify.svg";
import trello from "../assets/trello.png";
import gitlab from "../assets/gitlab.png";
import dropbox from "../assets/Dropbox.png";
import sketch from "../assets/Sketch.png";
import pinterest from "../assets/Pinterest.png";
import atlassian from "../assets/atlassian.png";
import microsoft from "../assets/microsoft.webp";
import notion from "../assets/images.png";
import slack from "../assets/slack.png";
import monday from "../assets/monday.png";
import asana from "../assets/aasan.jpeg";
import heroku from "../assets/heroku.png";
import airtable from "../assets/airtable.png";
import intercom from "../assets/intercom.png";

const clients = [
  shopify, trello, gitlab, dropbox, sketch,
  pinterest, atlassian, microsoft, notion, slack,
  monday, asana, heroku, airtable, intercom
];

export default function HappyClients() {
  return (
    <section className="relative py-16 bg-gray-100 text-center overflow-hidden w-full">
      <div className="w-4/5 mx-auto">
        <h2 className="text-lg text-gray-500 uppercase">Our Happy Clients</h2>
        <h1 className="text-3xl font-bold text-gray-900">Our Happy Clients</h1>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Professionally cultivate one-to-one customer service with robust ideas.
          Dynamically innovate resource-leveling customer service.
        </p>

        {/* Floating Logos - 3 Rows */}
        <div className="mt-12 space-y-10">
          
          {/* First Row */}
          <div className="flex justify-between">
            {clients.slice(0, 5).map((logo, index) => (
              <div key={index} className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md animate-float">
                <img src={logo} alt="Client Logo" className="w-3/4 h-3/4 object-contain" />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex justify-evenly">
            {clients.slice(5, 10).map((logo, index) => (
              <div key={index} className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md animate-float">
                <img src={logo} alt="Client Logo" className="w-3/4 h-3/4 object-contain" />
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="flex justify-between">
            {clients.slice(10, 15).map((logo, index) => (
              <div key={index} className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md animate-float">
                <img src={logo} alt="Client Logo" className="w-3/4 h-3/4 object-contain" />
              </div>
            ))}
          </div>

        </div>

        {/* Centered Show More Button */}
        <div className="mt-8 flex justify-center">
          <button className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
            Show more <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
