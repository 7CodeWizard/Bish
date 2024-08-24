import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
import PhoneIcon from "@mui/icons-material/Phone";
import "../../pages/SendCode/style.css";
import { mouse } from "../../constant";

const EditNumber = () => {
  return (
    <div className="eNumberCon">
      <div className="eNumberWra">
        <div className="eNumLefSec">
          <div className="NumTopWrap">
            <p className="NumleftText">
              We'll send your home's BISH! code by SMS. Your number is.
            </p>
            <p className="NumLeftNum">
              0784665434
              <br />
              Edit number
            </p>
          </div>
          <button className="sendBish">Send BISH! code</button>
        </div>
        <div className="eNumRigSec">
          <p className="eNumRigText">What next?</p>
          <div className="nextCon">
            <SmsIcon style={{ color: "#FB2A63", fontSize: "33px" }} />
            <div className="nextText">
              We'll send your home's BISH!
              <br /> code by text
            </div>
          </div>
          <div className="nextCon">
            <PhoneIcon style={{ color: "#FB2A63", fontSize: "33px" }} />
            <div className="nextText">
              Call your local BISH! team to find
              <br /> out your exclusive BISH! price.
              <br />
              Or keep the code safe until you
              <br />
              need a tradesperson
            </div>
          </div>
          <div className="nextCon">
            <img src={mouse} alt="mouse" style={{ width: "33px" }} />
            <div className="nextText">
              We'll send your home's BISH!
              <br /> code by text
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNumber;
