<template>
    <div class="home">
        <van-nav-bar
            title="首页"
            :fixed="true"
            :z-index="9999"
        >
            <!-- <van-icon :name="icon" slot="right" /> -->
            
            <img src="../image/home/xiaoxi.png" slot="right" @click="tz"/>
        </van-nav-bar>
        <div class="content">
            <van-grid :border="false" :column-num="3">
                <van-grid-item
                    v-for="(value,index) in girds"
                    :key="index"
                    :icon="value.icon"
                    :text="value.text"
                    @click="topath(value.url)"
                />
            </van-grid>
        </div>
        <div class="content2">
            <div class="people">
                <van-row>
                    <van-col span="11">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i1"></i>
                                <p>总客户数</p>
                            </div>
                            <span class="span1">936</span>
                        </div>
                    </van-col>
                    <van-col span="11" offset="2">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i2"></i>
                                <p>年度待投产项目</p>
                            </div>
                            <span class="span2">36</span>
                        </div>
                    </van-col>
                    <van-col span="11">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i3"></i>
                                <p>在用气客户</p>
                            </div>
                            <span class="span3">20</span>
                        </div>
                    </van-col>
                    <van-col span="11" offset="2">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i4"></i>
                                <p>共管客户</p>
                            </div>
                            <span class="span4">90</span>
                        </div>
                    </van-col>
                    <van-col span="11">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i5"></i>
                                <p>统购客户</p>
                            </div>
                            <span class="span5">20</span>
                        </div>
                    </van-col>
                    <van-col span="11" offset="2">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i6"></i>
                                <p>零散客户</p>
                            </div>
                            <span class="span6">90</span>
                        </div>
                    </van-col>
                </van-row>
            </div>
            <!-- <div id="myChart"></div> -->
            <div class="tbl">
                 <div class="tal-tilte">
                     重点用户销售情况排名TOP10(万方/日)
                 </div>
                 <div class="tal-content">
                     <table>
                        <tr class="frist">
                            <td>序号</td>
                            <td>客户</td>
                            <td>日销售</td>
                            <td>环比增减</td>
                            <td>同比增减</td>
                        </tr>
                        <tr @click="tzkh">
                            <td>1</td>
                            <td>成都城市燃气</td>
                            <td>四川</td>
                            <td>100</td>
                            <td>
                                <van-button type="primary" size="small">52.3%</van-button>
                            </td>
                        </tr>
                        <tr @click="tzkh">
                            <td>2</td>
                            <td>重庆燃气集团</td>
                            <td>重庆</td>
                            <td>201</td>
                            <td>
                                <van-button type="primary" size="small">42.6%</van-button>
                            </td>
                        </tr>
                        <tr @click="tzkh">
                            <td>3</td>
                            <td>四川石化</td>
                            <td>四川</td>
                            <td>103</td>
                            <td>
                                <van-button type="danger" size="small">-5.5%</van-button>
                            </td>
                        </tr>
                        <tr @click="tzkh">
                            <td>4</td>
                            <td>重庆卡贝尔</td>
                            <td>重庆</td>
                            <td>181</td>
                            <td>
                                <van-button type="primary" size="small">12.8%</van-button>
                            </td>
                        </tr>
                        <tr @click="tzkh">
                            <td>5</td>
                            <td>重庆凯源</td>
                            <td>重庆</td>
                            <td>121</td>
                            <td>
                                <van-button type="primary" size="small">25.8%</van-button>
                            </td>
                        </tr>
                        <tr @click="tzkh">
                            <td>6</td>
                            <td>新顺通</td>
                            <td>四川</td>
                            <td>142</td>
                            <td>
                                <van-button type="primary" size="small">11.9%</van-button>
                            </td>
                        </tr>
                        <tr @click="tzkh">
                            <td>7</td>
                            <td>泸天化</td>
                            <td>四川</td>
                            <td>100</td>
                            <td>
                                <van-button type="primary" size="small">32.5%</van-button>
                            </td>
                        </tr>
                        <tr @click="tzkh">
                            <td>8</td>
                            <td>广安玖源</td>
                            <td>四川</td>
                            <td>124</td>
                            <td>
                                <van-button type="primary" size="small">18.9%</van-button>
                            </td>
                        </tr>
                        <tr @click="tzkh">
                            <td>9</td>
                            <td>广安玖源</td>
                            <td>四川</td>
                            <td>152</td>
                            <td>
                                <van-button type="primary" size="small">38.9%</van-button>
                            </td>
                        </tr>
                        <tr @click="tzkh">
                            <td>10</td>
                            <td>金象赛瑞</td>
                            <td>四川</td>
                            <td>100</td>
                            <td>
                                <van-button type="primary" size="small">44.0%</van-button>
                            </td>
                        </tr>
                    </table>
                 </div>
            </div>
            <div class="plan">
                <div class="plan-item">
                    <div class="plan-item-title">
                        本日销售(万方):&emsp;<span>6352</span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">6300</p>
                            <p class="p2">日均计划</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">6300</p>
                            <p class="p2">日均合同</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1  Upward">6300</p>
                            <p class="p2">与计划比</p>
                            
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1 Downarrow">150</p>
                            <p class="p2">与合同比</p>
                        </div>
                    </div>
                </div>
                <div class="plan-item">
                    <div class="plan-item-title">
                        本月销售累计(亿方):&emsp;<span>19.3</span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">6300</p>
                            <p class="p2">本月计划</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">-0.2</p>
                            <p class="p2">本月实签合同</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1">
                                11.3%
                                
                            </p>
                            <p class="p3"><van-progress :percentage="11.3" :show-pivot="false" /></p>
                            <p class="p2">完成计划进度</p>
                        </div>
                        
                    </div>
                </div>
                <div class="plan-item">
                    <div class="plan-item-title">
                        本年销售累计(亿方):&emsp;<span>144.3</span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">--</p>
                            <p class="p2">年度目标</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">--</p>
                            <p class="p2">去年同期</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1">
                                8.0%
                                
                            </p>
                            <p class="p3"><van-progress :percentage="8" :show-pivot="false" /></p>
                            <p class="p2">完成进度</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myChart2"></div>
        </div>
        <van-tabbar v-model="tabbarActive" :fixed="true">
            <van-tabbar-item>
                <router-link to="/home">
                    <img src="../image/tabbal/shouyexuanzhong.png">
                </router-link>
            </van-tabbar-item>
            
            <van-tabbar-item>
                <router-link to="/trqhome">
                    <img src="../image/tabbal/tianranqi.png">
                </router-link>
            </van-tabbar-item>
            <van-tabbar-item>
                <router-link  to="/yphghome">
                    <img src="../image/tabbal/youhuapin.png">
                </router-link>
            </van-tabbar-item>
            <van-tabbar-item>
                <router-link  to="/zdhome">
                    <img src="../image/tabbal/zhongduan.png">
                </router-link>
            </van-tabbar-item>
            <van-tabbar-item>
                <router-link  to="/wd">
                    <img src="../image/tabbal/wode.png">
                </router-link>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:'home',
    data () {
        return {
            tabbarActive:0,
            icon:require('../image/home/xiaoxi.png'),
            girds:[
                {text:"客户",icon:require("../image/trq/kehu.png"),url:'/trqkh'},
                {text:"数据中心",icon:require("../image/trq/yingxiaojianbao.png"),url:'/trqsjzx'},
                {text:"审核",icon:require("../image/trq/shenhe.png"),url:'/sh'}
            ],
            list1:[]
        }
    },
    created(){
        this.getData()
    },
    mounted(){
        //this.drawLine();
        this.drawLine2();
    },
    methods:{
        //消息跳转
        tz(){
            this.$router.push('/trqxx')
        },
        //九宫格跳转
        topath(url){
            if(url=="/trqkh"){
                this.$router.push(url)
            }else if(url=="/trqsjzx"){
                this.$router.push(url)
            }else if(url=="/sh"){
                this.$router.push('/trqshxz')
            }
        },
        //饼图绘制
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title : {
                    text: '已供气客户数量行业分布(个)',
                    x:'8',
                    textStyle:{
                        fontSize:'12'
                    }
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'right',
                    show:false,
                    data: ['燃料','化工','化肥','发电','城然','LNG',"CNG"]
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        
                        data:[
                            {value:335, name:'燃料'},
                            {value:310, name:'化工'},
                            {value:234, name:'化肥'},
                            {value:135, name:'发电'},
                            {value:1548, name:'城然'},
                            {value:135, name:'LNG'},
                            {value:1548, name:'CNG'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            normal:{ 
                                label:{ 
                                    show: true, 
                                    formatter: '{b} : {d}%' 
                                }, 
                                labelLine :{show:true} 
                            } 
                        },
                        
                    }
                ]
            });
        },
        //表格每行点击跳转
        tzkh(){
            this.$router.push('/trqkhdacx')
        },
        //柱状和折线图
        drawLine2(){
            // 基于准备好的dom，初始化echarts实例
            let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
            //// 绘制图表
            myChart2.setOption({
                title : {
                    text: '近12月销售趋势(亿方)',
                    x:'8',
                    textStyle:{
                        fontSize:'12'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    right: '2%',

                    data:['月累计','同比增幅']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2018-01','2018-02','2018-03','2018-04','2018-05','2018-06','2018-07','2018-08','2018-09','2018-10','2018-11','2018-12'],
                        axisPointer: {
                            type: 'shadow',
                        },
                        axisLabel : {//坐标轴刻度标签的相关设置。
                            interval:0,
                            rotate:"90"
                        },
                        "axisLine":{       //y轴
                            "show":false

                        },
                        "axisTick":{       //y轴刻度线
                            "show":false
                        },
                        "splitLine": {     //网格线
                            "show": false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        // name: '月累计',
                        // min: 0,
                        // max: 250,
                        interval: 30,
                        axisLabel: {
                            formatter: '{value}'
                        },
                        "axisLine":{       //y轴
                            "show":false

                        },
                        "axisTick":{       //y轴刻度线
                            "show":false
                        },
                        "splitLine": {     //网格线
                            "show": false
                        }
                    },
                    {
                        type: 'value',
                        // name: '同比增幅',
                        // min: 0,
                        // max: 10,
                        interval: 30,
                        axisLabel: {
                            formatter: '{value} %'
                        },
                        "axisLine":{       //y轴
                            "show":false
                        },
                        "axisTick":{       //y轴刻度线
                            "show":false
                        },
                        "splitLine": {     //网格线
                            "show": false
                        }
                    },
                    
                ],
                series: [
                    {
                        name:'月累计',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        itemStyle: {
                            
                            //通常情况下：
                            normal: {
                                barBorderRadius: [5,5,5,5],
                                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                color: function (params) {
                                    var colorList = ["#70a1fc"]; //每根柱子的颜色
                                    return colorList[params.dataIndex];
                                }
                            }
                        }
                    },
                    {
                        name:'同比增幅',
                        type:'line',
                        yAxisIndex: 1,
                        data:[1.0, 3.9, 6.0, 21.2, 22.6,35.7,40.6, 70.2, 80.6, 20.0,40.4, 3.3],
                        smooth:false,   //关键点，为true是不支持虚线的，实线就用true
                        itemStyle : { 
                            normal : { 
                                color:'#40c887', //改变折线点的颜色
                                lineStyle:{ 
                                    color:'#5dd099', //改变折线颜色
                                    width:2,
                                    type:'dotted'  //'dotted'虚线 'solid'实线
                                } 
                            },
                        }
                    }        
                ]
            })
        },
        //请求数据
        getData(){
            this.$axios.post('/MyCustomer').then((res)=>{
                //console.log(res.data)
                
                this.list1=res.data.data
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.home{
    .van-nav-bar{
        background-color: #1f6eff;
        .van-nav-bar__title{
            color: #ffffff;
        }
        .van-nav-bar__right{
            top: 0px;
        }
    }
    .content{
        padding-top:46px;
        .van-grid{
            .van-grid-item__icon{
                font-size: 38px;
            }
        } 
    }
    .content2{
        padding: 0 0.31rem;
        padding-bottom: 50px;
        .people{
            padding: 0.3rem 0;
            .people-item{
                height: 1rem;
                background-color: #fff;
                border-radius: 7px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 4px;
                .people-item-left{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    i{
                        font-size: 0.42rem;
                        &.i1{
                            color: #70a1fc;
                        }
                        &.i2{
                            color: #a2d567;
                        }
                        &.i3{
                            color: #fbbc35;
                        }
                        &.i4{
                            color: #8b96fc;
                        }
                        &.i5{
                            color: #f98ea9;
                        }
                        &.i6{
                            color: #30cce3;
                        }
                    }
                    p{
                        font-size: 0.22rem;
                        margin-left: 6px;
                        color: #737373;
                    }
                }
                span{
                    font-size: 0.34rem;
                    &.span1{
                        color: #70a1fc;
                    }
                    &.span2{
                        color: #a2d567;
                    }
                    &.span3{
                        color: #fbbc35;
                    }
                    &.span4{
                        color: #8b96fc;
                    }
                    &.span5{
                        color: #f98ea9;
                    }
                    &.span6{
                        color: #30cce3;
                    }
                }
            }
        }
        #myChart{
            width: 100%;
            height: 4.28rem;
            background-color: #fff;
            border-radius: 7px;
            padding: 0.27rem 0;
        }
        .tbl{
            margin-top: 0.3rem;
            background-color: #fff;
            border-radius: 7px;
            .tal-tilte{
                height: 0.76rem;
                line-height: 0.76rem;
                color: #444444;
                font-size:0.26rem;
                padding-left: 0.3rem;
                font-weight: bold;
            }
            .tal-content{
                padding-bottom: 0.24rem;
                background-color: #f9fbff;
                border-bottom-left-radius: 7px;
                border-bottom-right-radius: 7px;
                table{
                    width: 100%;
                    border-collapse:collapse;
                    padding: 0;
                    border:0;
                    margin: 0;
                    text-align: left;
                    tr{
                        &.frist{
                            background-color: #70a1fc;
                            height: 0.6rem;
                            td{
                                color: #ffffff;
                                font-size: 0.26rem;
                                &:first-child{
                               
                                    text-align: center;
                                
                                }
                            }
                            
                        }
                       
                        td:first-child{
                            text-align: center 
                        }
                        &:not(.frist){
                            height: 0.78rem;
                            td{
                                font-size: 0.22rem;
                                color: #686969;
                            }
                        }
                    }
                }
                
            }
        }
        .plan{
            margin-top: 0.3rem;
            .plan-item{
                padding: 0.26rem 0.3rem 0.3rem 0.3rem;
                background-color: #fff;
                margin-bottom: 0.1rem;
                border-radius: 7px;
                .plan-item-title{
                    height: 0.48rem;
                    font-size: 0.26rem;
                    color: #3f82ff;
                    padding-bottom: 0.23rem;
                    position: relative;
                    &::after{
                        position: absolute;
                        box-sizing: border-box;
                        content: ' ';
                        pointer-events: none;
                        right: 0;
                        bottom: 0;
                        left: 0px;
                        border-bottom: 1px solid #ebedf0;
                    }
                    span{
                        color: #fe8438;
                        font-size: 0.3rem;
                    }
                }
                .plan-item-content{
                    height: 1.2rem;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    text-align: center;
                    // 改变
                    .plan-item-content-item{
                        // padding-top: 0.3rem;
                        height: 100%;
                        display: flex;
                        flex-direction:column;
                        justify-content: space-between;
                        align-items: center;
                        position: relative;
                        p{
                            margin: 0;
                            padding: 0;
                            position: relative;
                            &.Upward::after{
                                content: '';
                                position: absolute;
                                height: 100%;
                                width: 0.34rem;
                                right: -0.34rem;
                                top:0.07rem;
                                background-image: url("../image/home/shang.png");
                                background-repeat: no-repeat;
                                background-size:100% 100%;
                            }
                            &.Downarrow::after{
                                content: '';
                                position: absolute;
                                height: 100%;
                                width: 0.34rem;
                                right: -0.34rem;
                                top:0.08rem;
                                background-image: url("../image/home/xia.png");
                                background-repeat: no-repeat;
                                background-size:100% 100%;
                            }
                            &.p1{
                                padding-top: 0.12rem;
                                font-size: 0.22rem;
                                font-weight: bold;
                            }
                            &.p3{
                                width: 70px;
                            }
                            &.p2{
                                // margin-top: 0.2rem;
                                font-size: 0.26rem;
                                font-weight: bold;
                            }
                        }
                    }
                    
                    
                }
            }
        }
        #myChart2{
            margin-top: 0.3rem;
            margin-bottom: 0.6rem;
            height: 4.46rem;
            background-color: #fff;
            border-radius: 7px;
        }
    }
}
.cor1{
    color: #40c887;
}
</style>


