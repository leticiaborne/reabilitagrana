import {
  DicasContainer,
  DicasContent,
  LeftContent,
  RightContent,
} from "./styles";

// @ts-ignore
import dicasImage from "../../assets/dicasimage.png";

export const Dicas = () => {
  return (
    <DicasContainer>
      <DicasContent
        id="dicas"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <LeftContent>
          <h2>DICAS PARA EVITAR O</h2>
          <h1>Endividamento</h1>
          <p>
            <strong>Planejamento Financeiro:</strong> Fazer um planejamento
            detalhado das despesas e receitas pode ajudar a evitar o
            endividamento.
          </p>
          <p>
            <strong>Educação Financeira:</strong> Buscar informações sobre
            gestão financeira pode ajudar a tomar decisões mais acertadas.
          </p>
          <p>
            <strong>Negociar Dívidas:</strong> Caso já esteja endividado,
            procurar negociar condições mais favoráveis com os credores.
          </p>
          <p>
            <strong>Orientação patrimonial:</strong> Proteja seu legado com
            nossos especialistas.
          </p>
        </LeftContent>
        <RightContent>
          <img src={dicasImage} />
        </RightContent>
      </DicasContent>
    </DicasContainer>
  );
};
