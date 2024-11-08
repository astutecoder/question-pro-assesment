import { ChangeEvent } from 'react';
import styled from 'styled-components';
import Input from '../../components/form/Input';
import BodyText from '../../components/typography/BodyText';
import { authStore } from '../../store/auth.store';
import { observer } from 'mobx-react';

const Users = observer(() => {
  const { name, updateName, email, updateEmail } = authStore;

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateName(e.currentTarget.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateEmail(e.currentTarget.value);
  };

  return (
    <div>
      <BodyText size="large">Profile</BodyText>
      <InputWrapper>
        <BodyText size="sm">Name</BodyText>
        <Input onChange={handleNameChange} value={name} />
      </InputWrapper>
      <InputWrapper>
        <BodyText size="sm">Email</BodyText>
        <Input onChange={handleEmailChange} value={email} />
      </InputWrapper>
    </div>
  );
});

export default Users;

const InputWrapper = styled.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;
