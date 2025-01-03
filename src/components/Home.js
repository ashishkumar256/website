// src/components/Home.js

import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);  /* Subtract the header height */
`;

const HomeHeading = styled.h1`
  font-size: 2.5em;
  color: #4267B2;
`;

const HomeSubHeading = styled.h2`
  font-size: 1.5em;
  color: #4267B2;
`;

const Home = () => (
  <HomeWrapper>
    <HomeHeading>Welcome to Our Flower Shop!</HomeHeading>
    <HomeSubHeading>Discover a wide variety of beautiful flower plants and products.</HomeSubHeading>
  </HomeWrapper>
);

export default Home;
