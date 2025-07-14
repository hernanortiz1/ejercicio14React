import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();
  const logout = () => {
    setUsuarioAdmin(false);

    sessionStorage.removeItem("userKeyReceta");

    navegacion("/");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <h2>Recetas</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            {usuarioAdmin ? (
              <>
                {/* si el usuario es admin renderiza el componente admin y un btn logout */}
                <NavLink className="nav-link" to={"/administrador"}>
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
              <NavLink className="nav-link" to={"/login"}>
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
