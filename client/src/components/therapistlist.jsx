import React, { useContext, useEffect } from "react";
import TherapistFinder from "../apis/TherapistFinder";
import { TherapistsContext } from "../context/TherapistsContext";

const Therapistlist = (props) => {
  const {therapists, setTherapists} = useContext(TherapistsContext);
  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await TherapistFinder.get("/");
      setTherapists =(response.data.data.therapists);
    } catch (err) {}
    };

    fetchData();
  }, []);

  return (
    <div>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>200</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Bird</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Therapistlist;
