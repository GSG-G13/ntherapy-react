import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Edit from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import getStyle from './style';
import axiosInstance from '../../../utils/apis/axios';

// const isEditable = true;

interface Props {
  value: string | number;
  dataType: 'fullName' | 'bio' | 'hourlyRate' |'major';
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  edited:boolean
}

const TextFieldEdite: React.FC<Props> = ({
  value, dataType, onChange, edited,
}) => {
  const { enqueueSnackbar } = useSnackbar();
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
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  const style = getStyle(dataType);
  return (
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
    {edited ? (
      <IconButton
        onClick={handleClick}
      >
        <Edit />
      </IconButton>
    ) : null}
    {editMode && <Button variant="contained" onClick={handleUpdate}>Save</Button>}
  </InputAdornment>,

      }}
      multiline={dataType === 'bio'}
    />
  );
};

export default TextFieldEdite;
