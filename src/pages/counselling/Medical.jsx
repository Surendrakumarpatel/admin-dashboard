import React from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import NextPlanIcon from '@mui/icons-material/NextPlan';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/setCounsMedAPI";

function Medical(){
  const navigate = useNavigate();
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

    const submitData = async (e) => {
        e.preventDefault();
        console.log(formData);
        await axios.post(url, JSON.stringify(formData)).then((res)=>{ 
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
        navigate("/counselling/medical/medData");
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
            <form onSubmit={submitData}>
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
                    <input
                        name='college_logo'
                        value={formData.college_logo}
                        onChange={changeEventHandler}
                        type="file"
                        className="hide_file"/>
                </div>
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
        <ToastContainer/>
        </>
        
    )
}

export default Medical