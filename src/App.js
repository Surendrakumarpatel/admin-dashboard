import './App.css';
import { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserData from './pages/home/UserData';
// application 

import ApplicationEngineering from './pages/application/Engineering';
import UpdateMedicalData from './pages/application/UpdateMedicalData';
import ApplicationMedical from './pages/application/Medical';
import EngineeringData from './pages/application/EngineeringData';
import MedicalData from './pages/application/MedicalData';
// admitcard
import UpdateACMedicalData from "./pages/admitcard/UpdateMedicalData"
import UpdateACEngineeringData from "./pages/admitcard/UpdateEngineeringData";
import AdmitCardEngineering from './pages/admitcard/Engineering';
import AdmitCardEngineeringData from './pages/admitcard/EngineeringData';
import AdmitCardMedical from './pages/admitcard/Medical';
import AdmitCardMedicalData from './pages/admitcard/MedicalData';
// result 
import UpdateResultEngineeringData from "./pages/result/UpdateEngineeringData"
import UpdateResultMedicalData from "./pages/result/UpdateMedicalData"
import ResultEngineering from './pages/result/Engineering';
import ResultMedical from './pages/result/Medical';
import ResultEngineeringData from "./pages/result/EngineeringData";
import ResultMedicalData from "./pages/result/MedicalData";

// counselling 

import CounsellingEngineeringUpdate from "./pages/counselling/UpdateEngineeringData"
import CounsellingMedicalUpdate from "./pages/counselling/UpdateMedicalData"
import CounsellingEngineering from './pages/counselling/Engineering';
import CounsellingMedical from './pages/counselling/Medical';
import CounsellingEngineeringData from "./pages/counselling/EngineeringData";
import CounsellingMedicalData from "./pages/counselling/MedicalData";

// testmonial 
import Testimonial from './pages/testimonial/Testimonial';
import TestimonialData from './pages/testimonial/TestimonialData';

// banner
import BannerUpdateData from "./pages/banner/UpdateBannerData"
import Banner from './pages/banner/Banner';
import BannerData from './pages/banner/BannerData';
import UpdateTestimonial from './pages/testimonial/UpdateTestimonial';
import UpdateEngineeringData from './pages/application/UpdateEngineeringData';
import Login from './pages/login/Login';
import Dashboard from './Dashboard';


function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
