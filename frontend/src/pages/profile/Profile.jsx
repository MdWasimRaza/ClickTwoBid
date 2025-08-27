import "./Profile.css"
import Logo from "../../components/logo/Logo"
import TopbarSearch from "../../components/topbarSearch/TopbarSearch"
import TopbarMenuList from "../../components/topbarMenuList/TopbarMenuList"
import MyAccount from "../../components/myAccount/MyAccount"
import MyProfileBtns from "../../components/MyProfileBtns/MyProfileBtns"
import Footer from "../../components/footer/Footer"
import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom"


export default function () {

    const [user, setUser] = useState({})
    const BASE_URL = "https://clicktwobid.onrender.com/"

    useEffect(() => {
        async function getUser(params) {
            try {
                const user = await axios.get(`${BASE_URL}api/users/authenticate`, { withCredentials: true })
                setUser(user.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    })

    return (
        <div className="profile">
            <TopbarSearch />
            <TopbarMenuList />
            <MyAccount />
            <div className="profileMid">
                <div className="profileMidLeeft">
                    <MyProfileBtns number={1} />

                    <h5 className="myProfile">My Profile</h5>
                    <div className="profileDetails">
                        <div className="profileImg">
                            <img className="profilePic" src={user?.profilePic?.url || "/Image/th.jpeg"} alt="" />
                        </div>
                        <div className="profileDetail">
                            <h5 className="userFullName">{user.username}</h5>
                            <div className="details">
                                <h5 className="detailsEle">Username :</h5>
                                <h5 className="detailsVal">&nbsp;{user.username}</h5>
                            </div>
                            <div className="details">
                                <h5 className="detailsEle">Email :</h5>
                                <h5 className="detailsVal">&nbsp;{user.email}</h5>
                            </div>
                            <div className="details">
                                <h5 className="detailsEle">Password :</h5>
                                <h5 className="detailsVal">&nbsp;****** </h5>
                            </div>
                            <Link to={`/editprofile/${user._id}`} >
                                <button className="profileEdit">Edit Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="profileMidRight">
                    <h3 className="address">Address</h3>
                    <div className="addressBox">
                        <h5 className="userFullName">{user.username}</h5>
                        <h5 className="fullAddress">Street 121, Block - B, New Weaker Section Coony, Telecon Nagar, Gacchibowli, Hyderabad, India - 500321</h5>
                    </div>
                    <div className="addAddress">
                        <h5 className="plus">+</h5>
                        <h5 className="plusAhead"> Add New Address</h5>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}