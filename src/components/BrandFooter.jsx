import React from "react";
import BrandLogo from "../assets/icons/28.svg?react";
import Youtube from "../assets/icons/34.svg?react";
import Twitter from "../assets/icons/31.svg?react";
import Instagram from "../assets/icons/30.svg?react";
import Facebook from "../assets/icons/33.svg?react";
import LinkedIn from "../assets/icons/35.svg?react";

const BrandFooter = () => {
  return (
    <div className="w-full">
      <div className="bg-[#e9e4dd] flex flex-col items-center gap-8 text-center px-6 py-16">
        <BrandLogo className="flex justify-center gap-8 mb-8 text-4xl" />
        <p className="max-w-xl mx-auto text-gray-800 text-lg leading-relaxed">
          Our journey started with three friends with a shared vision. It was simple– introduce people to{" "}
          <span className="italic">real good coffee.</span> Today, we’re making
          high-quality, freshly roasted coffee accessible to everyone with our
          exclusive products.
        </p>
        <div className="max-w-xl mx-auto mt-10 flex border-2 border-black rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Email Newsletter"
            className="flex-1 w-100 h-10 px-4 py-4 bg-transparent outline-none text-gray-800"
          />
          <button className="bg-black text-white px-6 flex items-center justify-center hover:opacity-90 transition">
            →
          </button>
        </div>
        <div className="flex justify-center gap-8 mt-10 text-2xl">
          <Instagram className="hover:text-gray-600 transition" />
          <Twitter className="hover:text-gray-600 transition" />
          <Facebook className="hover:text-gray-600 transition" />
          <LinkedIn className="hover:text-gray-600 transition" />
          <Youtube className="hover:text-gray-600 transition" />
        </div>
      </div>
      <div className="bg-black h-30 flex flex-col items-center justify-center gap-4 text-white text-center py-8 text-sm">
        <p>© 2026 Sleepy Owl Coffee</p>
        <div className="mt-3 flex justify-center gap-4">
          <a href="#" className="underline hover:opacity-70">
            Privacy
          </a>
          <span>•</span>
          <a href="#" className="underline hover:opacity-70">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandFooter;