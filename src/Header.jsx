import "./Header.css";

function Header(props) {
    return (
        <>
                <div className="main mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 ">
                                <div className="mt-5 p-5 lio d-flex align-items-center justify-content-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="mx-5">
                                            <p className="fs-5 d-flex justify-content-center text-center four">{props.texto}</p>
                                            <h3 className="fw-bold text-center">{props.texto2}</h3>
                                            <br />
                                            <div className="d-flex justify-content-center align-items-center">
                                            <ul>
                                                <li><a className="btn-com text-center text-decoration-none fs-5 rounded-pill py-2 px-5 fw-bold"
                                                    href="#">{props.boton}</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="portada hover" src="img/portada.png" alt="portada" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Header