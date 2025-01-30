import { Outlet, useNavigate } from "react-router-dom";
import HeaderUser from "../components/HeaderUser";
import HeaderProvider from "../components/HeaderProvider";
import { useAppStore } from "../store/useAppStore";
import { useEffect } from "react";


export default function AppLayout() {
    const { user, provider } = useAppStore();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('consulta de redireccion')
        if (user.cli_cedula === undefined && provider.prov_id === undefined) {
            // navigate('/')

        }
    }, [user, provider])
    return (
        <>
            <div className="complete--screen">
                {user !== undefined ? <HeaderUser /> : <HeaderProvider />}
                <Outlet />
                <footer className="footer">
                    <div className="footer__container">
                        <p className="footer__text">Todos los derechos Reservados</p>
                    </div>
                </footer>

            </div>
        </>
    );
}
