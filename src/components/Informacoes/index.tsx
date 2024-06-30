import { Info, InformacoesContainer, InformacoesContent } from "./styles";
import { FaEnvelope, FaMapMarked, FaPhone } from "react-icons/fa";

export const Informacoes = () => {
  return (
    <InformacoesContainer>
      <InformacoesContent
        id="dicas"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Info>
          <FaPhone size={22} />
          <p>+55 (49) 98870-7070</p>
        </Info>
        <Info>
          <FaEnvelope size={22} />
          <p>contato@reabilitagrana.com.br</p>
        </Info>
        <Info>
          <FaMapMarked size={22} />
          <p>Praça Entre Rios, distrito do Trinta, Celeiro Catarinense</p>
        </Info>
      </InformacoesContent>
    </InformacoesContainer>
  );
};
