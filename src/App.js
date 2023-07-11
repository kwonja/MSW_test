import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const fetchHandler = async() =>{
    const response = await axios.get("/todos");
    console.log(response.data);
  }

  useEffect( ()=>{
    fetchHandler()
  },[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
