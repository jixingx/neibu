<template>
    <div class="khjlhome">
        <!-- <van-nav-bar
            title="主页"
            :fixed="true"
            :z-index="9999"
        > -->
            <!-- <van-icon :name="icon" slot="right" /> -->
            
            <!-- <img src="../image/home/xiaoxi.png" slot="right" @click="tz"/> -->
        <!-- </van-nav-bar> -->
        <div class="content">

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
                            <span class="span1" v-cloak>{{list.YGQ+list.DTC}}</span>
                        </div>
                    </van-col>
                    <van-col span="11" offset="2">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i2"></i>
                                <p>年度待投产项目</p>
                            </div>
                            <span class="span2">{{list.DTC}}</span>
                        </div>
                    </van-col>
                    <van-col span="11">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i3"></i>
                                <p>在用气客户</p>
                            </div>
                            <span class="span3">{{list.YGQ}}</span>
                        </div>
                    </van-col>
                    <van-col span="11" offset="2">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i4"></i>
                                <p>共管客户</p>
                            </div>
                            <span class="span4">{{list.GG}}</span>
                        </div>
                    </van-col>
                    <van-col span="11">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i5"></i>
                                <p>统购客户</p>
                            </div>
                            <span class="span5">{{list.TG}}</span>
                        </div>
                    </van-col>
                    <van-col span="11" offset="2">
                        <div class="people-item">
                            <div class="people-item-left">
                                <i class="iconfont icon-renqun i6"></i>
                                <p>零散客户</p>
                            </div>
                            <span class="span6">{{list.LS}}</span>
                        </div>
                    </van-col>
                </van-row>
            </div>
            <!-- <div id="myChart"></div> -->
            <div class="tbl" v-if="tableIsshow">
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
                        <tr v-for="(item,index) in list1" :key="index" @click="tzkh(item.YHMC001)">
                            <td>{{index+1}}</td>
                            <td><p>{{item.YHMC_JC}}</p></td>
                            <td>{{item.YQL | point(4)}}</td>
                            <td>
                                <van-button type="primary" color="#40C887" size="small" v-if="item.HBZJ>=0">{{item.HBZJ | point(0)}}</van-button>
                                <van-button type="danger" color="#F15F78" size="small" v-else>{{item.HBZJ | point(0)}}</van-button>
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
                        本日销售(万方):&emsp;<span>{{list2.RXS | point(0)}}</span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">{{list2.RJJH | point(0)}}</p>
                            <p class="p2">日均计划</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">{{list2.RJHT | point(0)}}</p>
                            <p class="p2">日均合同</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1" :class="list2.JHB>=0?'Upward':'Downarrow'">{{list2.JHB | point(0)}}</p>
                            <p class="p2">与计划比</p>
                            
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1" :class="list2.HTB>=0?'Upward':'Downarrow'">{{list2.HTB | point(0)}}</p>
                            <p class="p2">与合同比</p>
                        </div>
                    </div>
                </div>
                <div class="plan-item">
                    <div class="plan-item-title">
                        本月销售累计(亿方):&emsp;<span>{{list3.YLXS | point(2)}}</span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">{{list3.YJH | point(2)}}</p>
                            <p class="p2">本月计划</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">{{list3.YHT | point(2)}}</p>
                            <p class="p2">本月实签合同</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1">
                                {{list3.JHJD | point(0)}}
                                
                            </p>
                            <p class="p3"><van-progress :percentage="this.pro1*1" :show-pivot="false" /></p>
                            <p class="p2">完成计划进度</p>
                        </div>
                        
                    </div>
                </div>
                <div class="plan-item">
                    <div class="plan-item-title">
                        本年销售累计(亿方):&emsp;<span>{{list4.NLXS | point(0)}}</span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">{{list4.NJH | point(2)}}</p>
                            <p class="p2">年度目标</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">{{list4.QNTQ | point(2)}}</p>
                            <p class="p2">去年同期</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1">
                                {{list4.NJD | point(0)}}
                                
                            </p>
                            <p class="p3"><van-progress :percentage="this.pro2*1" :show-pivot="false" /></p>
                            <p class="p2">完成进度</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myChart2"></div>
        </div>
        <van-tabbar v-model="tabbarActive" :fixed="true">
            <van-tabbar-item to="/khjlhome" replace>
                <span>首页</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='shouye' />
            </van-tabbar-item>
            
            
            <van-tabbar-item to="/khhome"  replace>
                <span>客户</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='kehu' />
            </van-tabbar-item>
            
            <van-tabbar-item to="/wd" replace>
                   <span>我的</span>
                    <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='wode' />
                
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:'KhjlHome',
    data () {
        return {
            tabbarActive:0,
            icon:require('../image/home/xiaoxi.png'),
            
            list:{},
            list1:[],
            tableIsshow:false,
            list2:{},
            list3:{},
            list4:{},
            list5x:[],
            list5y:[],
            list5y2:[],
            pro1:0,
            pro2:0
        }
    },
    created(){
        
        setTimeout(()=>{
            this.getData()
            this.getData2()
            this.getData3()
            this.getData4()
            this.getData5()
        },500)
    },
    mounted(){
        
        
        //this.drawLine();
        //this.drawLine2();
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
                    text: new Date().getFullYear()+'年分月销售趋势(亿方)',
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
                        data:this.list5y,
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
                        data:this.list5y2,
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
            setTimeout(() => {
                //let czygl001=JSON.parse(localStorage.getItem('user')).CZYGL001
                let czygl001=this.$store.getters.getUser.CZYGL001
                //console.log(czygl001)
                // ,{czygl001:czygl001.toString()}
                this.$axios.get('/ManagerCustomer?czygl001='+czygl001).then((res)=>{
                    //console.log(res.data)
                    
                    this.list=res.data.data[0]
                    
                    if(res.data.count.length>0){
                        this.list1=res.data.count
                        this.tableIsshow=true
                    }else{
                        this.list1=[]
                        this.tableIsshow=false
                    }
                    // this.list2=res.data.data2[0]
                    // this.list3=res.data.data3[0]
                    // this.pro1=res.data.data3[0].JHJD
                    
                    // this.list4=res.data.data4[0]
                    // this.pro2=res.data.data4[0].NJD
                    // for (let index = 0; index < res.data.data5.length; index++) {
                    //     this.list5x.push(res.data.data5[index].YQL002)
                    //     this.list5y.push(res.data.data5[index].YQL)
                    //     this.list5y2.push(res.data.data5[index].QNYQL)
                    // }
                    // this.drawLine2()
                }).catch((error)=>{
                    console.log(error)
                })
            }, 200);
        },
        //日销售信息
        getData2(){
            setTimeout(() => {
                let czygl001=this.$store.getters.getUser.CZYGL001
                this.$axios.get('/ManagerCustomerMessageDay',{
                    params: {
                        czygl001: czygl001,
                        year:new Date().getFullYear(),
                        month:new Date().getMonth()+1,
                        day:new Date().getDate()
                    }
                }).then((res)=>{
                    //console.log(res.data)
                    let d=res.data
                    
                    this.list2=d.data[0]
                    
                }).catch((error)=>{
                    //console.log(error)
                })
            }, 200);   
        },
        //月销售信息
        getData3(){
            setTimeout(() => {
                let czygl001=this.$store.getters.getUser.CZYGL001
                this.$axios.get('/ManagerCustomerMessageMonth',{
                    params: {
                        czygl001: czygl001,
                        year:new Date().getFullYear(),
                        month:new Date().getMonth()+1,
                        day:new Date().getDate()
                    }
                }).then((res)=>{
                    //console.log(res.data)
                    let d=res.data
                    this.list3=d.data[0]
                    this.pro1=d.data[0].JHJD
                }).catch((error)=>{
                    console.log(error)
                })
            }, 200);   
        },
        //年销售信息
        getData4(){
            setTimeout(() => {
                let czygl001=this.$store.getters.getUser.CZYGL001
                this.$axios.get('/ManagerCustomerMessageYear',{
                    params: {
                        czygl001: czygl001,
                        year:new Date().getFullYear(),
                        month:new Date().getMonth()+1
                    }
                }).then((res)=>{
                    //console.log(res.data)
                    let d=res.data
                    
                    
                    this.list4=d.data[0]
                    this.pro2=d.data[0].NJD
                    
                }).catch((error)=>{
                    //console.log(error)
                })
            }, 200);   
        },
        //图表
        getData5(){
            setTimeout(() => {
                let czygl001=this.$store.getters.getUser.CZYGL001
                this.$axios.get('/ManagerCustomer1',{
                    params: {
                        czygl001: czygl001,
                        year:new Date().getFullYear(),
                        month:new Date().getMonth()-2
                    }
                }).then((res)=>{
                    console.log(res.data)
                    let d=res.data
                    for (let i = 0; i < d.count.length; i++) {
                        if(d.count[i].QNYQL==0){
                            d.count[i].QNYQL=""
                        }
                        this.list5y2.push(d.count[i].QNYQL)
                    }
                    for (let i = 0; i < d.data.length; i++) {
                        if(d.data[i].YQL==0){
                            d.data[i].YQL=""
                        }
                        this.list5y.push(d.data[i].YQL)
                    }
                    this.drawLine2()
                    
                }).catch((error)=>{
                    //console.log(error)
                })
            }, 200);   
        },
    }
}
</script>
<style lang="less" scoped>
.khjlhome{
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
        // padding-top:46px;
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
            padding-top: 15px;
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
                    margin-top: 0.14rem;
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
                        overflow: hidden;
                        position: relative;
                        p{
                            margin: 0;
                            padding: 0;
                            width: 100%;
                            overflow: hidden;
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


