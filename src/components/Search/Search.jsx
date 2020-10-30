import React from "react";

const Search = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <form>
            <div className="form-group">
              <input
                type="search"
                className="form-control"
                id="search"
                placeholder="Search"
                name="search"
                value={props.value}
                onChange={props.handleInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
