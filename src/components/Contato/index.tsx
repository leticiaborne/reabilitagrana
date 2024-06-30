import {
  ContantoContainer,
  ContatoContent,
  LeftContent,
  RightContent,
} from "./styles";

// @ts-ignore
import dicasImage from "../../assets/dicasimage.png";

export const Contato = () => {
  return (
    <ContantoContainer>
      <ContatoContent
        id="contato"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <LeftContent>
          <h1>ENTRE EM CONTATO</h1>
          Estamos aqui para ajudar. Se você ou alguém que conhece enfrenta
          dificuldades financeiras, entre em contato conosco para orientação e
          suporte.
          <form>
            <input type="text" placeholder="Entre em contato" />
            <input type="text" placeholder="Número do telefone" />
            <input type="text" placeholder="E-mail" />
            <textarea placeholder="Mensagem" />
            <button>Enviar</button>
          </form>
        </LeftContent>
        <RightContent>
          <img src={dicasImage} />
        </RightContent>
      </ContatoContent>
    </ContantoContainer>
  );
};
