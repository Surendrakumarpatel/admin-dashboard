import React from 'react';
// import "./Engineering.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BaseUrl } from '../baseurl/baseurl';
import {BaseUrlImg} from '../baseurl/baseurl';

const url = `${BaseUrl}/updateAdmitCardEngAPI`;
const uploadUrl = `${BaseUrlImg}/careerBanaoImages/upload.php`;

function UpdateEngineeringData() {
    const location = useLocation();
    const id = location.state.id;
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [formData, setFormData] = React.useState({
        college_name: location.state.college_name,
        college_logo: location.state.college_logo,
        college_address: location.state.college_address,
        college_category: location.state.college_category,
        web_link: location.state.web_link,
        status: "0"
    });
    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const submitData = async (data, e) => {
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
            id: id,
            college_name: formData.college_name,
            college_logo: res.url,
            college_address: formData.college_address,
            college_category: formData.college_category,
            web_link: formData.web_link,
            status: formData.status
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
        setFormData({
            college_name: "",
            college_logo: "",
            college_address: "",
            college_category: "",
            web_link: "",
            status: "0"
        })
        document.getElementById('uploadFile').value = "";
    }

    const goEngData = () => {
        navigate("/dashboard/admitcard/engineering/EngData");
    }

    return (
        <>
            <div className='application-engineering'>
                <div className="top-content">
                    <h1>Update Engineering Data</h1>
                    <div>
                        <NextPlanIcon onClick={goEngData} className="next-icons" />
                    </div>
                </div>
                <form onSubmit={handleSubmit(submitData)}>
                    <div>
                        <TextField
                            style={{ margin: "0.5rem" }}
                            label="College Name"
                            id="outlined-size-small"
                            size="small"
                            name='college_name'
                            value={formData.college_name}
                            onChange={changeEventHandler}
                            required
                        />
                        <TextField
                            style={{ margin: "0.5rem" }}
                            label="College Address"
                            id="outlined-size-small"
                            size="small"
                            name='college_address'
                            value={formData.college_address}
                            onChange={changeEventHandler}
                            required
                        />

                    </div>
                    <div>
                        <TextField
                            style={{ margin: "0.5rem" }}
                            label="Web Link"
                            id="outlined-size-small"
                            size="small"
                            name='web_link'
                            value={formData.web_link}
                            onChange={changeEventHandler}
                            required
                        />
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Category"
                            name='college_category'
                            value={formData.college_category}
                            onChange={changeEventHandler}
                            helperText="Please select your currency"
                            variant="standard"
                            required
                        >
                            <MenuItem value="Government">Government</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                        </TextField>
                    </div>
                    <p style={{marginTop:"12px"}}>Upload Logo:</p>
                    <div className='upload'>
                        <input id='uploadFile' type="file" {...register("avatar")} style={{ cursor: "pointer" }} accept=".jpeg,.png , .jpg" required/>

                    </div>
                    <Button type='submit' variant="contained">Submit</Button>
                </form>
            </div>
            <ToastContainer />
        </>

    )
}

export default UpdateEngineeringData;