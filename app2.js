const { Web3 } = require("web3");

var web3 = new Web3("https://wispy-frosty-frost.matic-testnet.quiknode.pro/3c9aa4c3fc7df23fd4d932ce7f57c6e2681b6bec/");

console.log(web3.wallet.create());

// console.log(web3.currentProvider);

// web3.eth.sendTransaction({
//     from: '0xa3978bad398fB164F55EF6464A46d784c9B68C07',
//     to: '0x2495AeD3Da4d85Aa1853F2D49e08F30407Aa9D4a',
//     value: '1'
// })
// .then(function(receipt){
//     console.log(receipt);
// })