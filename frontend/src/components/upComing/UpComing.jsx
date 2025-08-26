import "./UpComing.css"
import UpComingItem from "../upcomingItem/UpComingItem"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useState, useEffect } from "react";

export default function () {

    const [posts, setPosts] = useState([])
    //const { user } = useContext(AuthContext)
    const BASE_URL = "https://clicktwobid.onrender.com"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${BASE_URL}/api/products/getAllProducts`)
            setPosts(res.data);
        }
        fetchPosts();

    }, [])

    const itemCount = posts.length;
    var settings = {
        dots: false,
        infinite: itemCount > 4,
        speed: 500,
        slidesToShow: itemCount >= 4 ? 4 : itemCount,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="upComing">
                <span className="upComingHeading_1">Upcoming </span>
                <span className="upComingHeading_2">Collection</span>

                <div className="UpComingItems">
                    {itemCount > 0 ? <Slider {...settings}>
                        {posts.map((p) => (
                            <UpComingItem key={p._id} post={p} />
                        ))}
                    </Slider> : (
                        <p>Loading...</p> // Optional fallback
                    )}
                </div>
            </div>
        </>
    )
} 