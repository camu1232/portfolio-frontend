import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Camila Orts. Todos los derechos reservados.</p>
      <div className="redes">
        <a
          href="https://github.com/camu1232"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        {" | "}
        <a
          href="https://instagram.com/camiiorts"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
      </div>

      <p>Contacto: camilaorts33@gmail.com</p>
      <p>“Diseñado y desarrollado por Camila Orts.”</p>
      <p><a href="#top">Volver arriba</a></p>
    </footer>
  );
}

export default Footer;
