import React, { FC, PropsWithChildren, ReactElement, useState } from 'react';
import styled from 'styled-components';
import BodyText from '../../components/typography/BodyText';

const MyComponent: FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((p) => p + 1);
  };
  return (
    <Container>
      <BodyText>Hey! You have clicked me {count} times</BodyText>

      <ChildrenWrapper>
        {React.Children.map(children, (child, index) => {
          const newProps =
            index === 0 ? { onClick: handleClick } : { disabled: true };

          return React.cloneElement(child as ReactElement, newProps);
        })}
      </ChildrenWrapper>
    </Container>
  );
};

export default MyComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
