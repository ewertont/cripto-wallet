import React from 'react';
import {Link} from 'react-router-dom';
import { ChooseWalletContainer, ChooseWalletBox } from './styled';

function ChooseWallet() {
  return (
    <ChooseWalletContainer>
      <ChooseWalletBox as={Link} to="/create-wallet">Create a new Wallet</ChooseWalletBox>
      <ChooseWalletBox as={Link} to="/import-wallet">Import a Wallet</ChooseWalletBox>
    </ChooseWalletContainer>
  );
}

export default ChooseWallet;
