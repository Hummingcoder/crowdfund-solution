import React, { useState } from "react";
import Header from "./components/Header";
import MainCo from "./components/MainCo";
import Modal from "./components/Modal";
import Completed from "./components/Completed";

const App = () => {
  const [data, setdata] = useState([
    {
      name: "pledge with no reward",
      minAmount: "",
      perks:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      left: "x",
      id: "zero",
    },
    {
      name: "Bamboo Stand",
      minAmount: "25",
      perks:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      left: "101",
      id: "one",
    },
    {
      name: "Black Edition Stand",
      minAmount: "75",
      perks:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left: "64",
      id: "two",
    },
    {
      name: "Mahogany Special Edition",
      minAmount: "200",
      perks:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      left: "0",
      id: "three",
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  const [selected, setselected] = useState("");

  const handleSelect = (name) => {
    setselected(name);
  };
  const handleMainSelect = (name) => {
    setselected(name);
    setShowModal(true);
  };
  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      {showModal && (
        <Modal
          data={data}
          handleSelect={handleSelect}
          handleModal={handleModal}
          selected={selected}
        />
      )}
      <main className="bg-neutral-lightGray font-commissioner">
        <MainCo handleMainSelect={handleMainSelect} />
      </main>
    </>
  );
};

export default App;
