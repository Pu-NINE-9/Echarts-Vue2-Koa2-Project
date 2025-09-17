// 响应头中间件：为后续中间件处理提供了基础环境，确保无论后续数据处理如何，响应格式都是统一的；同时也为跨域和安全做准备
const resHeaderMiddleware = async (ctx, next) => {
    const contentType = 'application/json; charset=UTF-8'
    ctx.set('Content-Type', contentType)
    await next()
}

module.exports = resHeaderMiddleware