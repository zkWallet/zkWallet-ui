/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ERC20ServiceInternalInterface extends utils.Interface {
  functions: {};

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

export interface ERC20ServiceInternal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20ServiceInternalInterface;

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

  functions: {};

  callStatic: {};

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

  estimateGas: {};

  populateTransaction: {};
}
