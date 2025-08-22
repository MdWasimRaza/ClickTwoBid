import "./Footer.css"
import { RotateRight, Copyright } from "@mui/icons-material"

export default function () {

    return (
        <div className="footer">
            <div className="footerTop">
                <div className="footerLeft">
                    <span className="logo">Click</span>
                    <span className="two">2</span>
                    <div className="bidbox">
                        <span className="bid">Bid</span>
                        <RotateRight />
                    </div>
                </div>
                <div className="footerRight">
                    <span className="footerRightEement">Arts & Craft</span>
                    <span className="footerRightEement">Coins</span>
                    <span className="footerRightEement">Collectibles</span>
                    <span className="footerRightEement">Antiques</span>
                    <span className="footerRightEement">Freelance Projects</span>
                </div>
            </div>
            <hr className="footerHr" />
            <div className="footerLower">
                <div className="footerLowerLeft">
                    <span className="copyright">Copyright</span>
                    <Copyright className="copyrightLog" />
                    <span className="copyrightYear">2025</span>
                    <span className="copyright">, Click2Bid</span>
                </div>
                <div className="footerLowerRight">
                    <span className="copyright">Terms & Condition</span>
                    <span className="copyrightPrivacy">Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}