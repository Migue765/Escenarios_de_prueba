const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'itup46',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
