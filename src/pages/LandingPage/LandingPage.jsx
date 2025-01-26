import { Link } from "react-router-dom";
import "./LandingPage.css"; // Import the CSS for styling

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Our Loan Service</h1>
      <div className="category-container">
        <div className="category">
          <h2>Wedding Loans</h2>
          <br />
          <p style={{fontWeight:"bold"}}>You Can Calculate Your Loan Time and Money For the (Weddings Loans) in This Page</p>
          <br />
          <Link to="/wedding-loans" className="category-link">Explore</Link>
        </div>
        <div className="category">
          <h2>Home Construction Loans</h2>
          <br />
          <p style={{fontWeight:"bold"}}>You Can Calculate Your Loan Time and Money For the (Home Construction Loans) in This Page</p>
       <br />
       <Link to="/home-construction-loans" className="category-link">Explore</Link>
        </div>
        <div className="category">
          <h2>Business Startup Loans</h2>
          <br />
          <p style={{fontWeight:"bold"}}>You Can Calculate Your Loan Time and Money For the (Business Loans) in This Page</p>
          <br />
          <Link to="/business-startup-loans" className="category-link">Explore</Link>
        </div>
        <div className="category">
          <h2>Education Loans</h2>
          <br />
          <p style={{fontWeight:"bold"}} >You Can Calculate Your Loan Time and Money For the (Education Loans) in This Page</p>
          <br />
          <Link to="/education-loans" className="category-link">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
