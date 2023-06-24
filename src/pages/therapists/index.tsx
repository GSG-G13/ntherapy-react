import { useState, useEffect, ChangeEvent } from 'react';
import {
  Container, InputBase, IconButton, Box, Grid, Pagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { enqueueSnackbar } from 'notistack';
import { AxiosError } from 'axios';
import { SearchBoxStyle } from './classes';
import { TherapistList } from '../../components';
import { axiosInstance } from '../../utils/apis';

const TherapistPage = () => {
  const [therapists, setTherapists] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axiosInstance.get('/therapists', {
            params: {
              q: searchQuery,
              page: currentPage,
            },
          });
          setTherapists(response.data.rows);
          setTotalPages(response.pagination.totalPages);
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
      fetchData();
      const handleOffline = () => {
        enqueueSnackbar('You are offline', { variant: 'warning' });
      };

      const handleOnline = () => {
        enqueueSnackbar('You are online', { variant: 'success' });
      };

      window.addEventListener('offline', handleOffline);
      window.addEventListener('online', handleOnline);
      return () => {
        setTherapists([]);
        window.removeEventListener('offline', handleOffline);
        window.removeEventListener('online', handleOnline);
      };
    },
    [currentPage, searchQuery],
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setTherapists([]);
    setCurrentPage(page);
  };

  return (
    <>
      <Container>Therapist Page</Container>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 4,
            }}
          >
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearch}
              style={SearchBoxStyle}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '1rem',
                  color: 'inherit',
                  padding: '10px 12px',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: '#999',
                  opacity: 1,
                },
              }}
            />
            <IconButton aria-label="search" sx={{ ml: 1 }}>
              <SearchIcon />
            </IconButton>
          </Grid>
        </Container>
      </Box>
      <Container>
        <TherapistList therapists={therapists} loading={loading} />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Container>
    </>
  );
};

export default TherapistPage;
