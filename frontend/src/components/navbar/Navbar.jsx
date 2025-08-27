import "./Navbar.css"
import { MoreVert, RotateRight, Search } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import Logo from "../logo/Logo"
import axios from "axios";

export default function Navbar() {

    const BASE_URL = "https://clicktwobid.onrender.com"
    const [user, setUser] = useState({})
    const navigate = useNavigate();

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


    const searched = useRef();
    const handleSearch = async (event) => {
        event.preventDefault();
        const searchedTitle = {
            title: searched.current.value,
        }
        try {
            const result = await axios.post(`${BASE_URL}/api/products/search`, searchedTitle)
            navigate("/search", { state: { result: result.data } })
        } catch (err) {
            console.log(err)
        }
        event.target.reset();
    }

    return (
        <div className="navWrapper">
            <div className="navbar">
                <input type="checkbox" id="check" name="" value=""></input>
                <label htmlFor="check" id="checkbtn"><MoreVert /></label>
                <div className="exceptCheckbtn">
                    <div className="classA">
                        <Logo />
                    </div>

                    <div className="topbarSearch2">
                        <div className="searchBar">
                            <form style={{ all: "unset" }} onSubmit={handleSearch}>
                                <button style={{ all: "unset" }} ><Search className="searchIcon" /></button>
                                <input type="text" ref={searched} id="searched" name="searched"
                                    className="searchInput"
                                    placeholder="Search here"
                                />
                            </form>
                        </div>
                    </div>

                    <ul className="topbarRight2 listItems">

                        {user.username && <button onClick={callLogout} className="signup">LOG OUT</button>}
                        <li>
                            <Link to={"/signin"} style={{ textDecoration: "none" }}>
                                {!user.username && <button className="login">LOG IN</button>}
                            </Link>
                        </li>
                        <li>
                            <Link to={"/signup"} style={{ textDecoration: "none" }}>
                                {!user.username && <button className="signup"> SIGN UP</button>}
                            </Link>
                        </li>
                        <li>
                            <Link to={"/profile"} style={{ textDecoration: "none" }}>
                                <img className="goToMyProfile" src="/Image/Wasim.jpeg" alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}