import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Dynamic Dashboard</Title>
    <Description>An interactive dashboard displaying sample data.</Description>
  </HeaderContainer>
);

export default Header;
