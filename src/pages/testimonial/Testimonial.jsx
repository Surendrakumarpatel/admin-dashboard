import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";
 
const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/SetTestimonialDataAPI";

function Testimonial() {
    const [testimonial, setTestimonial] = React.useState({
        name: "",
        college_name: "",
        feedback: "",
        student_image: ''
    });
    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTestimonial({ ...testimonial, [name]: value });

    }
    const submitData = async (e) => {
        e.preventDefault();
        await axios.post(url,JSON.stringify(testimonial)).then((res) => {
            console.log(testimonial);
            console.log(res.data);
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

    return (

        <div className='application-engineering'>
            <div className="top-content">
                <h1>Testimonial</h1>
                <div>
                    <NextPlanIcon className="next-icons" />
                </div>
            </div>
            <form onSubmit={submitData} method='POST'>
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
                    Student DP
                    <input
                        name='student_image'
                        value={testimonial.student_image}
                        onChange={changeEventHandler}
                        type="file"
                        className="hide_file" />
                </div>
                {/* <img style={{ width: "100px", height: "100px" }} src={image} alt="alt"></img> */}
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
    )
}

export default Testimonial