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

export interface IERC721ServiceInterface extends utils.Interface {
  functions: {
    "approveERC721(address,address,uint256)": FunctionFragment;
    "balanceOfERC721(address)": FunctionFragment;
    "getAllTrackedERC721Tokens()": FunctionFragment;
    "ownerOfERC721(address,uint256)": FunctionFragment;
    "registerERC721(address)": FunctionFragment;
    "removeERC721(address)": FunctionFragment;
    "safeTransferERC721From(address,address,address,uint256)": FunctionFragment;
    "safeTransferERC721From(address,address,address,uint256,bytes)": FunctionFragment;
    "transferERC721(address,address,uint256)": FunctionFragment;
    "transferERC721From(address,address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveERC721"
      | "approveERC721(address,address,uint256)"
      | "balanceOfERC721"
      | "balanceOfERC721(address)"
      | "getAllTrackedERC721Tokens"
      | "getAllTrackedERC721Tokens()"
      | "ownerOfERC721"
      | "ownerOfERC721(address,uint256)"
      | "registerERC721"
      | "registerERC721(address)"
      | "removeERC721"
      | "removeERC721(address)"
      | "safeTransferERC721From(address,address,address,uint256)"
      | "safeTransferERC721From(address,address,address,uint256,bytes)"
      | "transferERC721"
      | "transferERC721(address,address,uint256)"
      | "transferERC721From"
      | "transferERC721From(address,address,address,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveERC721",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "approveERC721(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfERC721",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfERC721(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTrackedERC721Tokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTrackedERC721Tokens()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOfERC721",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOfERC721(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerERC721",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerERC721(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeERC721",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeERC721(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferERC721From(address,address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferERC721From(address,address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC721",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC721(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC721From",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC721From(address,address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveERC721(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfERC721(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllTrackedERC721Tokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllTrackedERC721Tokens()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerOfERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerOfERC721(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerERC721(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeERC721(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferERC721From(address,address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferERC721From(address,address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferERC721(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferERC721From",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferERC721From(address,address,address,uint256)",
    data: BytesLike
  ): Result;

  events: {
    "ERC721TokenRemoved(address)": EventFragment;
    "ERC721TokenTracked(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC721TokenRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ERC721TokenRemoved(address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC721TokenTracked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ERC721TokenTracked(address)"
  ): EventFragment;
}

export interface ERC721TokenRemovedEventObject {
  tokenAddress: string;
}
export type ERC721TokenRemovedEvent = TypedEvent<
  [string],
  ERC721TokenRemovedEventObject
>;

export type ERC721TokenRemovedEventFilter =
  TypedEventFilter<ERC721TokenRemovedEvent>;

export interface ERC721TokenTrackedEventObject {
  tokenAddress: string;
}
export type ERC721TokenTrackedEvent = TypedEvent<
  [string],
  ERC721TokenTrackedEventObject
>;

export type ERC721TokenTrackedEventFilter =
  TypedEventFilter<ERC721TokenTrackedEvent>;

export interface IERC721Service extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC721ServiceInterface;

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
    approveERC721(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "approveERC721(address,address,uint256)"(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOfERC721(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOfERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAllTrackedERC721Tokens(overrides?: CallOverrides): Promise<[string[]]>;

    "getAllTrackedERC721Tokens()"(
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    ownerOfERC721(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    "ownerOfERC721(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    registerERC721(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "registerERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeERC721(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "removeERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "safeTransferERC721From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "safeTransferERC721From(address,address,address,uint256,bytes)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferERC721(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferERC721(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferERC721From(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferERC721From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approveERC721(
    token: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "approveERC721(address,address,uint256)"(
    token: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOfERC721(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOfERC721(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAllTrackedERC721Tokens(overrides?: CallOverrides): Promise<string[]>;

  "getAllTrackedERC721Tokens()"(overrides?: CallOverrides): Promise<string[]>;

  ownerOfERC721(
    token: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "ownerOfERC721(address,uint256)"(
    token: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  registerERC721(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "registerERC721(address)"(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeERC721(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "removeERC721(address)"(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "safeTransferERC721From(address,address,address,uint256)"(
    token: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "safeTransferERC721From(address,address,address,uint256,bytes)"(
    token: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferERC721(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferERC721(address,address,uint256)"(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferERC721From(
    token: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferERC721From(address,address,address,uint256)"(
    token: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveERC721(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveERC721(address,address,uint256)"(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOfERC721(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllTrackedERC721Tokens(overrides?: CallOverrides): Promise<string[]>;

    "getAllTrackedERC721Tokens()"(overrides?: CallOverrides): Promise<string[]>;

    ownerOfERC721(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "ownerOfERC721(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    registerERC721(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeERC721(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferERC721From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferERC721From(address,address,address,uint256,bytes)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferERC721(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferERC721(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferERC721From(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferERC721From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ERC721TokenRemoved(address)"(
      tokenAddress?: PromiseOrValue<string> | null
    ): ERC721TokenRemovedEventFilter;
    ERC721TokenRemoved(
      tokenAddress?: PromiseOrValue<string> | null
    ): ERC721TokenRemovedEventFilter;

    "ERC721TokenTracked(address)"(
      tokenAddress?: PromiseOrValue<string> | null
    ): ERC721TokenTrackedEventFilter;
    ERC721TokenTracked(
      tokenAddress?: PromiseOrValue<string> | null
    ): ERC721TokenTrackedEventFilter;
  };

  estimateGas: {
    approveERC721(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "approveERC721(address,address,uint256)"(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOfERC721(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllTrackedERC721Tokens(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllTrackedERC721Tokens()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOfERC721(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ownerOfERC721(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerERC721(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "registerERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeERC721(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "removeERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "safeTransferERC721From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "safeTransferERC721From(address,address,address,uint256,bytes)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferERC721(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferERC721(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferERC721From(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferERC721From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveERC721(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "approveERC721(address,address,uint256)"(
      token: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOfERC721(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllTrackedERC721Tokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAllTrackedERC721Tokens()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOfERC721(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ownerOfERC721(address,uint256)"(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerERC721(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "registerERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeERC721(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "removeERC721(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferERC721From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferERC721From(address,address,address,uint256,bytes)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferERC721(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferERC721(address,address,uint256)"(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferERC721From(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferERC721From(address,address,address,uint256)"(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
