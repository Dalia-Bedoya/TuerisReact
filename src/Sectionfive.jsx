import "./Sectionfive.css";

function Sectionfive(props) {
    return (
        <>
                <div className="seccionCinco p-5" id="creador">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="dalia">
                                    <h3 className="text-center fw-bold">{props.creadora}</h3>
                                    <br />
                                    <div className="d-flex justify-content-center">
                                    <img className="hover" src="img/dalia.png" alt="dalia"/>
                                    </div>
                                    <h2 className="text-center fs-4 fw-bold mt-3">{props.nombre}</h2>
                                    <div className="d-flex justify-content-center">
                                        <div className="datos bg-light d-flex flex-column p-2 mt-3 rounded-4 text-center correo">
                                            <p>{props.redes1}</p>
                                            <p>{props.redes2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-3">
                            <div className="bg-light p-5 rounded-5 text-center">
                                <p>{props.text1}</p>
                            </div>
                            <div className="bg-light p-5 rounded-5 text-center mt-4">
                            <p>{props.text2}</p>
                            </div>
                            </div>
                       </div>
                   </div>
                </div>
                <button id="scrollup" className="hover"><i className="bi bi-arrow-up-short"></i></button>
                <script src="Inicio.js"></script>
        </>
    )
}

export default Sectionfive