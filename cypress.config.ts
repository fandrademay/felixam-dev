import { defineConfig } from "cypress";
import { verifyDownloadTasks } from 'cy-verify-downloads';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
    },
    experimentalStudio: true,
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
