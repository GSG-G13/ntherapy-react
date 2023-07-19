import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const DashboardInfoContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const DashboardInfoWrap = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  boxShadow: '2px 10px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '7px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4, 2, 2),
  height: '100%',
}));
const DashboardInfoTitle = styled(Typography)({
  color: '#6c6c6c',
  fontSize: '1.18em',
});

const DashboardInfoCount = styled(Typography)({
  fontWeight: 600,
  fontSize: '2.5em',
  lineHeight: '64px',
  color: '#323c43',
});

const DashboardInfo = () => (
  <div id="root">
    <div className="container pt-5">
      <div className="row align-items-stretch">
        <div className="c-dashboardInfo col-lg-3 col-md-6">
          <DashboardInfoContainer>
            <DashboardInfoWrap
              sx={{ '&:after': { background: 'linear-gradient(82.59deg, #00c48c 0%, #00a173 100%)' } }}
            >
              <DashboardInfoTitle variant="h4" className="heading heading5 hind-font medium-font-weight">
                Portfolio Balance
              </DashboardInfoTitle>
              <DashboardInfoCount variant="span" className="hind-font caption-12 c-dashboardInfo__count">
                €10,500
              </DashboardInfoCount>
            </DashboardInfoWrap>
          </DashboardInfoContainer>
        </div>

        {/* Repeat the above code for other dashboard info items */}
      </div>
    </div>
  </div>
);

export default DashboardInfo;
