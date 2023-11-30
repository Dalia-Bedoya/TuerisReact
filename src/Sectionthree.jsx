import "./Sectionthree.css";

function Sectionthree(props) {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="text-center mt-5 fw-bold">{props.titulo}</h3>
                        <div className="d-flex justify-content-center mt-5 botun">
                            <img src="img/boton.png" alt="boton" className="toggle-button hover"  />
                        </div>
                        <div className="d-flex text-center justify-content-center">
                            <p className="parrafo mb-5 parro" id="texto1">
                            {props.text1}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="text-center mt-5 fw-bold">{props.titulo2}</h3>
                        <div className="d-flex justify-content-center mt-5 botun">
                            <img src="img/boton.png" alt="boton" className="toggle-button hover"  />
                        </div>
                        <div className="d-flex text-center justify-content-center">
                            <p className="parrafo mb-5 parro" id="texto2">
                            {props.text2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sectionthree;