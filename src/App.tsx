import * as React from 'react';
import { Dashboard } from './components/Dashboard';
import {
  GlobalStyle,
  Container,
  Navbar,
  NavLink,
  IconWrap,
  Heading,
  InnerLeftNav,
} from './App.style';
import { FaGithub } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Authenticate } from './components/Authenticate';
import { BackButtonListener } from './components/BackButtonListener';
import { ProvideAuth } from './hooks/useAuth';
import { SiGraphql } from 'react-icons/si';

const GITHUB_REPO =
  'https://github.com/scottjason/ts-boilerplate-graphql-mongodb';

export const App = () => {
  return (
    <ProvideAuth>
      <BackButtonListener>
        <Router>
          <GlobalStyle />
          <Container>
            <Navbar>
              <InnerLeftNav>
                <IconWrap type="graphql">
                  <SiGraphql className="animate__animated animate__rotateIn" />
                </IconWrap>
                <Link to="/">
                  <Heading>GRAPHQL AUTHENTICATION</Heading>
                </Link>
              </InnerLeftNav>
              <NavLink onClick={() => window.open(GITHUB_REPO)}>
                <IconWrap type="">
                  <FaGithub />
                </IconWrap>
                <Heading>SOURCE CODE</Heading>
              </NavLink>
            </Navbar>
            <Routes>
              <Route path="/" element={<Authenticate />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Router>
      </BackButtonListener>
    </ProvideAuth>
  );
};
