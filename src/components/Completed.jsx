import React from "react";

const Completed = ({ handleModal }) => {
  return (
    <div className="w-full min-h-screen bg-[#00000066] fixed top-0 left-0 z-[9999] flex items-center justify-center">
      <article className="bg-white w-[90%] mx-auto rounded-lg p-6 py-12 text-center flex items-center justify-center flex-col gap-6 max-w-[400px]">
        <img src="./images/icon-check.svg" alt="check-icon" />
        <p className="text-neutral-black font-bold text-lg">
          Thanks for your support!
        </p>
        <p className="text-neutral-darkGray mb-3">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor RIser worldwide. You will get an email once our campaign is
          completed
        </p>
        <button
          onClick={handleModal}
          className="bg-cyan-moderate w-fit  hover:bg-cyan-dark duration-300  font-bold text-white rounded-full text-base px-7 py-3 "
        >
          Got it!
        </button>
      </article>
    </div>
  );
};

export default Completed;
