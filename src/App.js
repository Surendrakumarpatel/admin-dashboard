import './App.css';
import LeftSidebar from './components/LeftSidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import EngineeringData from './pages/apllication/EngineeringData';
import UserData from './pages/home/UserData';
// import ApplicationEng from './pages/ApplicationEng';
import ApplicationEngineering from './pages/apllication/Engineering';
import ApplicationMedical from './pages/apllication/Medical';
import AdmitCardEngineering from './pages/admitcard/Engineering';
import AdmitCardMedical from './pages/admitcard/Medical';
import ResultEngineering from './pages/result/Engineering';
import ResultMedical from './pages/result/Medical';
import CounsellingEngineering from './pages/counselling/Engineering';
import CounsellingMedical from './pages/counselling/Medical';
import Testimonial from './pages/testimonial/Testimonial';
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
            {/* admit card */}
            <Route path="/admitcard/engineering" element={<AdmitCardEngineering/>} />
            <Route path="/admitcard/medical" element={<AdmitCardMedical/>} />
            {/* result */}
            <Route path="/result/engineering" element={<ResultEngineering/>} />
            <Route path="/result/medical" element={<ResultMedical/>} />
            {/* counselling */}
            <Route path="/counselling/engineering" element={<CounsellingEngineering/>} />
            <Route path="/counselling/medical" element={<CounsellingMedical/>} />
            {/* testimonial */}
            <Route path="/testimonial" element={<Testimonial/>} />
            <Route path="/banner" element={<Banner/>} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </LeftSidebar>
      </Router>
    </div>
  );
}

export default App;
