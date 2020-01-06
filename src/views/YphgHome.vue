<template>
    <div class="yphghome">
        <!-- <van-nav-bar
            title="油品化工"
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
            </div>
            <div id="myChart"></div>
            <div class="tbl">
                 <div class="tal-tilte">
                     分产品生产情况(吨)
                 </div>
                 <div class="tal-content">
                     <table>
                        <tr class="frist">
                            <td>产品名称</td>
                            <td>本日</td>
                            <td>本月累计</td>
                            <td>本年累计</td>
                        </tr>
                        <tr v-for="(item,index) in list2" :key="index">
                            <td>{{item.XMMC}}</td>
                            <td>{{item.DRQ | point(0)}}</td>
                            <td>{{item.YLQ | point(0)}}</td>
                            <td>{{item.NLQ | point(0)}}</td>
                        </tr>
                    </table>
                 </div>
            </div>
            <div class="tbl">
                 <div class="tal-tilte">
                     分产品销售情况(吨)
                 </div>
                 <div class="tal-content">
                     <table>
                        <tr class="frist">
                            <td>产品名称</td>
                            <td>本日</td>
                            <td>本月累计</td>
                            <td>本年累计</td>
                        </tr>
                        <tr v-for="(item,index) in list3" :key="index">
                            <td>{{item.XMMC}}</td>
                            <td>{{item.DRQ | point(0)}}</td>
                            <td>{{item.YLQ | point(0)}}</td>
                            <td>{{item.NLQ | point(0)}}</td>
                        </tr>
                    </table>
                 </div>
            </div>
            <!-- <div class="plan">
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
            </div> -->
            <!-- <div id="myChart2"></div> -->
            <div id="myChart3"></div>
            <div id="myChart4"></div>
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
        <!-- <van-tabbar v-model="tabbarActive" :fixed="true"> -->
            <!-- <van-tabbar-item>
                <router-link to="/home">
                    <img src="../image/tabbal/shouye.png">
                </router-link>
            </van-tabbar-item> -->
<!--             
            <van-tabbar-item>
                <router-link to="/trqhome">
                    <img src="../image/tabbal/tianranqi.png">
                </router-link>
            </van-tabbar-item>
            <van-tabbar-item>
                <router-link  to="/yphghome">
                    <img src="../image/tabbal/youhuapinxuanzhong.png">
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
        </van-tabbar> -->
    </div>
</template>

