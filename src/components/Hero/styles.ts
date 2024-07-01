import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bgWhite};
`;
export const HeroContent = styled.div`
  width: 1300px;
  max-width: 1300px;
  padding: 5rem 1.25rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    height: inherit;
    gap: 3rem;
  }
`;

export const LeftContent = styled(motion.div)`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  p {
    width: 80%;
    text-align: start;
    font-size: 1.2rem;
    margin: 25px 0;

    color: ${(props) => props.theme.gray};

    @media (max-width: 500px) {
      width: 100%;
      margin: 10px 0;
      font-size: 1rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    border: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 12px 55px;
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    font-weight: bold;
    border: ${(props) => props.theme.secondaryColor};
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .btn2 {
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

export const RightContent = styled(motion.div)`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
  }

  img {
    border-radius: 30%;
  }
`;
