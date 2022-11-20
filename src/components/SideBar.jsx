import React from "react";
import "./SideBar.css";
import { motion } from "framer-motion";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import OutputIcon from '@mui/icons-material/Output';
import CampaignIcon from '@mui/icons-material/Campaign';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import MenuIcon from '@mui/icons-material/Menu';
import ApplicationEng from "../pages/ApplicationEng";
import { useNavigate } from "react-router-dom";
const SideBar = ({ children }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const handleClick1 = () => {
        setOpen1(!open1);

    };
    const handleClick2 = () => {
        setOpen2(!open2);

    };
    const handleClick3 = () => {
        setOpen3(!open3);

    };
    const handleClick4 = () => {
        setOpen4(!open4);

    };

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const navigateToHome = () =>{
        navigate("/home");
    }
    return (
        <>
            <div className="main-container">
                <motion.div animate={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                    <div className="topbar">
                        {isOpen && <h2>CareerBanao</h2>}
                        <MenuIcon onClick={toggle} style={{ cursor: "pointer" }} />
                    </div>
                    <section className="routes">
                        <ListItemButton onClick={navigateToHome}>
                            <ListItemIcon>
                                <InboxIcon className="icons" />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>

                        <ListItemButton onClick={handleClick1}>
                            <ListItemIcon>
                                <InboxIcon className="icons" />
                            </ListItemIcon>
                            <ListItemText primary="Application" />
                            {open1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        {isOpen && <Collapse in={open1} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton className="submenu" sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <SchoolIcon className="icons" />
                                    </ListItemIcon>
                                    <ListItemText primary="Engineering" />
                                </ListItemButton>
                                <ListItemButton className="submenu" sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <SchoolIcon className="icons" />
                                    </ListItemIcon>
                                    <ListItemText primary="Private" />
                                </ListItemButton>

                            </List>
                        </Collapse>
                        }
                        <ListItemButton onClick={handleClick2}>
                            <ListItemIcon>
                                <OutputIcon className="icons" />
                            </ListItemIcon>
                            <ListItemText primary="Result" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        {isOpen && <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton className="submenu" sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <SchoolIcon className="icons" />
                                    </ListItemIcon>
                                    <ListItemText primary="Engineering" />
                                </ListItemButton>
                                <ListItemButton className="submenu" sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <SchoolIcon className="icons" />
                                    </ListItemIcon>
                                    <ListItemText primary="Private" />
                                </ListItemButton>
                            </List>
                        </Collapse>}


                        <ListItemButton onClick={handleClick3}>
                            <ListItemIcon>
                                <CardMembershipIcon className="icons" />
                            </ListItemIcon>
                            <ListItemText primary="Admit Card" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        {isOpen && <Collapse in={open3} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton className="submenu" sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <SchoolIcon className="icons" />
                                    </ListItemIcon>
                                    <ListItemText primary="Engineering" />
                                </ListItemButton>
                                <ListItemButton className="submenu" sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <SchoolIcon className="icons" />
                                    </ListItemIcon>
                                    <ListItemText primary="Private" />
                                </ListItemButton>
                            </List>
                             
                        </Collapse>}



                        <ListItemButton onClick={handleClick4}>
                            <ListItemIcon>
                                <CampaignIcon className="icons" />
                            </ListItemIcon>
                            <ListItemText primary="Counselling" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        {isOpen && <Collapse in={open4} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton className="submenu" sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <SchoolIcon className="icons" />
                                    </ListItemIcon>
                                    <ListItemText primary="Engineering" />
                                </ListItemButton>
                                <ListItemButton className="submenu" sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <SchoolIcon className="icons" />
                                    </ListItemIcon>
                                    <ListItemText primary="Private" />
                                </ListItemButton>
                            </List>
                        
                        </Collapse>}
                    </section>
                </motion.div>
                <main>{children}</main>
                <div className="postData">
                    <ApplicationEng />
                </div>
            </div>

        </>
    );
};

export default SideBar;