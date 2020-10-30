import React, { Component } from "react";
import axios from "axios";
import Table from "../components/Table/Table";
import moment from "moment";

class Employee extends Component {
  state = {
    employees: [],
    results:[],
    search:""
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
          employees: list, results:list
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleInputChange = event => {
    
    const listEmployees = this.state.employees;
    const listEmp = listEmployees.filter((employee) => {
        let phone =  employee.phone.replace(/\(|\)|\-/gi, "");
        let phone2 =  employee.phone.replace(/\(|\)/gi, "");
        if((phone.startsWith(event.target.value))|| employee.phone.startsWith(event.target.value)||phone2.startsWith(event.target.value)||event.target.value.trim() === "")
        return employee;
    });
    console.log(listEmp);
    this.setState({ search: event.target.value, results: listEmp });
  };

  render() {
    return (
      <div>
        {/* <Table  employees={this.state.employees} /> */}
        <div className="container">
          <h1>Employee Directory</h1>

          <div className="row">
          <div className="col-sm-4"/>
            <div className="col-sm-4">
              <form>
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control"
                    id="search"
                    placeholder="Search"
                    name="search"
                    value={this.search}
                    onChange ={this.handleInputChange}
                  />
                </div>
              </form>
            </div>
          </div>

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
                    {this.state.results.map((employee) => (
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
