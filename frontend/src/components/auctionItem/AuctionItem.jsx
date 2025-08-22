import "./AuctionItem.css"
import { CurrencyRupee } from "@mui/icons-material"
import { Link } from "react-router-dom"

export default function ({ post }) {

    return (
        <div className="auctionItem">
            <Link to={`/bidding/${post._id}`} style={{ textDecoration: "none" }}>
                <div className="time">
                    <div className="timeBox">{post.bidStartTime}</div>
                </div>
                <div className="auctionImgBox">
                    <img className="auctionImg" src={post?.productImage?.url || "Image/camera.jpg"} alt="" />
                </div>
                <div className="liveAuctionproductName">
                    <span >{post.productName}</span>
                </div>
                <div className="priceBox">
                    <span >Current Price</span>
                </div>
                <div className="bidPrice">
                    <CurrencyRupee className="rupeeIcon" />
                    <span className="price">{post.basePrice?.toLocaleString("en-IN")}</span>
                </div>
            </Link>
        </div>
    )
}