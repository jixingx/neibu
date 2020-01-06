<template>
    <div class="trqrqlcxsh">
        <!-- <van-nav-bar
            title="合同应签量审核"
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
                <i>至</i>
                <div class="inputrili" @click="timeShow2">
                    <span>{{ time1 | timefliter('yyyy-mm-dd')}}</span>
                    <img :src="icon">
                </div>
                <van-button type="info" size="small">查询</van-button>
            </div>
            <div class="content-list">
                <ul>
                    <li>
                        <div>
                            <img src="../image/trq/zuoyequ.png" alt="" srcset="">
                            <span>作业区</span>
                        </div>
                        <div>
                            <img src="../image/trq/shujutongji.png" alt="" srcset="">
                            <span>日气量</span>
                        </div>
                    </li>
                    <li>
                        <span>成都销售部</span>
                        <span>3250&nbsp;万方</span>
                    </li>
                    <li>
                        <span>重庆气矿</span>
                        <span>2250&nbsp;万方</span>
                    </li>
                    <li>
                        <span>川西北气矿</span>
                        <span>1050&nbsp;万方</span>
                    </li>
                    <li>
                        <span>川中油气矿</span>
                        <span>2150&nbsp;万方</span>
                    </li>
                    <li>
                        <span>川东北气矿</span>
                        <span>1550&nbsp;万方</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 日期选择器 -->
        <transition>
            <div class="time" v-if="isShow">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    @cancel="close"
                    @confirm="DeterTime"
                />
            </div>
        </transition>
        <transition>
            <div class="time" v-if="isShow2">
                <van-datetime-picker
                    v-model="currentDate2"
                    type="date"
                    :minDate="minDate"
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
    name:'TrqHtyqlsh',
    data () {
        return {
            currentDate: new Date(),
            currentDate2:new Date(new Date().getFullYear()+"-12-31"),
            minDate: new Date(),
            time:new Date(),
            time1:new Date().getFullYear()+"-12-31",
            icon:require("../image/trq/rili.png"),
            isShow:false,
            isShow2:false      
        }
    },
    created () {
        
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
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
            let timer = date.getFullYear() + "-" + m + "-" + d
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
            let timer = date.getFullYear() + "-" + m + "-" + d
            this.time1=timer
            this.isShow2=false;
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
