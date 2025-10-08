import React, { useState } from "react";

const faqData = [
  {
    question: "What is the best time to visit India?",
    answer:
      "The best time to visit most of India is between October and March when the weather is cooler and pleasant. However, some regions like Ladakh are best visited in the summer (May–September).",
  },
  {
    question: "Do I need a visa to travel to India?",
    answer:
      "Yes, most foreign nationals require a visa to enter India. India also offers an e-Visa facility for citizens of many countries, which can be applied for online.",
  },
  {
    question: "What are some must-visit destinations?",
    answer:
      "Popular destinations include the Taj Mahal, Jaipur, Kerala backwaters, Goa beaches, Himachal hill stations, and Ladakh landscapes.",
  },
  {
    question: "Is India safe for solo travelers?",
    answer:
      "Yes, India can be safe for solo travelers, but it’s important to stay alert, research destinations in advance, and follow common travel safety practices.",
  },
  {
    question: "What should I pack for my trip?",
    answer:
      "Light cotton clothes for summer, warm jackets for the north in winter, comfortable walking shoes, and essentials like sunscreen, hat, and basic medicines.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFaq(index)}
            >
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>

            <div
              className={`faq-answer-wrapper ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
