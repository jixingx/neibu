<template>
    <div class="zdshnjhsh">
        <!-- <van-nav-bar
            title="年计划审核"
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
                <!-- <i>至</i> -->
                <!-- <div class="inputrili" @click="timeShow2">
                    <span>{{ time1 | timefliter('yyyy-mm')}}</span>
                    <img :src="icon">
                </div> -->
                <van-button type="info" size="small" @click="SH">审核</van-button>
            </div>
            <div class="content-list">
                <ul v-if="isTextshow">
                    <li>
                        <div>
                            <img src="../image/trq/zuoyequ.png" alt="" srcset="">
                            <span>单位</span>
                        </div>
                        <div>
                            <img src="../image/trq/shujutongji.png" alt="" srcset="">
                            <span>年气量</span>
                        </div>
                    </li>
                    <li v-for="(item,index) in list" :key="index">
                        <span>{{item.TDW002}}</span>
                        <span>{{item.NJH | point(4)}}&nbsp;万方</span>
                    </li>
                </ul>
                <div class="text" v-else>
                    暂无数据
                </div>
            </div>
        </div>
        <!-- 日期选择器 -->
        <transition>
            <div class="time" v-if="isShow">
                <!-- <van-datetime-picker
                    v-model="currentDate"
                    type="year-month"
                    :maxDate="maxDate"
                    
                    @cancel="close"
                    @confirm="DeterTime"
                /> -->
                <van-picker
                show-toolbar
                title=""
                :columns="columns"
                :default-index="9"
                @cancel="close"
                @confirm="DeterTime"
                />
            </div>
        </transition>
        <!-- <transition>
            <div class="time" v-if="isShow2">
                <van-datetime-picker
                    v-model="currentDate2"
                    type="year-month"
                    :maxDate="maxDate"
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
    name:'ZdShnjhsh',
    data () {
        return {
            //currentDate: new Date(new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())).toString().padStart(2,'0')),
            // currentDate:new Date(),
            //currentDate2:new Date(),
            // maxDate: new Date(),
            //time:new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())).toString().padStart(2,'0'),
            time:new Date().getFullYear(),
            //time1:new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1).toString().padStart(2,'0'),
            icon:require("../image/trq/rili.png"),
            isShow:false,
            isTextshow:true,
            list:[],
            columns: [
                new Date().getFullYear()-9,
                new Date().getFullYear()-8,
                new Date().getFullYear()-7,
                new Date().getFullYear()-6,
                new Date().getFullYear()-5,
                new Date().getFullYear()-4,
                new Date().getFullYear()-3,
                new Date().getFullYear()-2,
                new Date().getFullYear()-1,
                new Date().getFullYear()
            ]   
        }
    },
    created () {
        //this.getlist()
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
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
        DeterTime(value, index){
            // console.log(value)
            // let date = value;
            // let m = date.getMonth() + 1;
            // let d = date.getDate();
            // if (m >= 1 && m <= 9) {
            //     m = "0" + m;
            // }
            // if (d >= 0 && d <= 9) {
            //     d = "0" + d;
            // }
            // let timer = date.getFullYear() 
            this.time=value
            this.isShow=false;
            
            this.getlist()
        },
        
        
        //进页面默认请求
        getlist(){
            
            // let endTime=this.time1.split('-');
            // let year1=endTime[0];
            // let month1=endTime[1];
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            this.$axios.post('/NJHSHCX',{
                DW001,
                FLAG,
                year:this.time
            }).then((res)=>{
                
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data){
                    if(d.data.length>0){
                        this.isTextshow=true
                        this.list=d.data
                    }else{
                        this.isTextshow=false 
                    }
                    
                }else{
                    this.$router.push('/zdnjhcxsh')
                } 
            }).catch((error)=>{ 
                console.log(error)
            })
        },
        //审核
        SH(){
            let optype=1
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            let CZYGL001=this.$store.getters.getUser.CZYGL001
            let CZYGL003=this.$store.getters.getUser.CZYGL003
            this.$axios.post('/NJHSH',{
                DW001,
                FLAG,
                CZYGL001,
                CZYGL003,
                year:this.time
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.success){
                    this.$dialog.alert({
                        message: '审核成功'
                        }).then(() => {
                            if(this.$store.getters.getUser.FLAG=="ZYQ"){
                                this.$router.push('/zdshxz')
                            }else{
                                this.$router.push('/zdnjhcxsh')
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
        },
        filter(type, options) {
            if (type === 'month') {
                return options.map(option => ' ')
            }

            return options;
        }
    }
}
</script>
<style lang="less" scoped>
.zdshnjhsh{
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
            padding: 0 0.3rem;
            ul{
                li{
                    &:first-child{
                        height: 0.88rem;
                        padding: 0 0.34rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 0;
                        background-color: transparent;
                        div{
                            display: flex;
                            align-items: center;
                            img{
                                margin-right: 0.08rem;
                                width: 0.34rem;
                                height: 0.34rem;
                            }
                            span{
                                font-size: 0.24rem;
                                color: #7c7c7c;
                            }
                        }
                    }
                    height: 0.88rem;
                    padding: 0 0.34rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #fff;
                    margin-bottom: 0.2rem;
                    border-radius: 7px;
                    span{
                        &:nth-child(1){
                            font-size: 0.26rem;
                            color: #363636;
                        }
                        &:nth-child(2){
                            font-size: 0.24rem;
                            color: #2e2e2e;
                            font-weight: bold;
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
.time{
    .van-picker{
        .van-picker__columns{
            .van-picker-column{
                &:last-child(1){
                    display: none !important;
                }
            }
        }
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
