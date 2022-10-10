import React from 'react';
// import "./Engineering.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";

const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/setAdmitCardEngAPI";

function Engineering() {
    const [formData, setFormData] = React.useState({
        college_name: "",
        college_logo: "",
        college_address: "",
        college_category: "",
        web_link: "",
        status: "0"
    });
    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    const submitData = async (e) => {
        e.preventDefault();
        await axios.post(url, JSON.stringify(formData)).then((res) => {
            console.log(formData);
            console.log(res.data);
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
                        name='category'
                        value={formData.category}
                        onChange={changeEventHandler}
                        helperText="Please select your currency"
                        variant="standard"
                        required
                    >
                        <MenuItem value="Government">Government</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                    </TextField>
                </div>

                <div className='upload'>
                    College Logo
                    <input
                        name='college_logo'
                        value={formData.college_logo}
                        onChange={changeEventHandler}
                        type="file"
                        className="hide_file"
                        required 
                    />
                </div>
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
    )
}

export default Engineering