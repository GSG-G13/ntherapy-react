import { useState, useEffect, ChangeEvent } from 'react';
import {
  Container, InputBase,
  IconButton, Box, Grid,
  Pagination, InputLabel,
  MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { enqueueSnackbar } from 'notistack';
import { AxiosError } from 'axios';
import { SearchBoxStyle, SelectInputStyle } from './classes';
import { TherapistList } from '../../components';
import { axiosInstance } from '../../utils/apis';

const priceRangeOptions = [
  { value: 'all', label: 'All' },
  { value: '0-50', label: '$0 - $50' },
  { value: '50-100', label: '$50 - $100' },
  { value: '100-200', label: '$100 - $200' },
];
const TherapistPage = () => {
  const [therapists, setTherapists] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      const getTherapistData = async () => {
        try {
          setLoading(true);
          const response = await axiosInstance.get('/therapists', {
            params: {
              q: searchQuery,
              page: currentPage,
              price: selectedPriceRange,
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
            const { message } = error as AxiosError;
            enqueueSnackbar(message, { variant: 'error' });
            setLoading(false);
          }
        }
      };
      getTherapistData();
    },
    [currentPage, selectedPriceRange, searchQuery],
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setTherapists([]);
    setCurrentPage(page);
  };
  const handlePriceFilterChange = (e: SelectChangeEvent<string>) => {
    setSelectedPriceRange(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
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
            <InputLabel id="price-filter-label" sx={{ mr: 2 }}>Price :</InputLabel>
            <Select
              labelId="price-filter-label"
              id="price-filter"
              value={selectedPriceRange}
              onChange={handlePriceFilterChange}
              style={SelectInputStyle}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '1rem',
                  color: 'inherit',
                  padding: '10px 12px',
                },
              }}
            >
              {priceRangeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value} sx={{ pr: 4 }}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
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
            disabled={totalPages === 1}
          />
        </Box>
      </Container>
    </>
  );
};

export default TherapistPage;
