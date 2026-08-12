import "../css/Header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="logo">
      
      </div>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>

      <a href="#contato" className="btn-header">
        Fale comigo
      </a>

    </header>
  );
}