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
import { useNavigate } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import { BaseUrl } from '../baseurl/baseurl';

function MedicalData() {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`${BaseUrl}/getCounslingDetailsMed`)
            .then((getData) => {
                console.log(getData.data);
                setApiData(getData.data);
            })
    },);
    const del = async (id) => {
        await axios.post(`${BaseUrl}/deleteCounsMedAPI?id=${id}`).then((res, req) => {
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

    const openForm = (id,college_name,college_logo,lates_news,new_event,introduction,web_link)=>{
        navigate('/dashboard/counselling/medical/update',{state:{
            id:id,
            college_name:college_name,
            college_logo:college_logo,
            lates_news:lates_news,
            new_event:new_event,
            introduction:introduction,
            web_link:web_link
        }});
    }
    return (
        <>
        <div className='engineeringData'>
            <TableContainer className='style-7' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='header'>
                            <TableCell style={{ color: "#fff", }} align='center'>id</TableCell>
                            <TableCell style={{ color: "#fff", }} align='center'>College Name</TableCell>
                            <TableCell style={{ color: "#fff", }} align="center">Latest News</TableCell>
                            <TableCell style={{ color: "#fff", }} align="center">News Event</TableCell>
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
                                        <TableCell align="center">{items.lates_news}</TableCell>
                                        <TableCell align="center">{items.new_event}</TableCell><TableCell align="center"><DeleteForeverIcon titleAccess='Delete' onClick={() => del(items.id)}
                                            style={{
                                                color: "red",
                                                cursor: "pointer"
                                            }}
                                        />
                                        <CreateIcon titleAccess='Update' onClick={() => openForm(
                                                items.id,
                                                items.college_name,                                              
                                                items.college_logo,
                                                items.lates_news,
                                                items.new_event,
                                                items.introduction,
                                                items.web_link,
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
        <ToastContainer/>
        </>
        
    )
}

export default MedicalData