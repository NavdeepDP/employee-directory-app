import React from "react";
import "./Table.css";

const Table = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
                {props.employees}
              {/* {props.employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{employee.image}</td>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.dob}</td>
                </tr>
              ))}               */}
                  {/* <tr key={props.employees[0].id}>
                  <td>{props.employees[0].image}</td>
                  <td>{props.employees[0].name}</td>
                  <td>{props.employees[0].phone}</td>
                  <td>{props.employees[0].email}</td>
                  <td>{props.employees[0].dob}</td>
                </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
