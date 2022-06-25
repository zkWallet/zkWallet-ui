/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDiamondBase,
  IDiamondBaseInterface,
} from "../../../../../../@solidstate/contracts/proxy/diamond/base/IDiamondBase";

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
];

export class IDiamondBase__factory {
  static readonly abi = _abi;
  static createInterface(): IDiamondBaseInterface {
    return new utils.Interface(_abi) as IDiamondBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDiamondBase {
    return new Contract(address, _abi, signerOrProvider) as IDiamondBase;
  }
}
