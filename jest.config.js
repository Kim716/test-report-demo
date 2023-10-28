const path = require("path");

module.exports = {
  testMatch: ["**/*.test.(js)"],
  testEnvironment: "node",
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "reports", outputName: "report.xml" }],
  ],
};
