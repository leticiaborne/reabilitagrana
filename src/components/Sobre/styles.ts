import { motion } from "framer-motion";
import styled from "styled-components";

export const SobreContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bgWhite};
`;
export const SobreContent = styled.div`
  width: 1300px;
  max-width: 1300px;
  padding: 5rem 1.25rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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
  padding: 0 2rem; // para melhorar efeito do motion

  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    order: 1;
  }

  img {
    width: 100%;
    border-radius: 10%;
  }
`;

export const RightContent = styled(motion.div)`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.5rem;

  @media (max-width: 500px) {
    margin-left: 0;

    width: 100%;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  h5 {
    font-size: 1.25rem;
  }

  p {
    margin-top: 10px;
    margin-bottom: 15px;

    color: ${(props) => props.theme.gray};
  }
`;
