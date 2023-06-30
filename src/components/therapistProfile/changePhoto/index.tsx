import ControlPointIcon from '@mui/icons-material/ControlPoint';
import React from 'react';
import IconStyle from './classes';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isEditable:boolean
}
const ChangePhoto: React.FC<Props> = ({ onChange, isEditable }) => (
  <div>
    {isEditable && (
    <label htmlFor="upload-photo">
      <input
        accept="image/*"
        id="upload-photo"
        type="file"
        onChange={onChange}
        style={{ display: 'none' }}
      />
      <ControlPointIcon sx={IconStyle} />
    </label>
    )}
  </div>
);

export default ChangePhoto;
