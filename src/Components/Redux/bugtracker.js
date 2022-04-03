import React, { useState } from "react";
import store from "./store";
import { Table } from "react-bootstrap";

function BugTracker() {
  const [description, setDescription] = useState("");
  const [bugs, setBugs] = useState(store.getState());
  const currentStore = store.getState();

  console.log("getstate", currentStore);

  const addBug = () => {
    console.log("Add bug is called");
    store.dispatch({
      type: "Add_Bug",
      payload: {
        description: description,
      },
    });
  };

  store.subscribe(() => {
    console.log("store has changed", store.getState());
    setBugs(store.getState());
  });

  return (
    <div>
      <div>bugtracker</div>
      <div>
        <label>Add bug description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button onClick={addBug}>Add Bug</button>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Bug Id</th>
              <th>Description</th>
              <th>Resolved</th>
            </tr>
          </thead>
          <tbody>
            {bugs.map((bug) => {
              <tr>
                <td>bug.id</td>
                <td>bug.description</td>
                <td>bug.resolved</td>
              </tr>;
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BugTracker;
