import "../css/Sobre.css";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">

      <div className="sobre-texto">

        <span className="titulo-pequeno">
          Conheça um pouco
        </span>

        <h2>
          Sobre mim
        </h2>

        <p>
          Sou Camila, estudante de Desenvolvimento de Sistemas e
          apaixonada por tecnologia e criação de interfaces.

          Meu foco é desenvolver aplicações web modernas, com
          boas experiências para os usuários, utilizando
          HTML, CSS, JavaScript e React.
        </p>

        <p>
          Estou sempre buscando aprender novas tecnologias e
          evoluir minhas habilidades como desenvolvedora.
        </p>

      </div>


      <div className="sobre-cards">

        <div className="info-card">
          <h3>2+</h3>
          <span>Projetos</span>
        </div>


        <div className="info-card">
          <h3>2+</h3>
          <span>Ano estudando</span>
        </div>


        <div className="info-card">
          <h3>5+</h3>
          <span>Tecnologias</span>
        </div>

      </div>


    </section>
  );
}