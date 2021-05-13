const path = require("path");

module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": path.resolve("src"),
      "@model": path.resolve("src/models"),
      "@data": path.resolve("src/data"),
      "@data|json": path.resolve("src/data/json"),
      "@data|images": path.resolve("src/data/images"),
    },
  },
};
