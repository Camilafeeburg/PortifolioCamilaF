import "../css/Contato.css";

export default function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="titulo-section">
        <span>CONTATO</span>
      
      </div>

      <div className="contato-card">

        <div className="contato-info">
          <p> camiladealencarfeeburg@gmail.com</p>
          <p> (51) 99999-9999</p>
          <p>📍 Porto Alegre - RS</p>
        </div>

        <div className="contato-links">
          <a
            href="https://github.com/Camilafeeburg"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/camila-de-alencar-feeburg-35389837b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}