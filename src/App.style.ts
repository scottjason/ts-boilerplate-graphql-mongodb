import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }
  p, a, h1, h2, button, div, input {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  font-size: 1rem;
  background-image: linear-gradient(to right, #03045e, #023e8a, #0077b6);
`;

export const Navbar = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  font-size: 1rem;
  color: rgba(225, 225, 225, 0.9);
  letter-spacing: 2px;
  cursor: pointer;
`;

export const NavLink = styled.div`
  display: flex;
  font-size: 1rem;
  color: rgba(225, 225, 225, 1);
  letter-spacing: 2px;
  cursor: pointer;
`;

export const IconGithubWrap = styled.div<{ type: string }>`
  margin: 0.125rem 0.55rem 0 0;
`;

export const IconWrap = styled.div<{ type: string }>`
  margin: 0.125rem 0.55rem 0 0;
  color: ${props => (props.type === 'graphql' ? '#e535ab' : 'unset')};
  position: ${props => (props.type === 'graphql' ? 'relative' : 'unset')};
  margin-top: ${props => (props.type === 'graphql' ? '0.155rem' : '0.125rem')};
  margin-right: ${props => (props.type === 'graphql' ? '0.6rem' : '0.55rem')};
`;

export const InnerLeftNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
