const rpcUrl1 = "https://rpc-mumbai.maticvigil.com/v1/7171647c28facff89c15155ce3db62c42ce08c63";
const rpcUrl2 = "https://wispy-frosty-frost.matic-testnet.quiknode.pro/3c9aa4c3fc7df23fd4d932ce7f57c6e2681b6bec/";

const {Web3} = require('web3');
const web3 = new Web3(rpcUrl1);

const walletAddress = "0xa3978bad398fB164F55EF6464A46d784c9B68C07";
const privateKeySender = "3a12fdab87676611c31cbb3b7ca04a58b92be667cc5c1c67ba0c59506abd1fd0";

const Tx = require('ethereumjs-tx').Transaction;

const senderAddress = '0xa3978bad398fB164F55EF6464A46d784c9B68C07';
const recipientAddress = '0x2495AeD3Da4d85Aa1853F2D49e08F30407Aa9D4a';
const amountInWei = web3.utils.toWei('0.1', 'ether'); // Здесь указываем сумму для отправки в wei
const gasPriceInWei = web3.utils.toWei('10', 'gwei'); // Газовая цена в wei
const gasLimit = 21000; // Лимит газа

// web3.eth.signTransaction({
//     from: senderAddress,
//     gasPrice: gasPriceInWei,
//     gas: gasLimit,
//     to: recipientAddress,
//     value: amountInWei,
//     data: ""
// }).then(console.log);

const sendMatic = async () => {
    try {
      const nonce = await web3.eth.getTransactionCount(senderAddress, 'pending');
  
      const tx = {
        nonce: web3.utils.toHex(nonce),
        gasPrice: web3.utils.toHex(gasPriceInWei),
        gas: web3.utils.toHex(gasLimit),
        to: recipientAddress,
        value: web3.utils.toHex(amountInWei),
        data: '0x',  // Для отправки MATIC не нужен дополнительный data
      };
  
      const signedTx = await web3.eth.accounts.signTransaction(tx, privateKeySender);
  
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  
      console.log('Транзакция успешно отправлена. Хеш транзакции:', receipt.transactionHash);
    } catch (error) {
      console.error('Произошла ошибка при отправке транзакции:', error);
    }
  };
  
  sendMatic();

web3.eth.getTransactionCount(senderAddress, 'pending', (err, nonce) => {
    if (err) {
      console.error('Ошибка при получении nonce:', err);
      return;
    }
  
    // Создайте объект транзакции
    const txParams = {
      nonce: web3.utils.toHex(nonce),
      to: recipientAddress,
      value: web3.utils.toHex(amountInWei),
      gasPrice: web3.utils.toHex(gasPriceInWei),
      gasLimit: web3.utils.toHex(gasLimit),
    };
  
    // Создайте экземпляр транзакции
    const tx = new Tx(txParams, { chain: 'matic' });
  
    // Подпишите транзакцию с помощью приватного ключа отправителя
    const privateKeySenderBuffer = Buffer.from(privateKeySender, 'hex');
    tx.sign(privateKeySenderBuffer);
  
    // Получите сериализованный объект транзакции
    const serializedTx = tx.serialize();
  
    // Отправьте транзакцию
    web3.eth.sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
    .on('transactionHash', (hash) => {
        console.log('Хеш транзакции:', hash);
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        if (confirmationNumber === 1) {
        console.log('Транзакция успешно подтверждена.');
        }
    })
    .on('error', (err) => {
        console.error('Ошибка при отправке транзакции:', err);
    });
  });



// web3.eth.getBalance(walletAddress)
//   .then(balanceInWei => {
//     const balanceInMatic = web3.utils.fromWei(balanceInWei, 'wei');
//     console.log(`Баланс кошелька ${walletAddress} составляет ${balanceInMatic} MATIC`);
//   })
//   .catch(err => {
//     console.error('Произошла ошибка при получении баланса:', err);
//   });

// // using the promise
// web3.eth.sendTransaction({
//     from: '0xa3978bad398fB164F55EF6464A46d784c9B68C07',
//     to: '0x2495AeD3Da4d85Aa1853F2D49e08F30407Aa9D4a',
//     value: '1',
//     gas: '21000',
//     gasPrice: '21000',
// })
// .then(function(receipt){
//     console.log(receipt);
// });