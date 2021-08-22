module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  plugins: [
    'stylelint-scss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['export'] },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep'] },
    ],
    'scss/at-rule-no-unknown': true,
  },
}
