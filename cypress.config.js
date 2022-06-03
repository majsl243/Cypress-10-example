const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://www.samsung.com/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
