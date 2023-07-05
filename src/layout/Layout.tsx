import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';

const Layout = () => (
  <>
    <div>Navbar</div>
    <Outlet />
    <Footer />
  </>

);

export default Layout;
