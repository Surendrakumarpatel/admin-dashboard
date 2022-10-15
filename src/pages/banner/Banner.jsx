import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";
 
const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/setBannerAPI";
const uploadUrl = "https://kalkaprasad.com/careerBanaoImages/upload.php";

function Banner() {
    const [banner, setBanner] = React.useState();
    const changeEventHandler = (e) => {
        const files  = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);

        fileReader.onload = (event) => {
            setBanner({
                img: event.target.result,
            })
        }
    }
     
    const submitData = async (e) => {
        e.preventDefault();
        await axios.post(uploadUrl, JSON.stringify(banner)).then((res) => {
            console.log(banner);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
         

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
                        // name='image'
                        // value={banner.image}
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