import {
  CausasContainer,
  CausasContent,
  LeftContent,
  RightContent,
} from "./styles";

// @ts-ignore
import causasImage from "../../assets/causasimage.png";

export const Causas = () => {
  return (
    <CausasContainer>
      <CausasContent
        id="causas"
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <LeftContent>
          <img src={causasImage} />
        </LeftContent>
        <RightContent>
          <h2>CAUSAS DO</h2>
          <h1>Endividamento</h1>
          <p>
            <strong>Empréstimos Consignados:</strong> Idosos frequentemente
            recorrem a empréstimos consignados devido às taxas de juros mais
            baixas. No entanto, o uso excessivo pode comprometer uma grande
            parte da aposentadoria.
          </p>
          <p>
            <strong>Despesas Médicas:</strong> Com o avanço da idade, as
            despesas médicas aumentam, podendo incluir medicamentos, tratamentos
            e cuidados especiais.
          </p>
          <p>
            <strong>Apoio Financeiro a Familiares:</strong> Muitos idosos ajudam
            financeiramente filhos e netos, o que pode sobrecarregar seu
            orçamento.
          </p>
          <p>
            <strong>Falta de Planejamento Financeiro:</strong> A ausência de um
            planejamento financeiro adequado pode levar ao endividamento,
            especialmente quando há gastos inesperados.
          </p>
        </RightContent>
      </CausasContent>
    </CausasContainer>
  );
};
