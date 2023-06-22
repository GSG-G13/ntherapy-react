import TextField from '@mui/material/TextField';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Edit from '@mui/icons-material/Edit';

const TextFieldEdite = ({ value, classes }: any) => {
  const [email, setEmail] = useState('johndoe@domain.com');
  const [editMode, setEditMode] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };

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

  return (
    <TextField
      name="email"
      defaultValue={value}
      margin="normal"
      error={email === ''}
      onChange={handleChange}
      disabled={!editMode}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      InputProps={{
        classes: {
          disabled: classes.disabled,
        },
        endAdornment: mouseOver ? (
          <InputAdornment position="end">
            <IconButton onClick={handleClick}>
              <Edit />
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

export default TextFieldEdite;
