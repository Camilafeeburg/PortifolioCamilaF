import "../css/Projetos.css";

export default function Projetos() {

  const projetos = [
    {
      titulo: "Écoleta",
      descricao:
        "Aplicativo para incentivar a coleta seletiva em Porto Alegre, permitindo consultar dias de coleta, localizar ecopontos, acompanhar o caminhão de lixo e receber recompensas pelo descarte correto.",
      tecnologias: "React Native • Firebase • Figma",
      github: "https://github.com/senacrs-emti/2025-2MA-cidadeconectada-G01.git",
    
    },

    {
      titulo: "Lorem Ipsum",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tecnologias: "Lorem • Ipsum • Dolor",
      github: "#",
      demo: "#",
    },

    {
      titulo: "Lorem Ipsum",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tecnologias: "Lorem • Ipsum • Dolor",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="projetos" id="projetos">

      <div className="titulo-section">
        <span>PORTFÓLIO</span>
        <h2>Meus Projetos</h2>
      </div>

      <div className="projetos-grid">

        {projetos.map((projeto, index) => (
          <div className="projeto-card" key={index}>

          <div className="projeto-img">
          </div>

            <div className="projeto-info">

              <h3>{projeto.titulo}</h3>

              <p>{projeto.descricao}</p>

              <small>{projeto.tecnologias}</small>

              <div className="projeto-links">

                <a href={projeto.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}