import React from "react";
import { FooterContainer, FooterContent } from "./styles";

// @ts-ignore
import logoUnoesc from "../../assets/unoesc-logo.png";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>Trabalho acadêmico desenvolvido para Unoesc.</p>
        <img src={logoUnoesc} />
      </FooterContent>
    </FooterContainer>
  );
};
