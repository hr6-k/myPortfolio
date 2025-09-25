import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillBulb, AiFillLinkedin } from "react-icons/ai";
import { FaXing } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "centter",
            color: "white",
            marginTop: "5.9px",
          }}
        >
          <DiCssdeck size="3rem" />{" "}
          <Span>
            Hani<sup>s</sup> Portfolio
          </Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink>
            Hobby Projects
            </NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech" passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/hr6-k">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/hani-r-a9a026262/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.xing.com/profile/Hani_Re">
        <FaXing size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
