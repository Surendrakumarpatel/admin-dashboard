import React from 'react';
import Button from "@mui/material/Button";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BaseUrl } from '../baseurl/baseurl';
import {BaseUrlImg} from '../baseurl/baseurl';

const url = `${BaseUrl}/updatebannerAPI`;
const uploadUrl = `${BaseUrlImg}/careerBanaoImages/upload.php`;

function UpdateBannerData() {
    const navigate = useNavigate();
    const location = useLocation(); 
    const id = location.state.id;
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data.avatar[0]);
        const formData = new FormData();
        formData.append("avatar", data.avatar[0]);

        const res = await fetch(uploadUrl, {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
       await axios.post(url, JSON.stringify({
        id:id,
        banner_url:res.url
       })).then((res,req)=>{
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
        }).catch((err)=>{
            console.log(err);
        });
        document.getElementById('uploadFile').value = "";
         
    };
    const goToBannerData = ()=>{
        navigate("/dashboard/banner/bannerData");
    }

    return (
        <>
        <div className='application-engineering'>
            <div className="top-content">
                <h1>Update Banner</h1>
                <div>
                    <NextPlanIcon onClick = {goToBannerData} className="next-icons" />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <p style={{marginTop:"12px"}}>Banner Upload:</p>
                <div className='upload' >
                  <input id='uploadFile' type="file" {...register("avatar")} style={{cursor:"pointer"}} accept=".jpeg,.png , .jpg" required/>
                </div>
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
        <ToastContainer/>
        </>
    )
}

export default UpdateBannerData