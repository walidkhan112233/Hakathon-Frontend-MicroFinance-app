import React from 'react';
import { Link } from 'react-router-dom';
import './HomeConstructionLoans.css'; // Import the CSS for styling

const HomeConstructionLoans = () => {
    return (
        <div className="home-construction-loans-container">
            <h1>Loans For Home Construction</h1>

            <div className="loan-box">
                <ul className="loan-list">
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Structure</h2>
                            <p className="details">Maximum Loan Available= 10 lakh <br /> Lone Period=5 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Finishing</h2>
                            <p className="details">Maximum Loan Available= 10 lakh <br /> Lone Period=5 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Paints</h2>
                            <p className="details">Maximum Loan Available= 10 lakh <br /> Lone Period=5 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                </ul>
            </div>

            <div className="calculator-placeholder">
                <p>Calculator will be here</p>
            </div>
        </div>
    );
}

export default HomeConstructionLoans;
