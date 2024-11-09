import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import styled from 'styled-components';
import MyButton from '../../components/button/MyButton';
import BodyText from '../../components/typography/BodyText';

const MyComponent: FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);
  let buttonCounter = 0;

  const handleClick = () => {
    setCount((p) => p + 1);
  };

  const addClickEventToFirstButton = (
    children: ReactNode,
    clickHandler: () => void
  ): ReactNode => {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        const element = child as ReactElement;
        if (element.type === MyButton) {
          const newProps =
            buttonCounter === 0
              ? { onClick: clickHandler }
              : { disabled: true };
          buttonCounter++;

          return cloneElement(element, newProps);
        }

        if (element.props.children) {
          return cloneElement(element, {
            children: addClickEventToFirstButton(
              element.props.children,
              clickHandler
            ),
          });
        }
      }

      return child;
    });
  };

  const modifiedChildren = addClickEventToFirstButton(children, handleClick);

  return (
    <Container>
      <BodyText>Hey! You have clicked me {count} times</BodyText>

      <ChildrenWrapper>{modifiedChildren}</ChildrenWrapper>
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
