import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../utils/constants/colors';

export const MenuItem = styled(NavLink)`
  padding: 6px 8px;
  text-decoration: none;
  color: ${COLORS.TEXT_PRIMARY};

  &.active,
  &:hover {
    background-color: ${COLORS.PRIMARY};
    color: white;
  }
`;
