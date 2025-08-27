import "./Signup.css"
import { useEffect, useState, useRef } from "react";
import Logo from "../../components/logo/Logo";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function () {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const BASE_URL = "https://clicktwobid.onrender.com"


    // for handling default characteristic of form submition
    let handleSubmit = async (event) => {
        event.preventDefault();

        if (password.current.value !== passwordAgain.current.value) {
            passwordAgain.current.setCustomValidity("Password don't match");
        } else {
            //console.log(formData)

            const newPost = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }

            try {
                //await axios.post(`${BASE_URL}/api/users/signup`, newPost)
                await axios.post(`${BASE_URL}/api/users/signup`, newPost)
                navigate("/signin")
            } catch (err) {
                console.log(err)
            }
            event.target.reset();
        }
    }

    return (
        <div className="signupPage">
            <div className="signupLeft">
                <div className="signupLeftUpper">
                    <Logo />
                    <h4 className="signupHeading">Create Your Account</h4>
                    {/*<h4 className="signupToWebsite">Signup to the website</h4> */}
                </div>

                <div className="signupLeftDown">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">

                        <label className="labelForInput" htmlFor="username">Username </label>
                        <br />
                        <input className="formInputEle" type="text" placeholder="Set username" ref={username} id="username" name="username" />
                        <br />

                        <label className="labelForInput" htmlFor="email">Email</label>
                        <br />
                        <input className="formInputEle" ref={email} type="text" placeholder="Enter your email " id="email" name="email" />
                        <br />

                        <label className="labelForInput" htmlFor="username">Password </label>
                        <br />
                        <input className="formInputEle" type="password" placeholder="Enter your password" ref={password} id="password" name="password" />
                        <br />

                        <label className="labelForInput" htmlFor="username">Confirm password </label>
                        <br />
                        <input className="formInputEle" type="password" placeholder="Re-enter your password" ref={passwordAgain} id="passwordAgain" name="passwordAgain" />
                        <br />

                        <div className="forgotPassword">
                            <div className="forgotBtnText">
                                <span>Forgot Password ?</span>
                            </div>
                        </div>

                        <button type="submit" className="signupBtn">SIGN UP</button>
                    </form>


                    <div className="noAccount">
                        <h5 className="noAccHeading">Already have cccount?</h5>

                        <Link to={"/signin"} style={{ textDecoration: "none" }}>
                            <h5 className="noAccSignup">Log in</h5>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="signupRight">
                <div className="rightImgBox">
                    <img className="rightImg" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755714845/Click2Bid/hx9e967gcppxhfvkzoka.png" alt="" />
                </div>
            </div>
        </div>
    )
}