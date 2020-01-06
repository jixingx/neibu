<template>
    <div class="yphgsjzxyhq">
        <!-- <van-nav-bar
            title="液化气"
            :border="false"
            :fixed="true"
            @click-left="onClickLeft"
        /> -->
        <div class="content">
            <div class="input-btn">
                <div class="inputrili" @click="timeShow">
                    <span>{{ time }}</span>
                    <img :src="icon">
                </div>
                <van-button type="info" size="small" @click="searchTbale">查询</van-button>
            </div>
            <van-tabs v-model="active" background="#ffffff" title-active-color="#2769fe" color="#2769fe" title-inactive-color="#444444" :border="false" line-width="25%">
                <van-tab title="产量">
                    <table class="table table3" v-if="data1Isshow">
                        <tr>
                            <th>名称</th>
                            <th>当日<span>(吨)</span></th>
                            <th>月累计<span>(吨)</span></th>
                            <th>年累计<span>(吨)</span></th>
                        </tr>
                        <tr v-for="(item,index) in data1" :key="index">
                            <td>{{item.CP002}}</td>
                            <td>{{item.RCL}}</td>
                            <td>{{item.YLCL}}</td>
                            <td>{{item.NLCL}}</td>
                        </tr>
                    </table>
                    
                    <div class="text" v-else>
                        暂无数据
                    </div>
                </van-tab>
                <van-tab title="销量">
                     <table class="table table3" v-if="data2Isshow">
                        <tr>
                            <th>名称</th>
                            <th>日销售<span>(吨)</span></th>
                            <th>月累计<span>(吨)</span></th>
                            <th>月计划<span>(吨)</span></th>
                        </tr>
                        <tr v-for="(item,index) in data2" :key="index">
                            <td>{{item.CP002}}</td>
                            <td>{{item.RXL}}</td>
                            <td>{{item.YLXL}}</td>
                            <td>{{item.YJH}}</td>
                        </tr>
                    </table>
                    
                    <div class="text" v-else>
                        暂无数据
                    </div>
                </van-tab>
                <van-tab title="价格">
                    <table class="table table3" v-if="data3Isshow">
                        <tr>
                            <th>名称</th>
                            <th>日均价<span>(元/吨)</span></th>
                            <th>月均价<span>(元/吨)</span></th>
                            <th>年均价<span>(元/吨)</span></th>
                        </tr>
                        <tr v-for="(item,index) in data3" :key="index">
                            <td>{{item.CP002}}</td>
                            <td>{{item.DWRJJ}}</td>
                            <td>{{item.DWYJJ}}</td>
                            <td>{{item.DWNJJ}}</td>
                        </tr>
                    </table>
                    <div class="text" v-else>
                        暂无数据
                    </div>
                </van-tab>
                
            </van-tabs>
        </div>
       <!-- 日期选择器 -->
        <transition>
            <div class="time" v-if="isShow">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    :maxDate="maxDate"
                    @cancel="close"
                    @confirm="DeterTime"
                />
            </div>
        </transition>
        
        <!-- 遮罩层 -->
        <van-overlay
        :show="isShow"
        @click="isShow = false"
        />
        
    </div>
</template>
<script>
export default {
    name:"YphgSjzxyhq",
    data () {
        return {
            active:0,
            currentDate: new Date(new Date().getFullYear()+"-"+(new Date().getMonth())),
            maxDate: new Date(),
            time:new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1).toString().padStart(2,'0')+"-"+(parseInt(new Date().getDate())).toString().padStart(2,'0'),
            icon:require("../image/trq/rili.png"),
            isShow:false,
            data1Isshow:true,
            data2Isshow:true,
            data3Isshow:true,
            data1:[],
            data2:[],
            data3:[],
            initialSwipe:0,
            initialSwipe2:0
        }
    },
    created () { 
        //产量
        this.getTablesCL();
        //销量
        this.getTablesXL();
        // 气价
        this.getTablesQJ();
        
    },
    methods: {
        onClickLeft(){
            this.$router.push('/yphgsjzx')
        },
        //点击日期弹出选择时间框
        timeShow(){
            this.isShow=true;
        },
        //日历点击取消按钮
        close(){
            this.isShow=false;
        },
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
        },
        //四个table请求数据
        //产量
        getTablesCL(){
            // console.log(time,time2)
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            let timeArray=this.time.split('-');
            let year=timeArray[0];
            let month=timeArray[1];
            let day=timeArray[2];
            this.$axios.post("/LiquidCL",{
                DW001,
                FLAG,
                year,
                month,
                day
            }).then((res)=>{
                // console.log(res.data)
                let datas=JSON.parse(res.data.d)
                //console.log(datas)
                if(datas.data.length>0){
                    this.data1Isshow=true;
                    this.data1=datas.data
                }else{
                    this.data1Isshow=false;
                }
            }).catch((error)=>{
                console.log(error)
            })
        },
        //销量
        getTablesXL(){
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            let timeArray=this.time.split('-');
            let year=timeArray[0];
            let month=timeArray[1];
            let day=timeArray[2];
            this.$axios.post("/LiquidXL",{
                DW001,
                FLAG,
                year,
                month,
                day
            }).then((res)=>{
                // console.log(res.data)
                let datas=JSON.parse(res.data.d)
                //console.log(datas)
                if(datas.data.length>0){
                    this.data2Isshow=true;
                    this.data2=datas.data
                }else{
                    this.data2Isshow=false;
                }
            }).catch((error)=>{
                console.log(error)
            })
        },
        //气价
        getTablesQJ(){
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            let timeArray=this.time.split('-');
            let year=timeArray[0];
            let month=timeArray[1];
            let day=timeArray[2];
            this.$axios.post("/LiquidJG",{
                DW001,
                FLAG,
                year,
                month,
                day
            }).then((res)=>{
                // console.log(res.data)
                let datas=JSON.parse(res.data.d)
                 //console.log(datas)
                if(datas.data.length>0){
                    this.data3Isshow=true;
                    this.data3=datas.data
                }else{
                    this.data3Isshow=false;
                }
            }).catch((error)=>{
                console.log(error)
            })
        },
        //查询功能
        searchTbale(){
            //产量
            this.getTablesCL()
            //销量
            this.getTablesXL()
            //气价
            this.getTablesQJ();
        }
    },
}
</script>
<style lang="less" scoped>
.yphgsjzxyhq{
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
        // padding-top: 45px;
        .input-btn{
            padding: 0 0.32rem;
            // background-color: #e8f0fd;
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
                background-color: #ffffff;
                border-radius: 2px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0.3rem;
                span{
                    color: #444444;
                    font-size: 0.22rem;
                    
                }
                img{
                    width: 0.34rem;
                    height: 0.34rem;
                }
            }
        }
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
                            // margin-left: 0.16rem;
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
        .table3{
            tr{
                th{
                    width: 25% !important;
                }
                td{
                    width: 25% !important;
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
