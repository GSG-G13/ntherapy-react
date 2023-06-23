import TextField from '@mui/material/TextField';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Edit from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import getStyle from './style';

const isEditable = true;

const TextFieldEdite = ({ value, dataType, onChange }: any) => {
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
        multiline={dataType === 'textArea'}
      />
      {editMode && <Button variant="contained" onClick={() => setEditMode(false)}>Save</Button>}
    </>
  );
};

export default TextFieldEdite;
