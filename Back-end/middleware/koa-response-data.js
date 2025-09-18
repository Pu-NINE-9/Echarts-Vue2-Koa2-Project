// 业务逻辑中间件
const path = require('path')
const fileUtils = require('../utils/file-utils') // 导入读取文件数据的方法


const resDataMiddleware = async (ctx, next) => {
    // TODO.1 获取文件路径
    const url = ctx.request.url // 获取浏览器请求的url，就是端口号后面的内容(如/api/re，后续都以这个url为例进行注释)
    console.log('url: ', url)
    let filePath = url.replace('/api', '') // 这里删除了url的'/api'（/re）
    filePath = '../data' + filePath + '.json' // 将路径写出来（../data/re.json）
    filePath = path.join(__dirname, filePath) // path.join() 函数可以识别并正确处理路径中的 ../，获取文件所在路径
    
    // TODO.2 读取文件数据
    try {
        const result = await fileUtils.getFileJsonData(filePath) // 获取内容，这里是promise对象，所以我们需要用await语法糖

        // TODO.3 设置响应体（简单理解就是返回给前端的数据（官方话叫作“HTTP响应体”））
        ctx.response.body = result
    } catch (err) {
        const errorMsg = {
            message: '读取文件内容失败，文件资源不存在',
            status: 404
        }
        ctx.response.body = errorMsg // 返回错误提示
    }

    // TODO.4 可以不调用next()，因为它是最内层了，但最好写上以防别人调用顺序不对
    await next()
}

module.exports = resDataMiddleware