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
  PromiseOrValue,
} from "../../common";

export interface IERC20ServiceFacetInterface extends utils.Interface {
  functions: {
    "approveERC20(address,address,uint256)": FunctionFragment;
    "balanceOfERC20(address)": FunctionFragment;
    "depositERC20(address,uint256)": FunctionFragment;
    "erc20ServiceFacetVersion()": FunctionFragment;
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
      | "depositERC20"
      | "depositERC20(address,uint256)"
      | "erc20ServiceFacetVersion"
      | "erc20ServiceFacetVersion()"
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
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "approveERC20(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfERC20",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfERC20(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC20",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC20(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "erc20ServiceFacetVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "erc20ServiceFacetVersion()",
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
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerERC20(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeERC20",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeERC20(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20From",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC20From(address,address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
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
    functionFragment: "depositERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC20(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc20ServiceFacetVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc20ServiceFacetVersion()",
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
    "ERC20Deposited(address,uint256)": EventFragment;
    "ERC20TokenRemoved(address)": EventFragment;
    "ERC20TokenTracked(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20Deposited"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ERC20Deposited(address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20TokenRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20TokenRemoved(address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20TokenTracked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20TokenTracked(address)"): EventFragment;
}

export interface ERC20DepositedEventObject {
  tokenAddress: string;
  amount: BigNumber;
}
export type ERC20DepositedEvent = TypedEvent<
  [string, BigNumber],
  ERC20DepositedEventObject
>;

export type ERC20DepositedEventFilter = TypedEventFilter<ERC20DepositedEvent>;

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

export interface IERC20ServiceFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC20ServiceFacetInterface;

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
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "approveERC20(address,address,uint256)"(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOfERC20(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOfERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositERC20(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "depositERC20(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    erc20ServiceFacetVersion(overrides?: CallOverrides): Promise<[string]>;

    "erc20ServiceFacetVersion()"(overrides?: CallOverrides): Promise<[string]>;

    getAllTrackedERC20Tokens(overrides?: CallOverrides): Promise<[string[]]>;

    "getAllTrackedERC20Tokens()"(
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    registerERC20(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "registerERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeERC20(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "removeERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferERC20(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferERC20(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferERC20From(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferERC20From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approveERC20(
    token: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "approveERC20(address,address,uint256)"(
    token: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOfERC20(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOfERC20(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositERC20(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "depositERC20(address,uint256)"(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  erc20ServiceFacetVersion(overrides?: CallOverrides): Promise<string>;

  "erc20ServiceFacetVersion()"(overrides?: CallOverrides): Promise<string>;

  getAllTrackedERC20Tokens(overrides?: CallOverrides): Promise<string[]>;

  "getAllTrackedERC20Tokens()"(overrides?: CallOverrides): Promise<string[]>;

  registerERC20(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "registerERC20(address)"(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeERC20(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "removeERC20(address)"(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferERC20(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferERC20(address,address,uint256)"(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferERC20From(
    token: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferERC20From(address,address,address,uint256)"(
    token: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveERC20(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approveERC20(address,address,uint256)"(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOfERC20(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositERC20(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositERC20(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    erc20ServiceFacetVersion(overrides?: CallOverrides): Promise<string>;

    "erc20ServiceFacetVersion()"(overrides?: CallOverrides): Promise<string>;

    getAllTrackedERC20Tokens(overrides?: CallOverrides): Promise<string[]>;

    "getAllTrackedERC20Tokens()"(overrides?: CallOverrides): Promise<string[]>;

    registerERC20(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeERC20(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferERC20(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferERC20(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferERC20From(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferERC20From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ERC20Deposited(address,uint256)"(
      tokenAddress?: PromiseOrValue<string> | null,
      amount?: null
    ): ERC20DepositedEventFilter;
    ERC20Deposited(
      tokenAddress?: PromiseOrValue<string> | null,
      amount?: null
    ): ERC20DepositedEventFilter;

    "ERC20TokenRemoved(address)"(
      tokenAddress?: null
    ): ERC20TokenRemovedEventFilter;
    ERC20TokenRemoved(tokenAddress?: null): ERC20TokenRemovedEventFilter;

    "ERC20TokenTracked(address)"(
      tokenAddress?: PromiseOrValue<string> | null
    ): ERC20TokenTrackedEventFilter;
    ERC20TokenTracked(
      tokenAddress?: PromiseOrValue<string> | null
    ): ERC20TokenTrackedEventFilter;
  };

  estimateGas: {
    approveERC20(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "approveERC20(address,address,uint256)"(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOfERC20(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositERC20(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "depositERC20(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    erc20ServiceFacetVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "erc20ServiceFacetVersion()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAllTrackedERC20Tokens(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllTrackedERC20Tokens()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerERC20(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "registerERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeERC20(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "removeERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferERC20(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferERC20(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferERC20From(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferERC20From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveERC20(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "approveERC20(address,address,uint256)"(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOfERC20(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositERC20(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "depositERC20(address,uint256)"(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    erc20ServiceFacetVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "erc20ServiceFacetVersion()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllTrackedERC20Tokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAllTrackedERC20Tokens()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerERC20(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "registerERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeERC20(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "removeERC20(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferERC20(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferERC20(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferERC20From(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferERC20From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
