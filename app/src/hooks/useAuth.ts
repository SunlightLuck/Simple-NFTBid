import {useWeb3React} from '@web3-react/core'
import {InjectedConnector} from '@web3-react/injected-connector'
import { useTokenContract } from './useContract';
import {useEffect} from 'react'

const useAuth = () => {
  const {activate, account} = useWeb3React();
  const contract = useTokenContract();

  const connector = new InjectedConnector({supportedChainIds: [4]})
  activate(connector);

  useEffect(() => {
    contract?.on('NewBid', (tokenID: any, bidAmount: any, bidData: any) => {})
    contract?.on('TokenTrade', (tokenID: any, newOwner: any, previousOwner: any, priceInWei: any) => {})
    contract?.on('Transfer', (tokenID: any, bidAmount: any, bidData: any) => {
  
    return () => {
      connector?.removeListener('MewBod');
      connector?.removeListener('TokenTrade');
      connector?.removeListener('Transfer');
      connector?.removeListener('NewBid');      
    }
  }, [])
  

  return account;
}