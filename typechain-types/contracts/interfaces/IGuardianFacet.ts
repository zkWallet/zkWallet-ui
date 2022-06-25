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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace IGuardianInternal {
  export type GuardianDTOStruct = { hashId: BigNumberish };

  export type GuardianDTOStructOutput = [BigNumber] & { hashId: BigNumber };
}

export interface IGuardianFacetInterface extends utils.Interface {
  functions: {
    "addGuardians(uint256,uint256[],(uint256)[])": FunctionFragment;
    "guardianFacetVersion()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addGuardians"
      | "addGuardians(uint256,uint256[],(uint256)[])"
      | "guardianFacetVersion"
      | "guardianFacetVersion()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addGuardians",
    values: [
      BigNumberish,
      BigNumberish[],
      IGuardianInternal.GuardianDTOStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addGuardians(uint256,uint256[],(uint256)[])",
    values: [
      BigNumberish,
      BigNumberish[],
      IGuardianInternal.GuardianDTOStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "guardianFacetVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "guardianFacetVersion()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addGuardians",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addGuardians(uint256,uint256[],(uint256)[])",
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

  events: {};
}

export interface IGuardianFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGuardianFacetInterface;

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
    addGuardians(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addGuardians(uint256,uint256[],(uint256)[])"(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    guardianFacetVersion(overrides?: CallOverrides): Promise<[string]>;

    "guardianFacetVersion()"(overrides?: CallOverrides): Promise<[string]>;
  };

  addGuardians(
    groupId: BigNumberish,
    identityCommitments: BigNumberish[],
    guardians: IGuardianInternal.GuardianDTOStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addGuardians(uint256,uint256[],(uint256)[])"(
    groupId: BigNumberish,
    identityCommitments: BigNumberish[],
    guardians: IGuardianInternal.GuardianDTOStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  guardianFacetVersion(overrides?: CallOverrides): Promise<string>;

  "guardianFacetVersion()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addGuardians(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    "addGuardians(uint256,uint256[],(uint256)[])"(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    guardianFacetVersion(overrides?: CallOverrides): Promise<string>;

    "guardianFacetVersion()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addGuardians(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addGuardians(uint256,uint256[],(uint256)[])"(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    guardianFacetVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "guardianFacetVersion()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addGuardians(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addGuardians(uint256,uint256[],(uint256)[])"(
      groupId: BigNumberish,
      identityCommitments: BigNumberish[],
      guardians: IGuardianInternal.GuardianDTOStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    guardianFacetVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "guardianFacetVersion()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
