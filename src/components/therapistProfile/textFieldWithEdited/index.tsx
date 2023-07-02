import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Edit from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { AxiosError } from 'axios';
import getStyle from './style';
import axiosInstance from '../../../utils/apis/axios';
import Props from './types';

const EditableTextField: React.FC<Props> = ({
  value, dataType, onChange, isEditable,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const toggleMouseover = () => {
    setMouseOver(!mouseOver);
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
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      enqueueSnackbar(axiosError.message, { variant: 'error' });
    }
  };

  const style = getStyle(dataType);
  return (
    <TextField
      name="text"
      defaultValue={value}
      onChange={onChange}
      disabled={!editMode}
      onMouseEnter={toggleMouseover}
      onMouseLeave={toggleMouseover}
      variant="standard"
      sx={style}
      InputProps={{
        disableUnderline: true,
        endAdornment:
  <InputAdornment position="end">
    {isEditable ? (
      <IconButton
        onClick={handleClick}
      >
        <Edit />
      </IconButton>
    ) : null}
    {editMode && <Button variant="contained" onClick={handleUpdate}>Save</Button>}
  </InputAdornment>,

      }}
    />
  );
};

export default EditableTextField;
