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

export declare namespace IDiamondWritable {
  export type FacetCutStruct = {
    target: string;
    action: BigNumberish;
    selectors: BytesLike[];
  };

  export type FacetCutStructOutput = [string, number, string[]] & {
    target: string;
    action: number;
    selectors: string[];
  };
}

export declare namespace IDiamondReadable {
  export type FacetStruct = { target: string; selectors: BytesLike[] };

  export type FacetStructOutput = [string, string[]] & {
    target: string;
    selectors: string[];
  };
}

export interface SimplicyDiamondInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "diamondCut((address,uint8,bytes4[])[],address,bytes)": FunctionFragment;
    "facetAddress(bytes4)": FunctionFragment;
    "facetAddresses()": FunctionFragment;
    "facetFunctionSelectors(address)": FunctionFragment;
    "facets()": FunctionFragment;
    "getFallbackAddress()": FunctionFragment;
    "nomineeOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "setFallbackAddress(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "acceptOwnership()"
      | "diamondCut"
      | "diamondCut((address,uint8,bytes4[])[],address,bytes)"
      | "facetAddress"
      | "facetAddress(bytes4)"
      | "facetAddresses"
      | "facetAddresses()"
      | "facetFunctionSelectors"
      | "facetFunctionSelectors(address)"
      | "facets"
      | "facets()"
      | "getFallbackAddress"
      | "getFallbackAddress()"
      | "nomineeOwner"
      | "nomineeOwner()"
      | "owner"
      | "owner()"
      | "setFallbackAddress"
      | "setFallbackAddress(address)"
      | "supportsInterface"
      | "supportsInterface(bytes4)"
      | "transferOwnership"
      | "transferOwnership(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "diamondCut",
    values: [IDiamondWritable.FacetCutStruct[], string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "diamondCut((address,uint8,bytes4[])[],address,bytes)",
    values: [IDiamondWritable.FacetCutStruct[], string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddress(bytes4)",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "facetAddresses()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "facetFunctionSelectors",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "facetFunctionSelectors(address)",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "facets", values?: undefined): string;
  encodeFunctionData(functionFragment: "facets()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getFallbackAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFallbackAddress()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nomineeOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nomineeOwner()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFallbackAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFallbackAddress(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface(bytes4)",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "diamondCut", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "diamondCut((address,uint8,bytes4[])[],address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddress(bytes4)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetAddresses()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetFunctionSelectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "facetFunctionSelectors(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "facets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "facets()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFallbackAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFallbackAddress()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nomineeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nomineeOwner()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFallbackAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFallbackAddress(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface(bytes4)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
    data: BytesLike
  ): Result;

  events: {
    "DiamondCut(tuple[],address,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DiamondCut(tuple[],address,bytes)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface DiamondCutEventObject {
  facetCuts: IDiamondWritable.FacetCutStructOutput[];
  target: string;
  data: string;
}
export type DiamondCutEvent = TypedEvent<
  [IDiamondWritable.FacetCutStructOutput[], string, string],
  DiamondCutEventObject
>;

export type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;

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

export interface SimplicyDiamond extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SimplicyDiamondInterface;

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
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    diamondCut(
      facetCuts: IDiamondWritable.FacetCutStruct[],
      target: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "diamondCut((address,uint8,bytes4[])[],address,bytes)"(
      facetCuts: IDiamondWritable.FacetCutStruct[],
      target: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    facetAddress(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { facet: string }>;

    "facetAddress(bytes4)"(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { facet: string }>;

    facetAddresses(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    "facetAddresses()"(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    facetFunctionSelectors(
      facet: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { selectors: string[] }>;

    "facetFunctionSelectors(address)"(
      facet: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { selectors: string[] }>;

    facets(
      overrides?: CallOverrides
    ): Promise<
      [IDiamondReadable.FacetStructOutput[]] & {
        diamondFacets: IDiamondReadable.FacetStructOutput[];
      }
    >;

    "facets()"(
      overrides?: CallOverrides
    ): Promise<
      [IDiamondReadable.FacetStructOutput[]] & {
        diamondFacets: IDiamondReadable.FacetStructOutput[];
      }
    >;

    getFallbackAddress(overrides?: CallOverrides): Promise<[string]>;

    "getFallbackAddress()"(overrides?: CallOverrides): Promise<[string]>;

    nomineeOwner(overrides?: CallOverrides): Promise<[string]>;

    "nomineeOwner()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    setFallbackAddress(
      fallbackAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFallbackAddress(address)"(
      fallbackAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "acceptOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  diamondCut(
    facetCuts: IDiamondWritable.FacetCutStruct[],
    target: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "diamondCut((address,uint8,bytes4[])[],address,bytes)"(
    facetCuts: IDiamondWritable.FacetCutStruct[],
    target: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  facetAddress(selector: BytesLike, overrides?: CallOverrides): Promise<string>;

  "facetAddress(bytes4)"(
    selector: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  facetAddresses(overrides?: CallOverrides): Promise<string[]>;

  "facetAddresses()"(overrides?: CallOverrides): Promise<string[]>;

  facetFunctionSelectors(
    facet: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "facetFunctionSelectors(address)"(
    facet: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  facets(
    overrides?: CallOverrides
  ): Promise<IDiamondReadable.FacetStructOutput[]>;

  "facets()"(
    overrides?: CallOverrides
  ): Promise<IDiamondReadable.FacetStructOutput[]>;

  getFallbackAddress(overrides?: CallOverrides): Promise<string>;

  "getFallbackAddress()"(overrides?: CallOverrides): Promise<string>;

  nomineeOwner(overrides?: CallOverrides): Promise<string>;

  "nomineeOwner()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  setFallbackAddress(
    fallbackAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFallbackAddress(address)"(
    fallbackAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    "acceptOwnership()"(overrides?: CallOverrides): Promise<void>;

    diamondCut(
      facetCuts: IDiamondWritable.FacetCutStruct[],
      target: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "diamondCut((address,uint8,bytes4[])[],address,bytes)"(
      facetCuts: IDiamondWritable.FacetCutStruct[],
      target: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    facetAddress(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "facetAddress(bytes4)"(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    facetAddresses(overrides?: CallOverrides): Promise<string[]>;

    "facetAddresses()"(overrides?: CallOverrides): Promise<string[]>;

    facetFunctionSelectors(
      facet: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "facetFunctionSelectors(address)"(
      facet: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    facets(
      overrides?: CallOverrides
    ): Promise<IDiamondReadable.FacetStructOutput[]>;

    "facets()"(
      overrides?: CallOverrides
    ): Promise<IDiamondReadable.FacetStructOutput[]>;

    getFallbackAddress(overrides?: CallOverrides): Promise<string>;

    "getFallbackAddress()"(overrides?: CallOverrides): Promise<string>;

    nomineeOwner(overrides?: CallOverrides): Promise<string>;

    "nomineeOwner()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    setFallbackAddress(
      fallbackAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFallbackAddress(address)"(
      fallbackAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DiamondCut(tuple[],address,bytes)"(
      facetCuts?: null,
      target?: null,
      data?: null
    ): DiamondCutEventFilter;
    DiamondCut(
      facetCuts?: null,
      target?: null,
      data?: null
    ): DiamondCutEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    diamondCut(
      facetCuts: IDiamondWritable.FacetCutStruct[],
      target: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "diamondCut((address,uint8,bytes4[])[],address,bytes)"(
      facetCuts: IDiamondWritable.FacetCutStruct[],
      target: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    facetAddress(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "facetAddress(bytes4)"(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facetAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    "facetAddresses()"(overrides?: CallOverrides): Promise<BigNumber>;

    facetFunctionSelectors(
      facet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "facetFunctionSelectors(address)"(
      facet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    facets(overrides?: CallOverrides): Promise<BigNumber>;

    "facets()"(overrides?: CallOverrides): Promise<BigNumber>;

    getFallbackAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "getFallbackAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    nomineeOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "nomineeOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFallbackAddress(
      fallbackAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFallbackAddress(address)"(
      fallbackAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    diamondCut(
      facetCuts: IDiamondWritable.FacetCutStruct[],
      target: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "diamondCut((address,uint8,bytes4[])[],address,bytes)"(
      facetCuts: IDiamondWritable.FacetCutStruct[],
      target: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    facetAddress(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "facetAddress(bytes4)"(
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facetAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "facetAddresses()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facetFunctionSelectors(
      facet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "facetFunctionSelectors(address)"(
      facet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    facets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "facets()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFallbackAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFallbackAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nomineeOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nomineeOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFallbackAddress(
      fallbackAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFallbackAddress(address)"(
      fallbackAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
