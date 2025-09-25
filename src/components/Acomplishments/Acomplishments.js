import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "Bootcamp", text: "The Complete Web Development" },
  { number: "Bootcamp", text: "The Complete Python Pro" },
  { number: "Bootcamp", text: "Azure Databricks & Spark For DE" },
  { number: "Bootcamp", text: "Microsoft Azure: The Complete Guide" },
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
