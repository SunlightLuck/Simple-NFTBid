import { createWeb3ReactRoot } from "@web3-react/core";
import React from "react";
import {Web3Provider} from '@ethersproject/providers'

const Web3ProviderNetwork = createWeb3ReactRoot("SECRET");

const getLibrary = provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const Provider = props => (
  <Web3ReactProvider getLibrary = {getLibrary}>
    <Web3ProviderNetwork getLibrary={ getLibrary}>
      {props.children}
    </Web3ProviderNetwork>
  </Web3ReactProvider>
)

export default Provider;