import { Outlet } from "react-router-dom";
import HeaderLogin from "../components/HeaderLogin";


export default function AuthLayout() {

    return (
        <>
            <HeaderLogin />
            <Outlet />

        </>
    );
}
