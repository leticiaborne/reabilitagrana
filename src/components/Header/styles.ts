import { IoMdMenu } from "react-icons/io";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 1300px;
  max-width: 1300px;
  height: 80px;
  padding: 0 1.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 305px;
    /* height: 60px; */
  }
`;

// Navigation

export const MobileMenuButton = styled(IoMdMenu)`
  display: none;
  color: ${(props) => props.theme.white};

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 820px) {
    display: flex;
  }
`;

interface MenuMobileProps {
  isOpen: boolean;
}

export const MenuArea = styled.div<MenuMobileProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  font-size: 14px;

  // Transforms the MenuArea parent div into a floating div for the mobile menu
  @media (max-width: 820px) {
    position: absolute;
    top: 80px;
    left: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;

    background-color: ${(props) => props.theme.primaryColor};
    opacity: 0.95;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  // This media makes the NavItems stay in a column in the mobile menu
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.a`
  color: ${(props) => props.theme.white};
  font-size: 1rem;

  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.7;
  }
`;
