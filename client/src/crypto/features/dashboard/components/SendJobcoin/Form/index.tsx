import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Spinner } from 'grommet';
import styled from 'styled-components';
import { Input } from '../../../../../../core/components/Input';
import { Button } from '../../../../../../core/components/Button';
import { ErrorMessage } from '../../../../../../core/components/ErrorMessage';
import { AddressInfoContext } from '../../../contexts/AddressInfoContext';
import { postJobcoinTransaction } from '../../../../../api/postJobcoinTransaction';

const StyledDiv = styled.div`
  margin-bottom: 1rem;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Form: React.FC = () => {
  const { address: fromAddress = '' } = useParams();
  const [toAddress, setToAddress] = useState('');
  const [postRequestIsLoading, setPostRequestIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(null);
  const { setHasUpdatedData } = useContext(AddressInfoContext);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setToAddress(e.target.value);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(null);
    }
    setAmount(e.target.value);
  };

  const handleSubmitJobcoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPostRequestIsLoading(true);

    postJobcoinTransaction({
      fromAddress,
      toAddress,
      amount,
    })
      .then((res) => {
        setPostRequestIsLoading(false);
        if (res.error) {
          if (res.error.amount) {
            throw new Error(res.error.amount);
          } else {
            throw new Error(res.error);
          }
        }

        if (res.status === 'OK') {
          setHasUpdatedData(true);
        }
      })
      .catch((error) => {
        setPostRequestIsLoading(false);
        setError(error);
      });
  };

  return (
    <form onSubmit={handleSubmitJobcoin}>
      {postRequestIsLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <Box>
          <StyledDiv>
            <Input
              name="toAddress"
              id="toAddress"
              label="Destination Address"
              type="text"
              value={toAddress}
              handleChange={handleAddressChange}
              required
            />
          </StyledDiv>
          <StyledDiv>
            <Input
              ariaInvalid={Boolean(error)}
              errorId="send-jobcoins-amount"
              name="amount"
              id="amount"
              label="Amount to Send"
              type="number"
              value={amount}
              handleChange={handleAmountChange}
              required
            />
            <ErrorMessage id="send-jobcoins-amount" error={error} />
          </StyledDiv>
          <StyledDiv>
            <Button type="submit" text="Send Jobcoins" />
          </StyledDiv>
        </Box>
      )}
    </form>
  );
};

export { Form };
