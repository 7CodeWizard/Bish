import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const InputSection = () => {
  return (
    <div className="inputsection_container">
      <div className="inputheader">
        <div className="header_title">You told us you live at</div>
        <p className="liveInfo">
          15, smith street London <br />
          W2 4EB
        </p>
      </div>
      <div className="inputbody">
        <div className="inputleft">
          <div className="inputWrapper">
            <label className="inputlabel">Select a town</label>
            <br />
            <input className="leftInput" />
          </div>
          <div className="inputWrapper" style={{ position: "relative" }}>
            <label className="inputlabel">Postcode</label>
            <br />
            <input className="leftInput" placeholder="Enter your postcode" />
            <LocationOnOutlinedIcon
              style={{
                color: "#FB2A63",
                position: "absolute",
                top: "50px",
                left: "5px",
              }}
            />
          </div>
          <button className="findAddBtn">Find Address</button>
          <br />
          <div className="inputWrapper" style={{ position: "relative" }}>
            <input placeholder="Select Address" className="leftInput" />
            <LocationOnOutlinedIcon
              style={{
                color: "#FB2A63",
                position: "absolute",
                top: "20px",
                left: "5px",
              }}
            />
          </div>
        </div>
        <div className="inputheader1">
          <div className="header_title">You told us you live at</div>
          <p className="liveInfo">
            15, smith street London <br />
            W2 4EB
          </p>
        </div>
        <div className="inputright">
          <div className="inputWrapper" style={{ position: "relative" }}>
            <label className="inputlabel">First name</label>
            <br />
            <input className="rightInput" />
            <Person2Icon
              style={{
                color: "#A0A0A0",
                position: "absolute",
                left: "5px",
                bottom: "10px",
              }}
            />
          </div>
          <div className="inputWrapper">
            <label className="inputlabel">Last name</label>
            <br />
            <input className="rightInput" />
          </div>
          <div className="inputWrapper" style={{ position: "relative" }}>
            <label className="inputlabel">Email</label>
            <br />
            <input className="rightInput" />
            <EmailIcon
              style={{
                color: "#A0A0A0",
                position: "absolute",
                left: "5px",
                bottom: "10px",
              }}
            />
          </div>
          <div className="inputWrapper" style={{ position: "relative" }}>
            <label className="inputlabel">Mobile phone</label>
            <br />
            <input className="rightInput" />
            <PhoneIcon
              style={{
                color: "#A0A0A0",
                position: "absolute",
                left: "5px",
                bottom: "10px",
              }}
            />
          </div>
          <button className="checkBish">
            Check if BISH! codes are availabe
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
