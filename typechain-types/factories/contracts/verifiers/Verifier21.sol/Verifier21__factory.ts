/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Verifier21,
  Verifier21Interface,
} from "../../../../contracts/verifiers/Verifier21.sol/Verifier21";

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
  "0x608060405234801561001057600080fd5b50611171806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635fe8c13b14610030575b600080fd5b61004361003e366004610fca565b610045565b005b61004d610dde565b6040805180820182528651815260208088015181830152908352815160808101835286515181840190815287518301516060830152815282518084018452878301805151825251830151818401528183015283820152815180830183528551815285820151918101919091529082015260006100c76103c0565b6080810151519091506100dc600460016110d4565b146100fa576040516309bde33960e01b815260040160405180910390fd5b60008160800151600081518110610113576101136110a8565b6020026020010151905061016581610160846080015160018151811061013b5761013b6110a8565b602002602001015187600060048110610156576101566110a8565b60200201516108bf565b610968565b90506101a0816101608460800151600281518110610185576101856110a8565b602002602001015187600160048110610156576101566110a8565b90506101db8161016084608001516003815181106101c0576101c06110a8565b602002602001015187600260048110610156576101566110a8565b90506102168161016084608001516004815181106101fb576101fb6110a8565b602002602001015187600360048110610156576101566110a8565b60408051600480825260a0820190925291925060009190816020015b604080518082019091526000808252602082015281526020019060019003908161023257505060408051600480825260a0820190925291925060009190602082015b61027c610e2f565b815260200190600190039081610274575050855190915061029c906109d4565b826000815181106102af576102af6110a8565b60200260200101819052508460200151816000815181106102d2576102d26110a8565b60200260200101819052508360000151826001815181106102f5576102f56110a8565b6020026020010181905250836020015181600181518110610318576103186110a8565b60200260200101819052508282600281518110610337576103376110a8565b602002602001018190525083604001518160028151811061035a5761035a6110a8565b602002602001018190525084604001518260038151811061037d5761037d6110a8565b60200260200101819052508360600151816003815181106103a0576103a06110a8565b60200260200101819052506103b58282610ad6565b505050505050505050565b6103c8610e4f565b6040805180820182527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19266020808301919091529083528151608080820184527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c8285019081527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab606080850191909152908352845180860186527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f086d48f63f5c71cf5d49053014fd136b4f528a67c3d2500dc0359017376ef9e98185019081527f13f83d45b3aa4ec86d3b9871cf43ccd7633306b29af07e7c70b13a212501b9c8828401528152835180850185527f240e3efc96e362bb9412aad60ae0ec25d4fced28aac3aa803e7287d3b6d425eb81527f1b7b1edff9f984c2ea43d3aab2487e863a4dee1c266fa2fc05f2a53bba124cb58185015281840152908401528151600580825260c08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161064357505060808201908152604080518082019091527f14fdea340c7d5e62f830e244237c704e516d90f29a5e71f45928e97bb160376881527f1a0d3b9393c5595d11f31f2cb0b38834d26debc568a0b36e26fa93b6b05f70d36020820152905180516000906106d6576106d66110a8565b602002602001018190525060405180604001604052807f10b7fcb32afd1649ac4560aff9047bc52972befd38a21b870c0519719afee22a81526020017f27b1c713b71efa1eae72c81675ac78c578fa7ac8718cbd58d84fbe432f3d6783815250816080015160018151811061074d5761074d6110a8565b602002602001018190525060405180604001604052807f2ac10655edcd4c74305d2d323239400baf8541470936b2e1ac77167e31e8a9e281526020017e15b63038e94a1d4d5a85c7a666875e7f693a922ea2723a3e39f256b240f60781525081608001516002815181106107c3576107c36110a8565b602002602001018190525060405180604001604052807f2ed2a0a894b904559562fb1643c8b69a743e39a15455d6c6a0d668b32147934181526020017f15a2ed81d1ac5a1383524fd4daf70220034a6f40d643da7b79f9a20cab1895b0815250816080015160038151811061083a5761083a6110a8565b602002602001018190525060405180604001604052807f190cd68f815b152eb0c8474be622c18a56d2e518bf6ddbb929af7d50a2cedab981526020017f034b50d36d6b6dc03d6e6eb0f731eb1dd5df2f6300a760eab888e859f45f387581525081608001516004815181106108b1576108b16110a8565b602002602001018190525090565b60408051808201909152600080825260208201527f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018210610913576040516309bde33960e01b815260040160405180910390fd5b61091b610ea0565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080610960576040516309bde33960e01b815260040160405180910390fd5b505092915050565b6040805180820190915260008082526020820152610984610ebe565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080610960576040516309bde33960e01b815260040160405180910390fd5b604080518082019091526000808252602082015281511580156109f957506020820151155b15610a17575050604080518082019091526000808252602082015290565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47111580610a6b57507f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47826020015110155b15610a89576040516309bde33960e01b815260040160405180910390fd5b60405180604001604052808360000151815260200183602001517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47610ace91906110ec565b905292915050565b8051825114610af8576040516309bde33960e01b815260040160405180910390fd5b81516000610b07826006611103565b905060008167ffffffffffffffff811115610b2457610b24610f18565b604051908082528060200260200182016040528015610b4d578160200160208202803683370190505b50905060005b83811015610d8857858181518110610b6d57610b6d6110a8565b60200260200101516000015182826006610b879190611103565b610b929060006110d4565b81518110610ba257610ba26110a8565b602002602001018181525050858181518110610bc057610bc06110a8565b60200260200101516020015182826006610bda9190611103565b610be59060016110d4565b81518110610bf557610bf56110a8565b602002602001018181525050848181518110610c1357610c136110a8565b6020908102919091010151515182610c2c836006611103565b610c379060026110d4565b81518110610c4757610c476110a8565b602002602001018181525050848181518110610c6557610c656110a8565b60209081029190910181015151015182610c80836006611103565b610c8b9060036110d4565b81518110610c9b57610c9b6110a8565b602002602001018181525050848181518110610cb957610cb96110a8565b602002602001015160200151600060028110610cd757610cd76110a8565b602002015182610ce8836006611103565b610cf39060046110d4565b81518110610d0357610d036110a8565b602002602001018181525050848181518110610d2157610d216110a8565b602002602001015160200151600160028110610d3f57610d3f6110a8565b602002015182610d50836006611103565b610d5b9060056110d4565b81518110610d6b57610d6b6110a8565b602090810291909101015280610d8081611122565b915050610b53565b50610d91610edc565b6000602082602086026020860160086107d05a03fa9050801580610db757508151600114155b15610dd5576040516309bde33960e01b815260040160405180910390fd5b50505050505050565b6040805160a081019091526000606082018181526080830191909152815260208101610e08610e2f565b8152602001610e2a604051806040016040528060008152602001600081525090565b905290565b6040518060400160405280610e42610efa565b8152602001610e2a610efa565b6040805160e08101909152600060a0820181815260c0830191909152815260208101610e79610e2f565b8152602001610e86610e2f565b8152602001610e93610e2f565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610f5157610f51610f18565b60405290565b6040516080810167ffffffffffffffff81118282101715610f5157610f51610f18565b600082601f830112610f8b57600080fd5b610f93610f2e565b806040840185811115610fa557600080fd5b845b81811015610fbf578035845260209384019301610fa7565b509095945050505050565b600080600080610180808688031215610fe257600080fd5b610fec8787610f7a565b9450604087605f880112610fff57600080fd5b611007610f2e565b8060c089018a81111561101957600080fd5b838a015b8181101561103e5761102f8c82610f7a565b8452602090930192840161101d565b5081975061104c8b82610f7a565b9650505050508661011f87011261106257600080fd5b61106a610f57565b90860190808883111561107c57600080fd5b61010088015b8381101561109a578035835260209283019201611082565b509598949750929550505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156110e7576110e76110be565b500190565b6000828210156110fe576110fe6110be565b500390565b600081600019048311821515161561111d5761111d6110be565b500290565b600060018201611134576111346110be565b506001019056fea2646970667358221220d5670ad9ef4fd9527d37ec3106db51fd070029bf4272e309ac7cf98b448d9e5e64736f6c634300080e0033";

type Verifier21ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Verifier21ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier21__factory extends ContractFactory {
  constructor(...args: Verifier21ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Verifier21> {
    return super.deploy(overrides || {}) as Promise<Verifier21>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Verifier21 {
    return super.attach(address) as Verifier21;
  }
  override connect(signer: Signer): Verifier21__factory {
    return super.connect(signer) as Verifier21__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier21Interface {
    return new utils.Interface(_abi) as Verifier21Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier21 {
    return new Contract(address, _abi, signerOrProvider) as Verifier21;
  }
}
