import "./css/App.css";
import "./css/Home.css";
import "./css/Header.css";
import "./css/Footer.css";
import Header from "./components/Header";
import Home from "./components/Home";

import Footer from "./components/Footer";
import Contato from "./components/Contato";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Contato />
      <Footer />
    </>
  );
}