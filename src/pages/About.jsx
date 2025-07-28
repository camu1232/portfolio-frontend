// import "./About.css";
// import camilaFoto from "../assets/camilaFoto.png"; 
// import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
// import { SiJavascript } from "react-icons/si"; 

// function About() {
//   return (
//     <section className="about-container">
//       <div className="about-header">

//       <div className="about-text">
//         <h2>Hola, <br />soy Camila!</h2>
//         <p>
//           Soy Camila Orts, una estudiante apasionada por la tecnología y el diseño web.
//           Actualmente estoy aprendiendo Node y React, y desarrollo proyectos para mejorar mis habilidades. Me gusta trabajar en equipo, soy curiosa y
//           me esfuerzo por seguir aprendiendo cada día. Busco oportunidades para crecer profesionalmente
//           y aplicar lo que sé en proyectos reales.
//         </p>
//       </div>

//       <div className="about-image-container">
//         <img src={camilaFoto} alt="Camila Orts" className="about-image" />
//         <span className="tag top-left">Argentina</span>
//         <span className="tag bottom-right">21/04/2008</span>
//         <div className="contact-box">
//           <h4>Contacto</h4>
//           <p>camilaorts33@gmail.com</p>
//         </div>
//       </div>
//       </div>

//       <div className="skills-section">
//         <h2>Mis habilidades</h2>
//         <p>Estas son algunas de las tecnologías y competencias que estoy aprendiendo:</p>
//               <ul className="skills-list">
//                <li><FaHtml5 color="#e44d26" /> HTML</li>
//                <li><FaCss3Alt color="#264de4" /> CSS</li>
//                <li><FaReact color="#61dafb" /> React</li>
//                <li><SiJavascript color="#f7df1e" /> Lógica de programación</li>
//                <li><FaGithub color="#000" /> Git y GitHub</li>
//                <li><FaNodeJs color="#3C873A" /> Node.js</li>
               
//              </ul>
//       </div>
//    </section>
//  );
// }



// export default About;

import "./About.css";
import camilaFoto from "../assets/camilaFoto.png"; 
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si"; 

function About() {
  return (
    <section className="about-container">
      
      <div className="about-header">
        <div className="about-text fade-in-up">
          <h2>Hola, <br />me presento!</h2>
          <p>
            Soy Camila Orts, una estudiante apasionada por la tecnología y el diseño web.
            Actualmente estoy aprendiendo Node y React, y desarrollo proyectos para mejorar mis habilidades. 
            Me gusta trabajar en equipo, soy curiosa y me esfuerzo por seguir aprendiendo cada día. 
            Busco oportunidades para crecer profesionalmente y aplicar lo que sé en proyectos reales.
          </p>
        </div>

        <div className="about-image-container">
          <img src={camilaFoto} alt="Camila Orts" className="about-image" />
          <span className="tag top-left">Argentina</span>
          <span className="tag bottom-right">21/04/2008</span>
          <div className="contact-box">
            <h4>Contacto</h4>
            <p>camilaorts33@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2>Mis habilidades</h2>
        <p>Estas son algunas de las tecnologías y competencias que estoy aprendiendo:</p>
        <ul className="skills-list">
          <li><FaHtml5 color="#e44d26" /> HTML</li>
          <li><FaCss3Alt color="#264de4" /> CSS</li>
          <li><FaReact color="#61dafb" /> React</li>
          <li><SiJavascript color="#f7df1e" /> Lógica de programación</li>
          <li><FaGithub color="#000" /> Git y GitHub</li>
          <li><FaNodeJs color="#3C873A" /> Node.js</li>
        </ul>
      </div>
      
    </section>
  );
}

export default About;
