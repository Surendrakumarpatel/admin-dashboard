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
import {useNavigate} from 'react-router-dom'
import { BaseUrl } from '../baseurl/baseurl';

function EngineeringData() {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`${BaseUrl}/getResultEng`)
            .then((getData) => {
                console.log(getData.data);
                setApiData(getData.data);
            })
    },);
    const del = async (id) => {
        await axios.post(`${BaseUrl}/deleteResultEngAPI?id=${id}`).then((res, req) => {
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
            alert("Server down please try after sometime!")
        });
    }
    // Update API 
    const openForm = (id, cn, ca, cc, wl)=>{
        navigate("/dashboard/result/engineering/update" ,{state:{
            id:id,
            college_name:cn,
            college_address:ca,
            college_category:cc,
            web_link:wl,
        }})
    }
    return (
        <>
            <div className='engineeringData'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='header'>
                                <TableCell style={{ color: "#fff", }} align='center'>id</TableCell>
                                <TableCell style={{ color: "#fff", }} align='center'>College Name</TableCell>
                                <TableCell style={{ color: "#fff", }} align="center">College Address</TableCell>
                                <TableCell style={{ color: "#fff", }} align='center'>Category</TableCell>
                                <TableCell style={{ color: "#fff", }} align="center">Last Date</TableCell>
                                <TableCell style={{ color: "#fff", }} align="center">Action</TableCell>
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
                                            <TableCell align='center'>{items.college_name}</TableCell>
                                            <TableCell align="center">{items.college_address}</TableCell>
                                            <TableCell align="center">{items.college_category}</TableCell>
                                            <TableCell align="center">{items.Last_date}</TableCell>
                                            <TableCell align="center">
                                                <DeleteForeverIcon titleAccess='Delete' onClick={() => del(items.id)}
                                                    style={{
                                                        color: "red",
                                                        cursor: "pointer",
                                                        marginRight:"10px",
                                                    }}
                                                />
                                                <CreateIcon titleAccess='Update' onClick={() => openForm(
                                                    items.id,
                                                    items.college_name,
                                                    items.college_address,
                                                    items.college_category,
                                                    items.web_link,
                                                    )}
                                                    style={{
                                                        color: "orange",
                                                        cursor: "pointer",
                                                        marginLeft:"10px",
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

export default EngineeringData