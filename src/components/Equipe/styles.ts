import { motion } from "framer-motion";
import styled from "styled-components";

export const EquipeContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.lightGray};
`;

export const EquipeContent = styled(motion.div)`
  width: 1300px;
  max-width: 1300px;
  padding: 5rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EquipeCards = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
`;

export const Card = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const Name = styled.span`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: bold;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.gray};
`;
