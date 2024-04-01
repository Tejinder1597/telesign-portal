import React from "react";
import Navbar from "../../components/navbar/Navbar";
import './Signup.css';
import SignupPanel from "../../components/signup-panel/SignupPanel";


const Signup: React.FC = () => {
    return (
        <div className="signup-page">
            <Navbar />
            <div className="content-signup">
                <SignupPanel/>
            </div>
        </div>
    );
}


export default Signup;