import TableMiu from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Table = ({ children }: Props) => {
  return (
    <>
      <TableContainer component={Paper}>
        <TableMiu sx={{ minWidth: 650 }} aria-label="simple table">
          {children}
        </TableMiu>
      </TableContainer>
    </>
  )
}

export default Table;
