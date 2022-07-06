import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";
import { selectEmployees } from "../features/employee/employeeSlice";

const Employees = () => {
  const employees = useSelector(selectEmployees);
  return (
    <div className="container">
      <h1>Current Employees</h1>
      <Table data={employees} />
      <a className="returnAtHome" href="/">Home</a>
    </div>
  );
};

export default Employees;
