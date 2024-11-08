import { FC } from 'react';
import styled from 'styled-components';
import HeadingText from '../typography/HeadingText';
import BodyText from '../typography/BodyText';
import { COLORS } from '../../utils/constants/colors';

const Card: FC<{ title: string; content: string }> = ({ title, content }) => {
  return (
    <CardContainer>
      <Title color={COLORS.PRIMARY} size="sm">
        {title}
      </Title>
      <BodyText>{content}</BodyText>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 12px;
`;

const Title = styled(HeadingText)`
  margin-bottom: 12px;
`;
