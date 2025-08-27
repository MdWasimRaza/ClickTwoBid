import "./WonItem.css"
import TopbarSearch from "../../components/topbarSearch/TopbarSearch"
import TopbarMenuList from "../../components/topbarMenuList/TopbarMenuList"
import MyAccount from "../../components/myAccount/MyAccount"
import MyProfileBtns from "../../components/MyProfileBtns/MyProfileBtns"
import MyBiddedItem from "../../components/myBiddedItem/MyBiddedItem"
import WonItem from "../../components/wonItem/WonItem"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

export default function () {

    const BASE_URL = "https://clicktwobid.onrender.com"
    const [bids, setBids] = useState([])

    useEffect(() => {
        async function getUser(params) {
            try {
                const mybids = await axios.get(`${BASE_URL}/api/bids/wonItem`)
                setBids(mybids.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    })

    return (
        <div className="wonItem">
            <TopbarSearch />
            <TopbarMenuList />
            <MyAccount />

            <div className="profileMid">
                <div className="bidMidLeeft">
                    <MyProfileBtns number={3} />
                    <h5 className="myProfile">Won Items</h5>
                    {bids.map((p) => (
                        <WonItem key={p._id} bid={p} />
                    ))}
                </div>

                <div className="profileMidRight">
                </div>
            </div>
            <Footer />
        </div>
    )
}