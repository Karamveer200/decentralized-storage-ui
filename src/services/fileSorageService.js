require('dotenv').config();

const Web3 = require('web3');
const axios = require('axios');
const configurations = require('../../config');

const contractAddress = configurations.contractAddress;
console.log('configurations ABI - ', configurations.contractAbi);
const contractABI = configurations.contractAbi;

const ethereumNodeEndpoint = 'http://localhost:8545';

const web3 = new Web3(new Web3.providers.HttpProvider(ethereumNodeEndpoint));
const contract = new web3.eth.Contract(contractABI, contractAddress);

const getAvailableStorage = async () => {
  const availableStorage = await contract.methods.availableStorage().call();
  console.log('Available Storage:', availableStorage);
};

const storeFile = async (fileName, fileContent) => {
  const accounts = await web3.eth.getAccounts();

  const ownerAddress = 'OWNER_ADDRESS';

  web3.eth.defaultAccount = ownerAddress;
  const gasEstimate = await contract.methods.storeFile(fileName, fileContent).estimateGas();

  const tx = await contract.methods.storeFile(fileName, fileContent).send({
    from: ownerAddress,
    gas: gasEstimate,
  });

  console.log('File stored. Transaction Hash:', tx.transactionHash);
};

const retrieveFile = async (fileName) => {
  const fileContent = await contract.methods.retrieveFile(fileName).call();
  console.log('File Content:', fileContent);
};

const deleteFile = async (fileName) => {
  const accounts = await web3.eth.getAccounts();

  const ownerAddress = 'OWNER_ADDRESS';

  web3.eth.defaultAccount = ownerAddress;
  const gasEstimate = await contract.methods.deleteFile(fileName).estimateGas();

  const tx = await contract.methods.deleteFile(fileName).send({
    from: ownerAddress,
    gas: gasEstimate,
  });

  console.log('File deleted. Transaction Hash:', tx.transactionHash);
};

// getAvailableStorage();
// storeFile('example.txt', 'Hello, this is the content of the file!');
// retrieveFile('example.txt');
// deleteFile('example.txt');
