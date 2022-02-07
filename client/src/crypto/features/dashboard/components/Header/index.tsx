import React from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Box } from 'grommet';
import { Logo } from '../../../../../core/components/Logo';

const Header: React.FC = () => {
  const { address } = useParams();

  return (
    <Box
      gap="small"
      gridArea="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: 'medium', vertical: 'small' }}
      background="dark-2">
      <Box
        gap="small"
        direction="row"
        align="center"
        justify="center"
        pad="small">
        <Logo />
        <span>Jobcoin Sender: {address}</span>
      </Box>
      <Box
        gap="small"
        direction="row"
        align="center"
        justify="center"
        pad="small">
        <Avatar background="dark-4" size="medium">
          {address && address.length >= 1 ? address[0] : '?'}
        </Avatar>
        <span>Signed In</span>
        <a href="/">Sign Out</a>
      </Box>
    </Box>
  );
};

export { Header };
