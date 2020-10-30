import React from "react";
import "./Table.css";

const Table = (props) => {
  return (
      
      <div className="row">
      <div className="col-sm-12 ">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th onClick={props.handleNameClick}>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {props.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <img src={employee.image} alt="{employee-id}" />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td id="email">{employee.email}</td>
                  <td>{employee.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
