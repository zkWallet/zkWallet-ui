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

export interface IRecoveryFacetInterface extends utils.Interface {
  functions: {
    "getMajority()": FunctionFragment;
    "getRecoveryCounter()": FunctionFragment;
    "getRecoveryNominee()": FunctionFragment;
    "getRecoveryStatus()": FunctionFragment;
    "recover(uint256,bytes32,uint256,uint256,uint256[8],address)": FunctionFragment;
    "recoveryFacetVersion()": FunctionFragment;
    "resetRecovery()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getMajority"
      | "getMajority()"
      | "getRecoveryCounter"
      | "getRecoveryCounter()"
      | "getRecoveryNominee"
      | "getRecoveryNominee()"
      | "getRecoveryStatus"
      | "getRecoveryStatus()"
      | "recover"
      | "recover(uint256,bytes32,uint256,uint256,uint256[8],address)"
      | "recoveryFacetVersion"
      | "recoveryFacetVersion()"
      | "resetRecovery"
      | "resetRecovery()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getMajority",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMajority()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryCounter()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryNominee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryNominee()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryStatus()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recover",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "recover(uint256,bytes32,uint256,uint256,uint256[8],address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "recoveryFacetVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoveryFacetVersion()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resetRecovery",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "resetRecovery()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getMajority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMajority()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryCounter()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryNominee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryNominee()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryStatus()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recover(uint256,bytes32,uint256,uint256,uint256[8],address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoveryFacetVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoveryFacetVersion()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetRecovery()",
    data: BytesLike
  ): Result;

  events: {
    "Recovered(address)": EventFragment;
    "RecoveryUpdated(uint8,uint256,address,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Recovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Recovered(address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecoveryUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RecoveryUpdated(uint8,uint256,address,uint8)"
  ): EventFragment;
}

export interface RecoveredEventObject {
  newOwner: string;
}
export type RecoveredEvent = TypedEvent<[string], RecoveredEventObject>;

export type RecoveredEventFilter = TypedEventFilter<RecoveredEvent>;

export interface RecoveryUpdatedEventObject {
  status: number;
  majority: BigNumber;
  nominee: string;
  counter: number;
}
export type RecoveryUpdatedEvent = TypedEvent<
  [number, BigNumber, string, number],
  RecoveryUpdatedEventObject
>;

export type RecoveryUpdatedEventFilter = TypedEventFilter<RecoveryUpdatedEvent>;

export interface IRecoveryFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRecoveryFacetInterface;

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
    getMajority(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getMajority()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRecoveryCounter(overrides?: CallOverrides): Promise<[number]>;

    "getRecoveryCounter()"(overrides?: CallOverrides): Promise<[number]>;

    getRecoveryNominee(overrides?: CallOverrides): Promise<[string]>;

    "getRecoveryNominee()"(overrides?: CallOverrides): Promise<[string]>;

    getRecoveryStatus(overrides?: CallOverrides): Promise<[number]>;

    "getRecoveryStatus()"(overrides?: CallOverrides): Promise<[number]>;

    recover(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "recover(uint256,bytes32,uint256,uint256,uint256[8],address)"(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    recoveryFacetVersion(overrides?: CallOverrides): Promise<[string]>;

    "recoveryFacetVersion()"(overrides?: CallOverrides): Promise<[string]>;

    resetRecovery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "resetRecovery()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getMajority(overrides?: CallOverrides): Promise<BigNumber>;

  "getMajority()"(overrides?: CallOverrides): Promise<BigNumber>;

  getRecoveryCounter(overrides?: CallOverrides): Promise<number>;

  "getRecoveryCounter()"(overrides?: CallOverrides): Promise<number>;

  getRecoveryNominee(overrides?: CallOverrides): Promise<string>;

  "getRecoveryNominee()"(overrides?: CallOverrides): Promise<string>;

  getRecoveryStatus(overrides?: CallOverrides): Promise<number>;

  "getRecoveryStatus()"(overrides?: CallOverrides): Promise<number>;

  recover(
    groupId: PromiseOrValue<BigNumberish>,
    signal: PromiseOrValue<BytesLike>,
    nullifierHash: PromiseOrValue<BigNumberish>,
    externalNullifier: PromiseOrValue<BigNumberish>,
    proof: PromiseOrValue<BigNumberish>[],
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "recover(uint256,bytes32,uint256,uint256,uint256[8],address)"(
    groupId: PromiseOrValue<BigNumberish>,
    signal: PromiseOrValue<BytesLike>,
    nullifierHash: PromiseOrValue<BigNumberish>,
    externalNullifier: PromiseOrValue<BigNumberish>,
    proof: PromiseOrValue<BigNumberish>[],
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  recoveryFacetVersion(overrides?: CallOverrides): Promise<string>;

  "recoveryFacetVersion()"(overrides?: CallOverrides): Promise<string>;

  resetRecovery(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "resetRecovery()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getMajority(overrides?: CallOverrides): Promise<BigNumber>;

    "getMajority()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRecoveryCounter(overrides?: CallOverrides): Promise<number>;

    "getRecoveryCounter()"(overrides?: CallOverrides): Promise<number>;

    getRecoveryNominee(overrides?: CallOverrides): Promise<string>;

    "getRecoveryNominee()"(overrides?: CallOverrides): Promise<string>;

    getRecoveryStatus(overrides?: CallOverrides): Promise<number>;

    "getRecoveryStatus()"(overrides?: CallOverrides): Promise<number>;

    recover(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "recover(uint256,bytes32,uint256,uint256,uint256[8],address)"(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    recoveryFacetVersion(overrides?: CallOverrides): Promise<string>;

    "recoveryFacetVersion()"(overrides?: CallOverrides): Promise<string>;

    resetRecovery(overrides?: CallOverrides): Promise<void>;

    "resetRecovery()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Recovered(address)"(newOwner?: null): RecoveredEventFilter;
    Recovered(newOwner?: null): RecoveredEventFilter;

    "RecoveryUpdated(uint8,uint256,address,uint8)"(
      status?: null,
      majority?: null,
      nominee?: null,
      counter?: null
    ): RecoveryUpdatedEventFilter;
    RecoveryUpdated(
      status?: null,
      majority?: null,
      nominee?: null,
      counter?: null
    ): RecoveryUpdatedEventFilter;
  };

  estimateGas: {
    getMajority(overrides?: CallOverrides): Promise<BigNumber>;

    "getMajority()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRecoveryCounter(overrides?: CallOverrides): Promise<BigNumber>;

    "getRecoveryCounter()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRecoveryNominee(overrides?: CallOverrides): Promise<BigNumber>;

    "getRecoveryNominee()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRecoveryStatus(overrides?: CallOverrides): Promise<BigNumber>;

    "getRecoveryStatus()"(overrides?: CallOverrides): Promise<BigNumber>;

    recover(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "recover(uint256,bytes32,uint256,uint256,uint256[8],address)"(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    recoveryFacetVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "recoveryFacetVersion()"(overrides?: CallOverrides): Promise<BigNumber>;

    resetRecovery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "resetRecovery()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMajority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getMajority()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRecoveryCounter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRecoveryCounter()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecoveryNominee(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRecoveryNominee()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecoveryStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getRecoveryStatus()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recover(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "recover(uint256,bytes32,uint256,uint256,uint256[8],address)"(
      groupId: PromiseOrValue<BigNumberish>,
      signal: PromiseOrValue<BytesLike>,
      nullifierHash: PromiseOrValue<BigNumberish>,
      externalNullifier: PromiseOrValue<BigNumberish>,
      proof: PromiseOrValue<BigNumberish>[],
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    recoveryFacetVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "recoveryFacetVersion()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resetRecovery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "resetRecovery()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}