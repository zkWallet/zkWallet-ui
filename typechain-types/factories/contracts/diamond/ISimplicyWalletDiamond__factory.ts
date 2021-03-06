/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISimplicyWalletDiamond,
  ISimplicyWalletDiamondInterface,
} from "../../../contracts/diamond/ISimplicyWalletDiamond";

const _abi = [
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ISimplicyWalletDiamond__factory {
  static readonly abi = _abi;
  static createInterface(): ISimplicyWalletDiamondInterface {
    return new utils.Interface(_abi) as ISimplicyWalletDiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISimplicyWalletDiamond {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISimplicyWalletDiamond;
  }
}
