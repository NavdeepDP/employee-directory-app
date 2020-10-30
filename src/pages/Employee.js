import React, { Component } from "react";
import axios from "axios";
import Table from "../components/Table/Table";
import moment from "moment";
import "./Employee.css";
import Search from "../components/Search/Search";

class Employee extends Component {
  state = {
    employees: [],
    results: [],
    search: "",
    sortOrder: "asc",
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
            firstName: employees[i].name.first,
            name: employees[i].name.first + " " + employees[i].name.last,
            phone: employees[i].cell,
            email: employees[i].email,
            dob: moment(employees[i].dob.date).format("MM-DD-YYYY"),
            image: employees[i].picture.thumbnail,
          });
        }

        this.setState({
          employees: list,
          results: list,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleInputChange = (event) => {
    const listEmployees = this.state.employees;
    const listEmp = listEmployees.filter((employee) => {
      let phone = employee.phone.replace(/\(|\)|-/gi, "");
      let phone2 = employee.phone.replace(/\(|\)/gi, "");
      if (
        phone.startsWith(event.target.value) ||
        employee.phone.startsWith(event.target.value) ||
        phone2.startsWith(event.target.value) ||
        event.target.value.trim() === ""
      )
      {
        return true;
      }
      return false;
    });
    console.log(listEmp);
    this.setState({ search: event.target.value, results: listEmp });
  };

  handleNameClick = (event) => {
    console.log("Name clicked");
    const array = this.state.results;
    array.sort(function (a, b) {
      var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    let sortedArray = array;
    if (this.state.sortOrder === "dsc") {
      sortedArray = array.reverse();
    }

    this.setState({
      results: sortedArray,
      sortOrder: this.state.sortOrder === "asc" ? "dsc" : "asc",
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div id="header">
            <div className="row">
              <div className="col-sm-12">
                <h1>Employee Directory</h1>
                <h7>
                  Click "Name" heading to sort alphabetically or enter phone
                  number to search
                </h7>
              </div>
            </div>
          </div>

          <Search
            value={this.search}
            handleInputChange={this.handleInputChange}
          />

          <Table
            employees={this.state.results}
            handleNameClick={this.handleNameClick}
          />
        </div>
      </div>
    );
  }
}

export default Employee;
