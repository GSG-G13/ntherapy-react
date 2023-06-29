import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Edit } from '@mui/icons-material';
import axiosInstance from '../../../utils/apis/axios';

interface BioEditorProps {
    textBio: string;
    // eslint-disable-next-line no-unused-vars
    handleChangeTextBio: (value: string) => void;
}
const BioEditor: React.FC<BioEditorProps> = ({
  textBio, handleChangeTextBio,
}) => {
  const [show, setShow] = useState(false);

  const handleSaveChanges = async () => {
    setShow(!show);
    try {
      await axiosInstance.patch('therapists/', {
        bio: textBio,
      }, {
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidGhlcmFwaXN0IiwidXNlcklkIjoiNSIsInRoZXJhcGlzdElkIjoiMiJ9.gGlnqHx0QN93rw87HdavQH-QN1kA3mQ6yALwl9M2L_w' },
      });
    } catch (error) {
      // Handle error if needed
      console.log(error);
    }
  };

  const handleEditBio = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? (
        <>
          <ReactQuill
            style={{ height: '150px', marginTop: 20 }}
            theme="snow"
            value={textBio}
            onChange={handleChangeTextBio}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
            sx={{ fontSize: '10px', ml: 80 }}
          >
            Save
          </Button>
        </>
      ) : (
        <>
          <IconButton
            onClick={handleEditBio}
            sx={{ fontSize: '10px', ml: 90 }}
          >
            <Edit />
          </IconButton>
          <div dangerouslySetInnerHTML={{ __html: textBio }} />
        </>
      )}
    </div>
  );
};

export default BioEditor;
