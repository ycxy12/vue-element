const path = require("path")

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.export = {
    alias: {
        '/@/': resolve('src')
    }
}