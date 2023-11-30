import "./Sectionfour.css";

function Sectionfour(props) { 
    return (
    <>
    <div className="seccionCuatro" id="personajes">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center gg">
                                <img src="img/tueris.png" className="d-block madre" alt="madre"/>
                                </div>
                                <br />
                                <br />
                                <br />
                                <div className="carousel-caption d-md-block">
                                    <h5 className="fw-bold fs-3">{props.luisa}</h5>
                                    <p>{props.principal}</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center gg">
                                <img src="img/silencio.png" className="d-block madre" alt="madre"/>
                                </div>
                            <br />
                            <br />
                            <br />
                            <div className="carousel-caption d-md-block">
                                    <h5 className="fw-bold fs-3">{props.silenciador}</h5>
                                    <p>{props.principal}</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center gg">
                                <img src="img/madre.png" className="d-block madre" alt="madre"/>
                                </div>
                            <br />
                            <br />
                            <br />
                            <div className="carousel-caption d-md-block">
                                    <h5 className="fw-bold fs-3">{props.madre}</h5>
                                    <p>{props.secundario}</p>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Sectionfour