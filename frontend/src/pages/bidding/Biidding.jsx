import "./Bidding.css"
import { CurrencyRupee } from "@mui/icons-material"
import TopbarSearch from "../../components/topbarSearch/TopbarSearch"
import TopbarMenuList from "../../components/topbarMenuList/TopbarMenuList"
import LiveAuction from "../../components/liveAucion/LiveAuction"
import Footer from "../../components/footer/Footer"
import axios from "axios";
import { useParams } from "react-router"
import { useState, useEffect, useRef } from "react"
import { useNavigate, Link } from "react-router-dom"
import BidElement from "../../components/bidElement/BidElement"

export default function () {

    const BASE_URL = "https://clicktwobid.onrender.com"

    const [product, setProduct] = useState({})
    const [bids, setBids] = useState([])
    const navigate = useNavigate();
    const productId = useParams().id;
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${BASE_URL}/api/products/productdetails/${productId}`)
            setProduct(res.data);
        }
        fetchUser();
    }, [productId])


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
    })

    // For Bid details
    useEffect(() => {
        const fetchUser = async () => {
            const bids = await axios.get(`${BASE_URL}/api/bids/getbids/${productId}`)
            setBids(bids.data);
        }
        fetchUser();
    }, [productId])

    // for formating the date in this form (1st may 2025)
    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    };
    const bidDateObj = new Date(product.bidDate);
    const day = bidDateObj.getDate();
    const month = bidDateObj.toLocaleString('default', { month: 'long' });
    const year = bidDateObj.getFullYear();

    const bidStartTime = product.bidStartTime; // "12:54"
    const [hours, minutes] = (product?.bidStartTime?.split(":").map(Number)) || [];


    // for time
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinuts = now.getMinutes()


    // For Bid button
    const bidAmount = useRef();
    const handleOnClick = async (event) => {
        event.preventDefault();
        const newBid = {
            productId: productId,
            bidAmount: bidAmount.current.value,
        }
        try {
            console.log(newBid)
            const placedBid = await axios.post(`${BASE_URL}/api/bids/placebid`, newBid)
            console.log(placedBid)
        } catch (err) {
            console.log(err)
        }
        event.target.reset();
    }

    // for Selecting Winner
    const handleClick = async () => {
        const newproduct = {
            productId: productId,
        }
        const winner = await axios.post(`${BASE_URL}/api/bids/winner`, newproduct)
        alert(`The Winner is : ${winner.data}`)
    }


    return (

        <div>
            <TopbarSearch />
            <TopbarMenuList />
            <div className="auctionDetails">
                <div className="auctionDetailsHeading">
                    <span>AUCTION DETAILS</span>
                </div>
            </div>
            <div className="productDetails">
                <div className="productImage">
                    <div>
                        <img className="productImg_1" src={product?.productImage?.url || "/Image/camera.jpg"} alt="Product Image" />
                    </div>
                </div>
                <div className="productDetailsRight">
                    <div className="editBtnBox">
                        <div className="productName_1">{product.productName}</div>
                    </div>
                    <h3 className="productTitel_1">{product.title}</h3>

                    <span className="description">Description : </span>
                    <span className="descriptions">{product.description}</span>

                    <div className="startDate">
                        <span className="date">Start Date : </span>
                        <span className="theDate">{`${day}${getOrdinal(day)} ${month} ${year}`}</span>
                    </div>

                    <div className="startDate">
                        <span className="date">Bidding Time : </span>
                        <span className="theDate">{hours}:00 to {product.bidStartTime}</span>
                    </div>

                    <div className="basePriceBox">
                        <span className="date">Base bid Price : </span>
                        <span className="rupeeSymbol"> <CurrencyRupee /></span>
                        <span className="basePrice">{product.basePrice?.toLocaleString("en-IN")}</span>
                    </div>

                    {user.isAdmin && <button onClick={handleClick} className="bidOver"> Find the Winner</button>}

                    {hours === currentHour && minutes > currentMinuts && <form className="placeBid" onSubmit={handleOnClick}>
                        <input className="bidAmountInput" placeholder="Amount" type="Number" ref={bidAmount} id="bidAmount" name="bidAmount" />
                        <button className="placeBidBtn">PLACE A BID</button>
                    </form>}

                    <div className="topBidders">
                        <h5 className="topBiddersHeading">Top Bidders</h5>
                        {bids.map((p) => (
                            <BidElement key={p._id} bid={p} />
                        ))}
                    </div>
                </div>
            </div>
            <LiveAuction />
            <Footer />
        </div>
    )
}