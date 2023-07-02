import React, { useState } from 'react';
import { IconButton, CircularProgress } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import LoadingButton from '@mui/lab/LoadingButton';
import { Edit } from '@mui/icons-material';
import { enqueueSnackbar } from 'notistack';
import { AxiosError } from 'axios';
import BioEditorProps from './types';
import axiosInstance from '../../../utils/apis/axios';

const BioEditor: React.FC<BioEditorProps> = ({
  textBio, handleChangeTextBio,
}) => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveChanges = async () => {
    try {
      setIsLoading(true);
      setShow(false);
      await axiosInstance.patch('therapists/', {
        bio: textBio,
      });
      setIsLoading(false);
    } catch (error) {
      setShow(true);
      const axiosError = error as AxiosError;
      enqueueSnackbar(axiosError.message, { variant: 'error' });
      setIsLoading(false);
    }
  };

  const handleEditBio = () => {
    setShow(!show);
  };

  return (
    <div style={{ marginLeft: '65px' }}>
      {show ? (
        <>
          <ReactQuill
            style={{ height: '150px', marginTop: 20 }}
            theme="snow"
            value={textBio}
            onChange={handleChangeTextBio}
          />
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
            sx={{ fontSize: '10px', ml: 80 }}
            loading={isLoading}
            loadingIndicator={<CircularProgress size={16} />}
          >
            Save
          </LoadingButton>
        </>
      ) : (
        <>
          <IconButton
            onClick={handleEditBio}
            sx={{ fontSize: '10px', ml: 91 }}
          >
            <Edit />
          </IconButton>
          <div
            dangerouslySetInnerHTML={{ __html: textBio }}
          />
        </>
      )}
    </div>
  );
};

export default BioEditor;
