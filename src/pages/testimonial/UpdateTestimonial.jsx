import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import { BaseUrl } from '../baseurl/baseurl';
import {BaseUrlImg} from '../baseurl/baseurl';

const url = `${BaseUrl}/updateTestimonial`;
const uploadUrl = `${BaseUrlImg}/careerBanaoImages/upload.php`;

function UpdateTestimonial() {
    const location = useLocation();
    const id = location.state.id;
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [testimonial, setTestimonial] = useState({
        id:id,
        name: location.state.name,
        college_name: location.state.college_name,
        feedback: location.state.feedback,
        student_image:location.state.student_image
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
            id:testimonial.id,
            name:testimonial.name,
            college_name:testimonial.college_name,
            feedback:testimonial.feedback,
            student_image:res.url,
        })).then((res) => {
            console.log(res.data);
            toast.success('Updated Successfully!', {
                position: "top-center",
                autoClose: 1000,
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
        document.getElementById('uploadFile').value = "";
    }
    const goTestimonialPage = () => {
        navigate("/dashboard/testimonial/testimonialData");
    }

    return (
        <>
            <div className='application-engineering'>
                <div className="top-content">
                    <h1>Update Testimonial Data</h1>
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
                    <p style={{marginTop:"12px"}}>Student Image:</p>
                    <div className='upload'>
                        <input id='uploadFile'  type="file" {...register("avatar")} style={{cursor:"pointer"}} accept=".jpeg,.png , .jpg"/>
                    </div>
                    <Button type='submit' variant="contained">Submit</Button>
                </form>
            </div>
            <ToastContainer />
        </>

    )
}

export default UpdateTestimonial