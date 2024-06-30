import styled from "styled-components";

export const FooterContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bgWhite};
`;

export const FooterContent = styled.div`
  width: 1300px;
  max-width: 1300px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5 rem;

  p {
    font-weight: bold;
    text-align: center;
  }

  img {
    margin-top: 5px;
    width: 100px;
  }
`;
