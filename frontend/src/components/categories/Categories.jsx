import "./Categories.css"
import CatElement from "../catElement/CatElement"
import { Link } from "react-router-dom"
import { Category } from "@mui/icons-material"

export default function () {

    return (
        <div className="topCategories">
            <div className="topCatElements">
                <div className="topCatHeading">
                    <span className="topCatHeading_1">Popular</span>
                    <span className="topCatHeading_2"> Categories</span>
                </div>
                <div className="catElements">
                    <Link to={"/arts&Crafts"} state={{ category: "Painting" }} style={{ textDecoration: "none" }}>
                        <div className="catElement">
                            <div className="catEleImgBox">
                                <img className="catEleImg" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755026361/Click2Bid/yx5o8hupaof1lxsall9y.png" alt="" />
                            </div>
                            <h3>Painting </h3>
                        </div>
                    </Link>

                    <Link to={"/arts&Crafts"} state={{ category: "Art & Crafts" }} style={{ textDecoration: "none" }}>
                        <div className="catElement">
                            <div className="catEleImgBox">
                                <img className="catEleImg" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755020962/Click2Bid/e5cxiwmqbwwm9zk68mm8.png" alt="" />
                            </div>
                            <h3>Arts & Craft </h3>
                        </div>
                    </Link>

                    <Link to={"/arts&Crafts"} state={{ category: "Coins" }} style={{ textDecoration: "none" }}>
                        <div className="catElement">
                            <div className="catEleImgBox">
                                <img className="catEleImg" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755026131/Click2Bid/cvdzreqnssp6ms1eq5hd.png" alt="" />
                            </div>
                            <h3>Coins </h3>
                        </div>
                    </Link>

                    <Link to={"/arts&Crafts"} state={{ category: "Collectibles" }} style={{ textDecoration: "none" }}>
                        <div className="catElement">
                            <div className="catEleImgBox">
                                <img className="catEleImg" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755026528/Click2Bid/iwdq3kxfii4pdtwz1shz.png" alt="" />
                            </div>
                            <h3>Collectibles</h3>
                        </div>
                    </Link>

                    <Link to={"/arts&Crafts"} state={{ category: "Antiques" }} style={{ textDecoration: "none" }}>
                        <div className="catElement">
                            <div className="catEleImgBox">
                                <img className="catEleImg" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755026627/Click2Bid/otkgn23ywb8rvbjgsjgl.png" alt="" />
                            </div>
                            <h3>Antiques </h3>
                        </div>
                    </Link>

                    <Link to={"/arts&Crafts"} state={{ category: "Sculpture" }} style={{ textDecoration: "none" }}>
                        <div className="catElement">
                            <div className="catEleImgBox">
                                <img className="catEleImg" src={"https://res.cloudinary.com/dl7d9inxu/image/upload/v1755026723/Click2Bid/x8cwrjw4gfosovc2pflr.png" || "/Image/th.jpeg"} alt="" />
                            </div>
                            <h3>Sculptures </h3>
                        </div>
                    </Link>

                    <Link to={"/arts&Crafts"} state={{ category: "Freelanc Project" }} style={{ textDecoration: "none" }}>
                        <div className="catElement">
                            <div className="catEleImgBox">
                                <img className="catEleImg" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755026878/Click2Bid/ak5pmmkb9v0knuemk9tv.png" alt="" />
                            </div>
                            <h3>Freelanc Projects </h3>
                        </div>
                    </Link>

                    <Link to={"/arts&Crafts"} state={{ category: "Photograph" }} style={{ textDecoration: "none" }}>
                        <div className="catElement">
                            <div className="catEleImgBox">
                                <img className="catEleImg" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755027016/Click2Bid/pddgo7oaffqp5tpaxckj.png" alt="" />
                            </div>
                            <h3>Photograph </h3>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}