<script>
export default {
    name:'YphgHome',
    data () {
        return {
            tabbarActive:1,
            icon:require('../image/home/xiaoxi.png'),
            girds:[
                // {text:"客户",icon:require("../image/trq/kehu.png"),url:'/yphgkh'},
                {text:"数据中心",icon:require("../image/trq/yingxiaojianbao.png"),url:'/yphgsjzx'},
                {text:"审核",icon:require("../image/trq/shenhe.png"),url:'/sh'}
            ],
            list1:[],
            list1data:[],
            list2:[],
            list3:[],
            list4:[],
            list4data:[],
            list5:[],
            list5data:[],
        }
    },
    mounted(){
        //this.drawLine();
        //this.drawLine2();
        //this.drawLine3();
        this.drawLine4();
    },
    created () {
      this.getBin();
      this.getlist();
      this.getlist2();
      this.getlist3();  
    },
    methods:{
        //消息跳转
        tz(){
            this.$router.push('/yphgxx')
        },
        //九宫格跳转
        topath(url){
            if(url=="/yphgkh"){
                this.$router.push(url)
            }else if(url=="/yphgsjzx"){
                this.$router.push(url)
            }else if(url=="/sh"){
                this.$router.push('/yphgshxz')
            }
        },
        //饼图绘制
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title : {
                    text: new Date().getFullYear()+'年油化品销售情况(吨)',
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
                    data: this.list
                },
                series : [
                    {
                        name: '销售情况',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        
                        data:this.list1data,
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
        //柱状图绘制
        drawLine3(){
            // 基于准备好的dom，初始化echarts实例
            let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
            //// 绘制图表
            myChart3.setOption({
                title : {
                    text: new Date().getFullYear()+'年硫磺分月销售(吨)',
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

                    data:['月累计','去年同期']
                },
                grid:{
                    left: '15%',
                    //right: '10%',
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
                        //interval: 30,
                        axisLabel: {
                            //margin:20,
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
                    }
                    // {
                    //     type: 'value',
                    //     // name: '同比增幅',
                    //     // min: 0,
                    //     // max: 10,
                    //     interval: 30,
                    //     axisLabel: {
                    //         formatter: '{value} %'
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
                        data:this.list4data,
                        //data:[21,12,12],
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
                        name:'去年同期',
                        type:'line',
                        //yAxisIndex: 1,
                        data:this.list4,
                        //data:['12','23','12'],
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
        drawLine4(){
            // 基于准备好的dom，初始化echarts实例
            let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
            //// 绘制图表
            myChart4.setOption({
                title : {
                    text: new Date().getFullYear()+'年硫磺销售价格(元/吨)',
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

                    data:['月均价','去年同期']
                },
                grid:{
                    left: '15%',
                    //right: '10%',
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
                        //interval: 30,
                        axisLabel: {
                            //margin:20,
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
                    }
                    
                ],
                series: [
                    {
                        name:'月均价',
                        type:'line',
                        //yAxisIndex: 1,
                        data:this.list5data,
                        smooth:false,   //关键点，为true是不支持虚线的，实线就用true
                        itemStyle : { 
                            normal : { 
                                color:'#f26079', //改变折线点的颜色
                                lineStyle:{ 
                                    color:'#f68fa1', //改变折线颜色
                                    width:2,
                                    type:'dotted'  //'dotted'虚线 'solid'实线
                                } 
                            },
                        }
                    },
                     {
                        name:'去年同期',
                        type:'line',
                        //yAxisIndex: 1,
                        data:this.list5,
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
        //获取饼图的数据和分产品销售情况
        getBin(){
            this.$axios.post('/CPMyCustomer',{
                DW001:this.$store.getters.getUser.DW001,
                FLAG:this.$store.getters.getUser.FLAG,
                czygl001:this.$store.getters.getUser.CZYGL001,
                "year":new Date().getFullYear(),
                "month":new Date().getMonth()+1,
                "day":new Date().getDate()}).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                console.log(d)
                this.list3=d.data
                for (let i = 0; i < d.data.length; i++) {
                    this.list1.push(d.data[i].XMMC)
                    this.list1data.push({value:d.data[i].NLQ*100,name:d.data[i].XMMC})
                }
                this.drawLine();
            }).catch((error)=>{
                console.log(error)
            })
        },
        //获取第一个表格数据
        getlist(){
            this.$axios.post('/CPMyCustomer1',{
                DW001:this.$store.getters.getUser.DW001,
                FLAG:this.$store.getters.getUser.FLAG,
                czygl001:this.$store.getters.getUser.CZYGL001,
                "year":new Date().getFullYear(),
                "month":new Date().getMonth()+1,
                "day":new Date().getDate()}).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                console.log(d)
                this.list2=d.data;
            }).catch((error)=>{
                //console.log(error)
            })
        },
        //获取硫磺分月销售情况
        getlist2(){
            this.$axios.post('/CPMyCustomer2',{
                DW001:this.$store.getters.getUser.DW001,
                FLAG:this.$store.getters.getUser.FLAG,
                czygl001:this.$store.getters.getUser.CZYGL001,
                "year":new Date().getFullYear()-1,
                "month":new Date().getMonth()+1}).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                for (let i = 0; i < d.count.length; i++) {
                    if(d.count[i].RQL004==0){
                        d.count[i].RQL004=''
                    }
                    this.list4.push(d.count[i].RQL004)
                }
                for (let i = 0; i < d.data.length; i++) {
                    // if(d.data[i].RQL004==0){
                    //     d.data[i].RQL004=''
                    // }
                    this.list4data.push(d.data[i].RQL004)
                }
                this.drawLine3()
                // this.list2=d.data;
            }).catch((error)=>{
                //console.log(error)
            })
        },
        //获取硫磺分月销售情况
        getlist3(){
            this.$axios.post('/CPMyCustomer3',{
                DW001:this.$store.getters.getUser.DW001,
                FLAG:this.$store.getters.getUser.FLAG,
                czygl001:this.$store.getters.getUser.CZYGL001,
                "year":new Date().getFullYear()-1,
                "month":new Date().getMonth()+1}).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //  console.log(d)
                for (let i = 0; i < d.count.length; i++) {
                    if(d.count[i].JJ==0){
                        d.count[i].JJ=''
                    }
                    this.list5.push(d.count[i].JJ)
                }
                for (let i = 0; i < d.data.length; i++) {
                    if(d.data[i].JJ==0){
                        d.data[i].JJ=''
                    }
                    this.list5data.push(d.data[i].JJ)
                }
                this.drawLine4()
                // this.list2=d.data;
            }).catch((error)=>{
                //console.log(error)
            })
        },
    }
}
</script>
<style lang="less" scoped>
.yphghome{
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
            background-color: #fff;
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
                            // &.Upward::after{
                            //     content: '';
                            //     position: absolute;
                            //     height: 100%;
                            //     width: 0.34rem;
                            //     right: -0.34rem;
                            //     top:0.16rem;
                            //     background-image: url("../image/home/shang2.png");
                            //     background-repeat: no-repeat;
                            //     background-size:100% 100%;
                            // }
                            // &.Downarrow::after{
                            //     content: '';
                            //     position: absolute;
                            //     height: 100%;
                            //     width: 0.34rem;
                            //     right: -0.34rem;
                            //     top:0.00rem;
                            //     background-image: url("../image/home/xia2.png");
                            //     background-repeat: no-repeat;
                            //     background-size:100% 100%;
                            // }
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
        #myChart3{
            padding-top: 0.15rem;
            margin-top: 0.3rem;
            margin-bottom: 0.6rem;
            height: 4.46rem;
            background-color: #fff;
            border-radius: 7px;
        }
        #myChart4{
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


