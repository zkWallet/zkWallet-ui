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

export interface ISemaphoreGroupsFacetInterface extends utils.Interface {
  functions: {
    "addMember(uint256,uint256)": FunctionFragment;
    "addMembers(uint256,uint256[])": FunctionFragment;
    "createGroup(uint256,uint8,uint256,address)": FunctionFragment;
    "getDepth(uint256)": FunctionFragment;
    "getGroupAdmin(uint256)": FunctionFragment;
    "getNumberOfLeaves(uint256)": FunctionFragment;
    "getRoot(uint256)": FunctionFragment;
    "removeMember(uint256,uint256,uint256[],uint8[])": FunctionFragment;
    "semaphoreGroupsFacetVersion()": FunctionFragment;
    "updateGroupAdmin(uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addMember"
      | "addMember(uint256,uint256)"
      | "addMembers"
      | "addMembers(uint256,uint256[])"
      | "createGroup"
      | "createGroup(uint256,uint8,uint256,address)"
      | "getDepth"
      | "getDepth(uint256)"
      | "getGroupAdmin"
      | "getGroupAdmin(uint256)"
      | "getNumberOfLeaves"
      | "getNumberOfLeaves(uint256)"
      | "getRoot"
      | "getRoot(uint256)"
      | "removeMember"
      | "removeMember(uint256,uint256,uint256[],uint8[])"
      | "semaphoreGroupsFacetVersion"
      | "semaphoreGroupsFacetVersion()"
      | "updateGroupAdmin"
      | "updateGroupAdmin(uint256,address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addMember",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addMember(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addMembers",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addMembers(uint256,uint256[])",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createGroup",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createGroup(uint256,uint8,uint256,address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepth",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepth(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGroupAdmin",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGroupAdmin(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfLeaves",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfLeaves(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoot",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoot(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMember",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMember(uint256,uint256,uint256[],uint8[])",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "semaphoreGroupsFacetVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "semaphoreGroupsFacetVersion()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateGroupAdmin",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGroupAdmin(uint256,address)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addMember(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addMembers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addMembers(uint256,uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createGroup(uint256,uint8,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDepth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDepth(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGroupAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGroupAdmin(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfLeaves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfLeaves(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoot(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMember(uint256,uint256,uint256[],uint8[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "semaphoreGroupsFacetVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "semaphoreGroupsFacetVersion()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGroupAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGroupAdmin(uint256,address)",
    data: BytesLike
  ): Result;

  events: {
    "GroupAdminUpdated(uint256,address,address)": EventFragment;
    "GroupCreated(uint256,uint8,uint256)": EventFragment;
    "MemberAdded(uint256,uint256,uint256)": EventFragment;
    "MemberRemoved(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GroupAdminUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GroupAdminUpdated(uint256,address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GroupCreated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GroupCreated(uint256,uint8,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MemberAdded(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MemberRemoved(uint256,uint256,uint256)"
  ): EventFragment;
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

export interface ISemaphoreGroupsFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISemaphoreGroupsFacetInterface;

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
    addMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "addMember(uint256,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addMembers(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "addMembers(uint256,uint256[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createGroup(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      zeroValue: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "createGroup(uint256,uint8,uint256,address)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      zeroValue: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDepth(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "getDepth(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getGroupAdmin(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNumberOfLeaves(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getNumberOfLeaves(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoot(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getRoot(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "removeMember(uint256,uint256,uint256[],uint8[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    semaphoreGroupsFacetVersion(overrides?: CallOverrides): Promise<[string]>;

    "semaphoreGroupsFacetVersion()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    updateGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "updateGroupAdmin(uint256,address)"(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addMember(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitment: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "addMember(uint256,uint256)"(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitment: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addMembers(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitments: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "addMembers(uint256,uint256[])"(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitments: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createGroup(
    groupId: PromiseOrValue<BigNumberish>,
    depth: PromiseOrValue<BigNumberish>,
    zeroValue: PromiseOrValue<BigNumberish>,
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "createGroup(uint256,uint8,uint256,address)"(
    groupId: PromiseOrValue<BigNumberish>,
    depth: PromiseOrValue<BigNumberish>,
    zeroValue: PromiseOrValue<BigNumberish>,
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDepth(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  "getDepth(uint256)"(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getGroupAdmin(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getGroupAdmin(uint256)"(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getNumberOfLeaves(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getNumberOfLeaves(uint256)"(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoot(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRoot(uint256)"(
    groupId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeMember(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitment: PromiseOrValue<BigNumberish>,
    proofSiblings: PromiseOrValue<BigNumberish>[],
    proofPathIndices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "removeMember(uint256,uint256,uint256[],uint8[])"(
    groupId: PromiseOrValue<BigNumberish>,
    identityCommitment: PromiseOrValue<BigNumberish>,
    proofSiblings: PromiseOrValue<BigNumberish>[],
    proofPathIndices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  semaphoreGroupsFacetVersion(overrides?: CallOverrides): Promise<string>;

  "semaphoreGroupsFacetVersion()"(overrides?: CallOverrides): Promise<string>;

  updateGroupAdmin(
    groupId: PromiseOrValue<BigNumberish>,
    newAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "updateGroupAdmin(uint256,address)"(
    groupId: PromiseOrValue<BigNumberish>,
    newAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "addMember(uint256,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addMembers(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "addMembers(uint256,uint256[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    createGroup(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      zeroValue: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "createGroup(uint256,uint8,uint256,address)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      zeroValue: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDepth(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    "getDepth(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getGroupAdmin(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getNumberOfLeaves(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNumberOfLeaves(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoot(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoot(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "removeMember(uint256,uint256,uint256[],uint8[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    semaphoreGroupsFacetVersion(overrides?: CallOverrides): Promise<string>;

    "semaphoreGroupsFacetVersion()"(overrides?: CallOverrides): Promise<string>;

    updateGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateGroupAdmin(uint256,address)"(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
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
  };

  estimateGas: {
    addMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "addMember(uint256,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addMembers(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "addMembers(uint256,uint256[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createGroup(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      zeroValue: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "createGroup(uint256,uint8,uint256,address)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      zeroValue: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDepth(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getDepth(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGroupAdmin(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfLeaves(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNumberOfLeaves(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoot(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRoot(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "removeMember(uint256,uint256,uint256[],uint8[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    semaphoreGroupsFacetVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "semaphoreGroupsFacetVersion()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "updateGroupAdmin(uint256,address)"(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "addMember(uint256,uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addMembers(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "addMembers(uint256,uint256[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitments: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createGroup(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      zeroValue: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "createGroup(uint256,uint8,uint256,address)"(
      groupId: PromiseOrValue<BigNumberish>,
      depth: PromiseOrValue<BigNumberish>,
      zeroValue: PromiseOrValue<BigNumberish>,
      admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDepth(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDepth(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGroupAdmin(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfLeaves(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNumberOfLeaves(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoot(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRoot(uint256)"(
      groupId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeMember(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "removeMember(uint256,uint256,uint256[],uint8[])"(
      groupId: PromiseOrValue<BigNumberish>,
      identityCommitment: PromiseOrValue<BigNumberish>,
      proofSiblings: PromiseOrValue<BigNumberish>[],
      proofPathIndices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    semaphoreGroupsFacetVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "semaphoreGroupsFacetVersion()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateGroupAdmin(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "updateGroupAdmin(uint256,address)"(
      groupId: PromiseOrValue<BigNumberish>,
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
