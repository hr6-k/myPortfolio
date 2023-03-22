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
        Senior Data Scientist & JavaScript Developer
        <br />
        <br />
        I'm working currently as a Senior Data Scientist for Mercedes-Benz Group
        AG. Graduated from Karlsruhe Institute of Technology (KIT). Formerly, I
        worked also for Peugeot and Renault Trucks.
      </SectionText>
      <Button
        onClick={() =>
          (window.location.href = "mailto:hani.rezazadeh@hotmail.com")
        }
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
