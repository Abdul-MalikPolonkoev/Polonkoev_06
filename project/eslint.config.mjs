import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,


  module.exports = {
    // другие настройки...
    rules: {
        "react/react-in-jsx-scope": "off", // Отключить требование импорта React
        "react/jsx-uses-react": "off" // Отключить предупреждение о неиспользуемом React
    },
    settings: {
        react: {
            version: "detect" // Автоматически определяет версию React
        }
    }
}

];

