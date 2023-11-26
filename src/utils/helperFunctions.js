require('dotenv').config();
const configurations = require('../../config');

const getDynamicEnv = async (key) => {
  if (configurations.NODE_ENV === NODE_ENVS.development) {
    return key;
  } else {
    return await secretManager.getSecretValue(key);
  }
};

const isEmptyArray = (input = []) => {
  return Array.isArray(input) && input?.length > 0 ? false : true;
};

module.exports = {};
