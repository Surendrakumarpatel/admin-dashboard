import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";
 
const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/setBannerAPI";
const uploadUrl = "https://kalkaprasad.com/careerBanaoImages/upload.php";

function Banner() {
    const [banner, setBanner] = React.useState({
         image: ''
    });
    const changeEventHandler = (e) => {
        setBanner(e.target.files[0]);
        // const name = e.target.name;
        // const value = e.target.value;
        // setBanner({...banner, [name]: value });
    }
    const submitData = async (e) => {
        e.preventDefault();
        console.log(banner);
        await axios.post(uploadUrl, JSON.stringify(banner)).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
        setBanner({
            image: ''
        });
    }

    return (

        <div className='application-engineering'>
            <div className="top-content">
                <h1>Set Banner</h1>
                <div>
                    <NextPlanIcon className="next-icons" />
                </div>
            </div>
            <form enctype="multipart/form-data" onSubmit={submitData}  method='POST'>
                <div className='upload'>
                    Banner
                    <input
                        name='image'
                        value={banner.image}
                        onChange={changeEventHandler}
                        type="file"
                        className = "hide_file" />
                </div>
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
    )
}

export default Banner