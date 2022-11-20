import React, { useState, useEffect } from 'react';
import "./BannerData.css";
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
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../baseurl/baseurl';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function BannerData() {
    const navigate = useNavigate();
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`${BaseUrl}/getBannerAPI`)
            .then((getData) => {
                console.log(getData.data);
                setApiData(getData.data);
            })
    },);
    const del = async (id) => {
        await axios.post(`${BaseUrl}/deleteBannerAPI?id=${id}`).then((res, req) => {
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
    const openForm = (id, banner_url) => {
        navigate('/dashboard/banner/update', {
            state: {
                id: id,
                banner_url: banner_url,
            }
        });
    }

    // Dialog Function 
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState();
    const showImage = (img) => {
        setOpen(true);
        setImage(img);
    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='engineeringData'>
                <TableContainer className='style-7' component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='header'>
                                <TableCell style={{ color: "#fff", }} align='center'>id</TableCell>
                                <TableCell style={{ color: "#fff", }} align='center'>Banner URL</TableCell>
                                <TableCell style={{ color: "#fff", }} align='center'>Action</TableCell>
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
                                            <TableCell style={{color:"blue",cursor:"pointer"}} align='center' onClick={()=>showImage(items.banner_url)}>Show Image</TableCell>
                                            <TableCell align="center">
                                                <DeleteForeverIcon titleAccess='Delete' onClick={() => del(items.id)}
                                                    style={{
                                                        color: "red",
                                                        cursor: "pointer",
                                                        marginRight: "10px"
                                                    }}
                                                />
                                                <CreateIcon titleAccess='Update' onClick={() => openForm(
                                                    items.id,
                                                    items.banner_url
                                                )}
                                                    style={{
                                                        color: "orange",
                                                        cursor: "pointer",
                                                        marginLeft: "10px"
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

                <div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Banner Image"}
                        </DialogTitle>
                        <DialogContent className="dialog-image-center">
                            <DialogContentText id="alert-dialog-description">
                                <img className='d-img' src={`${image}`} />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} >
                                Ok
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default BannerData;
