const {Web3} = require('web3');
const rpcUrl1 = "https://rpc-mumbai.maticvigil.com/v1/7171647c28facff89c15155ce3db62c42ce08c63";
const web3 = new Web3(rpcUrl1); // RPC URL сети Polygon Mainnet
const senderAddress = '0xa3978bad398fB164F55EF6464A46d784c9B68C07';
const privateKeySender = "3a12fdab87676611c31cbb3b7ca04a58b92be667cc5c1c67ba0c59506abd1fd0";
const recipientAddress = '0x2495AeD3Da4d85Aa1853F2D49e08F30407Aa9D4a';
const tokenAddress = '0xC7A3438C48FE84c03dD9EF054Fa1Ce88F3d5244D'; // Адрес контракта ERC-20 токена
const tokenAmount = '1000000000000000000'; // Сумма в wei (1 ERC-20 токен в этом примере)

const Tx = require('ethereumjs-tx').Transaction;

// const {ethers} = require("ethers");

const chainId = 80001; // Chain ID сети Polygon Mainnet

(async () => {
    const tx = {
        to: tokenAddress,
        value: 0,
        data: web3.utils.toHex(web3.eth.abi.encodeFunctionCall({
          to: tokenAddress,
          functionName: 'transfer',
          args: [recipientAddress, tokenAmount]
        })),
        gasLimit: 200000,
        chainId: chainId
      };
      
      const signedTx = await web3.eth.accounts.signTransaction(tx, privateKeySender);
      await web3.eth.sendTransaction(signedTx);
      
})();


// (async () => {
//     const abi = [
//       // Read-Only Functions
//       "function balanceOf(address owner) view returns (uint256)",
//       "function decimals() view returns (uint8)",
//       "function symbol() view returns (string)",
  
//       // Authenticated Functions
//       "function transfer(address to, uint amount) returns (bool)",
  
//       // Events
//       "event Transfer(address indexed from, address indexed to, uint amount)",
//     ];
  
//     const stc0 = "0xC7A3438C48FE84c03dD9EF054Fa1Ce88F3d5244D"; // Адрес контракта ERC-20 токена STC0 на Polygon Mumbai Testnet
//     const stc0Decimals = 18; // Количество десятичных знаков STC0
  
//     const provider = new ethers.providers.JsonRpcProvider(rpcUrl1);
//     const wallet = new ethers.Wallet(privateKeySender, provider);
//     const erc20_rw = new ethers.Contract(stc0, abi, wallet);
  
//     const amount = ethers.utils.parseUnits("0.1", stc0Decimals);
//     const gasLimit = 200000; // Установите лимит газа на ваше усмотрение
  
//     const tx = {
//       to: stc0,
//       value: ethers.constants.Zero, // Устанавливаем значение в 0, так как это транзакция ERC-20
//       data: erc20_rw.interface.encodeFunctionData("transfer", [recipientAddress, amount]),
//       gasLimit: gasLimit, // Указываем лимит газа вручную
//     };
  
//     const signedTx = await wallet.signTransaction(tx);
//     const txResponse = await provider.sendTransaction(signedTx);
//     console.log("Транзакция отправлена, ожидается подтверждение. Хеш транзакции:", txResponse.hash);
  
//     await txResponse.wait();
  
//     console.log(
//       "Баланс получателя:",
//       ethers.utils.formatUnits(await erc20_rw.balanceOf(recipientAddress), stc0Decimals)
//     );
//   })();