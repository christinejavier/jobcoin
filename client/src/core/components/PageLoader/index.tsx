import React from 'react';
import { Box, Spinner } from 'grommet';

const PageLoader: React.FC = () => {
  return (
    <Box align="center" justify="center" margin="xlarge">
      <Spinner size="large" />
    </Box>
  );
};

export { PageLoader };
