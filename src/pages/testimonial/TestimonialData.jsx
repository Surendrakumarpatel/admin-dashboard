import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateIcon from '@mui/icons-material/Create';
import {useNavigate} from 'react-router-dom';
import { BaseUrl } from '../baseurl/baseurl';

function TestimonialData() {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`${BaseUrl}/fetchtestimonialsAPI`)
            .then((getData) => {
                console.log(getData.data);
                setApiData(getData.data);
            })
    },);
    const del = async (id) => {
        await axios.post(`${BaseUrl}/DeleteTestimonailsDataAPI?id=${id}`).then((res, req) => {
            toast.success('Deleted Successfully!', {
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
            alert("Server down please try after sometime!")
        });
    }

    // Update API
    const openForm = (id,student_name,college_name,feedback,student_image) => {
        navigate('/dashboard/testimonial/updatetestimonial',{state:{id:id,name:student_name,college_name:college_name,feedback:feedback,student_image:student_image}});
    }
    return (
        <>
            <div className='TestimonialData'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='header'>
                                <TableCell style={{ color: "#fff" }} align='center'>id</TableCell>
                                <TableCell style={{ color: "#fff" }} align="center">Students Name</TableCell>
                                <TableCell style={{ color: "#fff" }} align='center'>College Name</TableCell>
                                <TableCell style={{ color: "#fff" }} align="center">Feedback</TableCell>
                                <TableCell style={{ color: "#fff" }} align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                apiData.map((items) => {
                                    return (
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center">{items.id}</TableCell>
                                            <TableCell align='center'>{items.name}</TableCell>
                                            <TableCell align='center'>{items.college_name}</TableCell>
                                            <TableCell align="center">{items.feedback}</TableCell>
                                            <TableCell align="center">
                                                <DeleteForeverIcon titleAccess='Delete' onClick={() => del(items.id)}
                                                    style={{
                                                        color: "red",
                                                        cursor: "pointer",
                                                        marginRight:"10px"
                                                    }}
                                                />
                                                <CreateIcon titleAccess='Update' onClick={() => openForm(
                                                    items.id,
                                                    items.name,
                                                    items.college_name,
                                                    items.feedback,
                                                    items.student_image
                                                    )}
                                                    style={{
                                                        color: "orange",
                                                        cursor: "pointer",
                                                        marginLeft:"10px"
                                                    }}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <ToastContainer />
        </>


    )
}

export default TestimonialData