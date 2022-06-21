import React from 'react';
import Box from '../../Box';
import {
  CreateWalletContainer,
  CreateWalletTittle,
  CreateWalletKey,
  LinkToMyWallet,
} from './styled';

function CreateWallet() {
  return (
    <CreateWalletContainer>
      <header>
        <CreateWalletTittle className="light">
          Please save your private key in a secure place
        </CreateWalletTittle>
      </header>
      <Box>
        <CreateWalletKey className="primary">
          fa1230821930812309182903812093812039182309821093812039821093821093
        </CreateWalletKey>
      </Box>
      <LinkToMyWallet to="/wallet">To my Wallet</LinkToMyWallet>
    </CreateWalletContainer>
  );
}

export default CreateWallet;
