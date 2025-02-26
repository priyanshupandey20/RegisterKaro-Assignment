import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const faqs = [
  { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, you can recover deleted files using our software. It supports recovery from various storage devices." },
  { question: "Is this software compatible with Mac and Windows?", answer: "Absolutely! Our software works on both macOS and Windows without any compatibility issues." },
  { question: "Does the software provide data encryption?", answer: "Yes, we use industry-standard encryption to ensure your recovered data is secure." },
  { question: "How long does the recovery process take?", answer: "The recovery time depends on the file size and disk speed but is usually completed within minutes." },
  { question: "Is customer support available 24/7?", answer: "Yes! Our support team is available round the clock to assist you with any issues." },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-orange-500 text-sm uppercase">FAQ</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Frequent Ask Questions</h2>
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
            <button
              className="w-full flex justify-between items-center text-left p-5 text-lg font-medium text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronRight className={`text-gray-500 transition-transform ${openIndex === index ? "rotate-90" : ""}`} />
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-5 pb-5 text-gray-700 text-sm"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 flex items-center">
          Show more <FaChevronRight className="ml-2" />
        </button>
      </div>
    </section>
  );
}
