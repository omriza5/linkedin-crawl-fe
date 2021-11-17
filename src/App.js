import React, { useState } from "react";

import axios from "axios";
import UsersList from "./components/usersList";
import Spinner from "./components/spinner";
import Navbar from "./components/navbar";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleFetch = async () => {
    try {
      setIsFetching(true);
      await axios.get("http://localhost:5000/api/data");
      setIsFetching(false);
    } catch (error) {}
  };

  const getUsers = async () => {
    const { data: users } = await axios.get("http://localhost:5000/api/users");
    setUsers(users);
  };
  console.log(users.length);
  console.log(users);
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="app-buttons">
          <input
            type="button"
            value="Get Users"
            className="button-28"
            onClick={getUsers}
          />
          <input
            type="button"
            value="Prepare Data"
            className="button-28"
            onClick={handleFetch}
          />
        </div>
        {isFetching && <Spinner />}
        {users.length > 0 && (
          <>
            <p className="search-result">{users.length} Profiles</p>
            <div className="app-users-list">
              <UsersList users={users} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
