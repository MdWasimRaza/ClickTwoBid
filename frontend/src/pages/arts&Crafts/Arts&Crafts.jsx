

import TopbarMenu from "../../components/topbarMenu/TopbarMenu"
import LiveAuction from "../../components/liveAucion/LiveAuction"
import TopCollection from "../../components/topCollection/TopCollection"
import UpComing from "../../components/upComing/UpComing"
import Categories from "../../components/categories/Categories"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import ArtCrafts from "../../components/art&CraftsCategory/ArtCrafts"

export default function () {
    return (
        <>
            <Navbar />
            <TopbarMenu />
            <ArtCrafts />
        </>
    )
}