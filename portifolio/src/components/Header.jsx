import "../css/Header.css";

export default function Header() {
    return(
        <header className="header">

            <h1 className="logo">
                Camila<span>.</span>
            </h1>

            <nav>

                <a href="#home">Home</a>
                <a href="#about">Sobre</a>
                <a href="#skills">Habilidades</a>
                <a href="#projects">Projetos</a>
                <a href="#contact">Contato</a>

            </nav>

            <button>
                Fale comigo
            </button>

        </header>
    )
}