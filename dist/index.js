"use strict";
const baseConfig = require("./configs/base");
const importConfig = require("./configs/import");
const standardConfig = require("./configs/standard");
const configs = {
    base: baseConfig,
    import: importConfig,
    standard: standardConfig,
};
module.exports = { configs };
