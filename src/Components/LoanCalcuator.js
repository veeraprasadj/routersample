import React, { useState } from "react";
import "./LoanCalculator.css";
import { Button, Row, Table } from "react-bootstrap";

function LoanCalcuator() {
  const [loanAmount, setLoanAmout] = useState(0);
  const [interest, setInterest] = useState(0);
  const [tenure, setTenure] = useState(0);

  const CalculateEMI = () => {
    alert("Test is completed");
  };

  return (
    <div className="container">
      <div className="formStyle">
        <div className="form-group">
          <label>Principle amount:</label>
          <input
            type="number"
            placeholder="Principle Amount"
            name="principleAmount"
            className="form-control"
            value={loanAmount}
            onChange={(e) => setLoanAmout(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Rate Of Interest:</label>
          <input
            type="number"
            placeholder="Rate of Interest"
            name="roi"
            className="form-control"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Tenure in Years:</label>
          <input
            type="number"
            placeholder="Tenure"
            name="roi"
            className="form-control"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
          {loanAmount === 0 ? (
            <div className="text-danger">
              <small>Please enter loan amount</small>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label />
          <input
            type="button"
            value="Calculate"
            className="btn btn-primary"
            style={{ marginTop: 22 }}
            onClick={() => {
              CalculateEMI();
            }}
          />
        </div>
      </div>
      <br />
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default LoanCalcuator;
