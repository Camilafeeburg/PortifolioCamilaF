import "../css/Hero.css";
import foto from "../assets/camila.png";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text">

        <span className="tag"> Olá, eu sou</span>

        <h1>
          Camila
        </h1>

        <h2>Desenvolvedora Front-end</h2>

        <p>
          Sou estudante de Desenvolvimento de Sistemas e apaixonada
          por criar interfaces modernas, responsivas e intuitivas
          utilizando HTML, CSS, JavaScript e React.
        </p>

        <div className="hero-buttons">

          <div><a href="#projetos" className="btn1">
            Ver Projetos
          </a></div>

          <div><a href="#contato" className="btn2">
            Contato
          </a></div>

        </div>

      </div>

      <div className="hero-image">
    <div className="circle">
        <img src={foto} alt="Camila" />
    </div>
        </div>

    </section>
  );
}