import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';


const contractAbi= require('./contractABI.json');
declare var window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  private web3: Web3;
  private contract: Contract;
  private contractAddress = '0x93533cEcb1B8AAc19d55396d709Bda1EC62E104C';

  constructor() {
    if (window.web3) {
      this.web3 = new Web3(window.ethereum);
      this.contract = new this.web3.eth.Contract(
        contractAbi,
        this.contractAddress
      );
      window.ethereum.enable().catch((err)=>{
        console.log(err);
      });
    } else {
      console.warn('Metamask Not Found. Please install or enable it');
    }
  }

  getAccount():Promise<string>{
    return this.web3.eth.getAccounts().then((accounts)=>accounts[0]||'');
  }

  async executeTransaction(fnName,...args):Promise<void>{
    const acc=await this.getAccount();
    this.contract.methods[fnName](...args).send({ from : acc});
  }
}
