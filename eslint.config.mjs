import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    parser: "@babel/eslint-parser", // Explicitly set the parser
    parserOptions: {
      requireConfigFile: false, // Disable the need for Babel config file
    },
  },
];

export default eslintConfig;
