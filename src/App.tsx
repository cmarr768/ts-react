import React from 'react';
import axios from "axios"
import './App.css';

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
      <button onClick={sendPing}>ping</button>
    </div>
  );
}

export default App;
