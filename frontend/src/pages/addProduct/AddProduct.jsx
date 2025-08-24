import "./AddProduct.css"
import { useRef, useState } from "react"
import axios from "axios";
import TopbarSearch from "../../components/topbarSearch/TopbarSearch"
import { useNavigate } from "react-router-dom";

export default function () {

    const productName = useRef();
    const title = useRef();
    const description = useRef()
    const bidDate = useRef()
    const bidStartTime = useRef()
    const basePrice = useRef()
    const category = useRef(null)
    const productImage = useRef(null)
    const navigate = useNavigate();

    const BASE_URL = "https://clicktwobid.onrender.com/"

    // for previewing Image
    const [image, setImage] = useState()
    function getFile(event) {
        setImage(URL.createObjectURL(event.target.files[0]))
    }


    const handleOnClick = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("productName", productName.current.value);
        formData.append("productImage", productImage.current.files[0]); // Corrected here
        formData.append("title", title.current.value);
        formData.append("description", description.current.value);
        formData.append("bidDate", bidDate.current.value);
        formData.append("bidStartTime", bidStartTime.current.value);
        formData.append("basePrice", basePrice.current.value);
        formData.append("category", category.current.value);

        try {
            const addedProduct = await axios.post(`${BASE_URL}/api/products/newProduct`, formData);
            if (addedProduct.data?.message === "Product added sucessfully") {
                navigate("/");
            } else {
                alert("Something went Wrong")
                console.log("Something went Wrong")
                navigate("/addproduct")
            }
        } catch (err) {
            alert("Server error occurred");
            navigate("/addproduct");
        }

    };


    return (
        <>
            <TopbarSearch />
            <div className="addProductHeading">Add Product</div>
            <div className="addProduct">
                <form onSubmit={handleOnClick} encType="multipart/form-data">
                    <label className="productLabel" htmlFor="productName">Product Name </label>
                    <br />
                    <input className="productInput" type="text" placeholder="Product Name" ref={productName} id="productName" name="productName" required />
                    <br />


                    <label className="productLabel" style={{ cursor: "pointer" }} htmlFor="productImage">Product Image </label>
                    <div className="" >
                        <input type="file" onChange={getFile} style={{ display: "none" }} placeholder="Product Image" ref={productImage} id="productImage" name="productImage" required />
                    </div>
                    <br />
                    <img className="previewImage" src={image} alt="" />

                    <br />
                    <label className="productLabel" htmlFor="title">Product Title </label>
                    <br />
                    <input className="productInput" type="text" placeholder="Enter Product Title " ref={title} id="title" name="title" required />
                    <br />

                    <label className="productLabel" htmlFor="description">Product Description </label>
                    <br />
                    <input className="productInput" type="text" placeholder="Enter Product description " ref={description} id="description" name="description" required />
                    <br />
                    <div className="timeDatelabel">
                        <label className="productLabel" htmlFor="bidDate">Bidding Start Time </label>
                        <br />
                        <label className="productLabel" htmlFor="bidDate">Bidding Date </label>
                        <br />
                    </div>
                    <div className="timeDate">
                        <input className="timeDateInput" type="Time" placeholder="Enter Product bidDate " ref={bidStartTime} id="bidStartTime" name="bidStartTime" required />
                        <br />

                        <input className="timeDateInput" type="Date" placeholder="Enter Product bidTime " ref={bidDate} id="bidDate" name="bidDate" required />
                        <br />
                    </div>

                    <label className="productLabel" htmlFor="category">Product Category </label>
                    <br />
                    <select className="timeDateInput" id="category" name="category" ref={category} required>
                        <option value="Painting">Painting</option>
                        <option value="Art & Crafts">Art & Crafts</option>
                        <option value="Coins">Coins</option>
                        <option value="Collectibles">Collectibles</option>
                        <option value="Antiques">Antiques</option>
                        <option value="Sculpture">Sculpture</option>
                        <option value="Freelanc Project">Freelanc Project</option>
                        <option value="Photograph">Photograph</option>
                    </select>
                    <br />

                    <label className="productLabel" htmlFor="basePrice">Product BasePrice </label>
                    <br />
                    <input className="productInput" type="Number" placeholder="Enter Product bidTime " ref={basePrice} id="basePrice" name="basePrice" required />
                    <br />
                    <button className="addProductBtn">ADD &nbsp; PRODUCT</button>
                </form>
            </div>

        </>
    )
}
