import React, { useEffect, useState } from 'react';
import { Grommet, Box, Grid } from 'grommet';
import { useParams } from 'react-router-dom';
import { AddressInfoContext } from '../../contexts/AddressInfoContext';
import { PageLoader } from '../../../../../core/components/PageLoader';
import { Header } from '../../components/Header';
import { Balance } from '../../components/Balance';
import { SendJobcoin } from '../../components/SendJobcoin';
import { History } from '../../components/History';
import { grommet } from 'grommet/themes';
import { getAddressInfo } from '../../../../api/getAddressInfo';

const DashboardPage: React.FC = () => {
  const { address = '' } = useParams();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [hasUpdatedData, setHasUpdatedData] = useState(false);

  useEffect(() => {
    getAddressInfo(address)
      .then((data) => {
        setData(data);
        setHasUpdatedData(false);
      })
      .catch((error) => {
        setError(error);
        setHasUpdatedData(false);
      });
  }, [address, hasUpdatedData]);

  if (!data && !error) {
    return <PageLoader />;
  }

  return (
    <AddressInfoContext.Provider
      value={{ data: data, error: error, setHasUpdatedData }}>
      <Grommet full theme={grommet}>
        <Header />
        <main>
          <Grid height="100%" columns={['1/3', '2/3']}>
            <Box background="light-1" pad="small">
              <Balance />
              <SendJobcoin />
            </Box>
            <Box background="light-2" pad="small">
              <History />
            </Box>
          </Grid>
        </main>
      </Grommet>
    </AddressInfoContext.Provider>
  );
};

export default DashboardPage;
