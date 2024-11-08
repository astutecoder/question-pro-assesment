import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MenuItem } from '../../components/MenuItem';

const queryClient = new QueryClient();

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.endsWith('dashboard')) {
      navigate('/dashboard/posts');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <MenuItem to="posts">Post</MenuItem>
        <MenuItem to="comments">Comments</MenuItem>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Container>
    </QueryClientProvider>
  );
};

export default Dashboard;

const Container = styled.div``;
const ContentContainer = styled.div`
  margin-top: 20px;
`;
