import React from 'react';
import { Box, Spinner } from 'grommet';

const SectionLoader: React.FC = () => {
  return (
    <Box align="center" justify="center">
      <Spinner size="small" />
    </Box>
  );
};

export { SectionLoader };
