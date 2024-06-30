import { motion } from "framer-motion";
import styled from "styled-components";

export const InformacoesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
`;

export const InformacoesContent = styled(motion.div)`
  width: 1300px;
  max-width: 1300px;
  padding: 5rem 1.25rem;

  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 3rem;
  justify-items: center;

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
    width: 100%;
    height: inherit;
    gap: 3rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  gap: 0.5rem;

  text-align: center;
`;
