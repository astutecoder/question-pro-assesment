import { observer } from 'mobx-react';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { authStore } from '../store/auth.store';
import { COLORS } from '../utils/constants/colors';
import BodyText from './typography/BodyText';
import styled from 'styled-components';

const AuthInfo = observer(() => {
  const { name, email } = authStore;
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    navigate('/user');
  };

  return (
    <Container onClick={handleClick}>
      <BodyText color={COLORS.PRIMARY}>Hi! {name}</BodyText>
      <BodyText>{email}</BodyText>
    </Container>
  );
});

export default AuthInfo;

const Container = styled.div`
  cursor: pointer;
`;
