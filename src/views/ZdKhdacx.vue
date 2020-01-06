<template>
    <div class="zdkhdacx">
        <!-- <span>{{$route.params}}</span> -->
        <!-- <van-nav-bar
            title="客户档案查询"
            :border="false"
            :fixed="true"
            @click-left="onClickLeft"
        /> -->
        <div class="content">
            <!-- <div class="item-xx">
                <van-cell-group>
                    <van-cell title="客户名称" :value="list.YHMC002" />
                    <van-cell v-if="list.YHMC010==0||list.YHMC010==2||list.YHMC010==3" title="管线名称" value="川渝管网" />
                    <van-cell v-else-if="list.YHMC010==4" title="管线名称" value="长输管道" />
                    <van-cell v-if="list.YHMC009==0" title="供气类型(板块)" value="统购板块" />
                    <van-cell v-else-if="list.YHMC009==2" title="供气类型(板块)" value="油田板块" />
                    <van-cell v-else-if="list.YHMC009==3" title="供气类型(板块)" value="其他" />
                    <van-cell title="地区" :value="list.DQ002" />
                    <van-cell title="省份" :value="list.SF002" />
                    <van-cell title="客户状态" value="已供气" />
                    <van-cell title="客户类型" :value="list.HYMC002" />
                    <van-cell v-if="list.KQBZ==3" title="是否内部炼厂" value="外销" />
                    <van-cell v-else-if="list.KQBZ==4" title="是否内部炼厂" value="关联交易" />
                    <van-cell v-else-if="list.KQBZ==5" title="是否内部炼厂" value="内销" />
                    <van-cell title="开始用气时间" :value="list.YHMC008" />
                </van-cell-group>
            </div> -->
            
        </div>
        <div class="content2">
            <div class="plan">
                <div class="plan-item">
                    <div class="plan-item-title">
                        日销售情况(万方)&emsp;<span></span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">{{list4.RQL004 | point(4)}}</p>
                            <p class="p2">销售量</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">{{list4.YJH004 | point(4)}}</p>
                            <p class="p2">计划量</p>
                        </div>
                        
                    </div>
                </div>
                <div class="plan-item">
                    <div class="plan-item-title">
                        月销售情况(亿方)&emsp;<span></span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">{{list5.YJH | point(4)}}</p>
                            <p class="p2">月计划</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">{{list5.YLXS | point(4)}}</p>
                            <p class="p2">月累计</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1">
                                {{pro1}}%
                            </p>
                            <p class="p3"><van-progress :percentage="pro1*1" :show-pivot="false" /></p>
                            <p class="p2">完成进度</p>
                        </div>
                        
                    </div>
                </div>
                <div class="plan-item">
                    <div class="plan-item-title">
                        年销售情况(亿方)&emsp;<span></span>
                    </div>
                    <div class="plan-item-content">
                        <div class="plan-item-content-item">
                            <p class="p1">{{list6.NJH | point(4)}}</p>
                            <p class="p2">年计划</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1">{{list6.NLXS | point(4)}}</p>
                            <p class="p2">年累计</p>
                        </div>
                        <div class="plan-item-content-item">
                            <p class="p1 cor1">
                                {{pro2}}%
                            </p>
                            <p class="p3"><van-progress :percentage="pro2*1" :show-pivot="false" /></p>
                            <p class="p2">完成进度</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myChart"></div>
            <div id="myChart2"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ZdKhdacx",
    created(){
        // this.getUser()
        this.getUser2()
        this.getUser3()
        this.getUser4()
        this.getUser5()
        this.getUser6()
    },
    mounted(){
        
        // this.drawLine();
        // this.drawLine2();
        
    },
    
    data () {
        return {
            list:{},
            list1time:[],
            list1Rdata:[],
            list1Tdata:[],  
            list2time:[],
            list2data:[],
            list4:{
                RQL004:0,
                YJH004:0
            },
            list5:{
                YJH:0,
                YLXS:0

            },
            list6:{
                NJH:0,
                NLXS:0

            },
            pro1:0,
            pro2:0
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        //折线图
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            //// 绘制图表
            myChart.setOption({
                title : {
                    text: new Date().getFullYear()+'年'+(new Date().getMonth()+1)+'月'+'分日销量(万方)',
                    x:'8',
                    textStyle:{
                        fontSize:'10'
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
                    right: '0%',
                     textStyle:{
                        fontSize:'10'
                    },
                    data:['当前日销售','去年同期销售']
                },
                xAxis: [
                    {
                        type: 'category',
                        //data: this.list1time,
                        data:['1','3','5','7','9','11','13','15','17','18','20','22','24','26','28','31'],
                        axisPointer: {
                            type: 'shadow',
                        },
                        axisLabel : {//坐标轴刻度标签的相关设置。
                            interval:0,
                            //rotate:"90"
                        },
                        
                        "axisLine":{       //x轴
                            "show":true,
                            lineStyle:{
                                type:'dashed'
                            }
                        },
                        "axisTick":{       //x轴刻度线
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
                        //name: '当前的日销售',
                        // min: 0,
                        // max: 250,
                        // interval: 60,
                        axisLabel: {
                            formatter: '{value}'
                        },
                        "axisLine":{       //y轴
                            "show":true,
                            lineStyle:{
                                type:'dashed'
                            }
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
                    //     //name: '去年同期销售',
                    //     // min: 0,
                    //     // max: 10,
                    //     // interval: 60,
                        
                    //     axisLabel: {
                    //         margin:2,
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
                        name:'当前日销售',
                        type:'line',
                        // yAxisIndex: 1,
                        data:this.list1Rdata,
                        //data:['12','32','34','23'],
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
                        name:'去年同期销售',
                        type:'line',
                        //yAxisIndex: 1,
                        data:this.list1Tdata,
                        //data:['02','22','24','26'],
                        smooth:false,   //关键点，为true是不支持虚线的，实线就用true
                        itemStyle : { 
                            normal : { 
                                color:'#80dbaf', //改变折线点的颜色
                                lineStyle:{ 
                                    color:'#43ca89', //改变折线颜色
                                    width:2,
                                    type:'dotted'  //'dotted'虚线 'solid'实线
                                } 
                            },
                        }
                    }        
                ]
            })
        },
        //柱状图
        drawLine2(){
            // 基于准备好的dom，初始化echarts实例
            let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
            //// 绘制图表
            myChart2.setOption({
                title : {
                    text: new Date().getFullYear()+'年分月销售(万方)',
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

                    data:['月用气量']
                },
                xAxis: [
                    {
                        type: 'category',
                        //data: this.list2time,
                        data:['1','2','3','4','5','6','7','8','9','10','11','12'],
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
                grid:{
                    left: '15%',
                    //right: '10%',
                },
                yAxis: [
                    {
                        type: 'value',
                        // name: '月累计',
                        // min: 0,
                        // max: 250,
                        // interval: 30,
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
                    //     // interval: 30,
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
                        name:'月用气量',
                        type:'bar',
                        data:this.list2data,
                        //data:['2','3','5'],
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
                    }
                ]
            })
        },
        //获取客户详细数据
        // getUser(){
        //     this.$axios.post('/CustomerMessage',{
        //         yhmc001:this.$route.params.yhmc001
        //     }).then((res)=>{
        //         let d=res.data.d
        //         d=JSON.parse(d)
        //         console.log(d)
        //         this.list=d.data[0]
                
        //         if(d.data1.length>0){
        //             this.list4=d.data1[0]
        //         }
        //         if(d.data2.length>0){
        //             this.list5=d.data2[0]
        //             this.pro1=d.data2[0].YJD*100
        //         }
        //         if(d.data3.length>0){
        //             this.list6=d.data3[0]
        //             this.pro2=d.data3[0].NJD*100
        //         }
        //         if(d.data4.length>0){
        //             for (let i = 0; i < d.data4.length; i++) {
        //                 this.list1time.push(d.data4[i].RQL001+'-'+d.data4[i].RQL002+'-'+d.data4[i].RQL003)
        //                 this.list1Rdata.push((d.data4[i].RQL*1).toFixed(2))
        //                 this.list1Tdata.push((d.data4[i].TQRQL*1).toFixed(2))
        //             }
        //         }
        //         // if(d.data4.length>0){
        //         //     for (let i = 0; i < d.data4.length; i++) {
        //         //         this.list1time.push(d.data2[i].RQL003)
                        
        //         //     }
        //         // }
        //         this.drawLine();
        //         if(d.data5.length>0){
        //             for (let i = 0; i < d.data5.length; i++) {
        //                 this.list2time.push(d.data5[i].YQL001)
        //                 this.list2data.push((d.data5[i].YQL*1).toFixed(2))
        //             }
        //         }
        //         this.drawLine2();
        //     }).catch((error)=>{
        //         console.log(error)
        //     })
        // },
        //获取日销售信息
        getUser2(){
            this.$axios.post('/ZDCustomerMessageDay',{
                ZDGS001:this.$route.params.yhmc001,
                year:new Date().getFullYear(),
                month:new Date().getMonth()+1,
                day:new Date().getDate()
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data){
                    this.list4=d.data[0]
                }
                
            }).catch((error)=>{
                console.log(error)
            })
        },
        //获取月销售信息
        getUser3(){
            this.$axios.post('/ZDCustomerMessageMonth',{
                ZDGS001:this.$route.params.yhmc001,
                year:new Date().getFullYear(),
                month:new Date().getMonth()+1,
                day:new Date().getDate()
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                console.log(d)
                
                if(d.data){
                    this.list5=d.data[0]
                    this.pro1=((d.data[0].YLXS/d.data[0].YJH)*100).toFixed(0)
                }
            }).catch((error)=>{
                console.log(error)
            })
        },
        //获取年销售
        getUser4(){
            this.$axios.post('/ZDCustomerMessageYear',{
                ZDGS001:this.$route.params.yhmc001,
                year:new Date().getFullYear(),
                month:new Date().getMonth()+1,
                day:new Date().getDate()
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data){
                    this.list6=d.data[0]
                    this.pro2=((d.data[0].NLXS/d.data[0].NJH)*100).toFixed(0)
                }
                
            }).catch((error)=>{
                console.log(error)
            })
        },
        //第一个图表
        getUser5(){
            this.$axios.post('/ZDCustomerMessage1',{
                ZDGS001:this.$route.params.yhmc001,
                year:new Date().getFullYear(),
                month:new Date().getMonth()+1,
                day:new Date().getDate()
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                console.log(d)
                if(d.data){
                    for (let i = 0; i < d.data.length; i++) {
                        this.list1time.push(d.data[i].RQL003)
                        if(d.data[i].RQL004==0){
                            d.data[i].RQL004=""
                        }
                        this.list1Rdata.push(d.data[i].RQL004)
                    }
                }
                if(d.count){
                    for (let i = 0; i < d.count.length; i++) {
                    
                        if(d.count[i].RQL004==0){
                            d.count[i].RQL004=""
                        }
                        this.list1Tdata.push(d.count[i].RQL004)
                    }
                }
                
                this.drawLine();
            }).catch((error)=>{
                console.log(error)
            })
        },
        //第二个图表
        getUser6(){
            this.$axios.post('/ZDCustomerMessage2',{
                ZDGS001:this.$route.params.yhmc001,
                year:new Date().getFullYear(),
                month:new Date().getMonth()+1,
                day:new Date().getDate()
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data){
                    for (let i = 0; i < d.data.length; i++) {
                        if(d.data[i].YQL003==0){
                            d.data[i].YQL003=""
                        }
                        this.list2data.push(d.data[i].YQL003)
                    }
                }
                
                // for (let i = 0; i < d.count.length; i++) {
                    
                //     if(d.count[i].RQL004==0){
                //         d.count[i].RQL004=""
                //     }
                //     this.list1Tdata.push(d.count[i].RQL004)
                // }
                this.drawLine2();
            }).catch((error)=>{
                console.log(error)
            })
        }
        //获取数据项
        // getUserdata(){
        //     this.$axios.post('/CustomerMessage',{
        //         yhmc001:this.$route.params.yhmc001
        //     }).
        // }
    }
}
</script>
<style lang="less" scoped>
    .zdkhdacx{
        .van-nav-bar{
            background-color: #1f6eff;
            .van-nav-bar__title{
                color:#fffaff;
                font-weight: bold;
            }
            .van-nav-bar__left{
                .van-icon{
                    color: #fffaff;
                    font-weight: bold;
                }
            }
        }
        .content{
            // padding-top: 46px;
            .item-xx{
                .van-cell-group{
                    .van-cell{
                        &::after{
                            left: 0px;
                        }
                    }
                }
            }
        }
        .content2{
            padding: 0 0.3rem;
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
                        justify-content: space-between;
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
                            overflow: hidden;
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
                                    width: 100%;
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
            #myChart{
                margin-top: 0.3rem;
                padding-top: 0.226rem;
                // padding-left:0.01rem;
                // padding-right:0.02rem;
                height: 4.46rem;
                background-color: #fff;
                border-radius: 7px;
            }
            #myChart2{
                margin-top: 0.3rem;
                margin-bottom: 0.37rem;
                height: 4.46rem;
                background-color: #fff;
                border-radius: 7px;
            }
        }
        .van-cell__value{
            flex:2
        }
    }
    .cor1{
        color: #40c887;
    }
</style>
