import error from "../../assets/robot_1984274.png";

const Error404 = () => {
    return (
         <section className="mainSection text-center">
              <img src={error} alt="error 404" />
              <div>
                <button className="btn btn-success" >Volver al inicio</button>
              </div>
            </section>
    );
};

export default Error404;