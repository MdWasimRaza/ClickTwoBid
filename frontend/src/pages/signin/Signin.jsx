import "./Signin.css"
import Logo from "../../components/logo/Logo"
import { useRef } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function () {

    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleOnClick = async (event) => {
        event.preventDefault();


        const newPost = {
            username: username.current.value,
            password: password.current.value,
        }
        try {
            const loggedInUser = await axios.post("/api/users/signin", newPost)
            if (loggedInUser.data === "Sucessfully Login") {
                navigate("/profile")
            } else {
                alert("Signin Failed")
                navigate("/signin")
            }
        } catch (err) {
            console.log(err)
        }
        event.target.reset();
    }

    return (
        <div className="signin">
            <div className="signinLeft">
                <div className="signinUpper">
                    <Logo />
                    <h4 className="signinHeading">Welcome to Click2Bid!</h4>
                    <h4 className="signinHeading2">Please enter your details to login to your account</h4>
                </div>

                <div className="signinLower">
                    <form onSubmit={handleOnClick}>
                        <label className="labelForInput" htmlFor="username">Username </label>
                        <br />
                        <input className="formInputEle" type="text" placeholder="Enter username" ref={username} id="username" name="username" required />
                        <br />

                        <label className="labelForInput" htmlFor="password">Password </label>
                        <br />
                        <input className="formInputEle" type="password" placeholder="Enter your password" ref={password} id="password" name="password" required />
                        <br />


                        <div className="forgotPassword">
                            <div className="forgotBtnText">
                                <span>Forgot Password ?</span>
                            </div>
                        </div>

                        <button className="signupBtn">SIGN IN</button>
                    </form>
                </div>
                <div className="noAccount">
                    <h5 className="noAccHeading">Don't have cccount?</h5>

                    <Link to={"/signup"} style={{ textDecoration: "none" }}>
                        <h5 className="noAccSignup">Sign up</h5>
                    </Link>
                </div>
            </div>
            <div className="singinRight">
                <div className="rightImgBox">
                    <img className="rightImg" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755714549/Click2Bid/nsonuujxgqym1kczi9jf.png" alt="" />
                </div>
            </div>
        </div>
    )
}