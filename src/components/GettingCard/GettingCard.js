import React from "react";
import "../../pages/SignUp/style.css";
import { check } from "../../constant";

const GettingCard = (props) => {
  return (
    <div className="card_wrapper">
      <img className="card_check" alt="check" src={check} /> &nbsp; &nbsp;
      <p className="card_title">{props.title}</p>
    </div>
  );
};

export default GettingCard;
