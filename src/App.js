import './App.css';
import LeftSidebar from './components/LeftSidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserData from './pages/home/UserData';
// application 
import ApplicationEngineering from './pages/apllication/Engineering';
import ApplicationMedical from './pages/apllication/Medical';
import EngineeringData from './pages/apllication/EngineeringData';
import MedicalData from './pages/apllication/MedicalData';
// admitcard 
import AdmitCardEngineering from './pages/admitcard/Engineering';
import AdmitCardEngineeringData from './pages/admitcard/EngineeringData';
import AdmitCardMedical from './pages/admitcard/Medical';
import AdmitCardMedicalData from './pages/admitcard/MedicalData';
// result 
import ResultEngineering from './pages/result/Engineering';
import ResultMedical from './pages/result/Medical';
import ResultEngineeringData from "./pages/result/EngineeringData";
import ResultMedicalData from "./pages/result/MedicalData";

// counselling 
import CounsellingEngineering from './pages/counselling/Engineering';
import CounsellingMedical from './pages/counselling/Medical';
import CounsellingEngineeringData from "./pages/counselling/EngineeringData";
import CounsellingMedicalData from "./pages/counselling/MedicalData";

// testmonial 
import Testimonial from './pages/testimonial/Testimonial';
import TestimonialData from './pages/testimonial/TestimonialData';

import Banner from './pages/banner/Banner';
 
 

function App() {
  return (
    <div className="App">
      <Router>
        <LeftSidebar>
          <Routes>
            <Route path="/" element={<UserData />} />
            {/* application */}
            <Route path="/application/engineering" element={<ApplicationEngineering />} />
            <Route path="/application/medical" element={<ApplicationMedical/>} />
            <Route path="/application/engineering/engineeringData" element={<EngineeringData/>} />
            <Route path="/application/medical/medicalData" element={<MedicalData/>} />
            {/* admit card */}
            <Route path="/admitcard/engineering" element={<AdmitCardEngineering/>} />
            <Route path="/admitcard/medical" element={<AdmitCardMedical/>} />
            <Route path="/admitcard/engineering/EngData" element={<AdmitCardEngineeringData/>} />
            <Route path="/admitcard/medical/MedData" element={<AdmitCardMedicalData/>} />
            {/* result */}
            <Route path="/result/engineering" element={<ResultEngineering/>} />
            <Route path="/result/medical" element={<ResultMedical/>} />
            <Route path="/result/engineering/EngData" element={<ResultEngineeringData/>} />
            <Route path="/result/medical/MedData" element={<ResultMedicalData/>} />
            {/* counselling */}
            <Route path="/counselling/engineering" element={<CounsellingEngineering/>} />
            <Route path="/counselling/medical" element={<CounsellingMedical/>}/>
            <Route path="/counselling/engineering/engData" element={<CounsellingEngineeringData/>}/>
            <Route path="/counselling/medical/medData" element={<CounsellingMedicalData/>}/>
            {/* testimonial */}
            <Route path="/testimonial" element={<Testimonial/>}/>
            <Route path="/testimonial/testimonialData" element={<TestimonialData/>}/>
            
            <Route path="/banner" element={<Banner/>} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </LeftSidebar>
      </Router>
    </div>
  );
}

export default App;
