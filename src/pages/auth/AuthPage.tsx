import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import ResetPasswordForm from "./components/ResetPasswordForm";

const AuthPage = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/forgot-password" element={<ForgotPasswordForm />} />
            <Route path="/reset-password" element={<ResetPasswordForm />} />
        </Routes>
    );
};

export default AuthPage;
