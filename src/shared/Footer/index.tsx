import { ReactElement } from 'react';

import styled from 'styled-components';

import { screen } from '@/global/breakpoints';
import Heading from '@/uikit/Heading';
import PageContentWrap from '@/uikit/PageContentWrap';
import Typography from '@/uikit/Typography';

import BottomFooter from './BottomFooter';
import GetStartedButton from './GetStartedButton';

interface IProps {
  className?: string;
}

function FooterBase({ className }: IProps): ReactElement {
  return (
    <Container className={className}>
      <FooterGetStarted>
        <GetStartedHeading>
          <strong>Ready to run buttery-smooth virtual sessions?</strong> It’s
          time to experience Butter for yourself!
        </GetStartedHeading>
        <GetStartedButton />
      </FooterGetStarted>
      <BottomFooterWrapper>
        <BottomFooter />
      </BottomFooterWrapper>
    </Container>
  );
}

const Footer = styled(FooterBase)`
  background-color: ${(p) => p.theme.dark};
`;

const Container = styled.div``;

const FooterGetStarted = styled(PageContentWrap)`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media ${screen.laptop} {
    padding: 100px 70px;
  }
`;

const GetStartedHeading = styled(Typography)`
  font-size: 32px;
  color: white;
  font-weight: 300;

  @media ${screen.laptop} {
    font-size: 64px;
  }
`;

const BottomFooterWrapper = styled.div`
  margin-top: 20px;
`;

export default Footer;
