import React from 'react';
import { Link } from 'react-router-dom';
import './EducationLoans.css'; // Import the CSS for styling

const EducationLoans = () => {
    return (
        <div className="wedding-loans-container">
            <h1>Education Loans</h1>

            <div className="loan-box">
                <ul className="loan-list">
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>Elementory and Primary School Fees Loan</h2>
                            <p className="details">Maximum Loan Available= Based On Requirements <br /> Lone Period=4 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>College Fees Loan</h2>
                            <p className="details">Maximum Loan Available= Based On Requirements <br /> Lone Period=4 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
                        </div>
                        <Link to="/loan-requestform" className="loan-link">Request Loan</Link>
                    </li>
                    <li className="loan-item">
                        <div className="loan-details">
                            <h2>University Fees Loan</h2>
                            <p className="details">Maximum Loan Available= Based On Requirements <br /> Lone Period=4 years(you have to pay the loan in this time period or else there will be Strict Action)</p>
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

export default EducationLoans;
