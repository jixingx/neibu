<template>
    <div class="yphgshydbbsh">
        <!-- <van-nav-bar
            title="月度报表审核"
            :border="false"
            :fixed="true"
            @click-left="onClickLeft"
        /> -->
        <div class="content">
            <div class="input-btn">
                <div class="inputrili" @click="timeShow">
                    <span>{{ time | timefliter('yyyy-mm')}}</span>
                    <img :src="icon">
                </div>
                <!-- <i>至</i>
                <div class="inputrili" @click="timeShow2">
                    <span>{{ time1 | timefliter('yyyy-mm-dd')}}</span>
                    <img :src="icon">
                </div> -->
                <van-button type="info" size="small" @click="SH">审核</van-button>
            </div>
            <div class="content-list">
                <van-tabs v-model="active" background="#ffffff" title-active-color="#2769fe" color="#2769fe" title-inactive-color="#444444" :border="false" line-width="25%" @change="changetab">
                    <van-tab title="原油">
                        <table class="table" v-if="data1Isshow">
                            <tr>
                                <th>产品名称</th>
                                <th>产量<span>(万方)</span></th>
                                <th>销量<span>(万方)</span></th>
                            </tr>
                            <tr v-for="(item,index) in data1" :key="index">
                                <td>{{item.CP002}}</td>
                                <td>{{item.Output | point(4)}}</td>
                                <td>{{item.Sales | point(4)}}</td>
                            </tr>
                        </table>
                        <div class="text" v-else>
                            暂无数据
                        </div>
                    </van-tab>
                    <van-tab title="化工产品">
                        <table class="table" v-if="data3Isshow">
                            <tr>
                                <th>产品名称</th>
                                <th>产量<span>(万方)</span></th>
                                <th>销量<span>(万方)</span></th>
                            </tr>
                            <tr v-for="(item,index) in data1" :key="index">
                                <td>{{item.CP002}}</td>
                                <td>{{item.Output | point(4)}}</td>
                                <td>{{item.Sales | point(4)}}</td>
                            </tr>
                        </table>
                        <div class="text" v-else>
                            暂无数据
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <!-- 日期选择器 -->
        <transition>
            <div class="time" v-if="isShow">
                <van-datetime-picker
                    v-model="currentDate"
                    type="year-month"
                    :maxDate="maxDate"
                    @cancel="close"
                    @confirm="DeterTime"
                />
            </div>
        </transition>
        <!-- <transition>
            <div class="time" v-if="isShow2">
                <van-datetime-picker
                    v-model="currentDate2"
                    type="date"
                    :minDate="minDate"
                    @cancel="close2"
                    @confirm="DeterTime2"
                />
            </div>
        </transition> -->
        <!-- 遮罩层 -->
        <van-overlay
        :show="isShow"
        @click="isShow = false"
        />
        <!-- <van-overlay
        :show="isShow2"
        @click="isShow2 = false"
        /> -->
    </div>
