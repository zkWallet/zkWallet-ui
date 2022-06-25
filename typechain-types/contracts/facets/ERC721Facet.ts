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

export interface ERC721FacetInterface extends utils.Interface {
  functions: {
    "approveERC721(address,address,uint256)": FunctionFragment;
    "balanceOfERC721(address)": FunctionFragment;
    "erc721FacetVersion()": FunctionFragment;
    "getAllTrackedERC721Tokens()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
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
      | "erc721FacetVersion"
      | "erc721FacetVersion()"
      | "getAllTrackedERC721Tokens"
      | "getAllTrackedERC721Tokens()"
      | "onERC721Received"
      | "onERC721Received(address,address,uint256,bytes)"
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
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveERC721(address,address,uint256)",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfERC721",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfERC721(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "erc721FacetVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "erc721FacetVersion()",
    values?: undefined
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
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received(address,address,uint256,bytes)",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOfERC721",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOfERC721(address,uint256)",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerERC721",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerERC721(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeERC721",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeERC721(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferERC721From(address,address,address,uint256)",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferERC721From(address,address,address,uint256,bytes)",
    values: [string, string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC721",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC721(address,address,uint256)",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC721From",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferERC721From(address,address,address,uint256)",
    values: [string, string, string, BigNumberish]
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
    functionFragment: "erc721FacetVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc721FacetVersion()",
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
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received(address,address,uint256,bytes)",
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
    "OwnershipTransferred(address,address)": EventFragment;
    "Received(address,address,uint256,bytes,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC721TokenRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ERC721TokenRemoved(address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC721TokenTracked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ERC721TokenTracked(address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Received(address,address,uint256,bytes,uint256)"
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

export interface ReceivedEventObject {
  operator: string;
  from: string;
  tokenId: BigNumber;
  data: string;
  gas: BigNumber;
}
export type ReceivedEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber],
  ReceivedEventObject
>;

export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;

export interface ERC721Facet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC721FacetInterface;

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
      token: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approveERC721(address,address,uint256)"(
      token: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOfERC721(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOfERC721(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    erc721FacetVersion(overrides?: CallOverrides): Promise<[string]>;

    "erc721FacetVersion()"(overrides?: CallOverrides): Promise<[string]>;

    getAllTrackedERC721Tokens(overrides?: CallOverrides): Promise<[string[]]>;

    "getAllTrackedERC721Tokens()"(
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ownerOfERC721(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    "ownerOfERC721(address,uint256)"(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    registerERC721(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "registerERC721(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeERC721(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeERC721(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferERC721From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferERC721From(address,address,address,uint256,bytes)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferERC721(
      token: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferERC721(address,address,uint256)"(
      token: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferERC721From(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferERC721From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approveERC721(
    token: string,
    spender: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approveERC721(address,address,uint256)"(
    token: string,
    spender: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOfERC721(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOfERC721(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  erc721FacetVersion(overrides?: CallOverrides): Promise<string>;

  "erc721FacetVersion()"(overrides?: CallOverrides): Promise<string>;

  getAllTrackedERC721Tokens(overrides?: CallOverrides): Promise<string[]>;

  "getAllTrackedERC721Tokens()"(overrides?: CallOverrides): Promise<string[]>;

  onERC721Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "onERC721Received(address,address,uint256,bytes)"(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ownerOfERC721(
    token: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "ownerOfERC721(address,uint256)"(
    token: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  registerERC721(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "registerERC721(address)"(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeERC721(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeERC721(address)"(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferERC721From(address,address,address,uint256)"(
    token: string,
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferERC721From(address,address,address,uint256,bytes)"(
    token: string,
    from: string,
    to: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferERC721(
    token: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferERC721(address,address,uint256)"(
    token: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferERC721From(
    token: string,
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferERC721From(address,address,address,uint256)"(
    token: string,
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveERC721(
      token: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveERC721(address,address,uint256)"(
      token: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOfERC721(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC721(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    erc721FacetVersion(overrides?: CallOverrides): Promise<string>;

    "erc721FacetVersion()"(overrides?: CallOverrides): Promise<string>;

    getAllTrackedERC721Tokens(overrides?: CallOverrides): Promise<string[]>;

    "getAllTrackedERC721Tokens()"(overrides?: CallOverrides): Promise<string[]>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    ownerOfERC721(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "ownerOfERC721(address,uint256)"(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    registerERC721(token: string, overrides?: CallOverrides): Promise<void>;

    "registerERC721(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeERC721(token: string, overrides?: CallOverrides): Promise<void>;

    "removeERC721(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferERC721From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferERC721From(address,address,address,uint256,bytes)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferERC721(
      token: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferERC721(address,address,uint256)"(
      token: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferERC721From(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferERC721From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ERC721TokenRemoved(address)"(
      tokenAddress?: string | null
    ): ERC721TokenRemovedEventFilter;
    ERC721TokenRemoved(
      tokenAddress?: string | null
    ): ERC721TokenRemovedEventFilter;

    "ERC721TokenTracked(address)"(
      tokenAddress?: string | null
    ): ERC721TokenTrackedEventFilter;
    ERC721TokenTracked(
      tokenAddress?: string | null
    ): ERC721TokenTrackedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Received(address,address,uint256,bytes,uint256)"(
      operator?: null,
      from?: null,
      tokenId?: null,
      data?: null,
      gas?: null
    ): ReceivedEventFilter;
    Received(
      operator?: null,
      from?: null,
      tokenId?: null,
      data?: null,
      gas?: null
    ): ReceivedEventFilter;
  };

  estimateGas: {
    approveERC721(
      token: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approveERC721(address,address,uint256)"(
      token: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOfERC721(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfERC721(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    erc721FacetVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "erc721FacetVersion()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAllTrackedERC721Tokens(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllTrackedERC721Tokens()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ownerOfERC721(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ownerOfERC721(address,uint256)"(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerERC721(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "registerERC721(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeERC721(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeERC721(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferERC721From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferERC721From(address,address,address,uint256,bytes)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferERC721(
      token: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferERC721(address,address,uint256)"(
      token: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferERC721From(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferERC721From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveERC721(
      token: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approveERC721(address,address,uint256)"(
      token: string,
      spender: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOfERC721(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfERC721(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    erc721FacetVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "erc721FacetVersion()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllTrackedERC721Tokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAllTrackedERC721Tokens()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ownerOfERC721(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ownerOfERC721(address,uint256)"(
      token: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerERC721(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "registerERC721(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeERC721(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeERC721(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferERC721From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferERC721From(address,address,address,uint256,bytes)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferERC721(
      token: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferERC721(address,address,uint256)"(
      token: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferERC721From(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferERC721From(address,address,address,uint256)"(
      token: string,
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}