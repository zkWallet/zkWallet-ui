/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface ERC20FacetInterface extends utils.Interface {
  functions: {
    "approveERC20(address,address,uint256)": FunctionFragment;
    "balanceOfERC20(address)": FunctionFragment;
    "erc20FacetVersion()": FunctionFragment;
    "getAllTrackedERC20Tokens()": FunctionFragment;
    "registerERC20(address)": FunctionFragment;
    "removeERC20(address)": FunctionFragment;
    "transferERC20(address,address,uint256)": FunctionFragment;
    "transferERC20From(address,address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveERC20"
      | "approveERC20(address,address,uint256)"
      | "balanceOfERC20"
      | "balanceOfERC20(address)"
      | "erc20FacetVersion"
      | "erc20FacetVersion()"
      | "getAllTrackedERC20Tokens"
      | "getAllTrackedERC20Tokens()"
      | "registerERC20"
      | "registerERC20(address)"
      | "removeERC20"
      | "removeERC20(address)"
      | "transferERC20"
      | "transferERC20(address,address,uint256)"
      | "transferERC20From"
      | "transferERC20From(address,address,address,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveERC20",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveERC20(address,address,uint256)",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfERC20",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfERC20(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "erc20FacetVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "erc20FacetVersion()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTrackedERC20Tokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTrackedERC20Tokens()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerERC20",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerERC20(address)",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "removeERC20", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeERC20(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20(address,address,uint256)",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20From",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20From(address,address,address,uint256)",
    values: [string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveERC20(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfERC20(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc20FacetVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc20FacetVersion()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllTrackedERC20Tokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllTrackedERC20Tokens()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerERC20(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeERC20(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferERC20(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferERC20From",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferERC20From(address,address,address,uint256)",
    data: BytesLike
  ): Result;

  events: {
    "ERC20TokenRemoved(address)": EventFragment;
    "ERC20TokenTracked(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20TokenRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20TokenRemoved(address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20TokenTracked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20TokenTracked(address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface ERC20TokenRemovedEventObject {
  tokenAddress: string;
}
export type ERC20TokenRemovedEvent = TypedEvent<
  [string],
  ERC20TokenRemovedEventObject
>;

export type ERC20TokenRemovedEventFilter =
  TypedEventFilter<ERC20TokenRemovedEvent>;

export interface ERC20TokenTrackedEventObject {
  tokenAddress: string;
}
export type ERC20TokenTrackedEvent = TypedEvent<
  [string],
  ERC20TokenTrackedEventObject
>;

export type ERC20TokenTrackedEventFilter =
  TypedEventFilter<ERC20TokenTrackedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ERC20Facet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20FacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approveERC20(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approveERC20(address,address,uint256)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOfERC20(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOfERC20(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    erc20FacetVersion(overrides?: CallOverrides): Promise<[string]>;

    "erc20FacetVersion()"(overrides?: CallOverrides): Promise<[string]>;

    getAllTrackedERC20Tokens(overrides?: CallOverrides): Promise<[string[]]>;

    "getAllTrackedERC20Tokens()"(
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    registerERC20(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "registerERC20(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeERC20(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeERC20(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferERC20From(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferERC20From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approveERC20(
    token: string,
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approveERC20(address,address,uint256)"(
    token: string,
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOfERC20(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOfERC20(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  erc20FacetVersion(overrides?: CallOverrides): Promise<string>;

  "erc20FacetVersion()"(overrides?: CallOverrides): Promise<string>;

  getAllTrackedERC20Tokens(overrides?: CallOverrides): Promise<string[]>;

  "getAllTrackedERC20Tokens()"(overrides?: CallOverrides): Promise<string[]>;

  registerERC20(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "registerERC20(address)"(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeERC20(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeERC20(address)"(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferERC20(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferERC20(address,address,uint256)"(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferERC20From(
    token: string,
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferERC20From(address,address,address,uint256)"(
    token: string,
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveERC20(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approveERC20(address,address,uint256)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOfERC20(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC20(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    erc20FacetVersion(overrides?: CallOverrides): Promise<string>;

    "erc20FacetVersion()"(overrides?: CallOverrides): Promise<string>;

    getAllTrackedERC20Tokens(overrides?: CallOverrides): Promise<string[]>;

    "getAllTrackedERC20Tokens()"(overrides?: CallOverrides): Promise<string[]>;

    registerERC20(token: string, overrides?: CallOverrides): Promise<void>;

    "registerERC20(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeERC20(token: string, overrides?: CallOverrides): Promise<void>;

    "removeERC20(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferERC20From(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferERC20From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ERC20TokenRemoved(address)"(
      tokenAddress?: null
    ): ERC20TokenRemovedEventFilter;
    ERC20TokenRemoved(tokenAddress?: null): ERC20TokenRemovedEventFilter;

    "ERC20TokenTracked(address)"(
      tokenAddress?: string | null
    ): ERC20TokenTrackedEventFilter;
    ERC20TokenTracked(
      tokenAddress?: string | null
    ): ERC20TokenTrackedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    approveERC20(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approveERC20(address,address,uint256)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOfERC20(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC20(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    erc20FacetVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "erc20FacetVersion()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAllTrackedERC20Tokens(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllTrackedERC20Tokens()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerERC20(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "registerERC20(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeERC20(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeERC20(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferERC20From(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferERC20From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveERC20(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approveERC20(address,address,uint256)"(
      token: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOfERC20(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfERC20(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    erc20FacetVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "erc20FacetVersion()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllTrackedERC20Tokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAllTrackedERC20Tokens()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerERC20(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "registerERC20(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeERC20(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeERC20(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferERC20(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferERC20(address,address,uint256)"(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferERC20From(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferERC20From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}