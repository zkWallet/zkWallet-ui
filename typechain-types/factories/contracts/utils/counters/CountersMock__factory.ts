/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  CountersMock,
  CountersMockInterface,
} from "../../../../contracts/utils/counters/CountersMock";

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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "current",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "reset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061049d806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063310bd74b146100515780633a9ebefd146100665780637cf5dab014610079578063ac03aa1c1461008c575b600080fd5b61006461005f366004610408565b6100b1565b005b610064610074366004610408565b6100cf565b610064610087366004610408565b6100e1565b61009f61009a366004610408565b6100f3565b60405190815260200160405180910390f35b6100ba81610104565b6100c3816101b6565b6100cc81610211565b50565b6100d881610104565b6100cc8161027a565b6100ea816102bd565b6100cc8161030d565b60006100fe8261034c565b92915050565b806000811161015a5760405162461bcd60e51b815260206004820152601d60248201527f436f756e746572733a20494e4445585f4f55545f4f465f424f554e445300000060448201526064015b60405180910390fd5b60006101658261034c565b116101b25760405162461bcd60e51b815260206004820152601b60248201527f436f756e746572733a20434f554e5445525f4e4f545f464f554e4400000000006044820152606401610151565b5050565b60008181526000805160206104488339815191526020526040812055807f5ae2e83411b15aef3c1609c37f90fc7c912666cfac3ba72a9ba900a39c5bfaa36101fd8361034c565b60405190815260200160405180910390a250565b60008181526000805160206104488339815191526020526040902054156100cc5760405162461bcd60e51b815260206004820152601c60248201527f436f756e746572733a20434f554e544552535f4e4f545f5245534554000000006044820152606401610151565b6102926000805160206104488339815191528261036b565b807f847bc9dfeccb5e1f46d639d8427a2dffec2db7148a5d315341194d6a7aafe4e56101fd8361034c565b600081116100cc5760405162461bcd60e51b815260206004820152601d60248201527f436f756e746572733a20494e4445585f4f55545f4f465f424f554e44530000006044820152606401610151565b610325600080516020610448833981519152826103e0565b807f230c08f549f5f9e591e87490c6c26b3715ba3bdbe74477c4ec927b160763f7676101fd835b6000908152600080516020610448833981519152602052604090205490565b600081815260208390526040902054806103c75760405162461bcd60e51b815260206004820152601b60248201527f436f756e7465723a2064656372656d656e74206f766572666c6f7700000000006044820152606401610151565b6000918252602092909252604090206000199091019055565b60008181526020839052604081208054600192906103ff908490610421565b90915550505050565b60006020828403121561041a57600080fd5b5035919050565b6000821982111561044257634e487b7160e01b600052601160045260246000fd5b50019056fe7501651f7c1a1425b363e321895d17d818852dcf57a994e54489b51ae6d4d096a2646970667358221220577fb8e2072c9270c3d978b43c1df6bb127f5b99f9d635458c073a1cd2bee41464736f6c634300080e0033";

type CountersMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CountersMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CountersMock__factory extends ContractFactory {
  constructor(...args: CountersMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CountersMock> {
    return super.deploy(overrides || {}) as Promise<CountersMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CountersMock {
    return super.attach(address) as CountersMock;
  }
  override connect(signer: Signer): CountersMock__factory {
    return super.connect(signer) as CountersMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CountersMockInterface {
    return new utils.Interface(_abi) as CountersMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CountersMock {
    return new Contract(address, _abi, signerOrProvider) as CountersMock;
  }
}
