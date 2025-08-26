import "./TopCollection.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TopCollectionItem from "../topCollectionItem/TopCollectionItem"
import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
    const [posts, setPosts] = useState([])
    const BASE_URL = "https://clicktwobid.onrender.com"

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${BASE_URL}/api/products/getTopCollection`)
            setPosts(res.data);
        }
        fetchPosts();

    }, [])

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <div className="topCollection">
            <div className="topCollectionHeading">
                <span className="top">Top</span>
                <span> Collection</span>
            </div>
            <div className="topColItems">
                <Slider {...settings}>
                    {posts.map((p) => (
                        <TopCollectionItem key={p._id} post={p} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}