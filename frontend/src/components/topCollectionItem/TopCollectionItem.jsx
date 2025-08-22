import { Link } from "react-router-dom"
import "./TopCollectionItem.css"
import { CurrencyRupee } from "@mui/icons-material"

export default function ({ post }) {

    return (
        <div className="topCollectionItem">
            <div className="topColItem">
                <img className="topColItemImg" src={post?.productImage?.url || "/Image/camera.jpg"} alt="Product Image" />
            </div>
            <div className="topColItemDetails">
                <div className="topColItemName">
                    <span>{post.productName} </span>
                </div>
                <h4 className="soldTo">Sold to</h4>
                <h3 className="buyerName">{post.winnerName}</h3>
                <h4 className="soldTo">Sold at</h4>

                <div className="soldPriceBox">
                    <CurrencyRupee className="rupeeIcon" />
                    <span className="soldPrice">{post.soldPrice}</span>
                </div>
                <Link to={`/productdetails/${post._id}`} style={{ textDecoration: "none" }}>
                    <button className="topColView">VIEW</button>
                </Link>
            </div>
        </div>
    )
}