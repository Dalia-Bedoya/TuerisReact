import "./Sectiontwo.css";

function Sectiontwo(props) {

    return (
        <>
            <section className="seccionDos" id="conocenos">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="p-5">
                                <div className="contenedor d-flex flex-column mb-3 align-items-center">
                                    <h3 className="fw-bold mb-4">{props.texto}</h3>
                                    <div>
                                        <img className="happy hover" src="img/felices.png" alt="felices" />
                                    </div>
                                    <div className="text-2 text-center mt-4">
                                        <p>{props.texto2}</p>
                                        <p>{props.texto3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sectiontwo;