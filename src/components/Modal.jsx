import React, { useState } from "react";
import Pledge from "./Pledge";
import Completed from "./Completed";
import SelectPledge from "./SelectPledge";

const Modal = ({ data, selected, handleSelect, handleModal }) => {
  const [completed, setCompleted] = useState(false);
  const [showPledgeModal, setShowPledgeModal] = useState(true);

  return (
    <article className="w-full min-h-screen bg-[#00000066] fixed top-0 left-0 z-[9999] py-20">
      {completed && <Completed handleModal={handleModal} />}
      {showPledgeModal && (
        <SelectPledge
          data={data}
          handleSelect={handleSelect}
          selected={selected}
          setCompleted={setCompleted}
          setShowPledgeModal={setShowPledgeModal}
          handleModal={handleModal}
        />
      )}
    </article>
  );
};

export default Modal;
