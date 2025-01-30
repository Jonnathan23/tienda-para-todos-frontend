import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import AuthLayout from "./Layouts/AuthLayout";
import LoginUser from "./pages/auth/Login/LoginUser";
import LoginProvider from "./pages/auth/Login/LoginProvider";
import SignUpProvider from "./pages/auth/SignUp/SignUpProvider";
import SignUpUser from "./pages/auth/SignUp/SignUpUser";
import StoreProducts from "./pages/StoreProducts";
import ProviderPage from "./pages/ProviderPage";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/store" element={<StoreProducts />} />
                    <Route path="/provider" element={<ProviderPage />} />
                </Route>

                <Route path="/" element={<AuthLayout />} >
                    <Route path="auth/login/provider" element={<LoginProvider />} />
                    <Route path="auth/login/user" element={<LoginUser />} index />
                    <Route path="auth/register/provider" element={<SignUpProvider />} />
                    <Route path="auth/register/user" element={< SignUpUser />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
