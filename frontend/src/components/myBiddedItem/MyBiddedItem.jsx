import "./MyBiddedItem.css"
import { Link } from "react-router-dom";

export default function ({ bid }) {

    // for formating the date in this form (1st may 2025)
    console.log(bid)
    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    };
    const bidDateObj = new Date(bid.bidDate);
    const day = bidDateObj.getDate();
    const month = bidDateObj.toLocaleString('default', { month: 'long' });
    const year = bidDateObj.getFullYear();

    return (
        <Link to={`/productdetails/${bid._id}`} style={{ textDecoration: "none" }}>
            <div className="bidItem">
                <div className="bidItemLeft">
                    <div className="bidItemLeft1">
                        <div className="bidItemPic">
                            <img className="bidItemPic" src={bid?.productImage?.url || "Image/camera.jpg"} alt="" />
                        </div>
                    </div>
                    <div className="bidItemLeft2">
                        <h4>{bid.productName}</h4>
                        <div className="mybidItemprice">
                            <h5 className="mybidItempriceTag">price&nbsp; :</h5>
                            <span style={{ fontWeight: '600', marginTop: '0px' }}>&nbsp;{bid.basePrice?.toLocaleString("en-IN")}</span>
                        </div>
                    </div>
                </div>
                <div className="bidItemRight">
                    <h5 className="mybidItempriceTag" style={{ paddingBottom: '4px', fontSize: '18px' }}>Bid Date</h5>
                    <span style={{ fontWeight: '600' }}>{`${day}${getOrdinal(day)} ${month} ${year}`}</span>
                </div>
            </div>
        </Link>
    )
}