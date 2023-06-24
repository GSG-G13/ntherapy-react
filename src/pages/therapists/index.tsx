import { useState, useEffect, ChangeEvent } from 'react';
import {
  Container, InputBase, IconButton, Alert, Skeleton, Box, Grid, Pagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { TherapistCardType, GridCard } from '../../components';
import { SearchBoxStyle, SkeletonBoxStyle } from './classes';

const Therapist = () => {
  const [therapists, setTherapists] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/v1/therapists', {
          params: {
            q: searchQuery,
            page: currentPage,
          },
        });
        const { data } = response;
        setTherapists(data.data.rows);
        setTotalPages(data.pagination.totalPages);
        setLoading(false);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching therapists:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, searchQuery]);

  const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (_event:ChangeEvent<unknown>, page : number) => {
    setCurrentPage(page);
  };

  const renderLoadingState = () => (
    <Grid container spacing={2}>
      {[...Array(8)].map(() => (
        <Grid item xs={12} sm={6} md={4}>
          <br />
          <br />
          <Box
            sx={SkeletonBoxStyle}
          >
            <Skeleton variant="rectangular" width="100%" height={180} animation="wave" />
            <Box p={2}>
              <Skeleton variant="text" width="50%" height={20} animation="wave" />
              <Skeleton variant="text" width="70%" height={16} animation="wave" sx={{ mt: 1 }} />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  const renderTherapists = () => (
    <Grid container spacing={2}>
      {therapists.map((therapist:TherapistCardType) => (
        <GridCard therapist={therapist} key={therapist.userId} />
      ))}
    </Grid>
  );

  const renderNoTherapistsMessage = () => (
    <Alert severity="info" sx={{ mt: 4 }}>
      No therapists found.
    </Alert>
  );

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
        {loading && renderLoadingState()}
        {!loading && therapists.length === 0 && renderNoTherapistsMessage()}
        {!loading && therapists.length > 0 && renderTherapists()}
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

export default Therapist;
