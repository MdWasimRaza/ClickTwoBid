import "./LiveAuction.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AuctionItem from "../auctionItem/AuctionItem"
import axios from "axios";
import { useState, useEffect } from "react";

export default function LiveAuction() {


    const [posts, setPosts] = useState([])
    //const { user } = useContext(AuthContext)
    const BASE_URL = "https://clicktwobid.onrender.com"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${BASE_URL}/api/products/getTodaysProducts`)
            setPosts(res.data);
        }
        fetchPosts();

    }, [])

    const itemCount = posts.length;
    var settings = {
        dots: true,
        infinite: itemCount > 4,
        speed: 500,
        slidesToShow: itemCount >= 4 ? 4 : itemCount,
        slidesToScroll: 1,

    };


    return (
        <div className="liveAuction">
            <div className="topCatHeading">
                <span className="topCatHeading_1">Live</span>
                <span className="topCatHeading_2"> Auctions</span>
            </div>
            <div className="auctionItems">
                {itemCount > 0 ? <Slider {...settings}>
                    {posts.map((p) => (
                        <AuctionItem key={p._id} post={p} />
                    ))}
                </Slider> : (
                    <p className="noAuction">Opps ! No Auction available today.</p> // Optional fallback
                )}
            </div>
        </div>
    )
}