import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../utils/constants/colors';

type Props = {
  color?: string;
  size?: 'sm' | 'regular' | 'large';
} & HTMLAttributes<HTMLParagraphElement>;

const BodyText: FC<PropsWithChildren<Props>> = ({
  color = COLORS.TEXT_PRIMARY,
  size = 'regular',
  children,
  ...props
}) => {
  return (
    <Text color={color} size={size} {...props}>
      {children}
    </Text>
  );
};

export default BodyText;

const Text = styled.p<{ color: Props['color']; size: Props['size'] }>`
  margin: 0;
  padding: 0;
  color: ${(props) => props.color};
  ${({ size }) => {
    if (size === 'large') {
      return css`
        font-size: 18px;
      `;
    }
    if (size === 'regular') {
      return css`
        font-size: 14px;
      `;
    }
    if (size === 'sm') {
      return css`
        font-size: 12px;
      `;
    }
  }};
`;
