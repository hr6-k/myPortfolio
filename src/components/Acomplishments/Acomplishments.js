import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "Bootcamp", text: "Business Intelligence" },
  { number: "Bootcamp", text: "Data Science & Machine Learning" },
  { number: "Bootcamp", text: "Complete Data Science" },
  { number: "Bootcamp", text: "Web Development" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle style={{ marginTop: "40px" }}>Certificates</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
