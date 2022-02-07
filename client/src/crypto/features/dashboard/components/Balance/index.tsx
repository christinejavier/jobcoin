import React from 'react';
import styled from 'styled-components';

import { BalanceDetails } from '../Balance/BalanceDetails';

const Section = styled.section`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const Balance: React.FC = () => {
  return (
    <Section aria-label="balance">
      <h1>Jobcoin Balance</h1>
      <BalanceDetails />
    </Section>
  );
};

export { Balance };
