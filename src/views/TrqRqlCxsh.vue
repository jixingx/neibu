<template>
    <div class="trqrqlcxsh">
        <!-- <van-nav-bar
            title="日气量审核"
            :border="false"
            :fixed="true"
            @click-left="onClickLeft"
        /> -->
        <div class="content">
            <div class="input-btn">
                <div class="inputrili" @click="timeShow">
                    <span>{{ time | timefliter('yyyy-mm-dd')}}</span>
                    <img :src="icon">
                </div>
                <van-button type="info" size="small" @click="Serach">查询</van-button>
            </div>
            <div class="table-pad">
                <table class="cxsh-table" v-if="isTextshow">
                    <tr>
                        <td>序号</td>
                        <td>单位</td>
                        <td>审核人</td>
                        <td>审核时间</td>
                        <td>功能</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.TDWMC}}</td>
                        <td>{{item.CZYGL003}}</td>
                        <td v-if="item.SPSJ=='0'"></td>
                        <td v-else>{{item.SPSJ | timefliter('yyyy-mm-dd')}}</td>

                        <td v-if="item.PX==0"><van-button type="warning" size="small" @click="cxsh(item.TDW001)">撤销审核</van-button></td>
                        <td v-else><van-button type="default" size="small" disabled>未上报</van-button></td>
                    </tr>
                </table>
                <div class="text" v-else>
                    暂无数据
                </div>
            </div>
            <!-- <div class="page" v-if="isTextshow">
                <van-pagination 
                    v-model="currentPage" 
                    :total-items="24" 
                    :items-per-page="5"
                />
            </div> -->
        </div>
        <!-- 日期选择器 -->
        <transition>
            <div class="time" v-if="isShow">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    @cancel="close"
                    @confirm="DeterTime"
                    :maxDate="maxDate"
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
    name:'TrqRqlCxsh',
    data () {
        return {
            currentDate: new Date(),
            time:new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1).toString().padStart(2,'0')+"-"+(parseInt(new Date().getDate())).toString().padStart(2,'0'),
            icon:require("../image/trq/rili.png"),
            isShow:false,
            maxDate: new Date(),
            currentPage: 1,
            list:[],
            isTextshow:true      
        }
    },
    created () {
        this.getList()
    },
    methods: {
        onClickLeft(){
             this.$router.push("/trqshxz")
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
        getList(){
            let startTime=this.time.split('-');
            let year=startTime[0];
            let month=startTime[1];
            let day=startTime[2];
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            this.$axios.post('/YXCRQLSHCX',{
                DW001,
                FLAG,
                year,
                month,
                day
            }).then((res)=>{
                //console.log(res)
                let d=res.data.d
                d=JSON.parse(d)
                console.log(d)
                if(d.data.length>0){
                    this.isTextshow=true
                    this.list=d.data
                }else{
                    this.isTextshow=false 
                }
            }).catch((error)=>{
                console.log(error)
            })
        },
        //查询功能
        Serach(){
            this.getList()
        },
        //撤销审核
        cxsh(TDW001){
            let optype=0;
            // let DW001=this.$store.getters.getUser.TDW001
            let FLAG=this.$store.getters.getUser.FLAG
            let CZYGL001=this.$store.getters.getUser.CZYGL001
            let startTime=this.time.split('-');
            let year=startTime[0];
            let month=startTime[1];
            let day=startTime[2];
            this.$axios.post('/RQLSH',{
                optype,
                DW001:TDW001,
                FLAG,
                CZYGL001,
                year,
                month,
                day
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.success){
                    this.$dialog.alert({
                        message: '撤销成功'
                        }).then(() => {
                            this.getList()
                    });
                }else{
                    this.$dialog.alert({
                        message: '撤销失败'
                        }).then(() => {
                    });
                }
            }).catch((error)=>{ 
                //console.log(error)
            })
        }
    },
}
</script>
<style lang="less" scoped>
.trqrqlcxsh{
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
            .inputrili{
                height: 30px;
                width: 2.4rem;
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
        .table-pad{
            padding: 0 0.32rem;
            .cxsh-table{
                width: 100%;
                border-collapse: collapse;
                tr{
                    line-height: 0.9rem;
                    margin-bottom: 0.2rem;
                    display: flex;
                    td{
                        text-align: center;
                        font-size: 0.26rem;
                        color: #2b2b2b;
                        padding: 0;
                        // width: 20%;
                        &:nth-child(1){
                                flex:1;
                        }
                        &:nth-child(2){
                            flex:2;
                        }
                        &:nth-child(3){
                            flex:1;
                        }
                        &:nth-child(4){
                            flex:2;
                        }
                        &:nth-child(5){
                            flex:2;
                        }
                        // .van-button--small{
                        //     height: 28px;
                        //     padding: 0 2px;
                        //     line-height: 26px;
                        // }
                    }
                    &:first-child{
                        display: flex;
                        margin-bottom: 0;
                        td{
                            font-size: 0.24rem;
                            color: #7a7a7a;
                            padding: 0;
                            &:nth-child(1){
                                flex:1;
                            }
                            &:nth-child(2){
                                flex:2;
                            }
                            &:nth-child(3){
                                flex:1;
                            }
                            &:nth-child(4){
                                flex:2;
                            }
                            &:nth-child(5){
                                flex:2;
                            }
                        }
                    } 
                    &:not(:first-child){
                        background-color: #fff;
                        border-radius: 7px;
                    }
                }
            }
        }
        .page{
            padding: 0 0.32rem;
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
