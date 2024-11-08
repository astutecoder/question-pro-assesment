import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../utils/constants/colors';

type Props = {
  color?: string;
  size?: 'sm' | 'regular' | 'lg';
};

const HeadingText: FC<PropsWithChildren<Props>> = ({
  color = COLORS.TEXT_PRIMARY,
  size = 'regular',
  children,
}) => {
  return (
    <Text color={color} size={size}>
      {children}
    </Text>
  );
};

export default HeadingText;

const Text = styled.p<{ color: Props['color']; size: Props['size'] }>`
  margin: 0;
  padding: 0;
  color: ${(props) => props.color};
  font-weight: 500;

  ${({ size }) => {
    if (size === 'lg') {
      return css`
        font-size: 32px;
      `;
    }
    if (size === 'regular') {
      return css`
        font-size: 24px;
      `;
    }
    if (size === 'sm') {
      return css`
        font-size: 20px;
      `;
    }
  }};
`;
