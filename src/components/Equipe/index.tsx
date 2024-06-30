import {
  Card,
  Description,
  EquipeCards,
  EquipeContainer,
  EquipeContent,
  Name,
  ProfileImage,
} from "./styles";

import leticia from "../../assets/equipe/leticia.jpeg";
import amanda from "../../assets/equipe/amanda.jpeg";
import eloise from "../../assets/equipe/eloise.jpeg";

export const Equipe = () => {
  const pessoas = [
    {
      id: 1,
      name: "LETÍCIA GONÇALVES BORNE",
      image: leticia,
      description: "Estudante da 1ª fase de Administração",
    },
    {
      id: 2,
      name: "AMANDA BOITA DE MATOS",
      image: amanda,
      description: "Estudante da 1ª fase de Administração",
    },
    {
      id: 3,
      name: "ELOISE MAZZUCCO",
      image: eloise,
      description: "Estudante da 1ª fase de Administração",
    },
  ];

  return (
    <EquipeContainer>
      <EquipeContent
        id="sobre"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
      >
        <h1>EQUIPE</h1>

        <EquipeCards>
          {pessoas
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((pessoa) => (
              <Card key={pessoa.id}>
                <ProfileImage src={pessoa.image} />
                <Name>{pessoa.name}</Name>
                <Description>{pessoa.description}</Description>
              </Card>
            ))}
        </EquipeCards>
      </EquipeContent>
    </EquipeContainer>
  );
};
