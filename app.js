const wallet1PublicKey = "0xa3978bad398fB164F55EF6464A46d784c9B68C07";
const wallet1PrivateKey = "3a12fdab87676611c31cbb3b7ca04a58b92be667cc5c1c67ba0c59506abd1fd0";
const wallet2PublicKey = "0x2495AeD3Da4d85Aa1853F2D49e08F30407Aa9D4a";
const wallet2PrivateKey = "667305b916fa50a32dfeef453c546ec18016e54b1f0b00c2a455ded600e6e448";
const value = "3";

hash = "0x44a17d6f62af62941ee05ddd3a535e477dd9cf47f6aa7e4fa14ee4c40f2d7858";

// // Setup: npm install alchemy-sdk
// const { Network, Alchemy, Wallet, Utils } = require("alchemy-sdk");
// const dotenv = require("dotenv");
// dotenv.config();

const { ethers } = require("ethers");
const { Web3 } = require("web3");

var web3 = new Web3(Web3.givenProvider);

// // Optional Config object, but defaults to demo api-key and eth-mainnet.
// const settings = {
//   apiKey: "X5rSiZ6bQEJtxqGT26EtqkeR0i9UMs-o", // Replace with your Alchemy API Key.
//   network: Network.MATIC_MUMBAI, // Replace with your network.
// };

// const alchemy = new Alchemy(settings);
// const wallet = new Wallet(wallet1PrivateKey);

async function main() {

    console.log("--------------------------------------------------------------------------------------------------------------");

    console.log(web3.providers);

    // const randomWallet = ethers.Wallet.createRandom();
    // console.log("address: " + randomWallet.address);
    // console.log("mnemonic computeSeed: " + randomWallet.mnemonic.computeSeed);
    // console.log("mnemonic entropy: " + randomWallet.mnemonic.entropy);
    // console.log("mnemonic password: " + randomWallet.mnemonic.password);
    // console.log("mnemonic phrase: " + randomWallet.mnemonic.phrase);
    // console.log("mnemonic wordlist: " + randomWallet.mnemonic.wordlist.join);
    // console.log("privateKey: " + randomWallet.privateKey);
    // console.log("chain code: " + randomWallet.chainCode);
    // console.log("signing key: " + randomWallet.signingKey);

    // const tokenBalances1Before = await alchemy.core.getTokenBalances(wallet1PublicKey);
    // const tokenBalances2Before = await alchemy.core.getTokenBalances(wallet2PublicKey);

    // console.log("\n");
    // console.log("First wallet balances before:");
    // console.log(tokenBalances1Before);
    // console.log("\n");
    
    // console.log("Second wallet balances before:");
    // console.log(tokenBalances2Before);
    // console.log("\n");

    // try{
    //     const transaction = {
    //         to: wallet2PublicKey,
    //         value: value,
    //         gasLimit: "27",
    //         maxPriorityFeePerGas: Utils.parseUnits("10", "gwei"),
    //         maxFeePerGas: Utils.parseUnits("10", "gwei"),
    //         nonce: await alchemy.core.getTransactionCount(wallet.getAddress()),
    //         type: 2,
    //         chainId: 80001,
    //     };
    //     const rawTransaction = await wallet.signTransaction(transaction);
    //     const response = await alchemy.transact.sendTransaction(rawTransaction);
        
    //     console.log("Api response:");
    //     console.log(response);
    //     console.log("\n");
    // }
    // catch (err){
    //     console.log("Error while doing request: " + err);
    // }

    // const tokenBalances1After = await alchemy.core.getTokenBalances(wallet1PublicKey);
    // const tokenBalances2After = await alchemy.core.getTokenBalances(wallet2PublicKey);
    
    // console.log("\n");
    // console.log("First wallet balances after:");
    // console.log(tokenBalances1After);
    // console.log("\n");
    
    // console.log("Second wallet balances after:");
    // console.log(tokenBalances2After);
    // console.log("\n");
}

main();