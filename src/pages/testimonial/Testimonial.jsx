import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { BaseUrl } from '../baseurl/baseurl';

const url = `${BaseUrl}/SetTestimonialDataAPI`;
const uploadUrl = "https://kalkaprasad.com/careerBanaoImages/upload.php";

function Testimonial() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [testimonial, setTestimonial] = useState({
        name: "",
        college_name: "",
        feedback: "",
        student_image:""
    });
    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTestimonial({ ...testimonial, [name]: value });

    }
    const submitData = async (data,e) => {
        
        e.preventDefault();
        console.log(data.avatar[0]);
        const formData = new FormData();
        formData.append("avatar", data.avatar[0]);

        const res = await fetch(uploadUrl, {
            method: "POST",
            body: formData,
        }).then((res) => res.json());

        console.log(testimonial);
        await axios.post(url, JSON.stringify({
            name:testimonial.name,
            college_name:testimonial.college_name,
            feedback:testimonial.feedback,
            student_image:res.url,
        })).then((res) => {
            console.log(res.data);
            toast.success('Created Successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }).catch((err) => {
            console.log(err);
        })
        setTestimonial({
            name: "",
            college_name: "",
            feedback: "",
            student_image: ''
        })
    }
    const goTestimonialPage = () => {
        navigate("/dashboard/testimonial/testimonialData");
    }

    return (
        <>
            <div className='application-engineering'>
                <div className="top-content">
                    <h1>Testimonial</h1>
                    <div>
                        <NextPlanIcon onClick={goTestimonialPage} className="next-icons" />
                    </div>
                </div>
                <form onSubmit={handleSubmit(submitData)}>
                    <div>
                        <TextField
                            style={{ margin: "0.5rem" }}
                            label="Name"
                            id="outlined-size-small"
                            size="small"
                            name='name'
                            value={testimonial.name}
                            onChange={changeEventHandler}
                        />
                        <TextField
                            style={{ margin: "0.5rem" }}
                            label="College Name"
                            id="outlined-size-small"
                            size="small"
                            name='college_name'
                            value={testimonial.college_name}
                            onChange={changeEventHandler}
                        />

                    </div>

                    <label className='intro-of-college'>Feedback:</label>
                    <textarea
                        rows='3'
                        cols="50"
                        name="feedback"
                        value={testimonial.feedback}
                        onChange={changeEventHandler}
                    />
                    <div className='upload'>
                        Student Image
                        <input className="hide_file" type="file" {...register("avatar")} style={{cursor:"pointer"}} accept=".jpeg,.png , .jpg"/>
                    </div>
                    {/* <img style={{ width: "100px", height: "100px" }} src={image} alt="alt"></img> */}
                    <Button type='submit' variant="contained">Submit</Button>
                </form>
            </div>
            <ToastContainer />
        </>

    )
}

export default Testimonial