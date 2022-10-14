import React, { useState, useEffect } from 'react';
import "./UserData.css";
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

const url = "https://kalkaprasad.com/careerbanao/index.php/APIBase/getHomeDataAPI";

function UserData() {
    // apiData = [1,2,3,4,5];
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then((getData) => {
                console.log(getData.data);
                setApiData(getData.data);
            })
    },);
    const del = async (id)=>{
        await axios.post(`https://kalkaprasad.com/careerbanao/index.php/APIBase/DeleteHomeDataAPI?id=${id}`).then((res,req)=>{
            toast.success('Deleted Successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });    
    }).catch((err)=>{
            alert("Server down please try after sometime!")
        });
    } 


    return (
        <>
        <div className='engineeringData'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='header'>
                            <TableCell style={{ color: "#fff", }} align='center'>Id</TableCell>
                            <TableCell style={{ color: "#fff", }} align='center'>Name</TableCell>
                            <TableCell style={{ color: "#fff", }} align="center">Email</TableCell>
                            <TableCell style={{ color: "#fff", }} align='center'>Phone</TableCell>
                            <TableCell style={{ color: "#fff", }} align="center">Comment</TableCell>
                            <TableCell style={{ color: "#fff", }} align="center">Type</TableCell>
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
                                        <TableCell align='center'>{items.name}</TableCell>
                                        <TableCell align="center">{items.email}</TableCell>
                                        <TableCell align="center">{items.phone}</TableCell>
                                        <TableCell align="center">{items.comment}</TableCell>
                                        <TableCell align="center">{items.type}</TableCell>
                                        <TableCell align="center" ><DeleteForeverIcon titleAccess='Delete' onClick={()=> del(items.id)}
                                            style={{
                                                color: "red",
                                                cursor: "pointer"
                                            }}
                                        /></TableCell>
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

export default UserData