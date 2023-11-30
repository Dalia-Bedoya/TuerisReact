import "./OneSection.css";

function OneSection() {

    return (
        <>
        <div className="container">
        <div className="row">
            <div className="col-12">
                <header id="header">
                    <img src="img/logoo.png.png" className="logo-img mt-5" id="logo"/>
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><a className="text-decoration-none" href="#">Inicio</a></li>
                            <li><a className="text-decoration-none" href="#conocenos">Conócenos</a></li>
                            <li><a className="text-decoration-none" href="#personajes">Personajes</a></li>
                            <li><a className="text-decoration-none" href="#">Cómic</a></li>
                            <li><a className="text-decoration-none" href="#creador">Creadora</a></li>
                        </ul>
                    </nav>
                    <div className="menuHambur">
                        <img src="img/icon.png" width="100px"/>
                    </div>
                    <div id="menuOverlay" className="overlay">
                        <div className="menuHambur">
                            <img src="img/xx.png" width="40px"/>
                        </div>
                        <ul className="menuItems">
                            <li><a className="text-decoration-none" href="index.html">Inicio</a></li>
                            <li><a className="text-decoration-none" href="index.html">Conócenos</a></li>
                            <li><a className="text-decoration-none" href="index.html">Personajes</a></li>
                            <li><a className="text-decoration-none" href="#">Cómic</a></li>
                            <li><a className="text-decoration-none" href="index.html">Creador</a></li>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    </div>
    <button id="scrollup" className="hover"><i className="bi bi-arrow-up-short"></i></button>
    <script src="Inicio.js"></script>
        </>
    );
}

export default OneSection;