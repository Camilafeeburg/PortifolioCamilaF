import "../css/Habilidades.css";
 
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
 
import { SiFigma } from "react-icons/si";
 
 
export default function Habilidades() {
 
  const habilidades = [
 
    {
      nome:"HTML",
      icon:<FaHtml5 />
    },
 
    {
      nome:"CSS",
      icon:<FaCss3Alt />
    },
 
    {
      nome:"JavaScript",
      icon:<FaJs />
    },
 
    {
      nome:"React",
      icon:<FaReact />
    },
 
    {
      nome:"Git",
      icon:<FaGitAlt />
    },
 
    {
      nome:"GitHub",
      icon:<FaGithub />
    },
 
    {
      nome:"Node.js",
      icon:<FaNodeJs />
    },
 
    {
      nome:"Figma",
      icon:<SiFigma />
    }
 
  ];
 
 
  return (
 
    <section 
      className="habilidades" 
      id="habilidades"
>
 
      <div className="titulo-section">
 
        <span>
          Minhas tecnologias
</span>
 
        <h2>
          Habilidades
</h2>
 
      </div>
 
 
      <div className="habilidades-grid">
 
 
        {habilidades.map((item,index)=>(
 
          <div 
            className="habilidade-card" 
            key={index}
>
 
            <div className="icone">
              {item.icon}
</div>
 
 
            <h3>
              {item.nome}
</h3>
 
 
          </div>
 
        ))}
 
 
      </div>
 
 
    </section>
 
  );
 
}