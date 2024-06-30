import {
  Buttons,
  HeroContainer,
  HeroContent,
  LeftContent,
  RightContent,
} from "./styles";

// @ts-ignore
import heroImage from "../../assets/heroimage.png";

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent id="inicio">
        <LeftContent
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <h1>ENDIVIDAMENTO FAMILIAR DE IDOSOS</h1>
          <p>
            O endividamento entre idosos tem se tornado uma questão preocupante
            no Brasil. Muitos aposentados e pensionistas enfrentam dificuldades
            financeiras devido a diversos fatores, como empréstimos consignados,
            despesas médicas e apoio financeiro a familiares.
          </p>
          <Buttons>
            <a href="#contato">
              <button>CONTATO</button>
            </a>
            <a href="#sobre">
              <button className="btn2">SOBRE</button>
            </a>
          </Buttons>
        </LeftContent>
        <RightContent
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src={heroImage} />
        </RightContent>
      </HeroContent>
    </HeroContainer>
  );
};
