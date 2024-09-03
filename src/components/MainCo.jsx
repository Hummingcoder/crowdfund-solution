import React, { useState } from "react";

const MainCo = ({ handleMainSelect }) => {
  const [bookmark, setbookmark] = useState(false);
  return (
    <div className="w-[90%] max-w-[600px] flex flex-col gap-10 mx-auto translate-y-[-50px]">
      {/* ---------------- backing section --------------------- */}
      <article className="bg-white relative text-center pt-12 pb-8 px-5 sm:px-8 flex flex-col justify-center items-center gap-4 rounded-lg">
        <img
          src="./images/logo-mastercraft.svg"
          alt="mastercraft-logo"
          className="mx-auto absolute left-[50%] translate-x-[-50%] top-0 translate-y-[-50%] "
        />
        <h1 className="font-bold text-neutral-black text-xl md:text-2xl ">
          Mastercraft Banboo <br className="sm:hidden" />
          Monitor Riser
        </h1>
        <p className="text-sm text-neutral-darkGray  md:text-base">
          A beautifully handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <section className="w-full flex flex-row justify-center sm:justify-between md:px-8 items-center gap-2 mt-4 ">
          <a
            href="#zero"
            onClick={() => handleMainSelect("")}
            className="bg-cyan-moderate hover:bg-cyan-dark duration-300 w-[180px] md:w-[200px] h-[50px] md:h-[55px]  font-bold text-white rounded-full text-sm md:text-base grid place-content-center"
          >
            Back this project
          </a>
          <button
            onClick={() => setbookmark((bookmark) => !bookmark)}
            className={`flex flex-row items-center justify-start sm:w-fit rounded-full hover:opacity-95  duration-200 p-2 bg-neutral-lightGray  ${
              bookmark ? " text-cyan-dark" : "text-neutral-darkGray "
            }`}
          >
            <div className="rounded-full bg-cyan-moderate">
              <img
                src="./images/icon-bookmark.svg"
                alt="bookmark-icon"
                className={`w-[40px] rounded-full ${
                  bookmark ? "opacity-70" : "opacity-100"
                }`}
              />
            </div>
            <p className="font-semibold  hidden sm:pl-4 pr-6 sm:block">
              {bookmark ? "bookmarked" : "bookmark"}
            </p>
          </button>
        </section>
      </article>
      {/* ---------------- backing section --------------------- */}
      <article className="bg-white px-5 sm:px-8 py-8 rounded-lg text-center md:text-start">
        <section className="w-full h-full flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12 ">
          <div className="">
            <p className="text-neutral-black text-3xl md:text-4xl font-bold mb-1">
              $89,914
            </p>
            <p className="text-xs md:text-sm text-neutral-darkGray">
              of $100,000 backed
            </p>
          </div>
          <div className="w-[80px] h-[1px] md:h-[80px] md:w-[1px] bg-neutral-lightGray" />
          <div className="">
            <p className="text-neutral-black text-3xl font-bold mb-1 md:text-4xl">
              5,007
            </p>
            <p className="text-xs md:text-sm text-neutral-darkGray">
              total backers
            </p>
          </div>
          <div className="w-[80px] h-[1px] md:h-[80px] md:w-[1px] bg-neutral-lightGray" />
          <div className="">
            <p className="text-neutral-black text-3xl font-bold mb-1 md:text-4xl">
              56
            </p>
            <p className="text-xs text-neutral-darkGray md:text-sm">days</p>
          </div>
        </section>
        <section className="bg-neutral-lightGray w-full h-[12px] rounded-full overflow-hidden flex items-start justify-start mt-8">
          <div className="w-[86%] h-full bg-cyan-moderate"></div>
        </section>
      </article>
      {/* ---------------- description section --------------------- */}
      <article className="bg-white px-5 sm:px-8 py-10 rounded-lg flex flex-col gap-6">
        <h2 className="text-lg font-bold">About this project</h2>
        <p className="text-sm leading-6 text-neutral-darkGray md:text-base">
          The Mastercraft Banboo Monitor Riser is a sturdy and stylish paltform
          that elevates your screen to a more comfortable viewing height.
          Placing your moniter at eye level has the potential your posture and
          make your more comfortable while at work, helping you stay focused on
          the task at hand.
        </p>
        <p className="text-sm leading-6 text-neutral-darkGray md:text-base">
          Featuring artisan craftmanship, hte simplicity of desgn creates extra
          desk space below your computer to allow notepads, pens, and USB sticks
          to be stored under stand.
        </p>
        {/* ---------------25 pledge card -------------------- */}
        <section className="border-2 border-neutral-lightGray rounded-xl p-5 gap-5 md:gap-7 flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
            <h3 className="font-bold">Bamboo Stand</h3>
            <p className="text-cyan-moderate text-sm">Pledge $25 or more</p>
          </div>
          <p className="text-sm text-neutral-darkGray leading-6">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and youll be added to a special
            Backer member list.
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-5 items-start">
            <div className=" flex items-baseline gap-1 justify-start ">
              <p className="text-neutral-black font-bold text-3xl">101</p>{" "}
              <p className="text-neutral-darkGray text-sm">left</p>
            </div>
            <a
              href="#one"
              onClick={() => handleMainSelect("Bamboo Stand")}
              className="bg-cyan-moderate w-fit font-bold text-white rounded-full text-sm md:text-base px-6 py-3 hover:bg-cyan-dark duration-300"
            >
              Select Reward
            </a>
          </div>
        </section>
        {/* ---------------75 pledge card -------------------- */}
        <section className="border-2 border-neutral-lightGray rounded-xl p-5 gap-5 md:gap-7 flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
            <h3 className="font-bold">Black Edition Stand</h3>
            <p className="text-cyan-moderate text-sm">Pledge $75 or more</p>
          </div>
          <p className="text-sm text-neutral-darkGray leading-6">
            You get an Black Special Edition computer stand and a personal thank
            you. You'll be added to aout Backer member list. Shipping is
            included.
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-5 items-start">
            <div className=" flex items-baseline gap-1 justify-start ">
              <p className="text-neutral-black font-bold text-3xl">64</p>{" "}
              <p className="text-neutral-darkGray text-sm">left</p>
            </div>
            <a
              href="#two"
              onClick={() => handleMainSelect("Black Edition Stand")}
              className="bg-cyan-moderate w-fit font-bold text-white rounded-full text-sm md:text-base px-6 py-3 hover:bg-cyan-dark duration-300"
            >
              Select Reward
            </a>
          </div>
        </section>
        {/* ---------------out of stock card -------------------- */}
        <section className="border-2 border-neutral-lightGray rounded-xl p-5 gap-5 md:gap-7 flex flex-col opacity-40">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
            <h3 className="font-bold">Mahogany Special Edition</h3>
            <p className="text-cyan-moderate   text-sm">Pledge $200 or more</p>
          </div>
          <p className="text-sm text-neutral-darkGray leading-6">
            You get tow Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You'll be added to our Backer memner list
            Shipping is included.
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-5 items-start">
            <div className=" flex items-baseline gap-1 justify-start ">
              <p className="text-neutral-black font-bold text-3xl">0</p>{" "}
              <p className="text-neutral-darkGray text-sm">left</p>
            </div>
            <button className="bg-neutral-darkGray  w-fit font-bold text-white rounded-full text-sm md:text-base px-6 py-3">
              Out of stock
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default MainCo;
