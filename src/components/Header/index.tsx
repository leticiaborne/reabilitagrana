import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  MenuArea,
  MobileMenuButton,
  NavItem,
  NavMenu,
} from "./styles";
import headerLogo from "../../assets/logo-header.png";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={headerLogo} alt="" />
        </HeaderLogo>

        <MobileMenuButton size={32} onClick={toggleMobileMenu} />

        <MenuArea isOpen={isMobileMenuOpen}>
          <NavMenu>
            <NavItem href="#inicio">ÍNICIO</NavItem>
            <NavItem href="#causas">CAUSAS</NavItem>
            <NavItem href="#dicas">DICAS</NavItem>
            <NavItem href="#sobre">SOBRE</NavItem>
            <NavItem href="#contato">CONTATO</NavItem>
          </NavMenu>
        </MenuArea>
      </HeaderContent>
    </HeaderContainer>
  );
};
