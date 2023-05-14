import React from "react";

const AddTherapist = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="col">
            <input className="form-control" type="text" placeholder="Email" />
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2">
              <option disabled selected>
                Sliding Scale
              </option>
              <option value="true">Yes</option>
              <option value="true">No</option>
            </select>
          </div>
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
};

export default AddTherapist;
