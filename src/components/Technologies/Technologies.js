import React from "react";
import { DiFirebase, DiNodejs, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle style={{ marginTop: "70px" }}>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies.
      <br />
      From Data Engineering & AI to Back-end & Design
    </SectionText>

    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Data Engineering</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Python, SQL & Databricks
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Node.js & Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
