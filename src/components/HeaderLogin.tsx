import { Link } from "react-router-dom";

export default function HeaderLogin() {
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
                        <nav className="cont__nav__a">
                            <Link to={'/auth/login/user'} className="nav__a" >Login User</Link>
                            <Link to={'/auth/register/user'} className="nav__a"  >SignUp User</Link>
                            <Link to={'/auth/login/provider'} className="nav__a"  >Login Provider</Link>
                            <Link to={'/auth/register/provider'} className="nav__a"  >SignUp Provider</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
