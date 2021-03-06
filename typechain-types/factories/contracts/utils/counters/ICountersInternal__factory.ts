/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICountersInternal,
  ICountersInternalInterface,
} from "../../../../contracts/utils/counters/ICountersInternal";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "Decremented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "Incremented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "Reset",
    type: "event",
  },
];

export class ICountersInternal__factory {
  static readonly abi = _abi;
  static createInterface(): ICountersInternalInterface {
    return new utils.Interface(_abi) as ICountersInternalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICountersInternal {
    return new Contract(address, _abi, signerOrProvider) as ICountersInternal;
  }
}
