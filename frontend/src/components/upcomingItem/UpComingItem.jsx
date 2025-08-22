import "./UpComingItem.css"
import { CurrencyRupee } from "@mui/icons-material"
import { Link } from "react-router-dom"

export default function ({ post }) {
    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    };
    const bidDateObj = new Date(post.bidDate);
    const day = bidDateObj.getDate();
    const month = bidDateObj.toLocaleString('default', { month: 'long' });
    const year = bidDateObj.getFullYear();

    return (
        <div className="upComingItem">
            <Link to={`/productdetails/${post._id}`} style={{ textDecoration: "none" }}>
                <div className="upComBox">
                    <img className="upComImgBox" src={post?.productImage?.url || "/Image/camera.jpg"} alt="Product Image" />
                    <h5 className="upComProductName">{post.productName}</h5>
                    <h5 className="upComDate">{`${day}${getOrdinal(day)} ${month} `}</h5>
                    <div className="upComBidPrice">
                        <div>
                            <span className="upComBidPriceHeading">Base Price</span>
                        </div>

                        <div className="upComPriceBox">
                            <CurrencyRupee className="rupeeIcon" />
                            <span className="upComPrice">{post.basePrice?.toLocaleString("en-IN")}</span>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    )
}