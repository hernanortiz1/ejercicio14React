import { Container } from "react-bootstrap";

const Footer = () => {
  return (
       <footer className="text-center bg-dark text-light py-4">
      <div>&copy; Todos los derechos reservados</div>
      <div>
        Desarrollado por{" "}
        <a
          href="https://github.com/hernanortiz1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light text-decoration-underline"
        >
          Hernán Ortiz
        </a>
      </div>
    </footer>
  );
};

export default Footer;
