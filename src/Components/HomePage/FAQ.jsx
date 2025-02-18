import React from 'react';
const faqs = [
    {
      question: "How do I buy a property?",
      answer: "You can start by browsing our listings, contacting an agent, and securing financing before making an offer."
    },
    {
      question: "What are the closing costs?",
      answer: "Closing costs typically include loan fees, title insurance, and legal fees, usually around 2-5% of the home's purchase price."
    },
    {
      question: "How long does it take to sell a house?",
      answer: "On average, it takes 30-60 days to sell a home, but it can vary based on market conditions and pricing."
    }
  ];
const FAQ = () => {
    return (
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-300 text-center mb-6">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 p-4 bg-white shadow rounded-lg">
                  <h3 className="text-lg text-black font-semibold">{faq.question}</h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
};

export default FAQ;