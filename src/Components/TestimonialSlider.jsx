import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Review1 from '../assets/Review1.avif'
import Review2 from '../assets/Review2.jpg'
import Review3 from '../assets/Review3.avif'
import Review4 from '../assets/Review4.jpeg'

const testimonials = [
  {
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4.5,
    image: Review1,
  },
  {
    name: "Sophia",
    role: "CTO, TechWorld, UK",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 5,
    image: Review2,
  },
  {
    name: "John Doe",
    role: "Founder, StartupHub, Canada",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4,
    image: Review3,
  },
  {
    name: "Emma Watson",
    role: "Marketing Head, BrandBoost, Australia",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    rating: 4.5,
    image: Review4,
  },
  {
    name: "Michael Smith",
    role: "CEO, FinTech Solutions, Germany",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
    rating: 5,
    image: Review3,
  },
  {
    name: "Olivia Brown",
    role: "Lead Designer, Creative Studios, France",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    rating: 4,
    image: Review2,
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-blue-900 py-16 px-6">
      <h2 className="text-white text-3xl font-bold text-center mb-8">What people say about us</h2>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          className="pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full border-2 border-blue-500" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{testimonial.text}</p>
                <div className="mt-4 flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`text-yellow-500 text-lg ${i < testimonial.rating ? "opacity-100" : "opacity-40"}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
