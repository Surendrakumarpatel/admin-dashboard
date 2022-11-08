import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock,FaUser } from "react-icons/fa";
import { GrAnnounce} from 'react-icons/gr';
import {VscFeedback} from 'react-icons/vsc';
import {MdEngineering} from 'react-icons/md';
import {FaHandHoldingMedical} from 'react-icons/fa';
import RateReviewIcon from '@mui/icons-material/RateReview';
import {RiShieldStarFill} from "react-icons/ri";
import {HiDocumentDownload} from "react-icons/hi";
import CampaignIcon from '@mui/icons-material/Campaign';
import {BsFillFileEarmarkImageFill} from 'react-icons/bs';
import {AiOutlineAppstore,AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import PersonIcon from '@mui/icons-material/Person';

const routes = [
  {
    path: "/dashboard/userdata",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/dashboard/testimonial",
    name: "Testimonial",
    icon: <RateReviewIcon fontSize="small"/>,
  },
  // application
  {
    path: "/file-manager", 
    name: "Application",  
    icon: <AiOutlineAppstore />,
    subRoutes: [
      {
        path: "/dashboard/application/engineering",
        name: "Engineering",
        icon: <MdEngineering/>,
      },
      {
        path: "/dashboard/application/medical",
        name: "Medical",
        icon: <FaHandHoldingMedical/>,
      },
       
    ],
  },
  // admit-Card
  {
    path: "/file-manager", 
    name: "Admit Card",  
    icon: <HiDocumentDownload/>,
    subRoutes: [
      {
        path: "/dashboard/admitcard/engineering",
        name: "Engineering",
        icon: <MdEngineering/>,
      },
      {
        path: "/dashboard/admitcard/medical",
        name: "Medical",
        icon: <FaHandHoldingMedical/>,
      },
       
    ],
  },
  // Result
  {
    path: "/file-manager", 
    name: "Result",  
    icon: <RiShieldStarFill/>,
    subRoutes: [
      {
        path: "/dashboard/result/engineering",
        name: "Engineering",
        icon: <MdEngineering/>,
      },
      {
        path: "/dashboard/result/medical",
        name: "Medical",
        icon: <FaHandHoldingMedical/>,
      },
       
    ],
  },
  // counselling
  {
    path: "/file-manager",
    name: "Counselling",
    icon: <CampaignIcon  />,
    subRoutes: [
      {
        path: "/dashboard/counselling/engineering",
        name: "Engineering",
        icon: <MdEngineering/>,
      },
      {
        path: "/dashboard/counselling/medical",
        name: "Medical",
        icon: <FaHandHoldingMedical/>,
      },
      
    ],
  },
  {
    path: "/dashboard/banner",
    name: "Banner",
    icon: <BsFillFileEarmarkImageFill/>,
  },
  {
    path: "/dashboard/userinfo",
    name: "Login User Info",
    icon: <PersonIcon/>,
  },
 
];

const LeftSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  CareerBanao
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default LeftSidebar;