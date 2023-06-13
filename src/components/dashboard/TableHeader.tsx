import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';



const  TableHeader =()=> {
  return (
    <TableHead>
    <TableRow>
      <TableCell >Therapist Name</TableCell>
      <TableCell align="center">Therapist CV</TableCell>
      <TableCell align="center">request Status</TableCell>
      <TableCell align="center">Options</TableCell>
    </TableRow>
  </TableHead>
  )
}

export default TableHeader;