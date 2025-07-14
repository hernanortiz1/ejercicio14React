import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();
  // const logout = () => {
  //   setUsuarioAdmin(false);

  //   sessionStorage.removeItem("userKeyReceta");

  //   navegacion("/");
  // };

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
        setUsuarioAdmin(false);
        navigate("/");
      }
    });
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
              <Button
                as={NavLink}
                to="/login"
                variant="outline-primary"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
