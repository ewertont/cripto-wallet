import styled from 'styled-components';
import Box from '../../Box';
import { Link } from 'react-router-dom';

export const CreateWalletContainer = styled.section`
  width: 100%;
  max-width: 1002px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${Box} {
    padding: 103px 53px;
    width: 100%;
    text-align: center;
    margin-bottom: 69px;
  }
`;

export const LinkToMyWallet = styled(Link)`
  text-decoration: none;
  color: var(--primaryColor);
`;

export const CreateWalletTittle = styled.p`
  font-size: 26px;
`;

export const CreateWalletKey = styled.p`
  font-size: 32px;
  word-break: break-all;
  margin: 0;
  font-weight: 400;
  font-style: italic;
`;