</template>
<script>
export default {
    name:'YphgShydbbsh',
    data () {
        return {
            active:0,
            currentDate: new Date(),
            //currentDate2:new Date(new Date().getFullYear()+"-12-31"),
            maxDate: new Date(),
            time:new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1).toString().padStart(2,'0'),
            //time1:new Date().getFullYear()+"-12-31",
            icon:require("../image/trq/rili.png"),
            isShow:false,
            isTextshow:true,
            list:[],
            data1Isshow:true,
            data2Isshow:true,
            data3Isshow:true,
            data4Isshow:true,
            data1:[],
            data2:[],
            data3:[],
            data4:[],
            type:2,
            FL001:2
            //isShow2:false      
        }
    },
    created () {
        this.getlist()
    },
    methods: {
        onClickLeft(){
            this.$router.go("-1")
        },
        //点击日期弹出选择时间框
        timeShow(){
            this.isShow=true;
        },
        // timeShow2(){
        //     this.isShow2=true;
        // },
        //日历点击取消按钮
        close(){
            this.isShow=false;
        },
        // close2(){
        //     this.isShow2=false;
        // },
        //日历点击确认
        DeterTime(value){
            // console.log(value)
            let date = value;
            let m = date.getMonth() + 1;
            let d = date.getDate();
            if (m >= 1 && m <= 9) {
                m = "0" + m;
            }
            if (d >= 0 && d <= 9) {
                d = "0" + d;
            }
            let timer = date.getFullYear() + "-" + m + "-" + d
            this.time=timer
            this.isShow=false;
            this.getlist()
        },
        // DeterTime2(value){
        //     // console.log(value)
        //     let date = value;
        //     let m = date.getMonth() + 1;
        //     let d = date.getDate();
        //     if (m >= 1 && m <= 9) {
        //         m = "0" + m;
        //     }
        //     if (d >= 0 && d <= 9) {
        //         d = "0" + d;
        //     }
        //     let timer = date.getFullYear() + "-" + m + "-" + d
        //     this.time1=timer
        //     this.isShow2=false;
        // }
        //标签切换
        changetab(name,title){
            //console.log(name,title)
            if(name==0){
                this.type=2;
                this.FL001=2;
            }else if(name==1){
                this.type=1
                this.FL001=1
            }
            this.getlist()
        },
        //进页面默认请求
        getlist(){
            let startTime=this.time.split('-');
            let year=startTime[0];
            let month=startTime[1];
            let FL001=this.FL001;
            // let endTime=this.time1.split('-');
            // let year1=endTime[0];
            // let month1=endTime[1];
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            this.$axios.post('/CPYDBBSHCX',{
                FL001,
                DW001,
                FLAG,
                year,
                month
            }).then((res)=>{
                
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data){
                    if(d.data.length>0){
                        this.list=d.data
                        this.data1Isshow=true;
                        this.data3Isshow=true;
                        this.data1=d.data
                    }else{
                        this.data1Isshow=false;
                        this.data3Isshow=false; 
                    }
                    
                }else{
                    this.$router.push('/yphgydbbcxsh')
                } 
            }).catch((error)=>{ 
                //console.log(error)
            })
        },
        //审核
        SH(){
            //let optype=1
            let FL001=this.FL001
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            let CZYGL001=this.$store.getters.getUser.CZYGL001
            let CZYGL003=this.$store.getters.getUser.CZYGL003
            let startTime=this.time.split('-');
            let year=startTime[0];
            let month=startTime[1];
            this.$axios.post('/CPYDBBSH',{
                FL001,
                DW001,
                FLAG,
                CZYGL001,
                CZYGL003,
                year,
                month
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.success){
                    this.$dialog.alert({
                        message: '审核成功'
                        }).then(() => {
                            if(this.$store.getters.getUser.FLAG=="ZYQ"||this.$store.getters.getUser.FLAG=="KQ"){
                                this.$router.push('/yphgshxz')
                            }else{
                                this.$router.push('/yphgydbbcxsh')
                            }
                    });
                }else{
                    this.$dialog.alert({
                        message: '已审核过'
                        }).then(() => {
                    });
                }
            }).catch((error)=>{ 
                console.log(error)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.yphgshydbbsh{
    .van-nav-bar{
        .van-nav-bar__title{
            color:#303030;
            font-weight: bold;
        }
        .van-nav-bar__left{
            .van-icon{
                color: #2a2a2a;
                font-weight: bold;
            }
        }
    }
    .content{
        // padding-top: 46px;
        .input-btn{
            padding: 0 0.32rem;
            background-color: #e8f0fd;
            height: 1.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            i{
                font-style: inherit;
                font-size: 0.24rem;
            }
            .inputrili{
                height: 30px;
                width: 1.8rem;
                background-color: #70a1fd;
                border-radius: 2px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0.3rem;
                span{
                    color: #ffffff;
                    font-size: 0.22rem;
                    
                }
                img{
                    width: 0.34rem;
                    height: 0.34rem;
                }
            }
        }
        .content-list{
            .table{
                border-collapse:collapse;
                border: 0;
                margin-top: 0.3rem;
                width: 100%;
                background-color: #fff;
                tr{
                    min-height: 0.78rem;
                    // line-height: 0.78rem;
                    &:first-child{
                        background-color: #e8f0fd;
                        color: #696d78;
                        font-size: 0.24rem;
                        th{
                            line-height: 0.78rem;
                            width: 33.333333%;
                            text-align: left;
                            padding: 0;
                            margin: 0;
                            &:first-child{
                                padding-left:0.32rem;
                                position: relative;
                                .van-icon{
                                    position: absolute;
                                    font-size: 0.26rem;
                                    color: #1f6dff;
                                    font-weight: bold;
                                    left: 0.16rem;
                                    top: 0.26rem;
                                } 
                            }
                            &:last-child{
                                position: relative;
                                .van-icon{
                                    position: absolute;
                                    font-size: 0.26rem;
                                    color: #1f6dff;
                                    font-weight: bold;
                                    right: 0.32rem;
                                    top: 0.26rem;
                                }
                            }
                            span{
                                font-size: 0.2rem;
                                margin-left: 0.16rem;
                            }
                        
                        }
                    }
                    td{
                        line-height: 0.78rem;
                        font-size: 0.26rem;
                        color: #2f2f2f;
                        font-weight: 400;
                        width: 33.333333%;
                        &:first-child{
                            padding-left:0.32rem;
                        }
                    }
                }
            }
            .table2{
                text-align: center;
                tr{
                    &:first-child{
                        th{
                            text-align: center;
                            
                        }
                    }
                }
            }
        }
    }
    .time{
        position: fixed;
        bottom: 0px;
        left: 0;
        width: 100%;
        z-index: 9999;
    }
    .text{
        text-align: center;
        line-height: 30px;
        font-size: 0.2rem;
    }
}
.v-enter{
    opacity: 0;
    transform: translateY(264px);
}
.v-enter-active{
    transition: all 0.5s;
}
.v-leave{
    opacity: 1;
}
.v-leave-active{
    transition: all 0.5s;
    transform: translateY(264px);
}
</style>
