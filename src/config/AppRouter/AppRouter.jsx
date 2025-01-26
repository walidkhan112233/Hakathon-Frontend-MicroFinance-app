import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login/Login"; // Ensure the correct file path and case
import LandingPage from "../../pages/LandingPage/LandingPage";
import LoanRequestForm from "../../pages/LoanRequestForm/LoanRequestForm";
import AdminDashboard from "../../pages/AdminDashboard/AdminDashboard";
import UserDashboard from "../../pages/UserDashboard/UserDashboard";
import WeddingLoans from "../../pages/LandingPage/Loans-Pages/WeddingLoans/WeddingLoans";
import HomeConstructionLoans from "../../pages/LandingPage/Loans-Pages/HomeConstructionLoans/HomeConstructionLoans";
import EducationLoans from "../../pages/LandingPage/Loans-Pages/EducationLoans/EducationLoans";
import BusnissStartupLoans from "../../pages/LandingPage/Loans-Pages/BusnissStartupLoans/BusnissStartupLoans";
import Navbar from "../../components/Navbar/Navbar";
import AdminLogin from "../../pages/AdminLogin/AdminLogin";

function AppRouter() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loan-requestform" element={<LoanRequestForm />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/admindashboard" element={<AdminDashboard />} />       
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/adminlogin" element={<AdminLogin />} />


        <Route path="/wedding-loans" element={<WeddingLoans />} />
        <Route path="/home-construction-loans" element={<HomeConstructionLoans />} />
        <Route path="/education-loans" element={<EducationLoans />} />
        <Route path="/business-startup-loans" element={<BusnissStartupLoans/>} /> 
      </Routes>
    </Router>
  );
}

export default AppRouter;
