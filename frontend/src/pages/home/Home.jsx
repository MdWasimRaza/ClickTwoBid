import "./Home.css"
import TopbarSearch from "../../components/topbarSearch/TopbarSearch"
import TopbarMenu from "../../components/topbarMenu/TopbarMenu"
import LiveAuction from "../../components/liveAucion/LiveAuction"
import TopCollection from "../../components/topCollection/TopCollection"
import UpComing from "../../components/upComing/UpComing"
import Categories from "../../components/categories/Categories"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"

export default function Home() {
    return (
        <div>
            <Navbar />
            <TopbarMenu />
            <LiveAuction />
            <TopCollection />
            <UpComing />
            <Categories />
            <Footer />
        </div>
    )
}