import React from 'react';
import "./Engineering.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/SetaEngAPPDataAPI";

function Engineering() {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        college_name:"",
        college_logo:"",
        college_address:"",
        Last_date:"",
        latest_news:"",
        news_event:"",
        Introduction:"",
        college_category:"",
        apply_link:""
    });
    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }
    const submitData = async (e) => {
        e.preventDefault();
        console.log(formData);
        await axios.post(url, JSON.stringify(formData)).then((res) => {
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
    const goEngDataPage = ()=>{
        navigate("/application/engineering/engineeringData");
    }

    return (
        <>
        <div className='application-engineering'>
            <div className="top-content">
                <h1>Create Exams</h1>
                <div>
                    <NextPlanIcon onClick= {goEngDataPage} className="next-icons" />
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
                        label="News Event"
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
                    <input
                        name='college_logo'
                        value={formData.college_logo}
                        onChange={changeEventHandler}
                        type="file"
                        className="hide_file" />
                </div>
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
        <ToastContainer />
        </>
        
    )
}

export default Engineering