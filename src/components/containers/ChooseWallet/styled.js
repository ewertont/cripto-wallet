import styled from 'styled-components';
import Box from '../../../components/Box';

export const ChooseWalletContainer = styled.section`
  width: 100%;
  max-width: 999px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

export const ChooseWalletBox = styled(Box)`
  height: 226px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--lightColor);
  font-size: 32px;
  width: 100%;
  max-width: 458px;
  text-decoration: none;
  transition: transform 0.3s ease-out;
  &:hover {	
    transform: scale(0.95);
  }
`;
