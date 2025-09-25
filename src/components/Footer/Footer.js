import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaXing } from "react-icons/fa";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call Me</LinkTitle>
          <LinkItem href="tel:004917672188033">+4917672188033</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email Me</LinkTitle>
          <LinkItem href="mailto:hani.rezazadeh@hotmail.com">
            hani.rezazadeh@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            There is nothing impossible to they who will try. - Alexander The
            Great
          </Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/hr6-k">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/hani-r-a9a026262/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.xing.com/profile/Hani_Re">
            <FaXing size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
