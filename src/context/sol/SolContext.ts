import { createContext } from 'react';

interface ISolContext {
  connectWallet: any;
  transferSol: any;    
}

const SolContext = createContext<ISolContext>({
  connectWallet: ()=>{},
  transferSol: ()=>{}
});

export default SolContext;
