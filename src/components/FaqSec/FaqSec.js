import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqSec = () => {
  return (
    <div className="faqContainer">
      <div className="faqWrapper">
        <div className="faqTitle">FAQ</div>
        <Accordion className="accordionBody">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"

          >
            <div className="faqAccTitle">What's a BISH! code?</div>
          </AccordionSummary>
          <AccordionDetails className="faqText">
            Every home has been allocated a BISH! code. A BISH! code is another
            name for a discount code. Get yours today to save BIG!
          </AccordionDetails>
        </Accordion>
        <hr />
        <Accordion className="accordionBody">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"

          >
            <div className="faqAccTitle">So my home has a BISH! code?</div>
          </AccordionSummary>
          <AccordionDetails className="faqText">
            Yes, that's right. Every home has a BISH! code waiting to be
            activated.
          </AccordionDetails>
        </Accordion>
        <hr />
        <Accordion className="accordionBody">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="faqAccTitle"
          >
            <div className="faqAccTitle">
              How do I get my home’s BISH! code?
            </div>

          </AccordionSummary>
          <AccordionDetails className="faqText">
            Just enter your postcode to get started. Please note that BISH!
            codes are only available in certain towns right now.
          </AccordionDetails>
        </Accordion>
        <hr />
      </div>
    </div>
  );
};

export default FaqSec;
