import React from 'react'
import { CreateWalletContainer } from './styled'

function CreateWallet() {
  return (
    <CreateWalletContainer>
      <header>
        <h2 className='light'>Please save your private key in a secure place</h2>
      </header>
      <article>
        <p className='primary'>fa1230821930812309182903812093812039182309821093812039821093821093</p>
      </article>
      <a href='#'>To my wallet</a>  
    </CreateWalletContainer>

  )
}

export default CreateWallet