/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RecoveryFacet,
  RecoveryFacetInterface,
} from "../../../contracts/facets/RecoveryFacet";

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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
    ],
    name: "NullifierHashAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "signal",
        type: "bytes32",
      },
    ],
    name: "ProofVerified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum IRecoveryInternal.RecoveryStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "majority",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nominee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "counter",
        type: "uint8",
      },
    ],
    name: "RecoveryUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "getMajority",
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
    inputs: [],
    name: "getRecoveryCounter",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecoveryNominee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecoveryStatus",
    outputs: [
      {
        internalType: "enum IRecoveryInternal.RecoveryStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
        internalType: "bytes32",
        name: "signal",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "externalNullifier",
        type: "uint256",
      },
      {
        internalType: "uint256[8]",
        name: "proof",
        type: "uint256[8]",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "recover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "recoveryFacetVersion",
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
    inputs: [],
    name: "resetRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f08806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a9e41ab41161005b578063a9e41ab4146100bd578063f0211581146100dd578063f79c8b77146100f3578063fca46d261461011f57600080fd5b8063124f8d9c146100825780632e0c20ff146100a05780634fcdd516146100aa575b600080fd5b61008a610146565b6040516100979190610c46565b60405180910390f35b6100a8610155565b005b6100a86100b8366004610c54565b610167565b6100c56102e6565b6040516001600160a01b039091168152602001610097565b6100e5610307565b604051908152602001610097565b600080516020610eb383398151915254600160a01b900460ff1660405160ff9091168152602001610097565b6040805180820182526005815264302e302e3160d81b602082015290516100979190610cc3565b6000610150610331565b905090565b61015d610357565b6101656103d0565b565b60006101736000610466565b8051909150806101c35760405162461bcd60e51b81526020600482015260166024820152755265636f766572793a204e4f5f475541524449414e5360501b60448201526064015b60405180910390fd5b60006101d3600183811c90610d2e565b90506101df81856105fb565b6101ec898989898961077d565b887f102229041138505f4cecdadc8e3ac1cd92c55870c17371050fc00bdb088898018960405161021e91815260200190565b60405180910390a2610230818561083a565b61023e600183811c90610d2e565b600080516020610eb383398151915254600160a01b900460ff16036102db577f24aa1f7b31fd188a8d3ecfb06bc55c806040e59b03bd4396283442fce661789080546001600160a01b0319166001600160a01b0386161790556040516001600160a01b03851681527f5e06a4da1c258ba9bc6142ca9e5b6dfa64e57f7fc4e91a150ba0b3fd301587a09060200160405180910390a16102db6103d0565b505050505050505050565b6000610150600080516020610eb3833981519152546001600160a01b031690565b60006101507faf0525525908baaff0e6412b57bc60b8a792d1f6f652d81c81fcd14c5145a6315490565b6000600080516020610e938339815191525460ff16600381111561015057610150610c0e565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460546001600160a01b031633146101655760405162461bcd60e51b815260206004820152601d60248201527f4f776e61626c653a2073656e646572206d757374206265206f776e657200000060448201526064016101ba565b6103f760005b600080516020610e9383398151915290815460ff191660ff91909116179055565b6104126000600080516020610e938339815191525b60010155565b61044a6000600080516020610e938339815191525b60020180546001600160a01b0319166001600160a01b0392909216919091179055565b600080516020610eb3833981519152805460ff60a01b19169055565b606060007f45859138d8d663d06b2ba6d2358a3e0ff977596ccb2ad702c7f89e6584675d346001015467ffffffffffffffff8111156104a7576104a7610d46565b6040519080825280602002602001820160405280156104f257816020015b60408051606081018252600080825260208083018290529282015282526000199092019101816104c55790505b5090506000805b7f45859138d8d663d06b2ba6d2358a3e0ff977596ccb2ad702c7f89e6584675d35548110156105f25760007f45859138d8d663d06b2ba6d2358a3e0ff977596ccb2ad702c7f89e6584675d34600101828154811061055957610559610d5c565b600091825260209182902060408051606081018252600293909302909101805483526001015460ff81169383019390935261010090920467ffffffffffffffff169181019190915290506105ad818761093f565b156105df57808484815181106105c5576105c5610d5c565b602002602001018190525082806105db90610d72565b9350505b50806105ea81610d72565b9150506104f9565b50909392505050565b6000821161064b5760405162461bcd60e51b815260206004820152601760248201527f5265636f766572793a205a45524f5f4d414a4f5249545900000000000000000060448201526064016101ba565b6001600160a01b03811661069a5760405162461bcd60e51b81526020600482015260166024820152755265636f766572793a205a45524f5f4e4f4d494e454560501b60448201526064016101ba565b336001600160a01b038216036107065760405162461bcd60e51b815260206004820152602b60248201527f5265636f766572793a204e4f545f414c4c4f5745445f544f5f5245434f56455260448201526a17d3d5d397d5d05313115560aa1b60648201526084016101ba565b6002610710610331565b600381111561072157610721610c0e565b036107795760405162461bcd60e51b815260206004820152602260248201527f5265636f766572793a2052454f564552595f414c52454144595f414343455054604482015261115160f21b60648201526084016101ba565b5050565b60008581527f18009942081384ebf013f551c6956278f8f7e6b5ba58de96a877e7d2e169e670602090815260408083206001810154905460ff168085527f1fd5ae9b688ff1e92cea024147bd3c60ba20584ed7225a597f53b9dde63d587e9093529220546001600160a01b03166107f887848888888661096a565b60008681527f2e80343f7be649afb4507a40421854eda29bc956f126850e8d1f99d3fcc3131e60205260409020805460ff191660011790555050505050505050565b6001600080516020610e938339815191526002018054601490610868908490600160a01b900460ff16610d8b565b92506101000a81548160ff021916908360ff160217905550600061088a610331565b905060008160038111156108a0576108a0610c0e565b0361093a576108af60016103d6565b6108c783600080516020610e9383398151915261040c565b6108df82600080516020610e93833981519152610427565b7f45342bb0ee6db68ec0be09a44de7b4c6c917efd1c8e575c224ba485b35a0f5ba60018484600080516020610e938339815191526002015460405161093194939291600160a01b900460ff1690610db0565b60405180910390a15b505050565b600061094a83610b80565b806109615750818015610961575061096183610bac565b90505b92915050565b60008481527f2e80343f7be649afb4507a40421854eda29bc956f126850e8d1f99d3fcc3131e602052604090205460ff1615610a075760405162461bcd60e51b815260206004820152603660248201527f53656d6170686f7265436f72653a20796f752063616e6e6f7420757365207468604482015275652073616d65206e756c6c696669657220747769636560501b60648201526084016101ba565b6000610a1287610bd7565b9050816001600160a01b0316635fe8c13b604051806040016040528086600060088110610a4157610a41610d5c565b6020020135815260200186600160088110610a5e57610a5e610d5c565b6020020135905260408051608081018252878201359181019182529081906060820189600360200201358152508152602001604051806040016040528089600460088110610aae57610aae610d5c565b6020020135815260200189600560088110610acb57610acb610d5c565b60200201359052905260408051808201909152808860066020020135815260200188600760088110610aff57610aff610d5c565b602002013581525060405180608001604052808c81526020018b81526020018781526020018a8152506040518563ffffffff1660e01b8152600401610b479493929190610e0e565b60006040518083038186803b158015610b5f57600080fd5b505afa158015610b73573d6000803e3d6000fd5b5050505050505050505050565b602081015160009060ff166001148015610964575050604001514267ffffffffffffffff909116111590565b602081015160009060ff166001148015610964575050604001514267ffffffffffffffff9091161190565b6000600882604051602001610bee91815260200190565b60408051601f198184030181529190528051602090910120901c92915050565b634e487b7160e01b600052602160045260246000fd5b60048110610c4257634e487b7160e01b600052602160045260246000fd5b9052565b602081016109648284610c24565b6000806000806000806101a08789031215610c6e57600080fd5b86359550602087013594506040870135935060608701359250610180870188811115610c9957600080fd5b608088019250356001600160a01b0381168114610cb557600080fd5b809150509295509295509295565b600060208083528351808285015260005b81811015610cf057858101830151858201604001528201610cd4565b81811115610d02576000604083870101525b50601f01601f1916929092016040019392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610d4157610d41610d18565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600060018201610d8457610d84610d18565b5060010190565b600060ff821660ff84168060ff03821115610da857610da8610d18565b019392505050565b60808101610dbe8287610c24565b60208201949094526001600160a01b0392909216604083015260ff16606090910152919050565b8060005b6002811015610e08578151845260209384019390910190600101610de9565b50505050565b6101808101610e1d8287610de5565b60408083018660005b6002811015610e4d57610e3a838351610de5565b9183019160209190910190600101610e26565b50505050610e5e60c0830185610de5565b61010082018360005b6004811015610e86578151835260209283019290910190600101610e67565b5050509594505050505056feaf0525525908baaff0e6412b57bc60b8a792d1f6f652d81c81fcd14c5145a630af0525525908baaff0e6412b57bc60b8a792d1f6f652d81c81fcd14c5145a632a26469706673582212207d608bc5de11dc025142504ad7823203f2033c03dcef1bbf1e59999565ca174764736f6c634300080e0033";

type RecoveryFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RecoveryFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RecoveryFacet__factory extends ContractFactory {
  constructor(...args: RecoveryFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RecoveryFacet> {
    return super.deploy(overrides || {}) as Promise<RecoveryFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RecoveryFacet {
    return super.attach(address) as RecoveryFacet;
  }
  override connect(signer: Signer): RecoveryFacet__factory {
    return super.connect(signer) as RecoveryFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RecoveryFacetInterface {
    return new utils.Interface(_abi) as RecoveryFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RecoveryFacet {
    return new Contract(address, _abi, signerOrProvider) as RecoveryFacet;
  }
}
