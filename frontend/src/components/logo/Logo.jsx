
import { Search, RotateRight } from "@mui/icons-material"
import "./Logo.css"
import { Link } from "react-router-dom"

export default function () {
    return (
        <div>
            <div className="signupLeftLog">
                <span className="signupLogo">Click</span>
                <span className="signupTwo">2</span>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="bidBox">
                        <span className="biD">Bid</span>
                        <RotateRight />
                    </div>
                </Link>
            </div>
        </div>
    )
}