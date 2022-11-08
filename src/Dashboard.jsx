import React from 'react';
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
import LoginUserInfo from './pages/loginuserdata/LoginUserInfo';


function Dashboard() {
    return (
        <div>
            {/* <Router> */}
                <LeftSidebar>
                    <Routes>
                        <Route path="/userdata" element={<UserData />} />
                        {/* application */}
                        {/* Engineering Update */}
                        <Route path="/application/engineering/*" element={<ApplicationEngineering />} />
                        <Route path="/application/engineering/engineeringData" element={<EngineeringData />} />
                        <Route path="/application/engineering/update" element={<UpdateEngineeringData />} />
                        {/* Medical Update */}
                        <Route path="/application/medical/update" element={<UpdateMedicalData />} />
                        <Route path="/application/medical" element={<ApplicationMedical />} />
                        <Route path="/application/medical/medicalData" element={<MedicalData />} />

                        {/* admit card */}
                        <Route path="/admitcard/engineering/update" element={<UpdateACEngineeringData />} />
                        <Route path="/admitcard/medical/update" element={<UpdateACMedicalData />} />
                        <Route path="/admitcard/engineering" element={<AdmitCardEngineering />} />
                        <Route path="/admitcard/medical" element={<AdmitCardMedical />} />
                        <Route path="/admitcard/engineering/EngData" element={<AdmitCardEngineeringData />} />
                        <Route path="/admitcard/medical/MedData" element={<AdmitCardMedicalData />} />
                        {/* result */}
                        <Route path="/result/medical/update" element={<UpdateResultMedicalData />} />
                        <Route path="/result/engineering" element={<ResultEngineering />} />
                        <Route path="/result/engineering/update" element={<UpdateResultEngineeringData />} />
                        <Route path="/result/medical" element={<ResultMedical />} />
                        <Route path="/result/engineering/EngData" element={<ResultEngineeringData />} />
                        <Route path="/result/medical/MedData" element={<ResultMedicalData />} />
                        {/* counselling */}
                        <Route path="/counselling/engineering/update" element={<CounsellingEngineeringUpdate />} />
                        <Route path="/counselling/medical/update" element={<CounsellingMedicalUpdate />} />
                        <Route path="/counselling/engineering" element={<CounsellingEngineering />} />
                        <Route path="/counselling/medical" element={<CounsellingMedical />} />
                        <Route path="/counselling/engineering/engData" element={<CounsellingEngineeringData />} />
                        <Route path="/counselling/medical/medData" element={<CounsellingMedicalData />} />  
                        {/* testimonial */}
                          {/* update */}
                        <Route path="/testimonial/updatetestimonial" element={<UpdateTestimonial />} />
                        <Route path="/testimonial" element={<Testimonial />} />
                        <Route path="/testimonial/testimonialData" element={<TestimonialData />} />

                        {/* Banner */}
                        <Route path="/banner/update" element={<BannerUpdateData />} />
                        <Route path="/banner" element={<Banner />} />
                        <Route path="/banner/bannerData" element={<BannerData />} />

                        {/* LoginUserInfo */}
                        <Route path="/userinfo" element={<LoginUserInfo/>} />
                        <Route path="*" element={<>Uff! page was not found</>} />
                    </Routes>
                </LeftSidebar>
            {/* </Router> */}
        </div>
    )
}

export default Dashboard