import "./EditProfile.css"
import TopbarSearch from "../../components/topbarSearch/TopbarSearch"
import Footer from "../../components/footer/Footer"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../components/logo/Logo"
import MyAccount from "../../components/myAccount/MyAccount"
import axios from "axios"
import { Navigate } from "react-router-dom"

export default function EditProfile() {

    const BASE_URL = "https://clicktwobid.onrender.com"

    const [user, setUser] = useState({})
    useEffect(() => {
        async function getUser(params) {
            try {
                const user = await axios.get(`${BASE_URL}/api/users/authenticate`, { withCredentials: true })
                setUser(user.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [])


    // for previewing Image
    const [file, setFile] = useState(null)
    const [image, setImage] = useState(null)
    const navigate = useNavigate()
    function getFile(event) {
        setFile(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    // for handling default characteristic of form submition
    let handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("profilePic", file)
        formData.append("name", "Wasim")
        // formData.profilePic = file
        //formData.name = "wasim"

        try {
            console.log(formData)
            await axios.post(`${BASE_URL}/api/users/updateprofile/${user._id}`, formData)
            navigate("/profile")
        } catch (err) {
            console.log(err)
        }
        event.target.reset();
        setImage(null); // Clear preview image
        setFile(null);

    }



    return (
        <div>
            <TopbarSearch />
            <MyAccount />
            <div className="signupPage">
                <div className="signupLeft">
                    <div className="signupLeftUpper">
                        <Logo />
                        <h4 className="signupHeading">Update Profile</h4>
                        {/*<h4 className="signupToWebsite">Signup to the website</h4> */}
                    </div>

                    <div className="signupLeftDown">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">

                            <label className="productLabel" style={{ cursor: "pointer" }} htmlFor="file">Profile Pic</label>
                            <input type="file" onChange={getFile} style={{ display: "none" }} id="file" name="file" />
                            <br />
                            {image && <img className="previewImage" src={image} alt="Preview" />}
                            <br />
                            <button type="submit" className="signupBtn">Update Profile</button>
                        </form>

                    </div>
                </div>

                <div className="signupRight">
                    <div className="rightImgBox">
                        <img className="rightImg" src="/Image/Signup.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}