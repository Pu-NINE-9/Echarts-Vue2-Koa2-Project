// 这个文件用于读取某一data文件下的数据
const fs = require('fs')

module.exports.getFileJsonData = (filePath) => { // 需要文件的绝对路径
    // 根据文件路径读取文件内容
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, res) => { // 文件操作是异步，不能通过return返回数据
            if (err) reject(err)
            else resolve(res)
        })
    })
}