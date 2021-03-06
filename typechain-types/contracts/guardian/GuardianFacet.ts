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

export declare namespace GuardianStorage {
  export type GuardianStruct = {
    hashId: PromiseOrValue<BigNumberish>;
    status: PromiseOrValue<BigNumberish>;
    timestamp: PromiseOrValue<BigNumberish>;
  };

  export type GuardianStructOutput = [BigNumber, number, BigNumber] & {
    hashId: BigNumber;
    status: number;
    timestamp: BigNumber;
  };
}

export declare namespace IGuardianInternal {
  export type GuardianDTOStruct = { hashId: PromiseOrValue<BigNumberish> };

  export type GuardianDTOStructOutput = [BigNumber] & { hashId: BigNumber };
}

export interface GuardianFacetInterface extends utils.Interface {
  functions: {
    "addGuardian(uint256)": FunctionFragment;
    "addGuardian(uint256,uint256,uint256)": FunctionFragment;
    "addGuardians(uint256,uint256[])": FunctionFragment;
    "cancelPendingGuardians()": FunctionFragment;
    "getGuardian(uint256)": FunctionFragment;
    "getGuardians(bool)": FunctionFragment;
    "guardianFacetVersion()": FunctionFragment;
    "numGuardians(bool)": FunctionFragment;
    "removeGuardian(uint256)": FunctionFragment;
    "removeGuardian(uint256,uint256,uint256,uint256[],uint8[])": FunctionFragment;
    "removeGuardians(uint256[])": FunctionFragment;
    "requireMajority((uint256)[])": FunctionFragment;
    "setInitialGuardians(uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addGuardian(uint256)"
      | "addGuardian(uint256,uint256,uint256)"
      | "addGuardians"
      | "addGuardians(uint256,uint256[])"
      | "cancelPendingGuardians"
      | "cancelPendingGuardians()"
      | "getGuardian"
      | "getGuardian(uint256)"
      | "getGuardians"
      | "getGuardians(bool)"
      | "guardianFacetVersion"
      | "guardianFacetVersion()"
      | "numGuardians"
      | "numGuardians(bool)"
      | "removeGuardian(uint256)"
      | "removeGuardian(uint256,uint256,uint256,uint256[],uint8[])"
      | "removeGuardians"
      | "removeGuardians(uint256[])"
      | "requireMajority"
      | "requireMajority((uint256)[])"
      | "setInitialGuardians"
      | "setInitialGuardians(uint256[])"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addGuardian(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addGuardian(uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addGuardians",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addGuardians(uint256,uint256[])",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelPendingGuardians",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelPendingGuardians()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGuardian",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGuardian(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGuardians",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGuardians(bool)",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "guardianFacetVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "guardianFacetVersion()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numGuardians",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "numGuardians(bool)",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeGuardian(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeGuardian(uint256,uint256,uint256,uint256[],uint8[])",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeGuardians",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeGuardians(uint256[])",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "requireMajority",
    values: [IGuardianInternal.GuardianDTOStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "requireMajority((uint256)[])",
    values: [IGuardianInternal.GuardianDTOStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setInitialGuardians",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setInitialGuardians(uint256[])",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "addGuardian(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addGuardian(uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addGuardians",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addGuardians(uint256,uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelPendingGuardians",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelPendingGuardians()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGuardian(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGuardians",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGuardians(bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guardianFacetVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guardianFacetVersion()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numGuardians",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numGuardians(bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGuardian(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGuardian(uint256,uint256,uint256,uint256[],uint8[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGuardians",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGuardians(uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireMajority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireMajority((uint256)[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInitialGuardians",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInitialGuardians(uint256[])",
    data: BytesLike
  ): Result;

  events: {
    "GroupAdminUpdated(uint256,address,address)": EventFragment;
    "GroupCreated(uint256,uint8,uint256)": EventFragment;
    "GuardianAdded(uint256,uint256)": EventFragment;
    "GuardianRemoved(uint256,uint256)": EventFragment;
    "LeafInserted(uint256,uint256,uint256)": EventFragment;
    "LeafRemoved(uint256,uint256,uint256)": EventFragment;
    "MemberAdded(uint256,uint256,uint256)": EventFragment;
    "MemberRemoved(uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TreeCreated(uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GroupAdminUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GroupAdminUpdated(uint256,address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GroupCreated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GroupCreated(uint256,uint8,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GuardianAdded(uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GuardianRemoved(uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LeafInserted"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LeafInserted(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LeafRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LeafRemoved(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MemberAdded(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MemberRemoved(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreeCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreeCreated(uint256,uint8)"): EventFragment;
}

export interface GroupAdminUpdatedEventObject {
  groupId: BigNumber;
  oldAdmin: string;
  newAdmin: string;
}
export type GroupAdminUpdatedEvent = TypedEvent<
  [BigNumber, string, string],
  GroupAdminUpdatedEventObject
>;

export type GroupAdminUpdatedEventFilter =
  TypedEventFilter<GroupAdminUpdatedEvent>;

export interface GroupCreatedEventObject {
  groupId: BigNumber;
  depth: number;
  zeroValue: BigNumber;
}
export type GroupCreatedEvent = TypedEvent<
  [BigNumber, number, BigNumber],
  GroupCreatedEventObject
>;

export type GroupCreatedEventFilter = TypedEventFilter<GroupCreatedEvent>;

export interface GuardianAddedEventObject {
  hashId: BigNumber;
  effectiveTime: BigNumber;
}
export type GuardianAddedEvent = TypedEvent<
  [BigNumber, BigNumber],
  GuardianAddedEventObject
>;

export type GuardianAddedEventFilter = TypedEventFilter<GuardianAddedEvent>;

export interface GuardianRemovedEventObject {
  hashId: BigNumber;
  effectiveTime: BigNumber;
}
export type GuardianRemovedEvent = TypedEvent<
  [BigNumber, BigNumber],
  GuardianRemovedEventObject
>;

export type GuardianRemovedEventFilter = TypedEventFilter<GuardianRemovedEvent>;

export interface LeafInsertedEventObject {
  treeId: BigNumber;
  leaf: BigNumber;
  root: BigNumber;
}
export type LeafInsertedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  LeafInsertedEventObject
>;

export type LeafInsertedEventFilter = TypedEventFilter<LeafInsertedEvent>;

export interface LeafRemovedEventObject {
  treeId: BigNumber;
  leaf: BigNumber;
  root: BigNumber;
}
export type LeafRemovedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  LeafRemovedEventObject
>;

export type LeafRemovedEventFilter = TypedEventFilter<LeafRemovedEvent>;

export interface MemberAddedEventObject {
  groupId: BigNumber;
  identityCommitment: BigNumber;
  root: BigNumber;
}
export type MemberAddedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  MemberAddedEventObject
>;

export type MemberAddedEventFilter = TypedEventFilter<MemberAddedEvent>;

export interface MemberRemovedEventObject {
  groupId: BigNumber;
  identityCommitment: BigNumber;
  root: BigNumber;
}
export type MemberRemovedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  MemberRemovedEventObject
>;

export type MemberRemovedEventFilter = TypedEventFilter<MemberRemovedEvent>;

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

export interface TreeCreatedEventObject {
  id: BigNumber;
  depth: number;
}
export type TreeCreatedEvent = TypedEvent<
  [BigNumber, number],
  TreeCreatedEventObject
>;

export type TreeCreatedEventFilter = TypedEventFilter<TreeCreatedEvent>;

export interface GuardianFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GuardianFacetInterface;

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
    "addGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "addGuardian(uint256,uint256,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      hashId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addGuardians(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "addGuardians(uint256,uint256[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelPendingGuardians(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "cancelPendingGuardians()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getGuardian(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[GuardianStorage.GuardianStructOutput]>;

    "getGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[GuardianStorage.GuardianStructOutput]>;

    getGuardians(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[GuardianStorage.GuardianStructOutput[]]>;

    "getGuardians(bool)"(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[GuardianStorage.GuardianStructOutput[]]>;

    guardianFacetVersion(overrides?: CallOverrides): Promise<[string]>;

    "guardianFacetVersion()"(overrides?: CallOverrides): Promise<[string]>;

    numGuardians(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "numGuardians(bool)"(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "removeGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "removeGuardian(uint256,uint256,uint256,uint256[],uint8[])"(
      groupId: PromiseOrValue<BigNumberish>,
      hashId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeGuardians(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "removeGuardians(uint256[])"(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requireMajority(
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    "requireMajority((uint256)[])"(
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    setInitialGuardians(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setInitialGuardians(uint256[])"(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  "addGuardian(uint256)"(
    hashId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "addGuardian(uint256,uint256,uint256)"(
    groupId: PromiseOrValue<BigNumberish>,
    hashId: PromiseOrValue<BigNumberish>,
    identityCommitment: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addGuardians(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitments: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "addGuardians(uint256,uint256[])"(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitments: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelPendingGuardians(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "cancelPendingGuardians()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getGuardian(
    hashId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<GuardianStorage.GuardianStructOutput>;

  "getGuardian(uint256)"(
    hashId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<GuardianStorage.GuardianStructOutput>;

  getGuardians(
    includePendingAddition: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<GuardianStorage.GuardianStructOutput[]>;

  "getGuardians(bool)"(
    includePendingAddition: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<GuardianStorage.GuardianStructOutput[]>;

  guardianFacetVersion(overrides?: CallOverrides): Promise<string>;

  "guardianFacetVersion()"(overrides?: CallOverrides): Promise<string>;

  numGuardians(
    includePendingAddition: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "numGuardians(bool)"(
    includePendingAddition: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "removeGuardian(uint256)"(
    hashId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "removeGuardian(uint256,uint256,uint256,uint256[],uint8[])"(
    groupId: PromiseOrValue<BigNumberish>,
    hashId: PromiseOrValue<BigNumberish>,
    identityCommitment: PromiseOrValue<BigNumberish>,
    proofSiblings: PromiseOrValue<BigNumberish>[],
    proofPathIndices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeGuardians(
    guardians: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "removeGuardians(uint256[])"(
    guardians: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requireMajority(
    guardians: IGuardianInternal.GuardianDTOStruct[],
    overrides?: CallOverrides
  ): Promise<void>;

  "requireMajority((uint256)[])"(
    guardians: IGuardianInternal.GuardianDTOStruct[],
    overrides?: CallOverrides
  ): Promise<void>;

  setInitialGuardians(
    guardians: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setInitialGuardians(uint256[])"(
    guardians: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "addGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "addGuardian(uint256,uint256,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      hashId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addGuardians(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "addGuardians(uint256,uint256[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    cancelPendingGuardians(overrides?: CallOverrides): Promise<void>;

    "cancelPendingGuardians()"(overrides?: CallOverrides): Promise<void>;

    getGuardian(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<GuardianStorage.GuardianStructOutput>;

    "getGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<GuardianStorage.GuardianStructOutput>;

    getGuardians(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<GuardianStorage.GuardianStructOutput[]>;

    "getGuardians(bool)"(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<GuardianStorage.GuardianStructOutput[]>;

    guardianFacetVersion(overrides?: CallOverrides): Promise<string>;

    "guardianFacetVersion()"(overrides?: CallOverrides): Promise<string>;

    numGuardians(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "numGuardians(bool)"(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "removeGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "removeGuardian(uint256,uint256,uint256,uint256[],uint8[])"(
      groupId: PromiseOrValue<BigNumberish>,
      hashId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    removeGuardians(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "removeGuardians(uint256[])"(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    requireMajority(
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    "requireMajority((uint256)[])"(
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setInitialGuardians(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setInitialGuardians(uint256[])"(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GroupAdminUpdated(uint256,address,address)"(
      groupId?: PromiseOrValue<BigNumberish> | null,
      oldAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null
    ): GroupAdminUpdatedEventFilter;
    GroupAdminUpdated(
      groupId?: PromiseOrValue<BigNumberish> | null,
      oldAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null
    ): GroupAdminUpdatedEventFilter;

    "GroupCreated(uint256,uint8,uint256)"(
      groupId?: PromiseOrValue<BigNumberish> | null,
      depth?: null,
      zeroValue?: null
    ): GroupCreatedEventFilter;
    GroupCreated(
      groupId?: PromiseOrValue<BigNumberish> | null,
      depth?: null,
      zeroValue?: null
    ): GroupCreatedEventFilter;

    "GuardianAdded(uint256,uint256)"(
      hashId?: PromiseOrValue<BigNumberish> | null,
      effectiveTime?: null
    ): GuardianAddedEventFilter;
    GuardianAdded(
      hashId?: PromiseOrValue<BigNumberish> | null,
      effectiveTime?: null
    ): GuardianAddedEventFilter;

    "GuardianRemoved(uint256,uint256)"(
      hashId?: PromiseOrValue<BigNumberish> | null,
      effectiveTime?: null
    ): GuardianRemovedEventFilter;
    GuardianRemoved(
      hashId?: PromiseOrValue<BigNumberish> | null,
      effectiveTime?: null
    ): GuardianRemovedEventFilter;

    "LeafInserted(uint256,uint256,uint256)"(
      treeId?: PromiseOrValue<BigNumberish> | null,
      leaf?: null,
      root?: null
    ): LeafInsertedEventFilter;
    LeafInserted(
      treeId?: PromiseOrValue<BigNumberish> | null,
      leaf?: null,
      root?: null
    ): LeafInsertedEventFilter;

    "LeafRemoved(uint256,uint256,uint256)"(
      treeId?: PromiseOrValue<BigNumberish> | null,
      leaf?: null,
      root?: null
    ): LeafRemovedEventFilter;
    LeafRemoved(
      treeId?: PromiseOrValue<BigNumberish> | null,
      leaf?: null,
      root?: null
    ): LeafRemovedEventFilter;

    "MemberAdded(uint256,uint256,uint256)"(
      groupId?: PromiseOrValue<BigNumberish> | null,
      identityCommitment?: null,
      root?: null
    ): MemberAddedEventFilter;
    MemberAdded(
      groupId?: PromiseOrValue<BigNumberish> | null,
      identityCommitment?: null,
      root?: null
    ): MemberAddedEventFilter;

    "MemberRemoved(uint256,uint256,uint256)"(
      groupId?: PromiseOrValue<BigNumberish> | null,
      identityCommitment?: null,
      root?: null
    ): MemberRemovedEventFilter;
    MemberRemoved(
      groupId?: PromiseOrValue<BigNumberish> | null,
      identityCommitment?: null,
      root?: null
    ): MemberRemovedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TreeCreated(uint256,uint8)"(
      id?: null,
      depth?: null
    ): TreeCreatedEventFilter;
    TreeCreated(id?: null, depth?: null): TreeCreatedEventFilter;
  };

  estimateGas: {
    "addGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "addGuardian(uint256,uint256,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      hashId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addGuardians(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "addGuardians(uint256,uint256[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelPendingGuardians(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "cancelPendingGuardians()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getGuardian(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGuardians(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGuardians(bool)"(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guardianFacetVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "guardianFacetVersion()"(overrides?: CallOverrides): Promise<BigNumber>;

    numGuardians(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "numGuardians(bool)"(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "removeGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "removeGuardian(uint256,uint256,uint256,uint256[],uint8[])"(
      groupId: PromiseOrValue<BigNumberish>,
      hashId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeGuardians(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "removeGuardians(uint256[])"(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requireMajority(
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "requireMajority((uint256)[])"(
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setInitialGuardians(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setInitialGuardians(uint256[])"(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "addGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "addGuardian(uint256,uint256,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      hashId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addGuardians(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "addGuardians(uint256,uint256[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelPendingGuardians(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "cancelPendingGuardians()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getGuardian(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGuardians(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGuardians(bool)"(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guardianFacetVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "guardianFacetVersion()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numGuardians(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "numGuardians(bool)"(
      includePendingAddition: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "removeGuardian(uint256)"(
      hashId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "removeGuardian(uint256,uint256,uint256,uint256[],uint8[])"(
      groupId: PromiseOrValue<BigNumberish>,
      hashId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeGuardians(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "removeGuardians(uint256[])"(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requireMajority(
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "requireMajority((uint256)[])"(
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setInitialGuardians(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setInitialGuardians(uint256[])"(
      guardians: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
