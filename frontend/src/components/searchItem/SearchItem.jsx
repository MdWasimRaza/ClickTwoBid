//import "./UpComing.css"
import UpComingItem from "../upcomingItem/UpComingItem"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"

export default function () {

    ///const [posts, setPosts] = useState([])
    //const { user } = useContext(AuthContext)

    const location = useLocation();
    const { result } = location.state || {};

    const itemCount = result.length;
    var settings = {
        dots: true,
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
                        {result.map((p) => (
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