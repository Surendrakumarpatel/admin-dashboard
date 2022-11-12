import React, { useState, useEffect } from 'react'
import "./EngineeringData.css";
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
 

function EngineeringData() {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`${BaseUrl}/getApplicationDetailsEng`)
            .then((getData) => {
                console.log(getData.data);
                setApiData(getData.data);
            })
    },);
    const del = async (id) => {
        await axios.post(`${BaseUrl}/DeleteApplicationEngDataAPI?id=${id}`).then((res, req) => {
            toast.success('Deleted Successfully!', {
                position: "top-center",
                autoClose: 1000,
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
    const openForm = (id, cn, cc,cl,ca,ld, ln, ne, intro, al)=>{
        navigate("/dashboard/application/engineering/update",{state:{
            id:id,
            college_name:cn,
            college_category:cc,
            college_logo:cl,
            college_address:ca,
            last_date:ld,
            latest_news:ln,
            new_event:ne,
            introduction:intro,
            apply_link:al
        }});
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
                                                    marginRight:"10px"
                                                }}
                                            />
                                            <CreateIcon titleAccess='Update' onClick={() => openForm(
                                                items.id,
                                                items.college_name,
                                                items.college_category,
                                                items.college_logo,
                                                items.college_address,
                                                items.Last_date,
                                                items.latest_news,
                                                items.news_event,
                                                items.Introduction,
                                                items.apply_link,
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

export default EngineeringData