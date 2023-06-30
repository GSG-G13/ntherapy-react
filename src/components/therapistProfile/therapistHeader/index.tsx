import {
  Container, Box, Typography, Skeleton, Button,
} from '@mui/material';
import React, {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';
import { useParams } from 'react-router-dom';
import { TextFieldEdited, SessionReservationModal, AppointmentsModal } from '../..';
import {
  TherapistData, BoxStyle, ButtonStyle, TypographyStyle,
} from './classes';
import { axiosInstance } from '../../../utils/apis';
import BioEditor from '../changeBio';
import ChangePhoto from '../changePhoto';

interface Props {
  isEditable: boolean,
    setError: Dispatch<SetStateAction<boolean>>,
}

const TherapistHeader: React.FC<Props> = ({ isEditable, setError }) => {
  const { id } = useParams();
  const [dataFromTherapist, setDataFromTherapist] = useState<TherapistData | null>(null);
  const [name, setName] = useState<string>('');
  const [major, setMajor] = useState<string>('');
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [textBio, setTextBio] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<TherapistData>(`therapists/${id}`);
        const { data } = response;
        setDataFromTherapist(data);
        setName(data.user?.fullName || '');
        setMajor(data.major || '');
        setHourlyRate(data.hourlyRate || 0);
        setTextBio(data.bio || '');
        setImage(data.profileImg || '');
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeMajor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMajor(event.target.value);
  };

  const handleChangeHourlyRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHourlyRate(Number(event.target.value));
  };

  const handleChangeTextBio = (value: string) => {
    setTextBio(value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <Container>

      {dataFromTherapist ? (
        <Box sx={{ width: 1, mt: 8 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box
              gridColumn="span 7"
              sx={{
                position: 'relative',
                ml: 10,
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={image}
                alt="profile"
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  opacity: hover && isEditable ? '0.5' : '1',
                  borderRadius: '6px',
                }}
              />
              {hover && <ChangePhoto onChange={handleFileChange} isEditable={isEditable} />}
            </Box>

            <Box sx={{ width: '500px', ml: '50px' }}>
              <TextFieldEdited value={name} dataType="fullName" onChange={handleChangeName} isEditable={isEditable} />
              <TextFieldEdited value={major} dataType="major" onChange={handleChangeMajor} isEditable={isEditable} />

              <Box sx={BoxStyle}>
                <Typography sx={{
                  fontWeight: 'bold', mb: 1, fontSize: '18px',
                }}
                >
                  for session: $
                </Typography>
                <TextFieldEdited value={hourlyRate} dataType="hourlyRate" onChange={handleChangeHourlyRate} isEditable={isEditable} />
              </Box>
              {isEditable ? <Button variant="contained" style={ButtonStyle} onClick={handleOpen}> Add Appointment</Button>
                : <Button variant="contained" style={ButtonStyle} onClick={handleOpenModal}>Reserve a Session</Button>}
              <SessionReservationModal open={openModal} setOpen={setOpenModal} />
              {open && <AppointmentsModal handleClose={handleClose} open={open} />}
            </Box>
            <Box gridColumn="span 12" sx={{ mt: 4 }}>
              <Box
                component="div"
                sx={{
                  padding: '20px', borderRadius: '8px', width: '850px',
                }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  sx={TypographyStyle}
                >
                  Abstract ...
                </Typography>
                {
                  isEditable ? (
                    <BioEditor
                      textBio={textBio}
                      handleChangeTextBio={handleChangeTextBio}
                    />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{ __html: textBio }}
                      style={{
                        marginTop: '50px',
                        marginLeft: '65px',
                      }}
                    />
                  )
            }

              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <div style={{ display: 'flex' }}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="text" sx={{ ml: 4, width: '50%' }} />
          </div>
          <Skeleton variant="rectangular" width={1000} height={300} sx={{ mt: 5 }} />
        </>
      )}
    </Container>
  );
};

export default TherapistHeader;
