import React, { Component } from "react";
import axios from "axios";
import Table from "../components/Table/Table";
import moment from "moment";

class Employee extends Component {
  state = {
    employees: [],
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=20&nat=us")
      .then((results) => {
        console.log(results.data);
        const employees = results.data.results;
        const list = [];
        for (let i = 0; i < employees.length; i++) {
          list.push({
            id: i,
            name: employees[i].name.first + " " + employees[i].name.last,
            phone: employees[i].cell,
            email: employees[i].email,
            dob: moment(employees[i].dob.date).format("MM-DD-YYYY"),
            image: employees[i].picture.thumbnail,
          });
        }

        this.setState({
          employees: list,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
       
        {/* <Table  employees={this.state.employees} /> */}
        <div className="container">
        <h1>Employee Directory</h1>
          <div className="row">
            <div className="col-sm-12 ">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
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
                    {this.state.employees.map((employee) => (
                      <tr key={employee.id}>
                        <td>
                          <img src={employee.image} />
                        </td>
                        <td>{employee.name}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
