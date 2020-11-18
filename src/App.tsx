import React from 'react';
import axios from "axios"
import './App.css';
import Button from '@material-ui/core/Button'

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
      <Button variant="contained" color="primary" onClick={sendPing}>ping</Button>
    </div>
  );
}

export default App;
