import React from "react";
import { useState, useEffect } from "react";
import "./View.css";

const View = () => {
  const [tableData, setTableData] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setTableData(storedData);
    }
  }, []);
  return (
    <div className="view-container">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
