import React from 'react';
// import "./Engineering.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/setAdmitCardEngAPI";

function Engineering() {
    const navigate = useNavigate();
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

    const goEngData = () => {
        navigate("/admitcard/engineering/EngData");
    }

    return (
        <>
            <div className='application-engineering'>
                <div className="top-content">
                    <h1>Create Exams</h1>
                    <div>
                        <NextPlanIcon onClick={goEngData} className="next-icons" />
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
            <ToastContainer />
        </>

    )
}

export default Engineering