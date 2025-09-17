# 后台项目的目标
## 1. 项目的目标
### 1.1 计算服务器处理请求的总耗时
当一个请求到达服务器时，服务器会进行一系列的中间件处理；最终在把数据返回给前端浏览器

### 1.2 在响应头上增加相应内容的 mime 类型
mime 类型 指的是指明所返回给前端浏览器的数据的类型，这样浏览器会更好地处理后端所返回的数据

### 1.3 根据 URL 去读取指定目录下的文件内容
本项目没有用数据库，把数据以JSON的形式存储在文件中的

## 2.  后台项目的实现步骤
### 2.1 项目准备
安装依赖、创建文件
`pnpm init -y`: 创建 package.json 文件
安装Koa

创建文件和目录结构
|--app.js             项目入口
|--data文件夹          下面存放数据
|--middleware文件夹    存放中间层的文件
    |-- koa-response-duration.js    总耗时中间件
    |-- koa-response-header.js  响应头中间件
    |-- koa-response-data.js    业务逻辑中间件
|--utils文件夹          存放工具函数的文件
    |-- file-utils.js    帮助我们快速读取某路径下的js文件

### 2.2 总耗时中间件
本项目洋葱模型有三层，分别是：
- 最外层的中间件：总耗时中间件
- 第二层的中间件：响应头中间件
- 第三层的中间件：业务逻辑中间件

我们的预想：
一进入服务器就开始记录时间，其他所有中间件执行完成后记录结束时间，最后计算出中间件处理的总耗时，这个时长通过响应头的方式设置给浏览器：`X-Response-Time:具体时间`

### 2.3 响应头中间件
第二层中间件
获取响应数据的 mime 类型(application/json)：服务器响应给前端的数据全是JSON字符串
把这个类型设置在响应头当中: `Content-Type: application/json; charset=UTF-8`，告诉浏览器，服务器给的是JSON数据格式

### 2.4 业务逻辑中间件
第三层中间件
读取文件内容：获取请求的路径，拼接文件路径；读取该路径对应的文件内容

把文件内容设置到响应体里: `ctx.response.body = 文件内容`

如果文件不存在，返回错误提示：`{ message: '读取文件内容失败，文件资源不存在', status: 404 }`

最终接口数据：：
1. 商家销量 /api/seller
2. 预算开销 /api/budget
3. 库存信息 /api/stock
4. 销量趋势 /api/trend
5. 销量排行 /api/rank
6. 商家分布 /api/map
7. 热销商品 /api/hotproduct

### 2.5 允许跨域
AJAX 访问服务器

浏览器默认是不跨域请求

设置响应头：
```js
app.use(async (ctx, next) => {
    ctx.set("Accsee-Control-Allow-Origin", "*")
    ctx.set("Accsee-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE")
    await next()
})
```
