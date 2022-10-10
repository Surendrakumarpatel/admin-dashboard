import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock,FaUser } from "react-icons/fa";
import { GrAnnounce} from 'react-icons/gr';
import {VscFeedback} from 'react-icons/vsc';
import {AiOutlineAppstore,AiTwotoneFileExclamation } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/testimonial",
    name: "Testimonial",
    icon: <VscFeedback/>,
  },
  // application
  {
    path: "/file-manager", 
    name: "Application",  
    icon: <AiOutlineAppstore />,
    subRoutes: [
      {
        path: "/application/engineering",
        name: "Engineering",
        icon: <FaUser />,
      },
      {
        path: "/application/medical",
        name: "Medical",
        icon: <FaLock />,
      },
       
    ],
  },
  // admit-Card
  {
    path: "/file-manager", 
    name: "Admit Card",  
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/admitcard/engineering",
        name: "Engineering",
        icon: <FaUser />,
      },
      {
        path: "/admitcard/medical",
        name: "Medical",
        icon: <FaLock />,
      },
       
    ],
  },
  // Result
  {
    path: "/file-manager", 
    name: "Result",  
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/result/engineering",
        name: "Engineering",
        icon: <FaUser />,
      },
      {
        path: "/result/medical",
        name: "Medical",
        icon: <FaLock />,
      },
       
    ],
  },
  // counselling
  {
    path: "/file-manager",
    name: "Counselling",
    icon: <GrAnnounce/>,
    subRoutes: [
      {
        path: "/counselling/engineering",
        name: "Engineering",
        icon: <FaUser />,
      },
      {
        path: "/counselling/medical",
        name: "Medical",
        icon: <FaLock />,
      },
      
    ],
  },
  {
    path: "/banner",
    name: "Banner",
    icon: <VscFeedback/>,
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