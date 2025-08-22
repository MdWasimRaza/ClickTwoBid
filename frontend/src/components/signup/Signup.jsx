import "./Signup.css"
import { useEffect, useState } from "react";
import axios from "axios";

export default function () {

    let [formData, setFormData] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
    })

    let handleFormData = (event) => {
        const feildName = event.target.name;
        const newValue = event.target.value;

        setFormData((currData) => {
            currData[feildName] = newValue;
            return { ...currData };
        })
    }

    // for handling default characteristic of form submition
    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)

        const newPost = {
            fullName: formData.fullName,
            email: formData.email,
            username: formData.username,
            password: formData.password,
        }

        try {
            await axios.post("/api/users/signup", newPost)
        } catch (err) {
            console.log(err)
        }
        // for clearing the form
        setFormData({
            fullName: "",
            email: "",
            username: "",
            password: "",
        })
    }


    return (
        <div className="signupBody">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="fullName">Full Name </label>
                <input type="text" placeholder="full name !" value={formData.fullName} onChange={handleFormData} id="fullName" name="fullName" />
                <br /><br />

                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email !" value={formData.email} onChange={handleFormData} id="email" name="email" />
                <br /><br />

                <label htmlFor="username">Username </label>
                <input type="text" placeholder="username!" value={formData.username} onChange={handleFormData} id="username" name="username" />
                <br /><br />

                <label htmlFor="username">Password </label>
                <input type="password" placeholder="password!" value={formData.password} onChange={handleFormData} id="password" name="password" />
                <br /><br />

                <button>Submit</button>
            </form>

        </div>
    )
}