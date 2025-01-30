import { Outlet } from "react-router-dom";
import HeaderUser from "../components/HeaderUser";
import HeaderProvider from "../components/HeaderProvider";
import { useAppStore } from "../store/useAppStore";


export default function AppLayout() {
    const { user } = useAppStore();
    return (
        <>
            {user !== undefined ? <HeaderUser /> : <HeaderProvider />}
            <Outlet />
            <footer className="footer">
                <div className="footer__container">
                    <p className="footer__text">Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    );
}
