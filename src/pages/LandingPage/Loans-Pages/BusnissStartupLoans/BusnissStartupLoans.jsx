import React from 'react';
import { Link } from 'react-router-dom';
import './BusnissStartupLoans.css'; // Import the CSS for styling

const BusnissStartupLoans = () => {
    return (
        <div className="wedding-loans-container">
            <h1>Loans to Start Your Own Business</h1>

            <div className="loan-box">
                <ul className="loan-list">
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Buy Stall</h2>
                            <p className="details">Maximum Loan Available= 10 lakh <br /> Lone Period=5 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Advance Rent For Shop</h2>
                            <p className="details">Maximum Loan Available= 10 lakh <br /> Lone Period=5 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Shop Assets</h2>
                            <p className="details">Maximum Loan Available= 5 lakh <br /> Lone Period=5 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Shop Machinery</h2>
                            <p className="details">Maximum Loan Available= 5 lakh <br /> Lone Period=5 years(you have to pay the loan in this time period or else there will a Strict Action)</p>
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

export default BusnissStartupLoans;
