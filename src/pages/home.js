import React from "react";
import './home.css';
import {CgExport, CgAddR} from "react-icons/cg";
import {TbDotsVertical} from "react-icons/tb";

const Home = () => {
  return (
    <>
      <div className="background">
        <h1>D-STRESS</h1>
        <div className="instructionDiv">
          <p>To install on iOS, tap <CgExport /> then Add to Home Screen <CgAddR /></p>
          <p>To install on Adroid, tap <TbDotsVertical /> then Add to Home Screen</p>
        </div>
        <h3>tap any page to begin</h3>
      </div>
    </>
  );
};
  
export default Home;