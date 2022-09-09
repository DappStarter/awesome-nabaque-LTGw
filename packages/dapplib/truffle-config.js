require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note ridge clump gesture merry flock gift'; 
let testAccounts = [
"0xfec1091b708540899fc1f18d724c9b1dec50eb370bad3d38825950632c228293",
"0x91c97142bf072a457eb9574230d21ddfc0f5495de01af9228befde9e415fdc7e",
"0x24f7ee1fb4ee598b1405b685f92cdc6e9442865b41edde6610b30f4d2a9c3288",
"0xbad77c82fba247dcf96876edce90632b63d77f443cb2f32424d247c196235060",
"0x6a48e0150b3a945ad10fc792e2de3e22eaee1210c853b74bbad15e72543c54ff",
"0xd943141aa4c2d81f40eb5299b48012561de8b0a0494300385bba5803b97cec37",
"0x9842de62868afae20f56b3b7e3c6279af89692079f35083b4e1b273e82b0d85f",
"0x098428493d1e709044f7e65e06feb020b1b577a87c698d2f377dbf0201b11575",
"0xb08816449ecc590f77581d2112bcdef447a065c4ab549ae0571b333629f67437",
"0xe1e71d40e0b6f5347e75ffb09b9069969fe9a43775d832e8a8fc236cd1fe35f7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


