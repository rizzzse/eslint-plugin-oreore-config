import type { TSESLint } from "@typescript-eslint/experimental-utils";

export const always = "always";
export const never = "never";

export const OFF = "off";
export const WARN = "warn";
export const warn = (...options: unknown[]): TSESLint.Linter.RuleEntry => [WARN, ...options];
export const ERROR = "error";
export const error = (...options: unknown[]): TSESLint.Linter.RuleEntry => [ERROR, ...options];
