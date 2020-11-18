import React from 'react';
import axios from "axios"
import './App.css';
import { UserFormClass } from "./user/user-form-class"
import { UserFormHooks } from "./user/user-form-hooks"

const sendPing = async () => {
  const response = await axios({
    method: "get",
    url: "http://localhost:3001/ping"
  })
  alert(response.data.ping)
}

function App() {
  return (
    <div className="App">
      <div>
        <button onClick={sendPing}>ping</button>
      </div>
      <div>
        <div><UserFormClass></UserFormClass></div>
        <div><UserFormHooks></UserFormHooks></div>
      </div>
    </div>
  );
}

export default App;
