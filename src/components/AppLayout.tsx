import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Header from './header/Header';
import AuthInfo from './AuthInfo';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <ContentContainer>
        <Left>{children}</Left>
        <Right>
          <AuthInfo />
        </Right>
      </ContentContainer>
    </>
  );
};

export default AppLayout;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Left = styled.div`
  flex: 4;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
`;
