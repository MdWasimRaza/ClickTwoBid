import "./TopbarMenuList.css"
import { Link } from "react-router-dom"

export default function () {
    return (
        <div className="topbarMenu">

            <Link to={"/arts&Crafts"} state={{ category: "Art & Crafts" }} style={{ textDecoration: "none" }}>
                <span className="menuItem">Arts & Crafts</span>
            </Link>
            <Link to={"/arts&Crafts"} state={{ category: "Painting" }} style={{ textDecoration: "none" }}>
                <span className="menuItem">Paintings</span>
            </Link>
            <Link to={"/arts&Crafts"} state={{ category: "Coins" }} style={{ textDecoration: "none" }}>
                <span className="menuItem">Coins</span>
            </Link>
            <Link to={"/arts&Crafts"} state={{ category: "Collectibles" }} style={{ textDecoration: "none" }}>
                <span className="menuItem">Collectibles</span>
            </Link>
            <Link to={"/arts&Crafts"} state={{ category: "Antiques" }} style={{ textDecoration: "none" }}>
                <span className="menuItem">Antiquees</span>
            </Link>
            <Link to={"/arts&Crafts"} state={{ category: "Sculpture" }} style={{ textDecoration: "none" }}>
                <span className="menuItem">Sculpture</span>
            </Link>
            <Link to={"/arts&Crafts"} state={{ category: "Freelanc Project" }} style={{ textDecoration: "none" }}>
                <span className="menuItem">Freelance Projects</span>
            </Link>
            <Link to={"/arts&Crafts"} style={{ textDecoration: "none" }}>
                <span className="menuItem">More Categories</span>
            </Link>
        </div>
    )
}