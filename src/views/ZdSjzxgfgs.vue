<template>
    <div class="zdsjzxgfgs">
        <!-- <van-nav-bar
            title="购进气量"
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
                <i>至</i>
                <div class="inputrili" @click="timeShow2">
                    <span>{{ time1 | timefliter('yyyy-mm')}}</span>
                    <img :src="icon">
                </div>
                <van-button type="info" size="small" @click="searchTbale">查询</van-button>
            </div>
            <van-tabs v-model="active" background="#ffffff" title-active-color="#2769fe" color="#2769fe" title-inactive-color="#444444" :border="false" line-width="25%">
                <van-tab title="购分公司">
                    <van-swipe  indicator-color="white" v-if="data1Isshow" :loop="false" :show-indicators="false" :initial-swipe="initialSwipe" @change="onChange">
                        <van-swipe-item>
                            <table class="table" v-if="data1Isshow">
                                <tr>
                                    <th>名称</th>
                                    <th>合计<span>(亿方)</span></th>
                                </tr>
                                <tr v-for="(item,index) in data1" :key="index">
                                    <td>{{item.TDW002}}</td>
                                    <td>{{item.QL | point(4)}}</td>
                                </tr>
                            </table>
                        </van-swipe-item>
                        
                    </van-swipe>
                    
                    <div class="text" v-else>
                        暂无数据
                    </div>
                </van-tab>
                <van-tab title="外购气">
                    <van-swipe  indicator-color="white"  v-if="data2Isshow" :loop="false" :show-indicators="false" :initial-swipe="initialSwipe2" @change="onChange2">
                        <van-swipe-item>
                            <table class="table">
                                <tr>
                                    <th>名称</th>
                                    <th>合计<span>(亿方)</span></th>
                                </tr>
                                <tr v-for="(item,index) in data2" :key="index">
                                    <td>{{item.TDW002}}</td>
                                    <td>{{item.QL | point(4)}}</td>
                                </tr>
                            </table>
                        </van-swipe-item>
                    </van-swipe>
                    
                    <div class="text" v-else>
                        暂无数据
                    </div>
                </van-tab>
                <van-tab title="互购气">
                    <table class="table" v-if="data3Isshow">
                        <tr>
                            <th>名称</th>
                            <th>合计<span>(亿方)</span></th>
                        </tr>
                        <tr v-for="(item,index) in data3" :key="index">
                            <td>{{item.TDW002}}</td>
                            <td>{{item.QL | point(4)}}</td>
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
                    type="year-month"
                    :maxDate="maxDate"
                    @cancel="close"
                    @confirm="DeterTime"
                />
            </div>
        </transition>
        <transition>
            <div class="time" v-if="isShow2">
                <van-datetime-picker
                    v-model="currentDate2"
                    type="year-month"
                    :maxDate="maxDate"
                    @cancel="close2"
                    @confirm="DeterTime2"
                />
            </div>
        </transition>
        <!-- 遮罩层 -->
        <van-overlay
        :show="isShow"
        @click="isShow = false"
        />
        <van-overlay
        :show="isShow2"
        @click="isShow2 = false"
        />
    </div>
</template>
<script>
export default {
    name:"ZdSjzxgfgs",
    data () {
        return {
            active:0,
            currentDate: new Date(new Date().getFullYear()+"-"+(new Date().getMonth())),
            currentDate2:new Date(),
            maxDate: new Date(),
            //time:(parseInt(new Date().getFullYear())-1)+"-"+(parseInt(new Date().getMonth())).toString().padStart(2,'0'),
            time:new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())).toString().padStart(2,'0'),
            time1:new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1).toString().padStart(2,'0'),
            icon:require("../image/trq/rili.png"),
            isShow:false,
            isShow2:false,
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
        //气量
        // this.getTablesSSQL();
        //气价
        // this.getTablesSSQJ();
        // // //计划
        // this.getTablesSSJH();
        // // //合同
        // this.getTablesSSHT();
        this.getTables()
    },
    methods: {
        onClickLeft(){
            this.$router.push('/zdsjzx')
        },
        onChange(index){
            this.initialSwipe=index
        },
        onChange2(index){
            this.initialSwipe2=index
        },
        //点击日期弹出选择时间框
        timeShow(){
            this.isShow=true;
        },
        timeShow2(){
            this.isShow2=true;
        },
        //日历点击取消按钮
        close(){
            this.isShow=false;
        },
        close2(){
            this.isShow2=false;
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
            let timer = date.getFullYear() + "-" + m
            this.time=timer
            this.isShow=false;
        },
        DeterTime2(value){
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
            let timer = date.getFullYear() + "-" + m
            this.time1=timer
            this.isShow2=false;
        },
        //四个table请求数据
        getTables(){
            //console.log(this.time,this.time1)
            let timeArray=this.time.split('-');
            let year=timeArray[0];
            let month=timeArray[1];
            let timeArray1=this.time1.split('-');
            let year1=timeArray1[0];
            let month1=timeArray1[1];
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            this.$axios.post("/ZDGJQL",{
                DW001:DW001,
                FLAG:FLAG,
                year:year,
                month:month,
                year1:year1,
                month1:month1
            }).then((res)=>{
                // console.log(res.data)
                let datas=JSON.parse(res.data.d)
                console.log(datas)
                if(datas.data.length>0){
                    this.data1=[];
                    this.data2=[];
                    this.data3=[];
                    for (let i = 0; i < datas.data.length; i++) {
                        if(datas.data[i].QYDWBZ==1){
                            this.data1Isshow=true;
                            this.data1.push(datas.data[i])
                        }
                        if(datas.data[i].QYDWBZ==2){
                            this.data2Isshow=true;
                            this.data2.push(datas.data[i])
                        }
                        if(datas.data[i].QYDWBZ==3){
                            this.data3Isshow=true;
                            this.data3.push(datas.data[i])
                        }
                    }
                }else{
                    this.data1Isshow=false;
                    this.data2Isshow=false;
                    this.data3Isshow=false;
                    this.data1=[];
                    this.data2=[];
                    this.data3=[];
                }
            }).catch((error)=>{
                console.log(error)
            })
        },
        
        //查询功能
        searchTbale(){
            // let Stime1=this.time;
            // let Stime2=this.time1;
            //console.log(Stime1,Stime2)
            // this.getTablesSSQL(Stime1,Stime2);
            // this.getTablesSSQJ(Stime1,Stime2);
            // this.getTablesSSJH(Stime1,Stime2);
            // this.getTablesSSHT(Stime1,Stime2);
            this.getTables()
        }
    },
}
</script>
<style lang="less" scoped>
.zdsjzxgfgs{
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
