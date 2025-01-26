import React from 'react';
import { Link } from 'react-router-dom';
import './WeddingLoans.css'; // Import the CSS for styling

const WeddingLoans = () => {
    return (
        <div className="wedding-loans-container">
            <h1>Wedding Loans</h1>

            <div className="loan-box">
                <ul className="loan-list">
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Valima</h2>
                            <p className="details">Maximum Loan Available= 5 lakh <br /> Lone Period=3 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Valima Food</h2>
                            <p className="details">Maximum Loan Available= 5 lakh <br /> Lone Period=3 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Jahez</h2>
                            <p className="details">Maximum Loan Available= 5 lakh <br /> Lone Period=3 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Furniture</h2>
                            <p className="details">Maximum Loan Available= 5 lakh <br /> Lone Period=3 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
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

export default WeddingLoans;
