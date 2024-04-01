import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LoginPanel from "../../components/login-panel/LoginPanel";

const Login: React.FC = () => {
    return (
        <div className='App'>
            <Navbar />
            <div className='content-login'>
                <LoginPanel />
            </div>
        </div>
    )
} 

export default Login;