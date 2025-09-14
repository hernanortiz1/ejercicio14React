import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useState } from "react";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const logout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Estás seguro de que deseas cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("userKeyReceta");
        setUsuarioAdmin({});
        navigate("/");
      }
    });
    setExpanded(false); 
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <h2>Recetas</h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              className="nav-link"
              to={"/"}
              onClick={() => setExpanded(false)}
            >
              Inicio
            </NavLink>

            {usuarioAdmin.token ? (
              <>
                <NavLink
                  className="nav-link"
                  to={"/administrador"}
                  onClick={() => setExpanded(false)}
                >
                  Administrador
                </NavLink>
                <Button
                  className="nav-link"
                  variant="outline-danger"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="alineacionNavbar">
              <NavLink
                className="nav-link"
                to={"/login"}
                onClick={() => setExpanded(false)}
              >
                Login
              </NavLink>
              <NavLink
                className="nav-link"
                to={"/registro"}
                onClick={() => setExpanded(false)}
              >
                Registrarme
              </NavLink>
              </div>
              
                
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
