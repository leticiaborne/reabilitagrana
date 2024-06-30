import {
  SobreContainer,
  SobreContent,
  LeftContent,
  RightContent,
} from "./styles";

// @ts-ignore
import logoImage from "../../assets/logo.png";

export const Sobre = () => {
  return (
    <SobreContainer>
      <SobreContent>
        <LeftContent
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoImage} />
        </LeftContent>
        <RightContent
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Sobre Nós</h1>
          <p>
            Bem-vindo ao Projeto Apex, uma iniciativa da Unoesc no curso de
            Administração da 1ª fase. Nosso objetivo é promover a educação
            financeira e o bem-estar econômico dos idosos, abordando o
            endividamento e oferecendo orientação para uma gestão financeira
            saudável.
          </p>
          <p>
            <strong>Nossa Missão:</strong> Empoderar idosos com conhecimento
            financeiro, ajudando-os a tomar decisões informadas e seguras sobre
            suas finanças pessoais.
          </p>
          <h5>
            <strong>Nossos Objetivos</strong>
          </h5>
          <p>
            <strong>Educação e Orientação:</strong> Desenvolver materiais
            educativos sobre endividamento, renegociação de dívidas e
            investimentos.
          </p>
          <p>
            <strong>Engajamento Comunitário:</strong> Compartilhar conteúdo nas
            redes sociais do curso e em rádios locais em Campos Novos e região.
          </p>
          <p>
            <strong>Apoio Financeiro:</strong> Oferecer consultoria financeira
            especializada para ajudar idosos a organizar suas finanças.
          </p>
        </RightContent>
      </SobreContent>
    </SobreContainer>
  );
};
