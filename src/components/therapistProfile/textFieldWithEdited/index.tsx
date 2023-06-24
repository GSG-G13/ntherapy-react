import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Edit from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import getStyle from './style';
import axiosInstance from '../../../utils/apis/axios';

const isEditable = true;

interface Props {
  value: string | number;
  dataType: 'fullName' | 'bio' | 'hourlyRate' |'major';
  onChange: () => void;
}

const TextFieldEdite: React.FC<Props> = ({
  value, dataType, onChange,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    if (!mouseOver) {
      setMouseOver(true);
    }
  };

  const handleMouseOut = () => {
    if (mouseOver) {
      setMouseOver(false);
    }
  };

  const handleClick = () => {
    setEditMode(true);
    setMouseOver(false);
  };

  const handleUpdate = async () => {
    setEditMode(false);
    try {
      await axiosInstance.patch('therapists/', {
        [dataType]: value,
      }, {
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidGhlcmFwaXN0IiwidXNlcklkIjoiNSIsInRoZXJhcGlzdElkIjoiMiJ9.gGlnqHx0QN93rw87HdavQH-QN1kA3mQ6yALwl9M2L_w' },
      });
    } catch (error) {
      // Handle error if needed
      console.log(error);
    }
    console.log(value, dataType);
  };

  const style = getStyle(dataType);
  return (
    <>
      <TextField
        name="text"
        defaultValue={value}
        margin="normal"
        error={value === ''}
        onChange={onChange}
        disabled={!editMode}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        variant="standard"
        sx={style}
        InputProps={{
          disableUnderline: true,
          endAdornment:
  <InputAdornment position="end">
    {isEditable ? (
      <IconButton onClick={handleClick}>
        <Edit />
      </IconButton>
    ) : null}
  </InputAdornment>,

        }}
        multiline={dataType === 'bio'}
      />
      {editMode && <Button variant="contained" onClick={handleUpdate}>Save</Button>}
    </>
  );
};

export default TextFieldEdite;
