module.exports = {
    entry: __dirname + "/app/main.js",     // 入口文件
    output: {
        path: __dirname,   // 打包后的文件存放位置
        filename: "bundle.js"       // 打包后输出文件名
    }
}