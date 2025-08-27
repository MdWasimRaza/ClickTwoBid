import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import TopbarSearch from "../../components/topbarSearch/TopbarSearch";

export default function EditProduct() {


    const BASE_URL = "https://clicktwobid.onrender.com"
    // new code
    const { id: productId } = useParams();
    const [file, setFile] = useState(null)
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productName: "",
        title: "",
        description: "",
        bidDate: "",
        productImage: null,
        bidStartTime: "",
        basePrice: "",
        ownerId: "",
    })

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/products/productdetails/${productId}`);
                setProduct({ ...product, productName: res.data.productName, title: res.data.title, description: res.data.description, bidDate: res.data.bidDate, basePrice: res.data.basePrice, ownerId: res.data.ownerId });
            } catch (err) {
                console.error("Error fetching product:", err);
            }
        };
        fetchProduct();
    }, [productId]);


    let handleFormData = (event) => {
        const feildName = event.target.name;
        const newValue = event.target.value;

        setProduct((currData) => {
            currData[feildName] = newValue;
            return { ...currData };
        })
    }


    // for previewing Image
    const [image, setImage] = useState()
    function getFile(event) {
        setFile(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    const handleOnClick = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("productName", product.productName);
        formData.append("productImage", file); // Corrected here
        formData.append("title", product.title);
        formData.append("description", product.description);
        formData.append("bidDate", product.bidDate);
        formData.append("bidStartTime", product.bidStartTime);
        formData.append("basePrice", product.basePrice);


        try {
            console.log(formData)
            const response = await axios.post(`${BASE_URL}/api/products/update/${productId}`, formData);
            console.log("Updated:", response.data);
            navigate("/");

            // navigate("/"); // Uncomment if needed
        } catch (err) {
            console.error("Update error:", err);
        }
    };

    return (
        <>
            <TopbarSearch />
            <div className="addProductHeading">Edit Product</div>
            <div className="addProduct">
                <form onSubmit={handleOnClick} encType="multipart/form-data">
                    <label className="productLabel" htmlFor="productName">Product Name</label>
                    <br />
                    <input className="productInput" type="text" value={product.productName} id="productName" name="productName" onChange={handleFormData} required />
                    <br />

                    <label className="productLabel" style={{ cursor: "pointer" }} htmlFor="productImage">Product Image</label>
                    <input type="file" onChange={getFile} style={{ display: "none" }} id="productImage" name="productImage" />
                    <br />
                    {image && <img className="previewImage" src={image} alt="Preview" />}
                    <br />

                    <label className="productLabel" htmlFor="title">Product Title</label>
                    <br />
                    <input className="productInput" type="text" value={product.title} id="title" name="title" onChange={handleFormData} required />
                    <br />

                    <label className="productLabel" htmlFor="description">Product Description</label>
                    <br />
                    <input className="productInput" type="text" value={product.description} id="description" name="description" onChange={handleFormData} required />
                    <br />

                    <div className="timeDatelabel">
                        <label className="productLabel" htmlFor="bidStartTime">Bidding Start Time</label>
                        <br />
                        <label className="productLabel" htmlFor="bidDate">Bidding Date</label>
                        <br />
                    </div>
                    <div className="timeDate">
                        <input className="timeDateInput" type="time" id="bidStartTime" name="bidStartTime" onChange={handleFormData} required />
                        <br />
                        <input className="timeDateInput" type="date" id="bidDate" name="bidDate" onChange={handleFormData} required />
                        <br />
                    </div>

                    <label className="productLabel" htmlFor="basePrice">Product Base Price</label>
                    <br />
                    <input className="productInput" type="number" value={product.basePrice} id="basePrice" name="basePrice" onChange={handleFormData} required />
                    <br />
                    <button className="addProductBtn">UPDATE PRODUCT</button>
                </form>
            </div>
        </>
    );
}


