/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SemaphoreFacet,
  SemaphoreFacetInterface,
} from "../../../contracts/facets/SemaphoreFacet";

const _abi = [
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
    inputs: [],
    name: "semaphoreFacetVersion",
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
        components: [
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "merkleTreeDepth",
            type: "uint8",
          },
        ],
        internalType: "struct ISemaphoreInternal.Verifier[]",
        name: "_verifiers",
        type: "tuple[]",
      },
    ],
    name: "setVerifiers",
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
    ],
    name: "verifyProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061092b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631417aa05146100465780636673e8491461005b5780638f64b8ba1461006e575b600080fd5b610059610054366004610646565b61009e565b005b61005961006936600461073a565b6101e8565b6040805180820182526005815264302e302e3160d81b60208201529051610095919061078d565b60405180910390f35b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460546001600160a01b0316331461011c5760405162461bcd60e51b815260206004820152601d60248201527f4f776e61626c653a2073656e646572206d757374206265206f776e657200000060448201526064015b60405180910390fd5b60005b81518160ff1610156101e457818160ff1681518110610140576101406107e2565b6020026020010151600001516101737f1fd5ae9b688ff1e92cea024147bd3c60ba20584ed7225a597f53b9dde63d587e90565b6000016000848460ff168151811061018d5761018d6107e2565b60200260200101516020015160ff1660ff16815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555080806101dc906107f8565b91505061011f565b5050565b6101f58585858585610243565b61020285858585856102cc565b847f102229041138505f4cecdadc8e3ac1cd92c55870c17371050fc00bdb088898018560405161023491815260200190565b60405180910390a25050505050565b60008581527f18009942081384ebf013f551c6956278f8f7e6b5ba58de96a877e7d2e169e670602052604081205460ff16908190036102c45760405162461bcd60e51b815260206004820152601f60248201527f53656d6170686f72653a2067726f757020646f6573206e6f74206578697374006044820152606401610113565b505050505050565b60008581527f18009942081384ebf013f551c6956278f8f7e6b5ba58de96a877e7d2e169e670602090815260408083206001810154905460ff168085527f1fd5ae9b688ff1e92cea024147bd3c60ba20584ed7225a597f53b9dde63d587e9093529220546001600160a01b0316610347878488888886610389565b60008681527f2e80343f7be649afb4507a40421854eda29bc956f126850e8d1f99d3fcc3131e60205260409020805460ff191660011790555050505050505050565b60008481527f2e80343f7be649afb4507a40421854eda29bc956f126850e8d1f99d3fcc3131e602052604090205460ff16156104265760405162461bcd60e51b815260206004820152603660248201527f53656d6170686f7265436f72653a20796f752063616e6e6f7420757365207468604482015275652073616d65206e756c6c696669657220747769636560501b6064820152608401610113565b60006104318761059f565b9050816001600160a01b0316635fe8c13b604051806040016040528086600060088110610460576104606107e2565b602002013581526020018660016008811061047d5761047d6107e2565b60200201359052604080516080810182528782013591810191825290819060608201896003602002013581525081526020016040518060400160405280896004600881106104cd576104cd6107e2565b60200201358152602001896005600881106104ea576104ea6107e2565b6020020135905290526040805180820190915280886006602002013581526020018860076008811061051e5761051e6107e2565b602002013581525060405180608001604052808c81526020018b81526020018781526020018a8152506040518563ffffffff1660e01b8152600401610566949392919061084e565b60006040518083038186803b15801561057e57600080fd5b505afa158015610592573d6000803e3d6000fd5b5050505050505050505050565b60006008826040516020016105b691815260200190565b60408051601f198184030181529190528051602090910120901c92915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561060f5761060f6105d6565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561063e5761063e6105d6565b604052919050565b6000602080838503121561065957600080fd5b823567ffffffffffffffff8082111561067157600080fd5b818501915085601f83011261068557600080fd5b813581811115610697576106976105d6565b6106a5848260051b01610615565b818152848101925060069190911b8301840190878211156106c557600080fd5b928401925b8184101561072f57604084890312156106e35760008081fd5b6106eb6105ec565b84356001600160a01b03811681146107035760008081fd5b81528486013560ff811681146107195760008081fd5b81870152835260409390930192918401916106ca565b979650505050505050565b600080600080600061018080878903121561075457600080fd5b8635955060208701359450604087013593506060870135925087818801111561077c57600080fd5b506080860190509295509295909350565b600060208083528351808285015260005b818110156107ba5785810183015185820160400152820161079e565b818111156107cc576000604083870101525b50601f01601f1916929092016040019392505050565b634e487b7160e01b600052603260045260246000fd5b600060ff821660ff810361081c57634e487b7160e01b600052601160045260246000fd5b60010192915050565b8060005b6002811015610848578151845260209384019390910190600101610829565b50505050565b610180810161085d8287610825565b60408083018660005b600280821061087557506108b0565b82518460005b8381101561089957825182526020928301929091019060010161087b565b505050928401925060209190910190600101610866565b505050506108c160c0830185610825565b61010082018360005b60048110156108e95781518352602092830192909101906001016108ca565b5050509594505050505056fea264697066735822122095b47b72473bc49757e6f8d42f4391ad57734255d5d7e0441cd0382d08e846b064736f6c634300080e0033";

type SemaphoreFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SemaphoreFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SemaphoreFacet__factory extends ContractFactory {
  constructor(...args: SemaphoreFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SemaphoreFacet> {
    return super.deploy(overrides || {}) as Promise<SemaphoreFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SemaphoreFacet {
    return super.attach(address) as SemaphoreFacet;
  }
  override connect(signer: Signer): SemaphoreFacet__factory {
    return super.connect(signer) as SemaphoreFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SemaphoreFacetInterface {
    return new utils.Interface(_abi) as SemaphoreFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SemaphoreFacet {
    return new Contract(address, _abi, signerOrProvider) as SemaphoreFacet;
  }
}
