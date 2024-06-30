import { motion } from "framer-motion";
import styled from "styled-components";

export const ContantoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.lightGray};
`;

export const ContatoContent = styled(motion.div)`
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

  h1 {
    font-size: 2rem;
    font-weight: bold;

    @media (max-width: 425px) {
      font-size: 1.75rem;
    }
  }

  p {
    margin-top: 10px;
    margin-bottom: 15px;

    color: ${(props) => props.theme.gray};
  }

  form {
    margin-top: 2rem;
  }

  input,
  textarea {
    font-family: inherit;
    font-size: inherit;

    width: 100%;
    border: none;
    height: 50px;
    margin-bottom: 25px;
    padding-left: 15px;
    outline: none;
    color: ${(props) => props.theme.black};
    -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
  }

  textarea {
    height: 150px;
    resize: none;
  }
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
