import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/pages/Login";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import FormularioReceta from "./components/pages/recetas/FormularioReceta";
import CardReceta from "./components/pages/recetas/CardReceta";
import ItemReceta from "./components/pages/recetas/ItemReceta";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>

            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/administrador"
              element={<ProtectorAdmin></ProtectorAdmin>}
            >
              <Route index element={<Administrador></Administrador>}></Route>

              <Route
                path="crear"
                element={<FormularioReceta></FormularioReceta>}
              ></Route>
              <Route
                path="editar"
                element={<FormularioReceta></FormularioReceta>}
              ></Route>
            </Route>

            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
