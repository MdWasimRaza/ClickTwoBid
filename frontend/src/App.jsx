import Home from "./pages/home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup"
import Signin from "./pages/signin/Signin"
import ProductDetails from "./pages/productDetails/ProductDetails"
import AddProduct from "./pages/addProduct/AddProduct"
import Profile from "./pages/profile/Profile"
import EditProfile from "./pages/editProfile/EditProfile";
import Bid from "./pages/bid/Bid";
import WonItem from "./pages/wonItem/WonItem";
import EditProduct from "./pages/editProduct/EditProduct";
import Biidding from "./pages/bidding/Biidding";
import ResponsiveCheck from "./pages/responsiveCheck/responsiveCheck";
import ArtsCrafts from "./pages/arts&Crafts/Arts&Crafts";
import Search from "./pages/search/Search";

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/bidding/:id" element={<Biidding />} />
        <Route path="editproduct/:id" element={<EditProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile/:id" element={<EditProfile />} />
        <Route path="/bid" element={<Bid />} />
        <Route path="/wonItem" element={<WonItem />} />
        <Route path="/responsive" element={<ResponsiveCheck />} />
        <Route path="/arts&Crafts" element={<ArtsCrafts />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App
