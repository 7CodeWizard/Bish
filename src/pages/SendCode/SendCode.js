import React from "react";
import Header from '../../components/layouts/Header/Header'
import Awesome from "../../components/Awesome/Awesome";
import EditNumber from "../../components/EditNumber/EditNumber";
import FaqSec from "../../components/FaqSec/FaqSec";

import "./style.css";

const SendCode = () => {
  return (
    <>
      <Header />
      <Awesome />
      <EditNumber />
      <FaqSec />
    </>
  );
};

export default SendCode;
