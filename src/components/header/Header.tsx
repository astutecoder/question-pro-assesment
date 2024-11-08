import styled from 'styled-components';
import { MenuItem } from '../MenuItem';

const Header = () => {
  return (
    <HeaderContainer>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/dashboard">Dashboard</MenuItem>
      <MenuItem to="/my-component">My Component</MenuItem>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  gap: 8px;
  padding-left: 20px;
  padding-right: 20px;
`;
