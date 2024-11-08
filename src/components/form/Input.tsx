import { ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';

const Input: FC<{
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}> = ({ value, onChange }) => {
  return <InputField value={value} onChange={onChange} />;
};

export default Input;

const InputField = styled.input`
  padding: 6px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
