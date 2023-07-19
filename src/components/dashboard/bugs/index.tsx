import { useEffect, useState } from 'react';
import {
  Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
} from '@mui/material';
import { AxiosError } from 'axios';
import { enqueueSnackbar } from 'notistack';
import { axiosInstance } from '../../../utils/apis';

interface Bug {
    title: string;
    description: string;
    priority: string;
    status?: string | undefined;
    assignedTo?: string | undefined;
}
const Bugs = () => {
  const [bugs, setBugs] = useState<Bug[]>([]);

  useEffect(() => {
    const getBugs = async () => {
      try {
        const response = await axiosInstance.get('/bugs');
        setBugs(response.data);
      } catch (error) {
        const axiosError = error as AxiosError;
        enqueueSnackbar(axiosError.message, { variant: 'error' });
      }
    };
    getBugs();
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>priority</TableCell>

            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bugs.map((bug) => (
            <TableRow>
              <TableCell>{bug.title}</TableCell>
              <TableCell>{bug.description}</TableCell>
              <TableCell>{bug.priority}</TableCell>
              <TableCell>{bug.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Bugs;
