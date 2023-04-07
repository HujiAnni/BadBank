import React, { useContext } from "react";
import { UserContext } from "..";
import Table from "react-bootstrap/Table";

function AllData() {
  const ctx = React.useContext(UserContext);
  const profiles = [...ctx.users];

  return (
    <>
      <h3>All Data Stored</h3>
      <br />
      <div className="container" style={{ maxWidth: "90%" }}>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr>
                <td>{profile.email}</td>
                <td>{profile.name}</td>
                <td>{profile.password}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default AllData;
