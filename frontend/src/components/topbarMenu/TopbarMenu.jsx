import "./TopbarMenu.css"
import TopbarMenuList from "../topbarMenuList/TopbarMenuList"

export default function TopbarMenu() {
    return (
        <>
            <TopbarMenuList />
            <div className="topbarMenuBottom">
                <div className="topbarMenuBottomLeft">
                    <div>
                        <span className="sentence_1">Win More. Spend Less. Bid Smarter.</span>
                    </div>
                    <div className="sentence_2_box">
                        <span className="sentence_2">Join the ultimate bidding platform. Get the best deals, compete in real-time auction, and secure the prices you fast and fair. start bidding today!</span>
                    </div>
                    <button className="exploreBtn">EXPLORE</button>
                </div>
                <div className="topbarMenuBottomRight">

                    <div className="auctionImgBox">
                        <img className="menuImg" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755026361/Click2Bid/yx5o8hupaof1lxsall9y.png" alt="" />
                    </div>
                    <div className="auctionImgBox">
                        <img className="menuImg2" src="https://res.cloudinary.com/dl7d9inxu/image/upload/v1755541293/Click2Bid/b2mqaft0r0iz2hnzvu1q.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}