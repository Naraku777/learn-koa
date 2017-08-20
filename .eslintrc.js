// .eslintrc.js

module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "promise"
  ],
  "rules": {
    "handle-callback-err": "off",
    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "varsIgnorePattern": "should"
    }]
  },
  "globals": {
    "it": true,
    "describe": true
  }
}