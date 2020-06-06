<template>
    <div class="home">
        <!-- <van-nav-bar
            title="终端"
            :fixed="true"
            :z-index="9999"
        > -->
            <!-- <van-icon :name="icon" slot="right" /> -->
            
            <!-- <img src="../image/home/xiaoxi.png" slot="right" @click="tz"/> -->
        <!-- </van-nav-bar> -->
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
                                <i class="iconfont icon-renqun i2"></i>
                                <p>工业客户</p>
                            </div>
                            <span class="span2">{{list.GYSL}}</span>
                        </div>
                    </van-col>
                    <van-col span="11" offset="2">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i4"></i>
                                <p>商业集体客户</p>
                            </div>
                            <span class="span4">{{list.SYSL}}</span>
                        </div>
                    </van-col>
                    <van-col span="11">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i5"></i>
                                <p>直供CNG客户</p>
                            </div>
                            <span class="span5">{{list.CNSL}}</span>
                        </div>
                    </van-col>
                    <van-col span="11" offset="2">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i6"></i>
                                <p>转供CNG客户</p>
                            </div>
                            <span class="span6">{{list.ZGSL}}</span>
                        </div>
                    </van-col>
                    <van-col span="11">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i3"></i>
                                <!-- <p>城市燃气客户</p> -->
                                <p>城市燃气</p>
                            </div>
                            <span class="span3">{{list.MYSL}}</span>
                        </div>
                    </van-col>
                    <van-col span="11" offset="2">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i1"></i>
                                <p>总客户数</p>
                            </div>
                            <span class="span1">{{list.YHSL}}</span>
                        </div>
                    </van-col>
                    
                </van-row>
            </div>
            <div id="myChart"></div>
            <div class="tbl" v-if="tableIsshow">
                 <div class="tal-tilte">
                     重点用户销售情况前十名(万方)
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
                        <tr v-for="(item,index) in list3" :key="index" @click="tzkh(item.YHMC001)">
                            <td>{{index+1}}</td>
                            <td><p>{{item.YHMC002}}</p></td>
                            <td>{{item.RXS | point(4)}}</td>
                            <td>
                                <van-button type="primary" color="#40C887" size="small" v-if="item.HBZJ>=0">{{item.HBZJ | point(0)}}</van-button>
                                <van-button type="danger"  color="#F15F78" size="small" v-else>{{item.HBZJ | point(0)}}</van-button>
                            </td>
                            <td>
                                <van-button type="primary" color="#40C887" size="small" v-if="item.TBZJ>=0">{{item.TBZJ | point(0)}}</van-button>
                                <van-button type="danger" color="#F15F78" size="small" v-else>{{item.TBZJ | point(0)}}</van-button>
                            </td>
                        </tr>
                    </table>
                 </div>
            </div>
            <div class="plan">
                <div class="plan-item">
                    <div class="plan-item-title">
                        本日销售(万方):&emsp;<span>{{list4.RXS | point(0)}}</span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">{{list4.RJH | point(0)}}</p>
                            <p class="p2">日计划</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">{{list4.TQXS | point(0)}}</p>
                            <p class="p2">同期销售</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1" :class="list2.JHB>=0?'Upward':'Downarrow'">{{list4.JHB | point(0)}}</p>
                            <p class="p2">与计划比</p>
                            
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1" :class="list2.TQB>=0?'Upward':'Downarrow'">{{list4.TQB | point(0)}}</p>
                            <p class="p2">同期比</p>
                        </div>
                    </div>
                </div>
                <div class="plan-item">
                    <div class="plan-item-title">
                        本月销售累计(亿方):&emsp;<span>{{list5.YZJ | point(2)}}</span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">{{list5.YJH | point(2)}}</p>
                            <p class="p2">本月计划</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">{{list5.TQYZJ | point(2)}}</p>
                            <p class="p2">去年同期</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1">
                                {{list5.JD * 100 | point(0)}}%
                                
                            </p>
                            <p class="p3"><van-progress :percentage="pro1" :show-pivot="false" /></p>
                            <p class="p2">完成计划进度</p>
                        </div>
                        
                    </div>
                </div>
                <div class="plan-item">
                    <div class="plan-item-title">
                        本年销售累计(亿方):&emsp;<span>{{list6.NZJ | point(2)}}</span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">{{list6.NJH | point(2)}}</p>
                            <p class="p2">年计划</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">{{list6.TQNZJ | point(2)}}</p>
                            <p class="p2">去年同期</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1">
                                {{list6.JD * 100 | point(0)}}%
                                
                            </p>
                            <p class="p3"><van-progress :percentage="pro2" :show-pivot="false" /></p>
                            <p class="p2">完成进度</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myChart2"></div>
        </div>
        <van-tabbar v-model="tabbarActive" :fixed="true" active-color="#1f6eff">
            <van-tabbar-item  replace to="/trqhome">
                <span>天然气</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='tianranqi' />
            </van-tabbar-item>
            <van-tabbar-item replace to="/yphghome">
                <span>油化品</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='jiyou-cuxiantiao' />
            </van-tabbar-item>
            <van-tabbar-item replace to="/zdhome">
                <span>终端</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='zhongduan' />
            </van-tabbar-item>
            <van-tabbar-item replace to="/wd">
                <span>我的</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='wode' />
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:'home',
    data () {
        return {
            tabbarActive:2,
            icon:require('../image/home/xiaoxi.png'),
            girds:[
                {text:"客户",icon:require("../image/trq/kehu.png"),url:'/zdkh'},
                {text:"数据中心",icon:require("../image/trq/yingxiaojianbao.png"),url:'/zdsjzx'},
                {text:"审核",icon:require("../image/trq/shenhe.png"),url:'/sh'}
            ],
            list:{
                GYSL:0,
                SYSL:0,
                CNSL:0,
                ZGSL:0,
                MYSL:0,
                YHSL:0
            },
            list2:{},
            tableIsshow:false,
            list3:[],
            list4:{
                RXS:0,
                RJH:0,
                TQXS:0,
                JHB:0,
                TQB:0
            },
            list5:{
                YZJ:0,
                YJH:0,
                TQYZJ:0,
                JD:0
            },
            pro1:0,
            list6:{
                NZJ:0,
                NJH:0,
                TQNZJ:0,
                JD:0
            },
            pro2:0,
            list7x:[],
            list7y:[],
            list7y2:[]
        }
    },
    mounted(){
        //this.drawLine2()
        
    },
    created(){
        this.getData();
        this.getData2();
        this.getData3();
        this.getData4();
    },
    methods:{
        //消息跳转
        tz(){
            this.$router.push('/zdxx')
        },
        //九宫格跳转
        topath(url){
            if(url=="/zdkh"){
                this.$router.push(url)
            }else if(url=="/zdsjzx"){
                this.$router.push(url)
            }else if(url=="/sh"){
                this.$router.push('/zdshxz')
            }
        },
        //饼图绘制
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title : {
                    text: '客户用气量行业分布(个)',
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
                    data: ['工业','直供','居民','商业','转供']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        
                        data:[
                            {value:this.list2.GY*100, name:'工业'},
                            {value:this.list2.ZhiG*100, name:'直供'},
                            {value:this.list2.JM*100, name:'居民'},
                            {value:this.list2.SY*100, name:'商业'},
                            {value:this.list2.ZhuanG*100, name:'转供'}
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
            this.$router.push('/zdkhdacx')
        },
        //柱状和折线图
        drawLine2(){
            // 基于准备好的dom，初始化echarts实例
            let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
            //// 绘制图表
            myChart2.setOption({
                title : {
                    text:new Date().getFullYear()+ '年月销售趋势(亿方)',
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

                    data:['月累计','同期销售']
                },
                xAxis: [
                    {
                        type: 'category',
                        //data: this.list7x,
                        data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
                        axisPointer: {
                            type: 'shadow',
                        },
                        axisLabel : {//坐标轴刻度标签的相关设置。
                            interval:0,
                            //rotate:"90"
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
                        //interval: 30,
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
                    // {
                    //     type: 'value',
                    //     // name: '同比增幅',
                    //     // min: 0,
                    //     // max: 10,
                    //     interval: 30,
                    //     axisLabel: {
                    //         formatter: '{value}'
                    //     },
                    //     "axisLine":{       //y轴
                    //         "show":false
                    //     },
                    //     "axisTick":{       //y轴刻度线
                    //         "show":false
                    //     },
                    //     "splitLine": {     //网格线
                    //         "show": false
                    //     }
                    // },
                    
                ],
                series: [
                    {
                        name:'月累计',
                        type:'bar',
                        data:this.list7y,
                        //data:['5','43','54','12'],
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
                        name:'同期销售',
                        type:'line',
                        //yAxisIndex: 1,
                        //data:['5','43','54','12'],
                        data:this.list7y2,
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
        getData(){
            this.$axios.post('/ZDMyCustomer',{
                DW001:this.$store.getters.getUser.DW001,
                FLAG:this.$store.getters.getUser.FLAG,
                czygl001:this.$store.getters.getUser.CZYGL001
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                if(d){
                    this.list=d.data[0]
                    //console.log(this.list)
                    this.list2=d.count[0]
                    this.drawLine();
                }
                
               
            //     for (let index = 0; index < res.data.data5.length; index++) {
            //         this.list5x.push(res.data.data5[index].YQL001+'-'+res.data.data5[index].YQL002)
            //         this.list5y.push(res.data.data5[index].YQL)
            //         this.list5y2.push(res.data.data5[index].QNYQL)
            //     }
            //     this.drawLine2()
            }).catch((error)=>{
                console.log(error)
            })
        },
        getData2(){
            this.$axios.post('/ZDMyCustomer1',{
                DW001:this.$store.getters.getUser.DW001,
                FLAG:this.$store.getters.getUser.FLAG,
                czygl001:this.$store.getters.getUser.CZYGL001
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                console.log(d)
                if(d.data.length>0){
                    this.list3=d.data
                    this.tableIsshow=true
                }else{
                    // this.list1=[]
                    this.tableIsshow=false
                }
                if(d.count){
                    this.list4=d.count[0]
                }
                
            }).catch((error)=>{
                console.log(error)
            })
        },
        getData3(){
            this.$axios.post('/ZDMyCustomer2',{
                DW001:this.$store.getters.getUser.DW001,
                FLAG:this.$store.getters.getUser.FLAG,
                czygl001:this.$store.getters.getUser.CZYGL001
            }).then((res)=>{
                //console.log(res.data)
                let d=res.data.d
                d=JSON.parse(d)
                if(d.data){
                    this.list5=d.data[0]
                    this.pro1=parseInt(d.data[0].JD*100)
                }
                
                if(d.count){
                    this.list6=d.count[0]
                    if(d.count[0].NJH){
                        this.list6.NJH=d.count[0].NJH
                    }else{
                        this.list6.NJH=0
                    }
                    this.pro2=parseInt(d.count[0].JD*100)
                }
                
            }).catch((error)=>{
                console.log(error)
            })
        },
        getData4(){
            this.$axios.post('/ZDMyCustomer3',{
                DW001:this.$store.getters.getUser.DW001,
                FLAG:this.$store.getters.getUser.FLAG,
                czygl001:this.$store.getters.getUser.CZYGL001
            }).then((res)=>{
                //console.log(res.data)
                let d=res.data.d
                d=JSON.parse(d)
                for (let index = 0; index < d.data.length; index++) {
                    // this.list7x.push(res.data.data[index].YQL002)
                    if(d.data[index].YQL==0){
                        d.data[index].YQL=""
                    }
                    this.list7y.push(d.data[index].YLG)
                    // if(res.data.data[index].QNYLJ==0){
                    //     res.data.data[index].QNYLJ=""
                    // }
                    // this.list7y2.push(res.data.data[index].QNYLJ)
                }
                for (let index = 0; index < d.count.length; index++) {
                    // this.list7x.push(res.data.data[index].YQL002)
                    
                    if(d.count[index].QNYLJ==0){
                        d.count[index].QNYLJ=""
                    }
                    this.list7y2.push(d.count[index].QNYLJ)
                }
                this.drawLine2()
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
        // padding-top:52px;
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
                    flex:13;
                    padding-left: 0.07rem;
                    display: flex;
                    //justify-content: space-around;
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
                    flex:5;
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
        .van-button--primary{
            background-color: #40C887;
            border: 1px solid #40C887;
        }
        
        .van-button--danger{
            background-color: #F15F78;
            border: 1px solid #F15F78;
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
                    table-layout: fixed;
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
                        td:first-child{
                            text-align: center 
                        }
                        td:nth-child(1){
                            width: 10%;
                        }
                        td:nth-child(2){
                            width: 25%;
                            p{
                                margin: 0;
                                height: 0.22rem;
                                line-height: 0.22rem;
                                width: 100%;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                        }
                        td:nth-child(3){
                            width: 20%;
                        }
                        td:nth-child(4){
                            width: 20%;
                        }
                        td:nth-child(5){
                            width: 20%;
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
                        margin-top: 0.14rem;
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
                            overflow: hidden;
                            width: 100%;
                            position: relative;
                            &.Upward::after{
                                content: '';
                                position: absolute;
                                height: 100%;
                                width: 0.34rem;
                                right: -0.34rem;
                                top:0.16rem;
                                background-image: url("../image/home/shang2.png");
                                background-repeat: no-repeat;
                                background-size:100% 100%;
                            }
                            &.Downarrow::after{
                                content: '';
                                position: absolute;
                                height: 100%;
                                width: 0.34rem;
                                right: -0.34rem;
                                top:0.00rem;
                                background-image: url("../image/home/xia2.png");
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
            padding-top: 0.15rem;
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


