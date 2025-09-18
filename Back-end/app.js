const Koa = require('koa')

// 引入自制中间件
const resDurationMiddleware = require('./middleware/koa-response-duration')
const resHeaderMiddleware = require('./middleware/koa-response-header')
const resDataMiddleware = require('./middleware/koa-response-data')

// koa框架专属跨域
const cors = require('@koa/cors')


const app = new Koa()
const PORT = 8888

// TODO.1 允许跨域
app.use(cors())

// TODO.1 绑定总耗时中间件
/**
 * 注意：resDurationMiddleware 后不能加括号()，原因如下：
 * 1. 当前的 resDurationMiddleware 是直接定义为接收 ctx 和 next 参数的函数
 * 2. 如果加括号 ()，会立即调用这个函数，但它没有返回值（返回 undefined）
 * 3. Koa 的 app.use() 方法要求必须传入一个函数，而不是 undefined
 * 4. 所以不加括号表示传递函数引用，Koa 会在请求到来时调用它，我们不需要加括号来启动服务器就立即调用它
 * 5. 加括号会立即执行函数并获取返回值
 * 6. 如果加括号会报错：TypeError: middleware must be a function!
 */
app.use(resDurationMiddleware)

// TODO.2 绑定响应头中间件
app.use(resHeaderMiddleware)

// TODO.3 绑定业务逻辑中间件
app.use(resDataMiddleware)

// 监听端口，启动服务
app.listen(PORT, () => {
    console.log('The server is running at http://127.0.0.1:' + PORT)
})
