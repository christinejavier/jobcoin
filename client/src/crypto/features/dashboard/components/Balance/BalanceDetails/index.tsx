import React, { useContext } from 'react';
import { AddressInfoContext } from '../../../contexts/AddressInfoContext';
import { SectionLoader } from '../../../../../../core/components/SectionLoader';
import { ErrorMessage } from '../../../../../../core/components/ErrorMessage';

const BalanceDetails: React.FC = () => {
  const { data, error } = useContext(AddressInfoContext);

  if (!data && !error) {
    return <SectionLoader />;
  }

  return (
    <>
      <span>{data.balance}</span>
      <ErrorMessage id="balance-details" error={error} />
    </>
  );
};

export { BalanceDetails };
