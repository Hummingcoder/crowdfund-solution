import React, { useState } from "react";

const Pledge = ({
  name,
  perks,
  minAmount,
  left,
  handleSelect,
  selected,
  id,
  setCompleted,
  setShowPledgeModal,
}) => {
  const [inputAmount, setinputAmount] = useState("");
  const [error, seterror] = useState("");

  const handleInput = () => {
    if (inputAmount.length < 1) seterror("can't be empty");
    else if (isNaN(inputAmount)) seterror("invalid amount");
    else if (parseInt(inputAmount) < parseInt(minAmount))
      seterror("amount can't be less than $" + minAmount);
    else {
      seterror("");
      if (inputAmount !== "" && selected !== "") {
        setShowPledgeModal(false);
        setCompleted(true);
      }
    }
  };

  return (
    <section
      id={id}
      className={`w-full mb-5 p-5  border-2  rounded-lg flex flex-col items-start justify-start gap-6 ${
        selected === name ? "border-cyan-moderate" : "border-neutral-lightGray"
      } ${left < 1 ? "opacity-40" : "opacity-100"}`}
    >
      <div className="flex items-center justify-start gap-4">
        <button
          onClick={() => {
            left > 1 && handleSelect(name);
          }}
          className={`w-[20px] h-[20px] rounded-full border-2 grid place-content-center duration-300 cursor-pointer ${
            selected === name.trim()
              ? "border-cyan-moderate"
              : "border-neutral-lightGray"
          }`}
        >
          <div
            className={`w-[10px] h-[10px] rounded-full duration-300 ${
              selected === name.trim() ? "bg-cyan-moderate" : "bg-white"
            }`}
          ></div>
        </button>
        <div>
          <button
            onClick={() => handleSelect(name)}
            className={`font-bold text-sm md:text-base  cursor-pointer duration-300 ${
              selected === name.trim()
                ? "text-cyan-moderate"
                : "text-neutral-darkGray"
            }`}
          >
            {name}
          </button>
          {minAmount !== "" && (
            <p className=" text-sm md:text-base text-cyan-moderate">
              Pledge ${minAmount} or more
            </p>
          )}
        </div>
      </div>
      <p className="text-sm md:text-base text-neutral-darkGray">{perks}</p>
      {left !== "x" && (
        <div className=" flex items-baseline gap-1 justify-start ">
          <p className="text-neutral-black font-bold text-2xl">{left}</p>{" "}
          <p className="text-neutral-darkGray text-sm">left</p>
        </div>
      )}
      {selected === name && (
        <section
          className={`w-full border-t-2 border-neutral-lightGray pt-8 pb-4 grid place-content-center md:grid-cols-2 items-center gap-5 md:flex-row md:justify-between`}
        >
          <p className="text-neutral-darkGray">Enter your pledge</p>
          <div className="w-full">
            <div className="grid place-content-center w-full max-w-[300px] gap-4 grid-cols-2">
              <div
                className={`border-2  rounded-full px-2  relative flex w-full gap-2 items-center justify-start ${
                  error !== "" ? "border-red-500" : "border-neutral-lightGray"
                }`}
              >
                <p className="text-gray-400 pl-2  text-lg">$</p>
                <input
                  onChange={(e) => setinputAmount(e.target.value)}
                  type="text"
                  placeholder="0.00"
                  className="w-[100%] outline-none "
                  value={inputAmount}
                />
              </div>

              <button
                onClick={handleInput}
                className="bg-cyan-moderate w-full hover:bg-cyan-dark duration-300  h-[50px] md:h-[55px]  font-bold text-white rounded-full text-sm md:text-base"
              >
                Submit
              </button>
            </div>
            <p className="text-red-500 mt-1 text-xs pl-5">{error}</p>
          </div>
        </section>
      )}
    </section>
  );
};

export default Pledge;
