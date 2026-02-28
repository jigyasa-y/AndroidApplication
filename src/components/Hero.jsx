import React from 'react';
import Breadcrumb from './Breadcrumb';
import Rating from './Rating';
import CustomerReviews from './CustomerReviewes';
import FooterMenu from "./FooterMenu";
import BrandFooter from './BrandFooter';
import Forbis from "../assets/icons/15.svg?react";
import Times from "../assets/icons/16.svg?react";


function Hero({ addToCart }) {
  const [openIndex, setOpenIndex] = React.useState(0);
  const [showToast, setShowToast] = React.useState(false);
  const faqs = [
    {
      question: "What is Protein Coffee?",
      answer:
        "It's real, strong coffee, brewed with two espresso shots and blended with high-quality whey protein for everyday energy and recovery.",
    },
    {
      question: "How much protein does one serving have?",
      answer:
        "Each serving contains 15g of whey protein to support your daily protein needs.",
    },
    {
      question: "What type of protein does this contain?",
      answer:
        "It is made with premium whey protein for quick absorption and a smooth texture.",
    },
    {
      question: "Does it contain sugar?",
      answer:
        "No, it has zero added sugar and is under 97 calories per serving.",
    },
    {
      question: "How much caffeine does it have?",
      answer:
        "Each serving contains caffeine from two espresso shots to keep you alert and focused.",
    },
    {
      question: "How do I prepare it?",
      answer:
        "Add one sachet to cold water or milk and shake or blend well. Serve chilled.",
    },
  ];

  return (
    <section className='heroSection flex flex-col justify-center items-center  py-12 px-4 lg:px-24'>
      <div className="imageGallary">
        <div className='images'>
          <img src="../../public/Images/2.jpeg" alt="" />
        </div>
      </div>

      <div className='details w-9/10   flex flex-col gap-4 '>
        <Breadcrumb className="mb-4"
          items={[
            "Home",
            "Cold Brew Coffee",
            "Protein Coffee Classic",
          ]}
        />

        <a href="" className="text-blue-400 font-bold hover:text-blue-400">PROTEIN COFFEE</a>
        <h1 className="text-2xl font-bold">Classic Protein Cold Coffee Powder</h1>
        <Rating rating={4} total={5} count={4} />

        <p className="font-sans text-lg leading-7 font-bolder text-gray-700">
          Meet the new Protein-Powered Coffee.Each sachet gives you 15g of protein,boosted with 2 espresso shots,no added sugar,and under 97 calories.Add cold water or milk,shake or blend,and you're ready to go.Perfect for you when you need that extra strength in your daily routine.Each pack contains 5 sachest.
        </p>

        <div className="icons  grid grid-cols-2  gap-4 py-4">
          <div className=" font-semibold  flex w-120 items-center gap-2  text-xs">
            <img src="../../public/icons & Logos/7.svg" className="w-6 h-6 " alt="" />
            <span>15-GRAM PROTEIN</span>
          </div>

          <div className=" font-semibold flex w-120 items-center gap-2 px-4 text-xs">
            <img src="../../public/icons & Logos/8.svg" className="w-6 h-6 " alt="" />
            <span>2 ESPRESSO SHOTS</span>
          </div>

          <div className=" font-semibold h-10 flex w-120 items-center gap-2 px-4 text-xs">
            <img src="../../public/icons & Logos/9.svg" className="w-6 h-6 " alt="" />
            <span>ZERO ADDED SUGAR</span>
          </div>

          <div className=" font-semibold flex w-120 items-center gap-2 px-4 text-xs">
            <img src="../../public/icons & Logos/10.svg" className="w-6 h-6 " alt="" />
            <span>LESS THAN 100 CAL</span>
          </div>

          <div className=" font-semibold flex w-120 items-center gap-2 px-4 text-xs">
            <img src="../../public/icons & Logos/11.svg" className="w-6 h-6 " alt="" />
            <a href="" className="text-underline">FAQ</a>
          </div>
        </div>
      </div>

      <section className="checkOut flex flex-col items-center w-full ">
        <div className="productFlavour w-full h-60   flex  items-center justify-evenly">
          <div className="">
            <img src="../../public/Images/10.jpeg" alt="Classic Flavour" className="w-16 h-16 object-cover " />
            <span className="text-xs font-bold ">CLASSIC</span>
          </div>
          <div className="">
            <img src="../../public/Images/11.jpeg" alt="Classic Flavour" className="w-16 h-16 object-cover " />
            <span className="text-xs font-bold">VANILLA</span>
          </div>
          <div className="">
            <img src="../../public/Images/12.jpeg" alt="Classic Flavour" className="w-16 h-16 object-cover " />
            <span className="text-xs font-bold">HAZELNUT</span>
          </div>
          <div className="">
            <img src="../../public/Images/13.jpeg" alt="Classic Flavour" className="w-16 h-16 object-cover " />
            <span className="text-xs font-bold">ASSORTED</span>
          </div>
        </div>
        <div className="checkOutBtn  text-white w-full h-16  flex flex-col items-center justify-center">
          <div className="bg-blue-900 w-full flex h-30  items-center justify-around rounded">
            <button onClick={() => { addToCart({ name: "Protein Coffee Classic", price: 199 }); setShowToast(true); setTimeout(() => setShowToast(false), 2000); }} className="p-40 w-full h-full bg-blue-900 text-white rounded">ADD TO CART</button>
            {showToast && <div className="mt-2 text-green-600 font-semibold">Item added to cart!</div>}
            <span>MRP: ₹199</span>
          </div>
     
        </div>
      </section>

      <section className="  w-full bg-white ">
        <div className='flex flex-col h-20'>
          <span className="font-semibold  text-normal l-10">AS SEEN ON</span>
          <div className="flex items-center  justify-around gap-4 py-4">
            <Forbis className="w-16 h-16" />
            <Times className="w-46 h-16" />
          </div>
        </div>
        <img src="../../public/images/14.jpeg" alt="" />
        <div className="flex flex-col items-start justify-center gap-4 h-30">
          <span className="font-bold text-xs">COLD COFFEE,ONLY STRONGER!</span>
          <p className="text-xl">Your everyday cold coffee,now stronger with 2 espresso shots and 15g whey protein!</p>
        </div>
        <img src="../../public/images/4.jpeg" alt="" />
        <div className="flex flex-col items-start justify-center gap-4 h-30">
          <span className="font-bold text-xs">COLD COFFEE,ONLY STRONGER!</span>
          <p className="text-xl">Your everyday cold coffee,now stronger with 2 espresso shots and 15g whey protein!</p>
        </div>
        <img src="../../public/images/8.jpeg" alt="" />
        <div className="flex flex-col items-start justify-center gap-4 h-30">
          <span className="font-bold text-xs">COMES IN 3 DELICIOUS FLAVOURS!</span>
          <p className="text-xl">Switch between our Classic,Hazelnut,and French Vanilla Protein Cold Coffee and keep your taste buds excited.</p>
        </div>
      </section>

      <section
        className="w-full min-h-screen flex"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
        <div className="flex-1  px-6 flex flex-col gap-10 py-10 text-white">
          <h2 className="text-2xl tracking-[0.2em] uppercase text-gray-300 mb-6 h-30 text-center flex items-center justify-center">
            Customers Often Ask–
          </h2>
          <div className="divide-y divide-[#27324d] border-y border-[#27324d]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="py-1 ">
                  <button
                    type="button"
                    className="w-full  flex  items-center justify-between  text-center"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="flex-1 pr-4">
                      <span className="block text-xl font-semibold">
                        {faq.question}
                      </span>
                      {isOpen && (
                        <p className="mt-4 text-lg leading-relaxed text-gray-200 h-auto">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                    <span
                      className={`ml-3 flex bg-white items-center justify-center w-8 h-8 rounded-full border border-[#27324d] transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      <img
                        src="../../public/Icons & Logos/22.svg"
                        alt="Toggle FAQ"
                        className="w-4 h-4"
                      />
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[#27324d] h-20">
            <p className="text-xl text-gray-300 mb-4">
              Got a different question?
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 h-10 bg-white text-[10px] font-bold tracking-[0.18em] text-gray-900 py-3 uppercase"
              >
                See our FAQ
              </button>
              <button
                type="button"
                className="flex-1 bg-[#da251c] text-[10px] font-bold tracking-[0.18em] text-white py-3 uppercase"
              >
                Mail us
              </button>
            </div>
          </div>
        </div>
      </section>

 
      <section className='w-full flex flex-col items-center  bg-white'>
        <CustomerReviews />
      </section>

      <section>
      </section>

      <section className="w-full flex flex-col items-center justify-center bg-gray-100 py-10">
        <FooterMenu />
      </section>

      <BrandFooter />
    </section>
  )
}

export default Hero;
