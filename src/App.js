import './App.css';
import Web3 from 'web3';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const web3 = new Web3(
      Web3.givenProvider ||
        'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    );
    //Create an Account
    const wallet = web3.eth.accounts.wallet.create(1);

    const account = web3.eth.accounts.create();
    wallet.add(
      '1E99423A4ED27608A15A2616A2B0E9E52CED330AC530EDCC32C8FFC6A526AEDD',
    );
    console.log(wallet);

    //getBalance
    web3.eth
      .getBalance(wallet[0].address)
      .then((balance) => console.log(balance));

    const encryptedWallet = web3.eth.accounts.wallet.encrypt('senha');
    console.log(encryptedWallet);

    const decryptedWallet = web3.eth.accounts.wallet.decrypt(
      encryptedWallet,
      'senha',
    );
    console.log(decryptedWallet);
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
