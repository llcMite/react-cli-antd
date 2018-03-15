export default{
  "entry": "src/index.js",
  "publicPath": "./",
  "extraBabelPlugins": [
    "transform-runtime",
    ["import", { "libraryName": "antd", "style": true }]
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    },
    "production": {
      "define": {
        "__ORIGIN__": JSON.stringify(process.env.__ORIGIN__ || '')
      }
    }
  },
  "proxy": {
    "/api": {
      "target": "http://127.0.0.1:8089",
      "changeOrigin": true
    },
  }
}
