import React from "react";
import Pledge from "./Pledge";

const SelectPledge = ({
  data,
  handleSelect,
  selected,
  setCompleted,
  setShowPledgeModal,
  handleModal,
}) => {
  return (
    <div className="w-[90%] mx-auto bg-white rounded-md p-5 relative max-w-[600px] h-[80vh] ">
      <div className="flex flex-row justify-between items-center mb-3">
        <h2 className="font-bold text-base md:text-lg">Back this project</h2>
        <button className="hover:scale-110" onClick={handleModal}>
          <img src="./images/icon-close-modal.svg" alt="close-modal" />
        </button>
      </div>

      <p className="text-sm md:text-base text-neutral-darkGray">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div className="overflow-scroll hide-scroll overflow-x-hidden max-h-[70%] mt-8 ">
        {data.map((item, i) => (
          <Pledge
            key={i}
            {...item}
            handleSelect={handleSelect}
            selected={selected}
            setCompleted={setCompleted}
            setShowPledgeModal={setShowPledgeModal}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectPledge;
