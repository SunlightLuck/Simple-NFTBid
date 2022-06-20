import { Web3Provider } from '@ethersproject/providers'
import {useWeb3React as useWeb3ReactCore} from '@web3-react/core'
import {Contract} from 'ethers'
import {useMemo} from 'react'

import ABI from '../contracts/ABI.json'

export const useActiveWeb3React = () => {
  const context = useWeb3ReactCore<Web3Provider>();
  const contextNetwork = useWeb3ReactCore<Web3Provider>("SECRET");
  return context.active ? context : contextNetwork;
}

export const useContract = (address: string | undefined, ABI: any, withSignerIfPossible = false): Contract | null => {
  const {library, account} = useActiveWeb3React();

  return useMemo(() => {
    if(!address || !ABI || !library) {
      return null;
    }
    try {
      return new Contract(address, ABI, withSignerIfPossible && account ? library.getSigner(account).connectUnchecked() : library)
    } catch(err) {
      console.log(err);
      return null;
    }
  }, [address, ABI, library, account])
}

export const useTokenContract = () => {
  return useContract(process.env.CONTRACT_ADDRESS, ABI, true);
}