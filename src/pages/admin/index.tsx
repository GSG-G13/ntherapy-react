import { Container } from '@mui/material';
import Table from '../../components/dashboard/table';
import TherapistTable from '../../components/dashboard/table/therapists';

const Admin = () => (
  <>
    <div>Admin</div>
    <Container>
      <Table>
        <TherapistTable />
      </Table>
    </Container>
  </>
);

export default Admin;
