import "./css/App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}