module.exports = function(wallaby) {
  return {
    files: ["src/**/*.js"],
    tests: ["test/**/*.test.js"],
    compilers: {
      "**/*.js": wallaby.compilers.babel({ babel: require("@babel/core") })
    },
    env: {
      type: "node"
    }
  };
};
