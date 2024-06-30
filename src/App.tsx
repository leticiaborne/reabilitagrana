import { ThemeProvider } from "styled-components";
import { Causas } from "./components/Causas";
import { Contato } from "./components/Contato";
import { Dicas } from "./components/Dicas";
import { Equipe } from "./components/Equipe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Informacoes } from "./components/Informacoes";
import { Sobre } from "./components/Sobre";
import { GlobalStyle } from "./styles/global";
import { defautTheme } from "./styles/themes/default";

const App = () => {
  return (
    <ThemeProvider theme={defautTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Causas />
      <Dicas />
      <Equipe />
      <Sobre />
      <Contato />
      <Informacoes />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
