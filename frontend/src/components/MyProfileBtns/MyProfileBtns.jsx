import "./MyProfileBtn.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

export default function ({ number }) {
    const [user, setUser] = useState({})
    const BASE_URL = "https://clicktwobid.onrender.com"

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
        <div className="profileBtns">
            <Link to={"/profile"} style={{ textDecoration: "none" }}>
                <button className={`profileBtn_2 ${number === 1 ? 'currentBtn' : ''}`}>My Profile</button>
            </Link>
            <Link to={"/bid"} style={{ textDecoration: "none" }}>
                <button className={`profileBtn_2 ${number === 2 ? 'currentBtn' : ''}`}>My Bids</button>
            </Link>
            <Link to={"/wonItem"} style={{ textDecoration: "none" }}>
                <button className={`profileBtn_2 ${number === 3 ? 'currentBtn' : ''}`}>Won Items</button>
            </Link>
            <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
                {user.isAdmin && <button className="profileBtn_2">Add Items</button>}
            </Link>
        </div>
    )
}