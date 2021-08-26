import type { TSESLint } from "@typescript-eslint/experimental-utils";
import baseConfig = require("./configs/base");
import importConfig = require("./configs/import");
import standardConfig = require("./configs/standard");

const configs: Record<string, TSESLint.Linter.Config> = {
    base: baseConfig,
    import: importConfig,
    standard: standardConfig,
};

export = { configs };
