import type { TSESLint } from "@typescript-eslint/experimental-utils";
import baseConfig = require("./configs/base");
import importConfig = require("./configs/import");

const configs: Record<string, TSESLint.Linter.Config> = {
    base: baseConfig,
    import: importConfig,
};

export = { configs };
