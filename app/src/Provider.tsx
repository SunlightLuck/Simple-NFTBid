import React from 'react';
import {createWeb3ReactRoot, Web3ReactProvider} from "@web3-react/core"
import { Web3Provider } from '@ethersproject/providers';

const Web3ProviderNetwork = createWeb3ReactRoot("SECRET")

const getLibrary = (provider: any) : Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

interface Props {
  children: any;
}

const Provider: React.FC<Props> = ({children}) => (
  <Web3ReactProvider getLibrary = {getLibrary}>
    <Web3ProviderNetwork getLibrary = {getLibrary}>
      {children}
    </Web3ProviderNetwork>
  </Web3ReactProvider>
)

export default Provider;