module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "vue/component-tags-order": [
      "error",
      { order: ["template", "script", "style"] },
    ],
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error',
  },
}
