module.exports = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD_KEY,
  database: process.env.DATABASE,
  dbHost: process.env.DB_HOST,
  hederaApi: process.env.HEDERA_NODE_API,
  treasuryAccountId: process.env.TREASURY_ACCOUNT_ID,
  treasuryPrivateKey: process.env.TREASURY_PRIVATE_KEY,
  apiAccessKey: process.env.API_ACCESS_KEY,
  encryptionKey: process.env.ENCRYPTION_KEY,
  runTestNet: process.env.RUN_TESTNET,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};
