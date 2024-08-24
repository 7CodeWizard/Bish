import React from "react";
import GettingCard from "../../components/GettingCard/GettingCard";
import InputSection from "../../components/InputSection/InputSection";
import "./style.css";
import { Container } from "@mui/system";
import Header from "../../components/layouts/Header/Header";

const CardData = [
  { title: "Tell us where your live" },
  { title: "We’ll send your home’s BISH! code by SMS" },
  { title: "Contract to your local team to get your exclusive BISH!" },
];

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="backgroundColor">
        <Container>
          <div className="App">
            <p className="getting_title">
              You're so close to getting your home's 2024 BISH! code.
            </p>
            <div className="gettingCard_container">
              {CardData.map((item, index) => (
                <GettingCard key={index} title={item.title} />
              ))}
            </div>
            <div className="getting_Bar">
              <p className="bartext1">
                Let's get started so we can get an expert to your door at your
                home's exclusive BISH! price.
              </p>
              <p className="bartext2">
                Please note. BISH! codes are only available in certain areas
              </p>
            </div>
            <InputSection />
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
