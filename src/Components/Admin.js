import React, { useState, useEffect } from "react";
import "./Admin.css";

const Admin = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    qualification: "",
    age: "",
    email: "",
    teachingExperiance: "",
    areasOfTeaching: "",
  });
  const [tableData, setTableData] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setTableData(storedData);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.id ||
      !formData.name ||
      !formData.qualification ||
      !formData.age ||
      !formData.email ||
      !formData.teachingExperiance ||
      !formData.areasOfTeaching
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Update table data and store in local storage
    const newTableData = [...tableData, formData];
    setTableData(newTableData);
    localStorage.setItem("formData", JSON.stringify(newTableData));

    // Clear form data
    setFormData({
      id: "",
      name: "",
      qualification: "",
      age: "",
      email: "",
      teachingExperiance: "",
      areasOfTeaching: "",
    });
  };
  const handleDelete = (id) => {
    const updatedData = tableData.filter((data) => data.id !== id);

    setTableData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };

  return (
    <div className="admin-container">
      <h2> Add Staff Details</h2>

      <form onSubmit={handleSubmit} className="form-container">
        <label>Id:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
        />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Qualification:</label>
        <input
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleInputChange}
        />

        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label>TeachingExperiance:</label>
        <input
          type="text"
          name="teachingExperiance"
          value={formData.teachingExperiance}
          onChange={handleInputChange}
        />
        <label>Areas Of Teaching:</label>
        <input
          type="text"
          name="areasOfTeaching"
          value={formData.areasOfTeaching}
          onChange={handleInputChange}
        />
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>

      <h3>Staff Details</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Qualification</th>
            <th>Age</th>
            <th>Email</th>
            <th>TeachingExperiance</th>
            <th>Areas Of Teaching</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.qualification}</td>
              <td>{data.age}</td>
              <td>{data.email}</td>
              <td>{data.teachingExperiance}</td>
              <td>{data.areasOfTeaching}</td>
              <td>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
