import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Fields = ({ name, email, remove }) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Button onClick={remove} variant="contained" color="error">
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default Fields;
