import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import TableHeader from '../../components/dashboard/TableHeader';
import BodyTable from "../../components/dashboard/BodyTable";

const Admin = () => {
  return (
    <>
      <div>Admin</div>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeader />
            <BodyTable />
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default Admin
