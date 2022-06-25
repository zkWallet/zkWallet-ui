/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SemaphoreCoreBaseInternal,
  SemaphoreCoreBaseInternalInterface,
} from "../../../../../contracts/semaphore/base/SemaphoreCoreBase/SemaphoreCoreBaseInternal";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
    ],
    name: "NullifierHashAdded",
    type: "event",
  },
];

export class SemaphoreCoreBaseInternal__factory {
  static readonly abi = _abi;
  static createInterface(): SemaphoreCoreBaseInternalInterface {
    return new utils.Interface(_abi) as SemaphoreCoreBaseInternalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SemaphoreCoreBaseInternal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SemaphoreCoreBaseInternal;
  }
}
