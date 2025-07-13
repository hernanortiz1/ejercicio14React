import error from "../../assets/robot_1984274.png";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

const Error404 = () => {
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate("/");
  };

  return (
    <section className="mainSection text-center">
      <img src={error} alt="error 404" />
      <div>
        <Button className="btn btn-success mt-3" onClick={handleVolver}>
          Volver al inicio
        </Button>
      </div>
    </section>
  );
};

export default Error404;
