import { useState } from "react";

interface Quote {
  text: string;
  author: string;
  category: string;
}
const quotes: Quote[] = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    category: "Motivation",
  },
  {
    text: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "Happiness",
  },
  {
    text: "Do not watch the clock. Do what it does. Keep going.",
    author: "Sam Levenson",
    category: "Studying",
  },
  {
    text: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
    category: "Love",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "Life",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Motivation",
  },
];
const QuoteGenerator = () => {
  const [index, setIndex] = useState(0);
  const goNext = () => {
    if (index < quotes.length - 1) setIndex(index + 1);
  };
  const goPrevious = () => {
    if (index > 0) setIndex(index - 1);
  };
  const currentQuote = quotes[index];
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <p className="text-lg italic mb-4">"{currentQuote.text}"</p>
        <p className="font-normal mb-2">- {currentQuote.author}</p>
        <p className="text-sm text-gray-400 mb-6">{currentQuote.category}</p>
        <div className="flex justify-between">
          <button
            onClick={goPrevious}
            disabled={index === 0}
            className={`px-4 py-2 rounded ${
              index === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          <button
            onClick={goNext}
            disabled={index === quotes.length - 1}
            className={`px-4 py-2 rounded ${
              index === quotes.length - 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default QuoteGenerator;
