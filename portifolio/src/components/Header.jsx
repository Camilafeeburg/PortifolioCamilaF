import "../css/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <span></span>
      </h1>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>

      <button className="btn-contato">
        Fale comigo
      </button>
    </header>
  );
}