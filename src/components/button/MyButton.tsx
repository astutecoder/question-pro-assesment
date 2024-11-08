import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants/colors';

type MyButtonProps = { label: string } & HTMLAttributes<HTMLButtonElement>;

const MyButton: FC<MyButtonProps> = ({ label, ...props }) => {
  return <Button {...props}>{label}</Button>;
};

export default MyButton;

const Button = styled.button<{ disabled?: boolean }>`
  background-color: ${(props) =>
    props.disabled ? 'rgba(0,0,0,0.2)' : COLORS.PRIMARY};
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.disabled ? COLORS.TEXT_PRIMARY : 'white')};
  padding: 6px 8px;
  user-select: none;
`;
