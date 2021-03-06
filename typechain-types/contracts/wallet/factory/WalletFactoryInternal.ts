/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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
} from "../../../common";

export interface WalletFactoryInternalInterface extends utils.Interface {
  functions: {
    "WALLET_CREATION()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "WALLET_CREATION" | "WALLET_CREATION()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "WALLET_CREATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WALLET_CREATION()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "WALLET_CREATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WALLET_CREATION()",
    data: BytesLike
  ): Result;

  events: {
    "DiamondIsSet(address)": EventFragment;
    "FacetIsAdded(string,address,string)": EventFragment;
    "FacetIsRemoved(address)": EventFragment;
    "GuardianAdded(bytes32,bytes32)": EventFragment;
    "GuardianRemoved(bytes32,bytes32)": EventFragment;
    "WalletIsCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DiamondIsSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DiamondIsSet(address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FacetIsAdded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "FacetIsAdded(string,address,string)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FacetIsRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FacetIsRemoved(address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GuardianAdded(bytes32,bytes32)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GuardianRemoved(bytes32,bytes32)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WalletIsCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WalletIsCreated(address)"): EventFragment;
}

export interface DiamondIsSetEventObject {
  wallet: string;
}
export type DiamondIsSetEvent = TypedEvent<[string], DiamondIsSetEventObject>;

export type DiamondIsSetEventFilter = TypedEventFilter<DiamondIsSetEvent>;

export interface FacetIsAddedEventObject {
  name: string;
  facetAddress: string;
  version: string;
}
export type FacetIsAddedEvent = TypedEvent<
  [string, string, string],
  FacetIsAddedEventObject
>;

export type FacetIsAddedEventFilter = TypedEventFilter<FacetIsAddedEvent>;

export interface FacetIsRemovedEventObject {
  facetAddress: string;
}
export type FacetIsRemovedEvent = TypedEvent<
  [string],
  FacetIsRemovedEventObject
>;

export type FacetIsRemovedEventFilter = TypedEventFilter<FacetIsRemovedEvent>;

export interface GuardianAddedEventObject {
  hashId: string;
  guardian: string;
}
export type GuardianAddedEvent = TypedEvent<
  [string, string],
  GuardianAddedEventObject
>;

export type GuardianAddedEventFilter = TypedEventFilter<GuardianAddedEvent>;

export interface GuardianRemovedEventObject {
  hashId: string;
  guardian: string;
}
export type GuardianRemovedEvent = TypedEvent<
  [string, string],
  GuardianRemovedEventObject
>;

export type GuardianRemovedEventFilter = TypedEventFilter<GuardianRemovedEvent>;

export interface WalletIsCreatedEventObject {
  instance: string;
}
export type WalletIsCreatedEvent = TypedEvent<
  [string],
  WalletIsCreatedEventObject
>;

export type WalletIsCreatedEventFilter = TypedEventFilter<WalletIsCreatedEvent>;

export interface WalletFactoryInternal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WalletFactoryInternalInterface;

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
    WALLET_CREATION(overrides?: CallOverrides): Promise<[string]>;

    "WALLET_CREATION()"(overrides?: CallOverrides): Promise<[string]>;
  };

  WALLET_CREATION(overrides?: CallOverrides): Promise<string>;

  "WALLET_CREATION()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    WALLET_CREATION(overrides?: CallOverrides): Promise<string>;

    "WALLET_CREATION()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "DiamondIsSet(address)"(wallet?: null): DiamondIsSetEventFilter;
    DiamondIsSet(wallet?: null): DiamondIsSetEventFilter;

    "FacetIsAdded(string,address,string)"(
      name?: null,
      facetAddress?: null,
      version?: null
    ): FacetIsAddedEventFilter;
    FacetIsAdded(
      name?: null,
      facetAddress?: null,
      version?: null
    ): FacetIsAddedEventFilter;

    "FacetIsRemoved(address)"(facetAddress?: null): FacetIsRemovedEventFilter;
    FacetIsRemoved(facetAddress?: null): FacetIsRemovedEventFilter;

    "GuardianAdded(bytes32,bytes32)"(
      hashId?: PromiseOrValue<BytesLike> | null,
      guardian?: null
    ): GuardianAddedEventFilter;
    GuardianAdded(
      hashId?: PromiseOrValue<BytesLike> | null,
      guardian?: null
    ): GuardianAddedEventFilter;

    "GuardianRemoved(bytes32,bytes32)"(
      hashId?: PromiseOrValue<BytesLike> | null,
      guardian?: null
    ): GuardianRemovedEventFilter;
    GuardianRemoved(
      hashId?: PromiseOrValue<BytesLike> | null,
      guardian?: null
    ): GuardianRemovedEventFilter;

    "WalletIsCreated(address)"(instance?: null): WalletIsCreatedEventFilter;
    WalletIsCreated(instance?: null): WalletIsCreatedEventFilter;
  };

  estimateGas: {
    WALLET_CREATION(overrides?: CallOverrides): Promise<BigNumber>;

    "WALLET_CREATION()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    WALLET_CREATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WALLET_CREATION()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
