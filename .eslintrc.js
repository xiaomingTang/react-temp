const path = require("path")

module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "eslint-config-alloy/react",
  ],
  "plugins": [
    "react-hooks",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 6,//也就是ES6语法支持的意思
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true,
      "module": true
    }
  },
  rules: {
    "linebreak-style": "off",
    // 便于调试, 所以允许console
    "no-console": "off",
    // scss自动生成的scss.d.ts没有使用default, 同时一些utils可能从语义上来说没有default导出, 所以关闭
    "import/prefer-default-export": "off",
    // 参数较多时，分行不是，不分行也不是，干脆关闭
    "max-len": "off",

    "no-unused-vars": "warn",
    "prefer-const": "warn",
    
    "prefer-destructuring": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "no-var": "error",
    "react-hooks/exhaustive-deps": "error",
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "semi": ["error", "never"],
    "react-hooks/rules-of-hooks": "error",
    "arrow-body-style": ["error", "as-needed"],
    "no-multiple-empty-lines": "error",
    "no-multi-assign": "error",
    "no-cond-assign": "error",
    "no-dupe-keys": "error",
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    "no-multi-spaces": "error",
    "no-mixed-spaces-and-tabs": "error",
    "space-infix-ops": "error",
    "comma-spacing": "error",
    "default-case": "error",
    "eqeqeq": "error",
    "space-in-parens": "error",
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-newline": "error",
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./config/webpackDevServer.config.js"
      }
    },
    "react": {
      "version": "detect",
    }
  },
}