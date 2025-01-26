import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([{ email: "admin@gmail.com", password: "admin1234" }]);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  // Fetch users from local storage on component mount
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleAddAdmin = () => {
    if (newAdminEmail && newAdminPassword) {
      const existingAdmin = admins.find(admin => admin.email === newAdminEmail);
      if (existingAdmin) {
        alert('Admin already exists.');
        return;
      }
      const newAdmin = { email: newAdminEmail, password: newAdminPassword };
      const updatedAdmins = [...admins, newAdmin];
      setAdmins(updatedAdmins);
      localStorage.setItem('admins', JSON.stringify(updatedAdmins)); // Save to localStorage
      setNewAdminEmail('');
      setNewAdminPassword('');
      setModalOpen(false); // Close modal
      alert('New admin added successfully');
    } else {
      alert('Please fill in both email and password');
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* Users Table */}
      <div>
        <h3>Users</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Loans</th>
              <th>Loan Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.loans.length}</td>
                <td>
                  <ul>
                    {user.loans.map((loan, loanIndex) => (
                      <li key={loanIndex}>
                        {loan.loanType} - {loan.subCategory}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Admin Modal */}
      <button onClick={openModal}>Add Admin</button>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Admin</h3>
            <form>
              <label>Email:</label>
              <input
                type="email"
                value={newAdminEmail}
                onChange={(e) => setNewAdminEmail(e.target.value)}
              />
              <br />
              <label>Password:</label>
              <input
                type="password"
                value={newAdminPassword}
                onChange={(e) => setNewAdminPassword(e.target.value)}
              />
              <br />
              <button type="button" onClick={handleAddAdmin}>
                Add Admin
              </button>
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
