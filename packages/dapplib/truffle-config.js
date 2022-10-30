require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name raise night huge gloom kitchen metal gaze'; 
let testAccounts = [
"0xe8dad98631f9adfada05b76bf4cae755d15ca58d3afcd3a1f0d5230728e46efd",
"0xf1ca31509b7a9435234d2f42092f12ba50578fb37d1c67a372029836ac1925c6",
"0x59b9375b4ae1368772211fed7c62b91ecd5c51394a1ce4dac1ed6a806302fdd4",
"0x261db67c41d16e587c960bf7bc2a76912e4ae975f3990c1ff4dfb72b83ec7d42",
"0xdbeaf501b708e5aa4a846c3b5b751c9953bec11add1861da31c6508a47089f59",
"0x8cb4baa9e61eb01392d9a3e04920d844b65ea1d02242adacb8084ebe1547cfa9",
"0x7d16e49a84aa29dd4f8f7427ee1e60dd684eeaa1db0c88d3d60c749e7527dc8f",
"0x90a827e93a8769800293fa66970901da3c5ab8546ec5f9156d044421666941e0",
"0xb383dc9293c0793dfa125b872fa1930c25d140407fa38179743016c07ca6ac55",
"0xa7dedea4ba2d07cc1b4d070c411689bf45db6e9228a4dafa445b349331e9117b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

