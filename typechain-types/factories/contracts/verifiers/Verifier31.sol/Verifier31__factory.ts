/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Verifier31,
  Verifier31Interface,
} from "../../../../contracts/verifiers/Verifier31.sol/Verifier31";

const _abi = [
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[4]",
        name: "input",
        type: "uint256[4]",
      },
    ],
    name: "verifyProof",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061110d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635fe8c13b14610030575b600080fd5b61004361003e366004610f46565b610045565b005b61004d610d6b565b6040805180820182528651815260208088015181830152908352815160808101835286515181840190815287518301516060830152815282518084018452878301805151825251830151818401528183015283820152815180830183528551815285820151918101919091529082015260006100c76103b4565b6080810151519091506100dc60046001611050565b146100fa576040516309bde33960e01b815260040160405180910390fd5b6000816080015160008151811061011357610113611024565b6020026020010151905061016581610160846080015160018151811061013b5761013b611024565b60200260200101518760006004811061015657610156611024565b60200201516108a7565b610944565b90506101a081610160846080015160028151811061018557610185611024565b60200260200101518760016004811061015657610156611024565b90506101db8161016084608001516003815181106101c0576101c0611024565b60200260200101518760026004811061015657610156611024565b90506102168161016084608001516004815181106101fb576101fb611024565b60200260200101518760036004811061015657610156611024565b60408051600480825260a0820190925291925060009190816020015b61023a610d9d565b81526020019060019003908161023257505060408051600480825260a0820190925291925060009190602082015b610270610db7565b8152602001906001900390816102685750508551909150610290906109a4565b826000815181106102a3576102a3611024565b60200260200101819052508460200151816000815181106102c6576102c6611024565b60200260200101819052508360000151826001815181106102e9576102e9611024565b602002602001018190525083602001518160018151811061030c5761030c611024565b6020026020010181905250828260028151811061032b5761032b611024565b602002602001018190525083604001518160028151811061034e5761034e611024565b602002602001018190525084604001518260038151811061037157610371611024565b602002602001018190525083606001518160038151811061039457610394611024565b60200260200101819052506103a98282610a64565b505050505050505050565b6103bc610dd7565b6040805180820182527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19266020808301919091529083528151608080820184527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c8285019081527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab606080850191909152908352845180860186527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f21026f2492115bc10ad0a5d50cf101474fb0c5e53b25612d8156989bb8cbbed68185019081527f1e4048744f2e211ffa8cfac1d2efbae21234bfaa15c8d640171182c9b386e8e2828401528152835180850185527f295aed6c2486154603e450f3d49b39fee1bf9ffc4bc4194f403a02d66e7954f681527f2f2045b5a78523c7892e775d7f8fe805563acebd5ab053745ea735ab7930afa58185015281840152908401528151600580825260c08201909352919082015b61063f610d9d565b81526020019060019003908161063757505060808201908152604080518082019091527f1beb6fbfbc70fb2711bc7c187cf0ec4b63ef6651b02742c9fe71de1aef7ffdb181527f215e8105a1a572b106c2bb0d1f0170bbf8ffda20957ea14b709a7f6cc778f9666020820152905180516000906106be576106be611024565b602002602001018190525060405180604001604052807f0e9404f55d91e9964e7b921158995a81097cf27b017273cc2c133107c653483781526020017f2902b31b20c04311298f9b90026980b7963a001834fa663eb83636ec5fdb7b6b815250816080015160018151811061073557610735611024565b602002602001018190525060405180604001604052807f0ddd515b58aa44c26b377e2c82c83c7d75722131ee7139ddb18082e2da8ddda081526020017ec958a799e9a65df6bd806e7bb76140d415ca61d1ffc2b2351b12e85553268a81525081608001516002815181106107ab576107ab611024565b602002602001018190525060405180604001604052807f04adb15295c975c172a9a508c71dee5517223306cd091fb9881d0dca5d57d1d281526020017f08da6902b366d39b8a7ef07c831486aabbf834bbd07813bdcdb92be7850b2ca6815250816080015160038151811061082257610822611024565b602002602001018190525060405180604001604052807f094ce0ba5287bd96c37794306fe6b0c5541fc77f05aab2b4b8a80564d086bfcc81526020017f2ad90cdefdb6c12edc35cf483e270516b0ad3ed872dad6031ec705fba888258b815250816080015160048151811061089957610899611024565b602002602001018190525090565b6108af610d9d565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182106108ef576040516309bde33960e01b815260040160405180910390fd5b6108f7610e1e565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa90508061093c576040516309bde33960e01b815260040160405180910390fd5b505092915050565b61094c610d9d565b610954610e3c565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508061093c576040516309bde33960e01b815260040160405180910390fd5b6109ac610d9d565b81511580156109bd57506020820151155b156109db575050604080518082019091526000808252602082015290565b81516000805160206110b8833981519152111580610a0b57506000805160206110b8833981519152826020015110155b15610a29576040516309bde33960e01b815260040160405180910390fd5b60405180604001604052808360000151815260200183602001516000805160206110b8833981519152610a5c9190611068565b905292915050565b8051825114610a86576040516309bde33960e01b815260040160405180910390fd5b81516000610a9582600661107f565b90506000816001600160401b03811115610ab157610ab1610e96565b604051908082528060200260200182016040528015610ada578160200160208202803683370190505b50905060005b83811015610d1557858181518110610afa57610afa611024565b60200260200101516000015182826006610b14919061107f565b610b1f906000611050565b81518110610b2f57610b2f611024565b602002602001018181525050858181518110610b4d57610b4d611024565b60200260200101516020015182826006610b67919061107f565b610b72906001611050565b81518110610b8257610b82611024565b602002602001018181525050848181518110610ba057610ba0611024565b6020908102919091010151515182610bb983600661107f565b610bc4906002611050565b81518110610bd457610bd4611024565b602002602001018181525050848181518110610bf257610bf2611024565b60209081029190910181015151015182610c0d83600661107f565b610c18906003611050565b81518110610c2857610c28611024565b602002602001018181525050848181518110610c4657610c46611024565b602002602001015160200151600060028110610c6457610c64611024565b602002015182610c7583600661107f565b610c80906004611050565b81518110610c9057610c90611024565b602002602001018181525050848181518110610cae57610cae611024565b602002602001015160200151600160028110610ccc57610ccc611024565b602002015182610cdd83600661107f565b610ce8906005611050565b81518110610cf857610cf8611024565b602090810291909101015280610d0d8161109e565b915050610ae0565b50610d1e610e5a565b6000602082602086026020860160086107d05a03fa9050801580610d4457508151600114155b15610d62576040516309bde33960e01b815260040160405180910390fd5b50505050505050565b6040518060600160405280610d7e610d9d565b8152602001610d8b610db7565b8152602001610d98610d9d565b905290565b604051806040016040528060008152602001600081525090565b6040518060400160405280610dca610e78565b8152602001610d98610e78565b6040518060a00160405280610dea610d9d565b8152602001610df7610db7565b8152602001610e04610db7565b8152602001610e11610db7565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715610ece57610ece610e96565b60405290565b604051608081016001600160401b0381118282101715610ece57610ece610e96565b600082601f830112610f0757600080fd5b610f0f610eac565b806040840185811115610f2157600080fd5b845b81811015610f3b578035845260209384019301610f23565b509095945050505050565b600080600080610180808688031215610f5e57600080fd5b610f688787610ef6565b9450604087605f880112610f7b57600080fd5b610f83610eac565b8060c089018a811115610f9557600080fd5b838a015b81811015610fba57610fab8c82610ef6565b84526020909301928401610f99565b50819750610fc88b82610ef6565b9650505050508661011f870112610fde57600080fd5b610fe6610ed4565b908601908088831115610ff857600080fd5b61010088015b83811015611016578035835260209283019201610ffe565b509598949750929550505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156110635761106361103a565b500190565b60008282101561107a5761107a61103a565b500390565b60008160001904831182151516156110995761109961103a565b500290565b6000600182016110b0576110b061103a565b506001019056fe30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47a2646970667358221220ca862d06afdfa887a2abf1200afa6e6eddb148025299d420b0eb4c48bfe7949764736f6c634300080e0033";

type Verifier31ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Verifier31ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier31__factory extends ContractFactory {
  constructor(...args: Verifier31ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Verifier31> {
    return super.deploy(overrides || {}) as Promise<Verifier31>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Verifier31 {
    return super.attach(address) as Verifier31;
  }
  override connect(signer: Signer): Verifier31__factory {
    return super.connect(signer) as Verifier31__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier31Interface {
    return new utils.Interface(_abi) as Verifier31Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier31 {
    return new Contract(address, _abi, signerOrProvider) as Verifier31;
  }
}
