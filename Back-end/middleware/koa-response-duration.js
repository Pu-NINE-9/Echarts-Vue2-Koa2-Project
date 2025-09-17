// 总耗时中间件的开发
const resDurationMiddleware = async (ctx, next) => {
    // TODO.1 计算开始时间
    const startTime = Date.now() // 记录开始时的当前时间戳
    /**
     * Date.now() 是用来 获取当前时间的时间戳
     * 时间戳是从1970年1月1日 00:00:00 UTC开始经过的毫秒数
     */

    // TODO.2 传到下一层
    await next() // 如果next()后面还有要执行的业务逻辑，就需要加上async await；否则不需要

    // TODO.3 计算结束时间与总时长
    const endTime = Date.now() // 记录结束时的当前时间戳
    const durationTime = endTime - startTime // 计算总时长

    // TODO.4 设置响应头
    ctx.set('X-Response-Duration', `${durationTime}ms`) // ctx.set(响应头名字, 时间(腰带单位)) 方法用于设置响应头, 注意是双参数
}



module.exports = resDurationMiddleware