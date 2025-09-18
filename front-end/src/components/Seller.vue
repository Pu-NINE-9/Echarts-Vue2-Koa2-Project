<!-- 商家销量统计的横向柱状图 -->
<template>
    <div class="com-container">
        <!-- 商家销量统计的横向柱状图 -->
        <div class="com-chart" ref="chart"></div>
        <!--
            在Vue中， ref 是一个非常重要的特性，用于获取DOM元素或子组件实例
            this.$refs 是Vue实例上的一个对象，它包含了所有通过 ref 属性标识的DOM元素或组件
            在本例中，this.$refs.chart 就获取到了那个带有 ref="chart" 属性的div元素
        -->
    </div>
</template>

<script>
export default {
    data () {
        return {
            chartInstance: null,
            allData: null, // 服务器返回的数据
            currentPage: 1, // 当前页码
            totalPage: 0, // 总页数
            timer: null, // 循环播放的计时器
        }
    },

    methods: {
        // TODO.1 初始化echarts实例对象
        initChart () {
            // this.$echarts 获得全局对象，再通过init()方法获得实例
            this.chartInstance = this.$echarts.init(this.$refs.chart, 'sakura') // 使用科技感主题
            
            // 监听鼠标移入移出事件
            this.chartInstance.on('mouseover', () => clearInterval(this.timer)) // 鼠标移入时取消定时器
            this.chartInstance.on('mouseout', () => this.startTimeCounter()) // 鼠标移出时重新启动定时器
        },

        // TODO.2 获取服务器的数据
        async getData () {
            // http://127.0.0.1:8888/api/seller
            const { data } = await this.$axios.get('/seller')
            this.allData = data
            this.allData.sort((a, b) => a.value - b.value) // 原生中的 sort((a, b) => a -b)方法（a、b为数值类型，如果是对象就.value相减再return，且 a - b 为从小到大）
            this.updateChart() // 第一次初始化加载
            this.startTimeCounter() // 启用定时器
        },

        // TODO.3 设置option，更新图像(类型为bar)
        updateChart () {
            // 控制展示五个数据
            this.totalPage = (this.allData.length % 5 === 0) ? (this.allData.length / 5) : (Math.floor(this.allData.length / 5) + 1)

            // 分割数组的方法：array.slice(start, end)，包含start，不包含end
            const showData = this.allData.slice((this.currentPage - 1) * 5, this.currentPage * 5)

            console.log(this.currentPage)
            const option = {
                title: {
                    text: '商家销量统计',
                    textStyle: {
                        fontSize: 36,
                    },
                    left: 20,
                    top: 10,
                },
                grid: { // 配置坐标轴位置
                    left: '5%',
                    right: '6%',
                    top: '13%',
                    bottom: '3%',
                    containLabel: true, // 包含坐标轴的刻度标签
                },
                tooltip: {},
                xAxis: { // 这个图是横着放的，也就是说类目轴Y轴，x放数值
                    type: 'value', // 值
                },
                yAxis: {
                    type: 'category', // 标签
                    data: showData.map(item => item.name)
                },
                series: [
                    {
                        type: 'bar',
                        data: showData.map(item => item.value)
                    },
                ]
            }

            // 实例加载
            this.chartInstance.setOption(option)
        },

        startTimeCounter () {
            if (this.timer) clearInterval(this.timer) // 判断是否已经存在定时器，若存在先清空再设置新的
            this.timer = setInterval(() => {
                this.currentPage = (this.currentPage % this.totalPage) + 1
                this.updateChart()
            }, 3000)
        }
    },
    mounted () { // 这个时候DOM才加载完成
        this.initChart()
        this.getData()
    },

    // 在生命周期销毁时取消定时器
    destroyed () {
        clearInterval(this.timer) // 取消定时器
    }
    
}
</script>

<style>

</style>