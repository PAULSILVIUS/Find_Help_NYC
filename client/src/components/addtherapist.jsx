import React from "react";

const AddTherapist = () => {
  return (
    <div className="container">
      <form className="form-horizontal">
        <div className="form-group row">
          <div className="form-group col-md-6">
            <label for="inputlastname">First Name</label>
            <input
              type="text"
              className="form-control control-label"
              id="inputfirstname"
              placeholder="John"
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label for="inputlastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="inputlastname"
              placeholder="Smith"
            ></input>
          </div>
        </div>
        <div className="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="johnsmith@example.com"
          ></input>
        </div>
        <div className="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          ></input>
        </div>
        <div className="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip"></input>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputBio">Bio</label>
            <input type="text" className="form-control" id="inputBio"></input>
          </div>
        </div>

        <div className="form-group col-md-2">
          <label
            for="inputCost
            "
          >
            Cost
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCost
            "
          ></input>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            ></input>
            <label className="form-check-label" for="gridCheck">
              Sliding Scale?
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default AddTherapist;
