/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WalletFactoryDiamond,
  WalletFactoryDiamondInterface,
} from "../../../contracts/diamond/WalletFactoryDiamond";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "enum IDiamondWritable.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondWritable.FacetCut[]",
        name: "facetCuts",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "enum IDiamondWritable.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondWritable.FacetCut[]",
        name: "facetCuts",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "facetAddress",
    outputs: [
      {
        internalType: "address",
        name: "facet",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facetAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "facet",
        type: "address",
      },
    ],
    name: "facetFunctionSelectors",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "selectors",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facets",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondReadable.Facet[]",
        name: "diamondFacets",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFallbackAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nomineeOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fallbackAddress",
        type: "address",
      },
    ],
    name: "setFallbackAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    stateMutability: "pure",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506000620000296200048160201b62000d511760201c565b60408051600c8082526101a08201909252919250600091906020820161018080368337019050509050631f931c1c60e01b816000815181106200007057620000706200103a565b6001600160e01b0319909216602092830291909101820152620000aa9083906307e4c70760e21b9060019062000d75620004a5821b17901c565b637a0ed62760e01b81600181518110620000c857620000c86200103a565b6001600160e01b03199092166020928302919091019091015280516356fe50af60e11b90829060029081106200010257620001026200103a565b6001600160e01b03199092166020928302919091019091015280516314bbdacb60e21b90829060039081106200013c576200013c6200103a565b6001600160e01b03199092166020928302919091019091015280516366ffd66360e11b90829060049081106200017657620001766200103a565b6001600160e01b0319909216602092830291909101820152620001b09083906348e2b09360e01b9060019062000d75620004a5821b17901c565b6301ffc9a760e01b81600581518110620001ce57620001ce6200103a565b6001600160e01b0319909216602092830291909101820152620002089083906301ffc9a760e01b9060019062000d75620004a5821b17901c565b638da5cb5b60e01b816006815181106200022657620002266200103a565b6001600160e01b031990921660209283029190910190910152805163455a8a8560e11b90829060079081106200026057620002606200103a565b6001600160e01b031990921660209283029190910190910152805163f2fde38b60e01b90829060089081106200029a576200029a6200103a565b6001600160e01b03199092166020928302919091019091015280516379ba509760e01b9082906009908110620002d457620002d46200103a565b6001600160e01b03199092166020928302919091018201526200030e9083906307f5828d60e41b9060019062000d75620004a5821b17901c565b632c40805960e01b81600a815181106200032c576200032c6200103a565b6001600160e01b0319909216602092830291909101909101528051639142376560e01b908290600b9081106200036657620003666200103a565b6001600160e01b03199290921660209283029190910190910152604080516001808252818301909252600091816020015b604080516060808201835260008083526020830152918101919091528152602001906001900390816200039757905050604080516060810190915230815290915060208101600081526020018381525081600081518110620003fd57620003fd6200103a565b60200260200101819052506200044a81600060405180602001604052806000815250620004346200053360201b62000dfd1760201c565b6200055760201b62000e2117909392919060201c565b6200047833620004646200078360201b62000ffd1760201c565b620007a760201b620010211790919060201c565b505050620011ec565b7f326d0c59a7612f6a9919e2a8ee333c80ba689d8ba2634de89c85cbb04832e70590565b6001600160e01b03198083169003620005055760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e746572666163652069640000000060448201526064015b60405180910390fd5b6001600160e01b03199190911660009081526020929092526040909120805460ff1916911515919091179055565b7f177481ac65e4292921c69f62d1cc7f57541261e5d61c8175cf4e36a01c9bfc9390565b600184015461ffff811690819060009060071615620005885750600381901c60009081526002870160205260409020545b60005b8651811015620006f1576000878281518110620005ac57620005ac6200103a565b60200260200101519050600081602001519050600082604001515111620006225760405162461bcd60e51b815260206004820152602360248201527f4469616d6f6e64426173653a206e6f2073656c6563746f7273207370656369666044820152621a595960ea1b6064820152608401620004fc565b600081600281111562000639576200063962001050565b0362000668576200065d8585848d620007c460201b6200103e17909392919060201c565b9095509350620006e6565b60018160028111156200067f576200067f62001050565b03620006a5576200069f828b6200099660201b620011f11790919060201c565b620006e6565b6002816002811115620006bc57620006bc62001050565b03620006e657620006e08585848d62000bd760201b620013e917909392919060201c565b90955093505b50506001016200058b565b508282146200070e5760018701805461ffff191661ffff84161790555b60078216156200073157600382901c600090815260028801602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738686866040516200076693929190620010c7565b60405180910390a16200077a858562000ea5565b50505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b81546001600160a01b0319166001600160a01b0391909116179055565b805160009081906001600160a01b03163014806200080057506200080083600001516001600160a01b03166200103460201b620003f31760201c565b6200085a5760405162461bcd60e51b815260206004820152602360248201527f4469616d6f6e64426173653a204144442074617267657420686173206e6f20636044820152626f646560e81b6064820152608401620004fc565b60005b83604001515181101562000989576000846040015182815181106200088657620008866200103a565b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c156200090f5760405162461bcd60e51b815260206004820152602360248201527f4469616d6f6e64426173653a2073656c6563746f7220616c726561647920616460448201526219195960ea1b6064820152608401620004fc565b85516001600160e01b0319838116600081815260208d90526040902060609390931b6001600160601b0319168b1790925560058a901b60e090811692831c91831c199990991617978190036200097957600389901c600090815260028b0160205260408120989098555b505050600195860195016200085d565b5093959294509192505050565b620009b981600001516001600160a01b03166200103460201b620003f31760201c565b62000a175760405162461bcd60e51b815260206004820152602760248201527f4469616d6f6e64426173653a205245504c4143452074617267657420686173206044820152666e6f20636f646560c81b6064820152608401620004fc565b60005b81604001515181101562000bd25760008260400151828151811062000a435762000a436200103a565b6020908102919091018101516001600160e01b03198116600090815291869052604090912054909150606081901c8062000ac05760405162461bcd60e51b815260206004820152601f60248201527f4469616d6f6e64426173653a2073656c6563746f72206e6f7420666f756e64006044820152606401620004fc565b306001600160a01b0382160362000b145760405162461bcd60e51b81526020600482015260226024820152600080516020620031d98339815191526044820152616c6560f01b6064820152608401620004fc565b84600001516001600160a01b0316816001600160a01b03160362000b8c5760405162461bcd60e51b815260206004820152602860248201527f4469616d6f6e64426173653a205245504c41434520746172676574206973206960448201526719195b9d1a58d85b60c21b6064820152608401620004fc565b5083516001600160e01b031992909216600090815260208690526040902060609290921b6001600160601b0319166001600160601b039190911617905560010162000a1a565b505050565b805160009081906001600160a01b03161562000c4e5760405162461bcd60e51b815260206004820152602f60248201527f4469616d6f6e64426173653a2052454d4f564520746172676574206d7573742060448201526e6265207a65726f206164647265737360881b6064820152608401620004fc565b600385901c6007861660005b85604001515181101562000e915760008660400151828151811062000c835762000c836200103a565b6020908102919091018101516001600160e01b031981166000908152918c9052604090912054909150606081901c62000cff5760405162461bcd60e51b815260206004820152601f60248201527f4469616d6f6e64426173653a2073656c6563746f72206e6f7420666f756e64006044820152606401620004fc565b30606082901c0362000d4e5760405162461bcd60e51b81526020600482015260226024820152600080516020620031d98339815191526044820152616c6560f01b6064820152608401620004fc565b600089900362000d7c57600019909401600081815260028c0160205260409020549850936007935062000d84565b600019909301925b600584901b89901b6000806001600160e01b03198084169086161462000dd7576001600160e01b03198316600090815260208f90526040902080546001600160601b0319166001600160601b0386161790555b50506001600160e01b03198316600090815260208d90526040812055611fff600383901c1660e0600584901b1687821462000e3c57600082815260028f016020526040902080546001600160e01b031980841c19909116908516831c17905562000e60565b80836001600160e01b031916901c816001600160e01b031960001b901c198d16179b505b8660000362000e7f57600088815260028f01602052604081208190559b505b50506001909301925062000c5a915050565b5060039190911b1796939550929350505050565b8051156001600160a01b038316151462000f195760405162461bcd60e51b815260206004820152602e60248201527f4469616d6f6e64426173653a20696e76616c696420696e697469616c697a617460448201526d696f6e20706172616d657465727360901b6064820152608401620004fc565b6001600160a01b0382161562001030576001600160a01b038216301462000fbe5762000f59826001600160a01b03166200103460201b620003f31760201c565b62000fbe5760405162461bcd60e51b815260206004820152602e60248201527f4469616d6f6e64426173653a20696e697469616c697a6174696f6e207461726760448201526d657420686173206e6f20636f646560901b6064820152608401620004fc565b6000826001600160a01b03168260405162000fda9190620011ce565b600060405180830381855af49150503d806000811462001017576040519150601f19603f3d011682016040523d82523d6000602084013e6200101c565b606091505b505090508062000bd2573d6000803e3d6000fd5b5050565b3b151590565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b60005b838110156200108357818101518382015260200162001069565b8381111562001093576000848401525b50505050565b60008151808452620010b381602086016020860162001066565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b848110156200119c57898403607f19018652815180516001600160a01b031685528381015189860190600381106200113857634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015620011865783516001600160e01b03191682529286019260019290920191908601906200115a565b50978501979550505090820190600101620010f0565b50506001600160a01b038a16908801528681036040880152620011c0818962001099565b9a9950505050505050505050565b60008251620011e281846020870162001066565b9190910192915050565b611fdd80620011fc6000396000f3fe6080604052600436106100c65760003560e01c80637a0ed6271161007f578063914237651161005957806391423765146102a3578063adfca15e146102c3578063cdffacc6146102f0578063f2fde38b14610310576100cd565b80637a0ed627146102575780638ab5150a146102795780638da5cb5b1461028e576100cd565b806301ffc9a71461016a5780631f931c1c1461019f5780632c408059146101bf57806352ef6b2c146101ec57806354fd4d501461020e57806379ba509714610242576100cd565b366100cd57005b60006100d7610330565b90506001600160a01b0381163b6101445760405162461bcd60e51b815260206004820152602660248201527f50726f78793a20696d706c656d656e746174696f6e206d75737420626520636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b3660008037600080366000845af43d6000803e808015610163573d6000f35b3d6000fd5b005b34801561017657600080fd5b5061018a6101853660046118ff565b6103f9565b60405190151581526020015b60405180910390f35b3480156101ab57600080fd5b506101686101ba36600461197a565b61042e565b3480156101cb57600080fd5b506101d46104bb565b6040516001600160a01b039091168152602001610196565b3480156101f857600080fd5b506102016104d7565b6040516101969190611a2c565b34801561021a57600080fd5b506040805180820182526005815264302e302e3160d81b602082015290516101969190611ad5565b34801561024e57600080fd5b5061016861067a565b34801561026357600080fd5b5061026c6106fe565b6040516101969190611b2d565b34801561028557600080fd5b506101d4610b26565b34801561029a57600080fd5b506101d4610b35565b3480156102af57600080fd5b506101686102be366004611baa565b610b3f565b3480156102cf57600080fd5b506102e36102de366004611baa565b610b9c565b6040516101969190611bc5565b3480156102fc57600080fd5b506101d461030b3660046118ff565b610ce8565b34801561031c57600080fd5b5061016861032b366004611baa565b610d15565b600080356001600160e01b03191681527f177481ac65e4292921c69f62d1cc7f57541261e5d61c8175cf4e36a01c9bfc9360208190526040822054819060601c806103ec575060038201546001600160a01b0316806103ec5760405162461bcd60e51b815260206004820152603260248201527f4469616d6f6e64426173653a206e6f20666163657420666f756e6420666f722060448201527166756e6374696f6e207369676e617475726560701b606482015260840161013b565b9392505050565b3b151590565b600061042882610407610d51565b906001600160e01b0319166000908152602091909152604090205460ff1690565b92915050565b610436610ffd565b546001600160a01b0316331461045e5760405162461bcd60e51b815260040161013b90611c07565b6104b461046b8587611cd2565b8484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506104ac9250610dfd915050565b929190610e21565b5050505050565b60006104c5610dfd565b600301546001600160a01b0316919050565b606060006104e3610dfd565b600181015490915061ffff1667ffffffffffffffff81111561050757610507611c3e565b604051908082528060200260200182016040528015610530578160200160208202803683370190505b50915060008060005b600184015461ffff16821015610672576000818152600285016020526040812054905b600881101561065d578361056f81611e1c565b600188015490955061ffff168511905061065d57600581901b82901b6001600160e01b0319811660009081526020889052604081205460601c90805b88811015610600578a81815181106105c5576105c5611e35565b60200260200101516001600160a01b0316836001600160a01b0316036105ee5760019150610600565b806105f881611e1c565b9150506105ab565b50801561060f5750505061064b565b818a898151811061062257610622611e35565b6001600160a01b03909216602092830291909101909101528761064481611e1c565b9850505050505b8061065581611e1c565b91505061055c565b5050808061066a90611e1c565b915050610539565b505082525090565b610682611681565b6001600160a01b0316336001600160a01b0316146106f45760405162461bcd60e51b815260206004820152602960248201527f536166654f776e61626c653a2073656e646572206d757374206265206e6f6d696044820152683732b29037bbb732b960b91b606482015260840161013b565b6106fc6116b4565b565b6060600061070a610dfd565b600181015490915061ffff1667ffffffffffffffff81111561072e5761072e611c3e565b60405190808252806020026020018201604052801561077457816020015b60408051808201909152600081526060602082015281526020019060019003908161074c5790505b50600182015490925060009061ffff1667ffffffffffffffff81111561079c5761079c611c3e565b6040519080825280602002602001820160405280156107c5578160200160208202803683370190505b50905060008060005b600185015461ffff16821015610ab4576000818152600286016020526040812054905b6008811015610a9f578361080481611e1c565b600189015490955061ffff1685119050610a9f57600581901b82901b6001600160e01b0319811660009081526020899052604081205460601c90805b8881101561095d57826001600160a01b03168c828151811061086457610864611e35565b6020026020010151600001516001600160a01b03160361094b57838c828151811061089157610891611e35565b6020026020010151602001518b83815181106108af576108af611e35565b602002602001015160ff16815181106108ca576108ca611e35565b60200260200101906001600160e01b03191690816001600160e01b0319168152505060ff8a828151811061090057610900611e35565b602002602001015160ff161061091557600080fd5b89818151811061092757610927611e35565b60200260200101805180919061093c90611e4b565b60ff169052506001915061095d565b8061095581611e1c565b915050610840565b50801561096c57505050610a8d565b818b898151811061097f5761097f611e35565b60209081029190910101516001600160a01b03909116905260018a015461ffff1667ffffffffffffffff8111156109b8576109b8611c3e565b6040519080825280602002602001820160405280156109e1578160200160208202803683370190505b508b89815181106109f4576109f4611e35565b602002602001015160200181905250828b8981518110610a1657610a16611e35565b602002602001015160200151600081518110610a3457610a34611e35565b60200260200101906001600160e01b03191690816001600160e01b031916815250506001898981518110610a6a57610a6a611e35565b60ff9092166020928302919091019091015287610a8681611e1c565b9850505050505b80610a9781611e1c565b9150506107f1565b50508080610aac90611e1c565b9150506107ce565b5060005b82811015610b1b576000848281518110610ad457610ad4611e35565b602002602001015160ff1690506000878381518110610af557610af5611e35565b602002602001015160200151905081815250508080610b1390611e1c565b915050610ab8565b508185525050505090565b6000610b30611681565b905090565b6000610b30611731565b610b47610ffd565b546001600160a01b03163314610b6f5760405162461bcd60e51b815260040161013b90611c07565b80610b78610dfd565b60030180546001600160a01b0319166001600160a01b039290921691909117905550565b60606000610ba8610dfd565b600181015490915061ffff1667ffffffffffffffff811115610bcc57610bcc611c3e565b604051908082528060200260200182016040528015610bf5578160200160208202803683370190505b50915060008060005b600184015461ffff16821015610cde576000818152600285016020526040812054905b6008811015610cc95783610c3481611e1c565b600188015490955061ffff1685119050610cc957600581901b82901b6001600160e01b0319811660009081526020889052604090205460601c6001600160a01b038a1603610cb65780888781518110610c8f57610c8f611e35565b6001600160e01b03199092166020928302919091019091015285610cb281611e1c565b9650505b5080610cc181611e1c565b915050610c21565b50508080610cd690611e1c565b915050610bfe565b5050825250919050565b6000610cf2610dfd565b6001600160e01b0319909216600090815260209290925250604090205460601c90565b610d1d610ffd565b546001600160a01b03163314610d455760405162461bcd60e51b815260040161013b90611c07565b610d4e8161173b565b50565b7f326d0c59a7612f6a9919e2a8ee333c80ba689d8ba2634de89c85cbb04832e70590565b6001600160e01b03198083169003610dcf5760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015260640161013b565b6001600160e01b03199190911660009081526020929092526040909120805460ff1916911515919091179055565b7f177481ac65e4292921c69f62d1cc7f57541261e5d61c8175cf4e36a01c9bfc9390565b600184015461ffff811690819060009060071615610e515750600381901c60009081526002870160205260409020545b60005b8651811015610f71576000878281518110610e7157610e71611e35565b60200260200101519050600081602001519050600082604001515111610ee55760405162461bcd60e51b815260206004820152602360248201527f4469616d6f6e64426173653a206e6f2073656c6563746f7273207370656369666044820152621a595960ea1b606482015260840161013b565b6000816002811115610ef957610ef9611e6a565b03610f1457610f0a8a86868561103e565b9095509350610f67565b6001816002811115610f2857610f28611e6a565b03610f3c57610f378a836111f1565b610f67565b6002816002811115610f5057610f50611e6a565b03610f6757610f618a8686856113e9565b90955093505b5050600101610e54565b50828214610f8d5760018701805461ffff191661ffff84161790555b6007821615610faf57600382901c600090815260028801602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673868686604051610fe293929190611e80565b60405180910390a1610ff48585611744565b50505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b81546001600160a01b0319166001600160a01b0391909116179055565b805160009081906001600160a01b0316301480611065575082516001600160a01b03163b15155b6110bd5760405162461bcd60e51b815260206004820152602360248201527f4469616d6f6e64426173653a204144442074617267657420686173206e6f20636044820152626f646560e81b606482015260840161013b565b60005b8360400151518110156111e4576000846040015182815181106110e5576110e5611e35565b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c1561116c5760405162461bcd60e51b815260206004820152602360248201527f4469616d6f6e64426173653a2073656c6563746f7220616c726561647920616460448201526219195960ea1b606482015260840161013b565b85516001600160e01b0319838116600081815260208d90526040902060609390931b6001600160601b0319168b1790925560058a901b60e090811692831c91831c199990991617978190036111d557600389901c600090815260028b0160205260408120989098555b505050600195860195016110c0565b5093959294509192505050565b80516001600160a01b03163b6112595760405162461bcd60e51b815260206004820152602760248201527f4469616d6f6e64426173653a205245504c4143452074617267657420686173206044820152666e6f20636f646560c81b606482015260840161013b565b60005b8160400151518110156113e45760008260400151828151811061128157611281611e35565b6020908102919091018101516001600160e01b03198116600090815291869052604090912054909150606081901c806112fc5760405162461bcd60e51b815260206004820152601f60248201527f4469616d6f6e64426173653a2073656c6563746f72206e6f7420666f756e6400604482015260640161013b565b306001600160a01b038216036113245760405162461bcd60e51b815260040161013b90611f49565b84600001516001600160a01b0316816001600160a01b03160361139a5760405162461bcd60e51b815260206004820152602860248201527f4469616d6f6e64426173653a205245504c41434520746172676574206973206960448201526719195b9d1a58d85b60c21b606482015260840161013b565b5083516001600160e01b031992909216600090815260208690526040902060609290921b6001600160601b0319166bffffffffffffffffffffffff9190911617905560010161125c565b505050565b805160009081906001600160a01b03161561145e5760405162461bcd60e51b815260206004820152602f60248201527f4469616d6f6e64426173653a2052454d4f564520746172676574206d7573742060448201526e6265207a65726f206164647265737360881b606482015260840161013b565b600385901c6007861660005b85604001515181101561166d5760008660400151828151811061148f5761148f611e35565b6020908102919091018101516001600160e01b031981166000908152918c9052604090912054909150606081901c6115095760405162461bcd60e51b815260206004820152601f60248201527f4469616d6f6e64426173653a2073656c6563746f72206e6f7420666f756e6400604482015260640161013b565b30606082901c0361152c5760405162461bcd60e51b815260040161013b90611f49565b600089900361155857600019909401600081815260028c01602052604090205498509360079350611560565b600019909301925b600584901b89901b6000806001600160e01b0319808416908616146115b7576001600160e01b03198316600090815260208f90526040902080546001600160601b0319166bffffffffffffffffffffffff86161790555b50506001600160e01b03198316600090815260208d90526040812055611fff600383901c1660e0600584901b1687821461161a57600082815260028f016020526040902080546001600160e01b031980841c19909116908516831c17905561163e565b80836001600160e01b031916901c816001600160e01b031960001b901c198d16179b505b8660000361165c57600088815260028f01602052604081208190559b505b50506001909301925061146a915050565b5060039190911b1796939550929350505050565b60007f24aa1f7b31fd188a8d3ecfb06bc55c806040e59b03bd4396283442fce66178905b546001600160a01b0316919050565b60006116be610ffd565b805460405191925033916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36117048133611021565b610d4e60007f24aa1f7b31fd188a8d3ecfb06bc55c806040e59b03bd4396283442fce66178905b90611021565b60006116a5610ffd565b610d4e816118b4565b8051156001600160a01b03831615146117b65760405162461bcd60e51b815260206004820152602e60248201527f4469616d6f6e64426173653a20696e76616c696420696e697469616c697a617460448201526d696f6e20706172616d657465727360901b606482015260840161013b565b6001600160a01b038216156118b0576001600160a01b0382163014611843576001600160a01b0382163b6118435760405162461bcd60e51b815260206004820152602e60248201527f4469616d6f6e64426173653a20696e697469616c697a6174696f6e207461726760448201526d657420686173206e6f20636f646560901b606482015260840161013b565b6000826001600160a01b03168260405161185d9190611f8b565b600060405180830381855af49150503d8060008114611898576040519150601f19603f3d011682016040523d82523d6000602084013e61189d565b606091505b50509050806113e4573d6000803e3d6000fd5b5050565b610d4e81610d4e817f24aa1f7b31fd188a8d3ecfb06bc55c806040e59b03bd4396283442fce661789061172b565b80356001600160e01b0319811681146118fa57600080fd5b919050565b60006020828403121561191157600080fd5b6103ec826118e2565b80356001600160a01b03811681146118fa57600080fd5b60008083601f84011261194357600080fd5b50813567ffffffffffffffff81111561195b57600080fd5b60208301915083602082850101111561197357600080fd5b9250929050565b60008060008060006060868803121561199257600080fd5b853567ffffffffffffffff808211156119aa57600080fd5b818801915088601f8301126119be57600080fd5b8135818111156119cd57600080fd5b8960208260051b85010111156119e257600080fd5b602083019750809650506119f86020890161191a565b94506040880135915080821115611a0e57600080fd5b50611a1b88828901611931565b969995985093965092949392505050565b6020808252825182820181905260009190848201906040850190845b81811015611a6d5783516001600160a01b031683529284019291840191600101611a48565b50909695505050505050565b60005b83811015611a94578181015183820152602001611a7c565b83811115611aa3576000848401525b50505050565b60008151808452611ac1816020860160208601611a79565b601f01601f19169290920160200192915050565b6020815260006103ec6020830184611aa9565b600081518084526020808501945080840160005b83811015611b225781516001600160e01b03191687529582019590820190600101611afc565b509495945050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015611b9c57888303603f19018552815180516001600160a01b03168452870151878401879052611b8987850182611ae8565b9588019593505090860190600101611b54565b509098975050505050505050565b600060208284031215611bbc57600080fd5b6103ec8261191a565b6020808252825182820181905260009190848201906040850190845b81811015611a6d5783516001600160e01b03191683529284019291840191600101611be1565b6020808252601d908201527f4f776e61626c653a2073656e646572206d757374206265206f776e6572000000604082015260600190565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715611c7757611c77611c3e565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611ca657611ca6611c3e565b604052919050565b600067ffffffffffffffff821115611cc857611cc8611c3e565b5060051b60200190565b6000611ce5611ce084611cae565b611c7d565b83815260208082019190600586811b860136811115611d0357600080fd5b865b81811015611df957803567ffffffffffffffff80821115611d265760008081fd5b818a01915060608236031215611d3c5760008081fd5b611d44611c54565b611d4d8361191a565b81528683013560038110611d615760008081fd5b8188015260408381013583811115611d795760008081fd5b939093019236601f850112611d9057600092508283fd5b83359250611da0611ce084611cae565b83815292871b84018801928881019036851115611dbd5760008081fd5b948901945b84861015611de257611dd3866118e2565b82529489019490890190611dc2565b918301919091525088525050948301948301611d05565b5092979650505050505050565b634e487b7160e01b600052601160045260246000fd5b600060018201611e2e57611e2e611e06565b5060010190565b634e487b7160e01b600052603260045260246000fd5b600060ff821660ff8103611e6157611e61611e06565b60010192915050565b634e487b7160e01b600052602160045260246000fd5b6000606080830181845280875180835260808601915060808160051b87010192506020808a016000805b84811015611f1957898703607f19018652825180516001600160a01b031688528481015160038110611eea57634e487b7160e01b84526021600452602484fd5b88860152604090810151908801899052611f0689890182611ae8565b9750509483019491830191600101611eaa565b5050506001600160a01b0389169087015250508381036040850152611f3e8186611aa9565b979650505050505050565b60208082526022908201527f4469616d6f6e64426173653a2073656c6563746f7220697320696d6d757461626040820152616c6560f01b606082015260800190565b60008251611f9d818460208701611a79565b919091019291505056fea2646970667358221220a5e98468040f652aef8f46ccd91ae306c697a6f976a7d329b3bdc5a0b447922c64736f6c634300080e00334469616d6f6e64426173653a2073656c6563746f7220697320696d6d75746162";

type WalletFactoryDiamondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletFactoryDiamondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WalletFactoryDiamond__factory extends ContractFactory {
  constructor(...args: WalletFactoryDiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WalletFactoryDiamond> {
    return super.deploy(overrides || {}) as Promise<WalletFactoryDiamond>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WalletFactoryDiamond {
    return super.attach(address) as WalletFactoryDiamond;
  }
  override connect(signer: Signer): WalletFactoryDiamond__factory {
    return super.connect(signer) as WalletFactoryDiamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletFactoryDiamondInterface {
    return new utils.Interface(_abi) as WalletFactoryDiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WalletFactoryDiamond {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WalletFactoryDiamond;
  }
}
