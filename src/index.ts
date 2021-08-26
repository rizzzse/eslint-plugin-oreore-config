import type { TSESLint } from "@typescript-eslint/experimental-utils";
import importConfig = require("./configs/import");

const configs: Record<string, TSESLint.Linter.Config> = {
    import: importConfig,
};

export = { configs };
