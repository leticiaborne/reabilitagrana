import { motion } from "framer-motion";
import styled from "styled-components";

export const DicasContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bgWhite};
`;

export const DicasContent = styled(motion.div)`
  width: 1300px;
  max-width: 1300px;
  padding: 5rem 1.25rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
    width: 100%;
    height: inherit;
    gap: 3rem;
  }
`;

export const LeftContent = styled.main`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 425px) {
    width: 100%;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;

    @media (max-width: 425px) {
      font-size: 1.75rem;
    }
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  p {
    margin-top: 10px;
    margin-bottom: 15px;

    color: ${(props) => props.theme.gray};
  }
`;

export const RightContent = styled.main`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    width: 100%;
  }

  img {
    border-radius: 30%;
  }
`;
