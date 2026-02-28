import React from "react";
import Fire from "../assets/icons/10.svg?react";
import Star from "../assets/icons/6.svg?react";
import Junip from "../assets/icons/27.svg?react";
import { Home } from "lucide-react";

const FooterMenu = () => {
  return (
    <div className="max-w-md bg-white px-8 py-10 text-sm text-gray-800 w-full">
      <div className="border-t mb-6"></div>
      <p className="text-center text-gray-500 text-xs mb-10">
        Reviewed on <span className="font-semibold text-black">Junip</span>
      </p>
      <div className="mb-8">
        <h3 className="text-xs font-semibold tracking-wider mb-4">
          COFFEE
        </h3>
        <div className="grid grid-cols-2 gap-y-3">
          <div className="flex items-center gap-2">
            <Fire className="text-yellow-500 w-5" /> <span>Incredible DEALS</span>
          </div>
          <span>5-Minute Bags</span>
          <div className="flex items-center gap-2">
            <Star className="text-yellow-500 w-5" /> <span>Premium Instant</span>
          </div>
          <span>Arabica Beans</span>
          <span>Cold Brew</span>
          <span>Ready to Drink</span>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-xs font-semibold tracking-wider mb-4">
          CURATED
        </h3>
        <div className="grid grid-cols-2 gap-y-3">
          <div className="flex items-center gap-2">
            <Fire className="text-yellow-500 w-5" /> <span>Best Sellers</span>
          </div>
          <span>Merchandise</span>
          <span>Deal of the Week</span>
        </div>
      </div>
      <div>
        <h3 className="text-xs font-semibold tracking-wider mb-4">
          SLEEPY OWL
        </h3>
        <div className="grid grid-cols-2 gap-y-3">
          <div className="flex items-center gap-2">
            <span>Reviews</span>
            <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">
              1,056
            </span>
          </div>
          <span>Terms of Use</span>
          <span>About Us</span>
          <span>Compliance</span>
          <div className="flex items-center gap-2">
            📦 <span>Sustain Packs</span>
          </div>
          <span>Sitemap</span>
          <span>Returns</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </div>
      </div>
      <div className="h-6 bg-[#e9e4dd] mt-10 -mx-8"></div>
    </div>
  );
};

export default FooterMenu;