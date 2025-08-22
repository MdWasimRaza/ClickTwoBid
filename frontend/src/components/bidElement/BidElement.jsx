import "./BidElement.css"
import { format } from "timeago.js"
import { CurrencyRupee } from "@mui/icons-material"


export default function ({ bid }) {

    return (
        <div className="bidElement">
            <div className="boxFirst">
                <img className="bidElementPic" src="/Image/Wasim.jpeg" alt="" />
                <div className="bidEleName">
                    <h5 className="bidEleUser">{bid.userName}</h5>
                    <h5 className="bidEleBiddedAt">Bidded at :&nbsp;{format(bid.createdAt)}</h5>
                </div>
            </div>
            <div className="bidEleAmt">
                <CurrencyRupee />
                <h5 className="bidEleAmtVal">{bid.bidAmount?.toLocaleString("en-IN")}</h5>
            </div>
        </div>
    )
}