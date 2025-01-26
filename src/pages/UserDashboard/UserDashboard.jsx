import React, { useState, useEffect } from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [isLoanFormOpen, setIsLoanFormOpen] = useState(false);
  const [loanType, setLoanType] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");

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

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedInUser);
  }, []);

  const handleLoanClick = (loan) => {
    setSelectedLoan(loan);
  };

  const closePopup = () => {
    setSelectedLoan(null);
  };

  const openLoanForm = () => {
    setIsLoanFormOpen(true);
  };

  const closeLoanForm = () => {
    setIsLoanFormOpen(false);
    setLoanType("");
    setSubCategory("");
    setLoanAmount("");
    setInitialDeposit("");
  };

  const handleApplyForLoan = (e) => {
    e.preventDefault();

    const maxLoan =
      loanType === "Education Loans" ? loanAmount : loanDetails[loanType]?.maxLoan;
    if (loanAmount > maxLoan) {
      alert(`Loan amount exceeds the maximum limit for ${loanType}!`);
      return;
    }

    const monthlyPayment = loanAmount / (loanDetails[loanType]?.loanPeriod * 12);

    const newLoan = {
      loanType,
      subCategory,
      loanAmount: Number(loanAmount),
      initialDeposit: Number(initialDeposit),
      monthlyPayment: monthlyPayment.toFixed(2),
    };

    const updatedUser = { ...user, loans: [...(user.loans || []), newLoan] };
    setUser(updatedUser);

    // Update localStorage with new user loans
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    alert("Loan successfully added!");
    closeLoanForm();
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.name || "User"}!</h1>
      <div className="loan-section">
        <h2 style={{ color: "white" }}>Your Loans:</h2>
        {user?.loans && user.loans.length > 0 ? (
          <ul>
            {user.loans.map((loan, index) => (
              <li key={index} className="loan-item">
                <span>
                  {loan.loanType} - {loan.subCategory}
                </span>
                <button onClick={() => handleLoanClick(loan)}>View Details</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No loans applied yet.</p>
        )}
        <div className="apply-loan-button">
          <button onClick={openLoanForm}>+ Apply for More Loans</button>
        </div>
      </div>

      {/* Loan Detail Popup */}
      {selectedLoan && (
        <div className="popup">
          <div className="popup-content">
            <h3>Loan Details</h3>
            <p>
              <strong>Type:</strong> {selectedLoan.loanType}
            </p>
            <p>
              <strong>Subcategory:</strong> {selectedLoan.subCategory}
            </p>
            <p>
              <strong>Loan Amount:</strong> PKR {selectedLoan.loanAmount}
            </p>
            <p>
              <strong>Initial Deposit:</strong> PKR {selectedLoan.initialDeposit}
            </p>
            <p>
              <strong>Monthly Payment:</strong> PKR {selectedLoan.monthlyPayment}
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      {/* Loan Application Form Popup */}
      {isLoanFormOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Apply for a New Loan</h3>
            <form onSubmit={handleApplyForLoan}>
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
                Submit Loan
              </button>
              <button type="button" className="close-button" onClick={closeLoanForm}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
