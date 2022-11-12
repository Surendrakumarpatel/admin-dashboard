import React,{useState} from 'react';
import Button from "@mui/material/Button";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../baseurl/baseurl';
import {BaseUrlImg} from '../baseurl/baseurl';

const url = `${BaseUrl}/setBannerAPI`;
const uploadUrl = `${BaseUrlImg}/careerBanaoImages/upload.php`;

function Banner() {
    const navigate = useNavigate();
    const [image, setImage] = useState({
        img:"",
    });

    const showImage = (e) =>{
        console.log('====================================');
        console.log(e.target.files[0]);
        console.log('====================================');
        setImage({
            img:URL.createObjectURL(e.target.files[0])
        })
       
        console.log(image.img);
    }

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data.avatar[0]);
        const formData = new FormData();
        formData.append("avatar", data.avatar[0]);
        const res = await fetch(uploadUrl, {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
       await axios.post(url, JSON.stringify({banner_url:res.url})).then((res,req)=>{
        toast.success('Uploaded Successfully!', {
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
         
    };
    const goToBannerData = ()=>{
        navigate("/dashboard/banner/bannerData");
    }
     
    return (
        <>
        <div className='application-engineering'>
            <div className="top-content">
                <h1>Set Banner</h1>
                <div>
                    <NextPlanIcon onClick = {goToBannerData} className="next-icons" />
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <p style={{marginTop:"12px"}}>Banner Upload:</p>
                <div className='upload' >
                  <input onChange={showImage} type="file"  {...register("avatar")} style={{cursor:"pointer"}} accept=".jpeg,.png , .jpg"/>
                </div>
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
        <ToastContainer/>
        </>
    )
}

export default Banner