import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle style={{ marginTop: "90px" }}>
        I'm Hani <br />a programmer
      </SectionTitle>
      <SectionText>
        Senior Software Developer
        <br />
        {/* <span style={{ fontSize: "16px" }}> */}
          {/* Full Ownership from Architecture to Deployment */}
        <br />
        {/* <br /> */}
        Ex-Mercedes-Benz, Peugeot, and Renault Trucks. KIT graduate.
        <br />
        I help companies build scalable, production-ready software solutions.
        {/* </span> */}
      </SectionText>
      {/* <Button
        onClick={() =>
          (window.location.href = "mailto:hani.rezazadeh@hotmail.com")
        }
      >
        Contact Me
      </Button> */}
      <a href="mailto:hani.rezazadeh@hotmail.com">
        <Button>Contact Me</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
