import React from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useForm} from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BaseUrl } from '../baseurl/baseurl';


const url = `${BaseUrl}/setCounsMedAPI`;
const uploadUrl = "https://kalkaprasad.com/careerBanaoImages/upload.php";

function Medical(){
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();
    const [formData, setFormData] = React.useState({
        college_name: "",
        college_logo: "",
        lates_news: "",
        new_event: "",
        introduction: "",
        web_link: "",
        status:"0"
    });
    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const submitData = async (data,e) => {
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
        college_name: formData.college_name,
        college_logo: res.url,
        lates_news: formData.lates_news,
        new_event: formData.new_event,
        introduction: formData.introduction,
        web_link: formData.web_link,
        status:formData.statusl
        })).then((res)=>{ 
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
        }).catch((err)=>{
           console.log(err);
        })
        setFormData({
            college_name: "",
            college_logo: "",
            lates_news: "",
            new_event: "",
            introduction: "",
            web_link: "",
            status:"0"
        })
    }
    const goMedData = ()=>{
        navigate("/dashboard/counselling/medical/medData");
    }
     
    return (
        <>
        <div className='application-engineering'>
            <div className="top-content">
                <h1>Create Exams</h1>
                <div>
                   <NextPlanIcon onClick = {goMedData} className="next-icons" />
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
                    />
                     <TextField
                        style={{ margin: "0.5rem" }}
                        label="Web Link"
                        id="outlined-size-small"
                        size="small"
                        name='web_link'
                        value={formData.web_link}
                        onChange={changeEventHandler}
                    />

                </div>

                <div>
                    <TextField
                        style={{ margin: "0.5rem" }}
                        label="News Events"
                        id="outlined-size-small"
                        size="small"
                        name='new_event'
                        value={formData.new_event}
                        onChange={changeEventHandler}
                    />

                    <TextField
                        style={{ margin: "0.5rem" }}
                        label="Latest News"
                        id="outlined-size-small"
                        size="small"
                        name='lates_news'
                        value={formData.lates_news}
                        onChange={changeEventHandler}
                    />
                </div>
 
                <label className='intro-of-college'>Introduction:</label>
                <textarea
                    rows='4'
                    cols="50"
                    name="introduction"
                    value={formData.introduction}
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