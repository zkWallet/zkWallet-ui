/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC20ServiceInternal,
  IERC20ServiceInternalInterface,
} from "../../../../contracts/token/ERC20/IERC20ServiceInternal";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "ERC20TokenRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "ERC20TokenTracked",
    type: "event",
  },
];

export class IERC20ServiceInternal__factory {
  static readonly abi = _abi;
  static createInterface(): IERC20ServiceInternalInterface {
    return new utils.Interface(_abi) as IERC20ServiceInternalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC20ServiceInternal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC20ServiceInternal;
  }
}
