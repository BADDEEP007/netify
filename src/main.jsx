import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navigation/navbar";

import Footer from "./components/Footer/footerSection";
// Importing the 404 Page Component
import NotFound from "./page/404"
import Faq from "./page/faq";
import Test from "./page/DepressionTestPage";
import AssessmentPage from "./page/AssessmentToolPage";

function Main() {
  return (
    <>
    <BrowserRouter>
      <div id="root">
        <Navbar />
        <div className="main-content">
          {" "}
          {/* Main content wrapper */}
          <Routes>
            <Route path="/" element={<AssessmentPage/>} />
            <Route path="*" element={<NotFound />} /> {/* 404 Route */}
            <Route path="/Self-Assessment-Tool" element={<AssessmentPage />} />
            <Route path="/faqs" element={<Faq />} />

            <Route path="/Depression-Tool" element={<Test />} />
            
          </Routes>
        </div>
        <Footer />
        
      </div>
    </BrowserRouter>
    </>
  );
}

export default Main;
