import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const isEditable = false;

const ChangePhoto = ({ onChange }: any) => (
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
      <Button
        variant="contained"
        color="primary"
        component="span"
        startIcon={<CloudUploadIcon />}
      >
        Choose Photo
      </Button>
    </label>
    )}
  </div>
);

export default ChangePhoto;
