/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGuardianFacet,
  IGuardianFacetInterface,
} from "../../../contracts/interfaces/IGuardianFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "hashId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "effectiveTime",
        type: "uint256",
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
        internalType: "uint256",
        name: "hashId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "effectiveTime",
        type: "uint256",
      },
    ],
    name: "GuardianRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hashId",
        type: "uint256",
      },
    ],
    name: "addGuardian",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hashId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
    ],
    name: "addGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "identityCommitments",
        type: "uint256[]",
      },
    ],
    name: "addGuardians",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelPendingGuardians",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hashId",
        type: "uint256",
      },
    ],
    name: "getGuardian",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "hashId",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64",
          },
        ],
        internalType: "struct GuardianStorage.Guardian",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "includePendingAddition",
        type: "bool",
      },
    ],
    name: "getGuardians",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "hashId",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64",
          },
        ],
        internalType: "struct GuardianStorage.Guardian[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "guardianFacetVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "includePendingAddition",
        type: "bool",
      },
    ],
    name: "numGuardians",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hashId",
        type: "uint256",
      },
    ],
    name: "removeGuardian",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hashId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "identityCommitment",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "proofSiblings",
        type: "uint256[]",
      },
      {
        internalType: "uint8[]",
        name: "proofPathIndices",
        type: "uint8[]",
      },
    ],
    name: "removeGuardian",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "guardians",
        type: "uint256[]",
      },
    ],
    name: "removeGuardians",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "hashId",
            type: "uint256",
          },
        ],
        internalType: "struct IGuardianInternal.GuardianDTO[]",
        name: "guardians",
        type: "tuple[]",
      },
    ],
    name: "requireMajority",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "guardians",
        type: "uint256[]",
      },
    ],
    name: "setInitialGuardians",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IGuardianFacet__factory {
  static readonly abi = _abi;
  static createInterface(): IGuardianFacetInterface {
    return new utils.Interface(_abi) as IGuardianFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGuardianFacet {
    return new Contract(address, _abi, signerOrProvider) as IGuardianFacet;
  }
}
