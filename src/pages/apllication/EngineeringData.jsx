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

function EngineeringData() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get("https://kalkaprasad.com/careerbanao/index.php/APIBase/getApplicationDetailsEng")
            .then((getData) => {
                console.log(getData.data);
                setApiData(getData.data);
            })
    },);
    return (
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
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default EngineeringData