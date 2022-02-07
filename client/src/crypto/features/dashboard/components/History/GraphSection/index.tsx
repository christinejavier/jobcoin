import React, { useContext, Suspense } from 'react';
import { Box } from 'grommet';
import { AddressInfoContext } from '../../../contexts/AddressInfoContext';
import { ErrorMessage } from '../../../../../../core/components/ErrorMessage';
import { parseTransactions } from '../../../helpers/parseTransactions';
import { SectionLoader } from '../../../../../../core/components/SectionLoader';

const LineGraph = React.lazy(() => import('../LineGraph')); // Lazy-loaded

const GraphSection = () => {
  const { data, error } = useContext(AddressInfoContext);

  return (
    <Box width="large" height="medium" alignContent="center">
      <Suspense fallback={<SectionLoader />}>
        <LineGraph transactions={parseTransactions(data.transactions)} />
      </Suspense>
      <ErrorMessage id="history-graph" error={error} />
    </Box>
  );
};

export { GraphSection };
