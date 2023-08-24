const Common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(Common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "dist",
        port: 8080
    }
});