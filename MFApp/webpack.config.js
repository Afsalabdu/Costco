const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const {ModuleFederationPlugin} = require("webpack").container;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, ".dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, ".dist"),
    },
    open: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "MFHost",
      filename: "remoteEntry.js",
      remotes: {
        "DetailCardInHost" : "commonsecondApp@http://localhost:3001/remoteEntry.js",
        "ShortCardInHost" : "commonsecondApp@http://localhost:3001/remoteEntry.js",
        "ConsoleEmulatorInHost": "commonsecondApp@http://localhost:3001/remoteEntry.js",
        "TableInHost": "commonfirstApp@http://localhost:3002/remoteEntry.js",
        "DonutChartInHost": 'commonThirdApp@http://localhost:3003/remoteEntry.js',
        "EmulatorInHost":'commonFourthApp@http://localhost:3004/remoteEntry.js',
      },
      shared: ["react", "react-dom","TerminalContextProvider"]
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          {
            loader: "babel-loader",
              options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpeg|gif|jpg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
