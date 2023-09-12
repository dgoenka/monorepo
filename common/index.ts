import * as fs from "fs";

fs.readdirSync(".").forEach(function (file: string) {
  if (
    file.indexOf("node_modules") < 0 &&
    file.endsWith(".js") &&
    file !== "index.js"
  ) {
    module.exports[file.replace(".js", "")] = require("./" + file);
  }
});
