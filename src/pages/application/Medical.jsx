import React from 'react';
import "./Engineering.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { BaseUrl } from '../baseurl/baseurl';

const url = `${BaseUrl}/SetMedAPPDataAPI`;
const uploadUrl = "https://kalkaprasad.com/careerBanaoImages/upload.php";

function Medical() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
    const [formData, setFormData] = React.useState({
        college_name: "",
        college_logo: "",
        college_address: "",
        Last_date: "",
        latest_news: "",
        news_event: "",
        Introduction: "",
        college_category: "",
        apply_link: ""
    });
    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value });
    }

    const submitMedicalData = async (data,e) => {
        e.preventDefault();
        console.log(data.avatar[0]);
        const formValue = new FormData();
        formValue.append("avatar", data.avatar[0]);

        const res = await fetch(uploadUrl, {
            method: "POST",
            body: formValue,
        }).then((res) => res.json());

        console.log(formData);
        await axios.post(url, JSON.stringify({
            college_name:formData.college_name,
            college_logo:res.url,
            college_address:formData.college_address,
            Last_date:formData.Last_date,
            latest_news: formData.latest_news,
            news_event:formData.news_event,
            Introduction:formData.Introduction,
            college_category:formData.college_category,
            apply_link:formData.apply_link
        })).then((res) => {
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
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
        setFormData({
            college_name: "",
            college_logo: "",
            college_address: "",
            Last_date: "",
            latest_news: "",
            news_event: "",
            Introduction: "",
            college_category: "",
            apply_link: ""
        })
    }
    const goMedDataPage = ()=>{
       navigate("/dashboard/application/medical/medicalData");
    }
     

    return (
        <>
        <div className='application-engineering'>
            <div className="top-content">
                <h1>Create Exams</h1>
                <div>
                    <NextPlanIcon onClick = {goMedDataPage} className="next-icons" />
                </div>
            </div>
            <form onSubmit={handleSubmit(submitMedicalData)}>
                <div>
                    <TextField
                        style={{ margin: "0.5rem" }}
                        label="College Name"
                        id="outlined-size-small"
                        size="small"
                        name='college_name'
                        value={formData.college_name}
                        onChange={changeEventHandler}
                    />
                    <TextField
                        style={{ margin: "0.5rem" }}
                        label="College Address"
                        id="outlined-size-small"
                        size="small"
                        name='college_address'
                        value={formData.college_address}
                        onChange={changeEventHandler}
                    />

                </div>

                <div>
                    <TextField
                        style={{ margin: "0.5rem" }}
                        label="News Events"
                        id="outlined-size-small"
                        size="small"
                        name='news_event'
                        value={formData.news_event}
                        onChange={changeEventHandler}
                    />

                    <TextField
                        style={{ margin: "0.5rem" }}
                        label="Latest News"
                        id="outlined-size-small"
                        size="small"
                        name='latest_news'
                        value={formData.latest_news}
                        onChange={changeEventHandler}
                    />
                </div>

                <div>
                    <TextField
                        style={{ margin: "0.5rem" }}
                        label="Apply Link"
                        id="outlined-size-small"
                        size="small"
                        name='apply_link'
                        value={formData.apply_link}
                        onChange={changeEventHandler}
                    />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Category"
                        name='college_category'
                        value={formData.college_category}
                        onChange={changeEventHandler}
                        helperText="Please select your college category"
                        variant="standard"
                    >
                        <MenuItem value="Government">Government</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                    </TextField>
                </div>

                <div>
                    <TextField
                        style={{ margin: "0.5rem" }}
                        type='date'
                        id="outlined-size-small"
                        size="small"
                        name='Last_date'
                        value={formData.Last_date}
                        onChange={changeEventHandler}
                    />

                </div>

                <label className='intro-of-college'>Introduction:</label>
                <textarea
                    rows='4'
                    cols="50"
                    name="Introduction"
                    value={formData.Introduction}
                    onChange={changeEventHandler}
                />
                <div className='upload'>
                    College Logo
                    <input className="hide_file" type="file" {...register("avatar")} style={{cursor:"pointer"}} accept=".jpeg,.png , .jpg"/>
                </div>
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
        <ToastContainer/>
        </>

        
    )
}

export default Medical