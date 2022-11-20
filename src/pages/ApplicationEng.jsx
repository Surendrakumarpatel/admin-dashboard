import React from 'react';
import "./ApplicationEng.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/getApplicationDetailsEng";
function ApplicationEng() {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        college_name: "",
        college_logo: "",
        college_address: "",
        last_date: "",
        latest_news: "",
        news_events: "",
        introduction: "",
        category: "",
        apply_link: ""
    });
    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const submitData = async (e) => {
        e.preventDefault();
        await axios.post(url, JSON.stringify(formData)).then((res)=>{ 
            console.log(formData);
            console.log(res.data);
        }).catch((err)=>{
           console.log(err);
        })
        setFormData({
            college_name: "",
            college_logo: "",
            college_address: "",
            last_date: "",
            latest_news: "",
            news_events: "",
            introduction: "",
            category: "",
            apply_link: ""
        })
        document.getElementById('uploadFile').value = "";
    }
     
    return (

        <div className='application-engineering'>
            <div className="top-content">
                <h1>Create Exams</h1>
                <div>
                   <NextPlanIcon className="next-icons" />
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
                        label="News Events"
                        id="outlined-size-small"
                        size="small"
                        name='news_events'
                        value={formData.news_events}
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
                        name='category'
                        value={formData.category}
                        onChange={changeEventHandler}
                        helperText="Please select your currency"
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
                        name='last_date'
                        value={formData.last_date}
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
                        id='uploadFile'
                        name='college_logo'
                        value={formData.college_logo}
                        onChange={changeEventHandler}
                        type="file"
                        className="hide_file" />
                </div>
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
    )
}

export default ApplicationEng