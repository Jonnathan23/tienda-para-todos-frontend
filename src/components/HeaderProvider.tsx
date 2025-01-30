import { Link } from "react-router-dom";

export default function HeaderProvider() {
    return (
        <>
            <header className="header">
                <div className="cont--h">
                    <div className="cont--header">
                        <div className="title">
                            <a href="index.html">
                                <h1>Tienda Para Todos</h1>
                            </a>
                        </div>
                        <nav className={''}>
                            <Link to={'auth/login'} className="nav__a">Cerrar Sesion</Link>                            
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
