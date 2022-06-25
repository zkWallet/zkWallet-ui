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

export interface ISemaphoreInterface extends utils.Interface {
  functions: {
    "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "verifyProof"
      | "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])",
    data: BytesLike
  ): Result;

  events: {
    "ProofVerified(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProofVerified"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ProofVerified(uint256,bytes32)"
  ): EventFragment;
}

export interface ProofVerifiedEventObject {
  groupId: BigNumber;
  signal: string;
}
export type ProofVerifiedEvent = TypedEvent<
  [BigNumber, string],
  ProofVerifiedEventObject
>;

export type ProofVerifiedEventFilter = TypedEventFilter<ProofVerifiedEvent>;

export interface ISemaphore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISemaphoreInterface;

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
    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])"(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  verifyProof(
    groupId: BigNumberish,
    signal: BytesLike,
    nullifierHash: BigNumberish,
    externalNullifier: BigNumberish,
    proof: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])"(
    groupId: BigNumberish,
    signal: BytesLike,
    nullifierHash: BigNumberish,
    externalNullifier: BigNumberish,
    proof: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])"(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ProofVerified(uint256,bytes32)"(
      groupId?: BigNumberish | null,
      signal?: null
    ): ProofVerifiedEventFilter;
    ProofVerified(
      groupId?: BigNumberish | null,
      signal?: null
    ): ProofVerifiedEventFilter;
  };

  estimateGas: {
    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])"(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])"(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
