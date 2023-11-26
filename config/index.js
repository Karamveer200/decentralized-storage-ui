require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const env = process.env.NODE_ENV;
console.log(`Node environment set to - ${env}`);

module.exports = Object.freeze({
  contractAddress: process.env.CONTRACT_ADDRESS,
  contractAbi: process.env.CONTRACT_ABI,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
});
