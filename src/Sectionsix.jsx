import "./Sectionsix.css";

function Sectionsix(props) {
    return (
        <>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <div className="foo">
                                    <div className="logofooter">
                                    <a href="#header"><img src="img/Nombretueris.png" alt="logofooter"/></a>
                                    </div>
                                    <div className="align-items-center">
                                        <div className="redes">
                                            <div className="red">
                                            <a href="https://instagram.com/tueris_oficial?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                                    <img className="hover" src="img/redes-01.png" alt="insta"/></a>
                                    <p className="desapred">{props.redes1}</p>
                                            </div>
                                            <div className="red">
                                            <img className="hover" src="img/redes-02.png" alt="gmail"/>
                                    <p className="desapred">{props.redes2}</p>
                                            </div>
                                        </div>
                                    </div>                                  
                                </div>
                                <p className="autor d-flex justify-content-center mt-5">{props.creditos}</p>
                            </div>
                       </div>
                   </div>
                   <button id="scrollup" className="hover"><i className="bi bi-arrow-up-short"></i></button>
                   <script src="Inicio.js"></script>
        </>
    )
}

export default Sectionsix