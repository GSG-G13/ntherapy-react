import {
  Container, Box, Typography, Skeleton, Button,
} from '@mui/material';
import React, {
  useState, useEffect, useContext,
} from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { SessionReservationModal, AppointmentsModal } from '../..';
import { BoxStyle, ButtonStyle, TypographyStyle } from './classes';
import { axiosInstance } from '../../../utils/apis';
import { BioEditor, ChangePhoto, EditableTextField } from '..';
import { TherapistData, Props } from './types';
import { userDataContext } from '../../../context';

const TherapistHeader: React.FC<Props> = ({ isProfileOwner, setError }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [dataFromTherapist, setDataFromTherapist] = useState<TherapistData | null>(null);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const userContext = useContext(userDataContext);
  const userData = userContext?.userData;
  const handleShowReservationModal = () => {
    if (!userData) {
      navigate('/login', { state: { from: location.pathname } });
    } else {
      setShowReservationModal(true);
    }
  };
  const [openAppointmentsModal, setOpenAppointmentsModal] = useState(false);
  const handleOpenAppointmentsModal = () => setOpenAppointmentsModal(true);
  const handleCloseAppointmentsModal = () => setOpenAppointmentsModal(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<TherapistData>(`therapists/${id}`);
        const { data } = response;
        setDataFromTherapist(data);
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChange = (key: string) => (value: string | number | object) => {
    setDataFromTherapist((prevData) => {
      if (prevData) {
        if (key === 'user.fullName' && value) {
          return {
            ...prevData,
            user: { ...prevData.user, fullName: value as string },
          };
        }
        return {
          ...prevData,
          [key]: value,
        };
      }
      return prevData;
    });
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setDataFromTherapist((prevData) => {
        if (prevData) {
          return {
            ...prevData, profileImg: URL.createObjectURL(file),
          };
        }
        return prevData;
      });
    }
  };

  return (
    <Container>

      {dataFromTherapist ? (
        <Box sx={{ width: 1, mt: 8 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

            <ChangePhoto
              isProfileOwner={isProfileOwner}
              onChange={handleFileChange}
              hover={hover}
              setHover={setHover}
              imgUrl={dataFromTherapist.profileImg}
            />
            <Box sx={{ width: '500px', ml: '50px' }}>
              <EditableTextField
                value={dataFromTherapist.user.fullName}
                dataType="fullName"
                onChange={handleChange('user.fullName')}
                isProfileOwner={isProfileOwner}
              />

              <EditableTextField
                value={dataFromTherapist.major}
                dataType="major"
                onChange={handleChange('major')}
                isProfileOwner={isProfileOwner}
              />

              <Box sx={BoxStyle}>
                <Typography sx={{
                  fontWeight: 'bold', mb: 1, fontSize: '18px',
                }}
                >
                  for session: $
                </Typography>
                <EditableTextField value={dataFromTherapist.hourlyRate} dataType="hourlyRate" onChange={handleChange('hourlyRate')} isProfileOwner={isProfileOwner} />
              </Box>
              {isProfileOwner
                ? (
                  <Button
                    variant="contained"
                    style={ButtonStyle}
                    onClick={handleOpenAppointmentsModal}
                  >
                    Add Appointment
                  </Button>
                )
                : (
                  <Button
                    variant="contained"
                    style={ButtonStyle}
                    onClick={handleShowReservationModal}
                  >
                    Reserve a Session
                  </Button>
                )}
              <SessionReservationModal
                open={showReservationModal}
                setOpen={setShowReservationModal}
              />
              {openAppointmentsModal && (
              <AppointmentsModal
                handleClose={handleCloseAppointmentsModal}
                open={openAppointmentsModal}
              />
              )}
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
                  isProfileOwner ? (
                    <BioEditor
                      textBio={dataFromTherapist.bio}
                      handleChangeTextBio={handleChange('bio')}
                    />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{ __html: dataFromTherapist.bio }}
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