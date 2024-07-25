import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { 
    files: [
      "**/*.{js,mjs,cjs,jsx}"
    ] 
  },
  
  { 
    languageOptions: 
    { 
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {...globals.browser} 
    } 
  },
  
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  
  {
    rules: {
      "react/prop-types": "off"
    }
  },
];
