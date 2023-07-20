import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Fields from './components/Fields';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeItem = (index) => {
let arr=data;
arr.splice(index,1);
setData([...arr]);


  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic-1" label="Name" variant="outlined" />
          <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic-2" label="Email" variant="outlined" />
          <Button variant="contained" color="success" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => (
            <Fields key={index} name={element.name} email={element.email} remove={() => removeItem(index)} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
