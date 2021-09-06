const { getMappingConfig } = require("../../util");

const baseEndpoint = "https://api.profitwell.com";

const ConfigCategory = {
  IDENTIFY_CREATE: {
    name: "CreateSubscription",
    action: "identify"
  },
  IDENTIFY_UPDATE: {
    name: "UpdateSubscription",
    action: "identify"
  }
};
const mappingConfig = getMappingConfig(ConfigCategory, __dirname);
module.exports = { ConfigCategory, mappingConfig, baseEndpoint };