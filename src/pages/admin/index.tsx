import {
  Container, Pagination, Button, Box,
} from '@mui/material';
import { useEffect, useState, ChangeEvent } from 'react';
import { AxiosError } from 'axios';
import { enqueueSnackbar } from 'notistack';
import TherapistTable from '../../components/dashboard/table/therapists';
import { axiosInstance } from '../../utils/apis';

const Admin = () => {
  const [therapists, setTherapists] = useState<null | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState< boolean | null>(null);

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setTherapists([]);
    setCurrentPage(page);
  };

  useEffect(
    () => {
      const getTherapistData = async () => {
        try {
          setLoading(true);
          const response = await axiosInstance.get('/admin/therapists', {
            params: {
              page: currentPage,
              active,
            },
          });
          setTherapists(response.data.rows);
          setTotalPages(response.data.pagination.totalPages);
          setLoading(false);
        } catch (error) {
          if (error instanceof AxiosError) {
            enqueueSnackbar(error.message, { variant: 'error' });
            setLoading(false);
          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
            setLoading(false);
          }
        }
      };
      getTherapistData();
    },
    [currentPage, active],
  );
  return (

    <Container sx={{ marginTop: '50px' }}>
      <Box sx={{
        background: '#bcc8ff', borderRadius: '5px', alignSelf: 'flex-start', padding: '5px', margin: '3px',
      }}
      >
        {' '}
        <Button sx={{ color: 'white' }} onClick={() => setActive(null)}>All</Button>
        <Button
          sx={{ color: 'white' }}
          onClick={() => {
            setActive(true);
            setCurrentPage(1);
          }}
        >
          Active

        </Button>
        <Button
          sx={{ color: 'white' }}
          onClick={() => {
            setActive(false);
            setCurrentPage(1);
          }}
        >
          In Active

        </Button>
      </Box>
      <TherapistTable therapists={therapists} loading={loading} />
      <Pagination
        sx={{ display: 'block', margin: '10px 20px' }}
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        disabled={totalPages <= 1}

      />
    </Container>
  );
};

export default Admin;
