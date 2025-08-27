import "./TopbarSearch.css"
import { Search, RotateRight } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

export default function TopbarSearch() {


    const [user, setUser] = useState({})
    const navigate = useNavigate();
    const BASE_URL = "https://clicktwobid.onrender.com"

    async function callLogout(params) {
        console.log("Logout function called")
        try {
            const user = await axios.get(`${BASE_URL}/api/users/logout`, { withCredentials: true })
            console.log("Logout successful");
            navigate("/signin")
        } catch (err) {
            console.log(err)

        }
    }

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
    })




    return (
        <div className="topbarSearch">
            <div className="topbarLeft">
                <span className="logo">Click</span>
                <span className="two">2</span>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <div className="bidbox">
                        <span className="bid">Bid</span>
                        <RotateRight />
                    </div>
                </Link>
            </div>

            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input type="text"
                        className="searchInput"
                        placeholder="Search here"
                    />
                </div>
            </div>

            <div className="topbarRight">
                {user.username && <button onClick={callLogout} className="signup">LOG OUT</button>}

                <Link to={"/signin"} style={{ textDecoration: "none" }}>
                    {!user.username && <button className="login">LOG IN</button>}
                </Link>

                <Link to={"/signup"} style={{ textDecoration: "none" }}>
                    {!user.username && <button className="signup"> SIGN UP</button>}
                </Link>
                <Link to={"/profile"} style={{ textDecoration: "none" }}>
                    <img className="goToMyProfile" src="/Image/Wasim.jpeg" alt="" />
                </Link>

            </div>

        </div>
    )
}