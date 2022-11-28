import "./App.css";
import React from "react";
import { useState } from "react";

const User = () => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isError, setError] = useState(false);

  const fetchUsers = async () => {
    console.log("in function");
    setLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    if (response.ok) {
      const data = await response.json();
      setUsers(data.data);

      setLoading(false);
      console.log(data);
    } else {
      setError(true);
      setLoading(false);
    }

    console.log("out function");
  };

  return (
    <>
      <div className="navbar">
        <h1>Avataro</h1>
        <div className="fetchusers">
          <button onClick={() => fetchUsers()}>Get Users</button>
        </div>
      </div>
      <div className="content">
        {isLoading ? <div className="loader"></div> : null}
        {isError ? <div>Error Fetching Users...</div> : null}
        {users &&
          users.map((user) => {
            let imgURL = `https://avatars.dicebear.com/api/avataaars/${user.first_name}.svg`;

            return (
              <div className="grid">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={imgURL}
                    alt="..."
                    height="150"
                    width="150"
                    style={{ borderRadius: "50%" }}
                  />
                  <div>
                    <strong>
                      {user.first_name}
                      {user.last_name}
                    </strong>
                  </div>
                  <div>{user.email}</div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="footer">
        <h3> Made by Mansi Parmar</h3>
      </div>
    </>
  );
};

export default User;
