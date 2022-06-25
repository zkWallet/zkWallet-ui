/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  WalletFactoryInternal,
  WalletFactoryInternalInterface,
} from "../../../../contracts/wallet/factory/WalletFactoryInternal";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "DiamondIsSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "facetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "version",
        type: "string",
      },
    ],
    name: "FacetIsAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "facetAddress",
        type: "address",
      },
    ],
    name: "FacetIsRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hashId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "guardian",
        type: "bytes32",
      },
    ],
    name: "GuardianAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hashId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "guardian",
        type: "bytes32",
      },
    ],
    name: "GuardianRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "instance",
        type: "address",
      },
    ],
    name: "NewDiamondWallet",
    type: "event",
  },
  {
    inputs: [],
    name: "WALLET_CREATION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class WalletFactoryInternal__factory {
  static readonly abi = _abi;
  static createInterface(): WalletFactoryInternalInterface {
    return new utils.Interface(_abi) as WalletFactoryInternalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WalletFactoryInternal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WalletFactoryInternal;
  }
}
