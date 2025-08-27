import "./Bid.css"
import TopbarSearch from "../../components/topbarSearch/TopbarSearch"
import TopbarMenuList from "../../components/topbarMenuList/TopbarMenuList"
import MyAccount from "../../components/myAccount/MyAccount"
import MyProfileBtns from "../../components/MyProfileBtns/MyProfileBtns"
import MyBiddedItem from "../../components/myBiddedItem/MyBiddedItem"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

export default function () {
    const [bids, setBids] = useState([])

    const BASE_URL = "https://clicktwobid.onrender.com"


    useEffect(() => {
        async function getUser(params) {
            try {
                //const mybids = await axios.get(`${BASE_URL}/api/bids/mybids`)
                const mybids = await axios.get(`${BASE_URL}/api/bids/mybids`)
                console.log(mybids)
                setBids(mybids.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    })

    return (
        <div className="bid">
            <TopbarSearch />
            <TopbarMenuList />
            <MyAccount />
            <div className="profileMid">
                <div className="bidMidLeeft">
                    <MyProfileBtns number={2} />
                    <h5 className="myProfile">My Bids</h5>
                    {bids.map((p) => (
                        <MyBiddedItem key={p._id} bid={p} />
                    ))}
                </div>

                <div className="profileMidRight">
                </div>
            </div>
            <Footer />
        </div>
    )
}