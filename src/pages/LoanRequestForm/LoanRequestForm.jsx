import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoanRequestForm.css";

const LoanRequestForm = () => {
  const [loanType, setLoanType] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");

  const navigate = useNavigate();

  const loanDetails = {
    "Wedding Loans": {
      subCategories: ["Valima", "Valima Food", "Jahez", "Furniture"],
      maxLoan: 500000,
      loanPeriod: 3,
    },
    "Home Construction Loans": {
      subCategories: ["Structure", "Finishing", "Paints"],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    "Education Loans": {
      subCategories: [
        "Elementary and Primary School Fees Loan",
        "College Fees Loan",
        "University Fees Loan",
      ],
      maxLoan: "Custom",
      loanPeriod: 4,
    },
    "Business Startup Loans": {
      subCategories: [
        "Buy Stall",
        "Advance Rent For Shop",
        "Shop Assets",
        "Shop Machinery",
      ],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
  };

  const handleLoanSubmission = (e) => {
    e.preventDefault();
  
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = existingUsers.find(
      (user) => user.cnic === cnic || user.email === email
    );
  
    if (userExists) {
      alert(
        "CNIC or email already associated with an account. Please log in or use different credentials."
      );
      return;
    }
  
    const maxLoan =
      loanType === "Education Loans" ? loanAmount : loanDetails[loanType]?.maxLoan;
    if (loanAmount > maxLoan) {
      alert(`Loan amount exceeds the maximum limit for ${loanType}!`);
      return;
    }
  
    const monthlyPayment = loanAmount / (loanDetails[loanType]?.loanPeriod * 12);
  
    const newUser = {
      cnic,
      email,
      password,
      name,
      loans: [
        {
          loanType,
          subCategory,
          loanAmount: Number(loanAmount),
          initialDeposit: Number(initialDeposit),
          monthlyPayment: monthlyPayment.toFixed(2),
        },
      ],
    };
  
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
  
    alert("Loan submitted and account created successfully!");
    navigate("/login"); // Redirect to Login page after loan submission
  };
  

  return (
    <div className="loan-form-container">
      <h1>Apply for a Loan</h1>
      <Link
        to="/login"
        style={{
          textDecoration: "none",
          color: "green",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        (Login Here to see your already applied loans Details)
      </Link>
      <form onSubmit={handleLoanSubmission} className="loan-form">
        <div className="form-group">
          <label>CNIC:</label>
          <input
            type="text"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="Enter your CNIC"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password"
            required
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Loan Type:</label>
          <select
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            required
          >
            <option value="">Select a Loan Type</option>
            {Object.keys(loanDetails).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {loanType && (
          <div className="form-group">
            <label>Sub Category:</label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            >
              <option value="">Select a Sub Category</option>
              {loanDetails[loanType]?.subCategories.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}
        {loanType && (
          <div className="loan-limit-info">
            <p>
              <strong>Loan Period:</strong> {loanDetails[loanType]?.loanPeriod} years
            </p>
            <p>
              <strong>Max Loan Amount:</strong>{" "}
              {loanDetails[loanType]?.maxLoan === "Custom"
                ? "Based on Requirement"
                : `PKR ${loanDetails[loanType]?.maxLoan}`}
            </p>
          </div>
        )}
        <div className="form-group">
          <label>Loan Amount (PKR):</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
            required
          />
        </div>
        <div className="form-group">
          <label>Initial Deposit (PKR):</label>
          <input
            type="number"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            placeholder="Enter initial deposit"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoanRequestForm;
