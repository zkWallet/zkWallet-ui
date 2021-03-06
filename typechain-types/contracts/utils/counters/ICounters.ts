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
} from "../../../common";

export interface ICountersInterface extends utils.Interface {
  functions: {
    "current(uint256)": FunctionFragment;
    "decrement(uint256)": FunctionFragment;
    "increment(uint256)": FunctionFragment;
    "reset(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "current"
      | "current(uint256)"
      | "decrement"
      | "decrement(uint256)"
      | "increment"
      | "increment(uint256)"
      | "reset"
      | "reset(uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "current",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "current(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "decrement",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "decrement(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "increment",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "increment(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "reset",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "reset(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "current", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "current(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decrement", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decrement(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increment(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reset(uint256)",
    data: BytesLike
  ): Result;

  events: {
    "Decremented(uint256,uint256)": EventFragment;
    "Incremented(uint256,uint256)": EventFragment;
    "Reset(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Decremented"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Decremented(uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Incremented"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Incremented(uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Reset"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Reset(uint256,uint256)"): EventFragment;
}

export interface DecrementedEventObject {
  index: BigNumber;
  newValue: BigNumber;
}
export type DecrementedEvent = TypedEvent<
  [BigNumber, BigNumber],
  DecrementedEventObject
>;

export type DecrementedEventFilter = TypedEventFilter<DecrementedEvent>;

export interface IncrementedEventObject {
  index: BigNumber;
  newValue: BigNumber;
}
export type IncrementedEvent = TypedEvent<
  [BigNumber, BigNumber],
  IncrementedEventObject
>;

export type IncrementedEventFilter = TypedEventFilter<IncrementedEvent>;

export interface ResetEventObject {
  index: BigNumber;
  newValue: BigNumber;
}
export type ResetEvent = TypedEvent<[BigNumber, BigNumber], ResetEventObject>;

export type ResetEventFilter = TypedEventFilter<ResetEvent>;

export interface ICounters extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICountersInterface;

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
    current(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "current(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decrement(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "decrement(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    increment(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "increment(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reset(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "reset(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  current(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "current(uint256)"(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decrement(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "decrement(uint256)"(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  increment(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "increment(uint256)"(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reset(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "reset(uint256)"(
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    current(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "current(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decrement(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "decrement(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    increment(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "increment(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    reset(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "reset(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Decremented(uint256,uint256)"(
      index?: PromiseOrValue<BigNumberish> | null,
      newValue?: null
    ): DecrementedEventFilter;
    Decremented(
      index?: PromiseOrValue<BigNumberish> | null,
      newValue?: null
    ): DecrementedEventFilter;

    "Incremented(uint256,uint256)"(
      index?: PromiseOrValue<BigNumberish> | null,
      newValue?: null
    ): IncrementedEventFilter;
    Incremented(
      index?: PromiseOrValue<BigNumberish> | null,
      newValue?: null
    ): IncrementedEventFilter;

    "Reset(uint256,uint256)"(
      index?: PromiseOrValue<BigNumberish> | null,
      newValue?: null
    ): ResetEventFilter;
    Reset(
      index?: PromiseOrValue<BigNumberish> | null,
      newValue?: null
    ): ResetEventFilter;
  };

  estimateGas: {
    current(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "current(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decrement(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "decrement(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    increment(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "increment(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reset(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "reset(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    current(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "current(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decrement(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "decrement(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    increment(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "increment(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reset(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "reset(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
