import React from "react";

const Star = ({ filled }) => {
  return (
    <span className={`text-xl ${filled ? "text-yellow-400" : "text-gray-300"}`}>
      <img src="../../public/icons & Logos/6.svg" alt="Star" className="w-5 h-5" />
    </span>
  );
};

const RatingBar = ({ value }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm w-3">{value}</span>
      <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${value * 20}%` }}
        ></div>
      </div>
    </div>
  );
};

const CustomerReviews = () => {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
      <div className="flex gap-6">
        <div>
          <h1 className="text-5xl font-semibold">4.5</h1>
          <div className="flex mt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} filled={i <= 4} />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">4 reviews</p>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <RatingBar value={5} />
          <RatingBar value={4} />
          <RatingBar value={3} />
          <RatingBar value={2} />
          <RatingBar value={1} />
        </div>
      </div>
      <button className="w-full mt-6 bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md font-medium tracking-wide">
        WRITE A REVIEW
      </button>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">Sort & Filter</h3>
        </div>
        <div className="flex gap-3">
          <select className="border  border-gray-300 h-10 rounded-md px-3 py-2 text-sm w-1/2">
            <option>Most recent</option>
            <option>Highest rating</option>
            <option>Lowest rating</option>
          </select>
          <select className="border border-gray-300 h-10  rounded-md px-3 py-2 text-sm w-1/2">
            <option>All</option>
            <option>5 Stars</option>
            <option>4 Stars</option>
          </select>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <input type="checkbox" />
          <label className="text-sm">With media</label>
        </div>
      </div>
      <div className="mt-6  border-b border-gray-200 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
            YG
          </div>
          <div>
            <h4 className="font-medium">Yash g</h4>
            <p className="text-xs text-blue-600">Verified Buyer</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} filled={i <= 4} />
            ))}
          </div>
          <span className="text-xs text-gray-500">15 days ago</span>
        </div>
        <h3 className="font-semibold mt-3">
          It has a hint of cinnamon taste..
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          It has a hint of cinnamon taste to it which I personally don't like
          apart from it tastes and feels awesome.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Review left on: Protein Coffee Powder - Hazelnut
        </p>
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
          <span>Was this review helpful?</span>
          <div className="flex gap-2">
            <img src="../../public/icons & Logos/25.svg" alt="Helpful" className="w-5 h-5" />
            <span>1</span>
          </div>
          <div className="flex gap-2">
            <img src="../../public/icons & Logos/26.svg" alt="Helpful" className="w-5 h-5" />
            <span>0</span>
          </div>
        </div>
      </div>
      <div className="mt-6  border-b border-gray-200 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
            YG
          </div>
          <div>
            <h4 className="font-medium">Yash g</h4>
            <p className="text-xs text-blue-600">Verified Buyer</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} filled={i <= 4} />
            ))}
          </div>
          <span className="text-xs text-gray-500">15 days ago</span>
        </div>
        <h3 className="font-semibold mt-3">
          It has a hint of cinnamon taste..
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          It has a hint of cinnamon taste to it which I personally don't like
          apart from it tastes and feels awesome.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Review left on: Protein Coffee Powder - Hazelnut
        </p>
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
          <span>Was this review helpful?</span>
          <div className="flex gap-2">
            <img src="../../public/icons & Logos/25.svg" alt="Helpful" className="w-5 h-5" />
            <span>1</span>
          </div>
          <div className="flex gap-2">
            <img src="../../public/icons & Logos/26.svg" alt="Helpful" className="w-5 h-5" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;