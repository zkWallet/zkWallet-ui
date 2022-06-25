/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IIncrementalBinaryTreeInternal,
  IIncrementalBinaryTreeInternalInterface,
} from "../../../../../contracts/utils/cryptography/IncrementalBinaryTree/IIncrementalBinaryTreeInternal";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "treeId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "leaf",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "root",
        type: "uint256",
      },
    ],
    name: "LeafInserted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "treeId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "leaf",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "root",
        type: "uint256",
      },
    ],
    name: "LeafRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "depth",
        type: "uint8",
      },
    ],
    name: "TreeCreated",
    type: "event",
  },
];

export class IIncrementalBinaryTreeInternal__factory {
  static readonly abi = _abi;
  static createInterface(): IIncrementalBinaryTreeInternalInterface {
    return new utils.Interface(_abi) as IIncrementalBinaryTreeInternalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IIncrementalBinaryTreeInternal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IIncrementalBinaryTreeInternal;
  }
}