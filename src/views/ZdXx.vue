<template>
    <div class="zdxx">
        <van-nav-bar left-arrow :fixed="true" @click-left="onClickLeft">
            <!-- <van-icon name="search" slot="right" /> -->
            <van-button type="default" slot="title" size="samll" class="btn1" :class="{activebutton:btnactive==0?true:false}" @click="btnactive=0">通知</van-button>
            <van-button type="default" slot="title" size="samll" class="btn2" :class="{activebutton:btnactive==1?true:false}"  @click="btnactive=1">简报</van-button>
        </van-nav-bar>
        <div class="content">
            <van-tabs :active="active" color="#1f6eff" line-width="24%" title-active-color="#1d6fff" title-inactive-color="#434343" key="tab" @change="changeTab" v-if="btnactive==0">
                <van-tab title="当天">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :offset="50"
                        :loading-text='loadingText'
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                        <div class="list-item">
                            <div class="item" v-for="(item,index) in list" :key="index">
                                <!-- <van-cell title="当天通知" :icon="icon1"  /> -->
                                <div class="content-plan">
                                    <div class="content-box" @click="xxxq(item.id)">
                                        <p class="p1" v-html="item.newsContent"></p>
                                        <p class="p2"><span>{{item.sendDatetime}}</span><van-icon name="arrow" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-list>
                </van-tab>
                <van-tab title="本周">
                     <van-list
                        v-model="loading"
                        :finished="finished"
                        :offset="50"
                        :loading-text='loadingText'
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                        <div class="list-item">
                            <div class="item" v-for="(item,index) in list" :key="index">
                                <!-- <van-cell title="本周通知" :icon="icon2"  /> -->
                                <div class="content-plan">
                                    <div class="content-box" @click="xxxq(item.id)">
                                        <p class="p1" v-html="item.newsContent"></p>
                                        <p class="p2"><span>{{item.sendDatetime}}</span><van-icon name="arrow" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-list>
                </van-tab>
                <van-tab title="本月">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :offset="50"
                        :loading-text='loadingText'
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                        <div class="list-item">
                            <div class="item" v-for="(item,index) in list" :key="index">
                                <!-- <van-cell title="本月通知" :icon="icon3"  /> -->
                                <div class="content-plan">
                                    <div class="content-box" @click="xxxq(item.id)">
                                        <p class="p1" v-html="item.newsContent"></p>
                                        <p class="p2"><span>{{item.sendDatetime}}</span><van-icon name="arrow" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-list>
                </van-tab>
                <van-tab title="更多">
                    <div class="input-btn">
                        <div class="inputrili" @click="timeShow">
                            <span>{{ time | timefliter('yyyy-mm-dd')}}</span>
                            <img :src="icon">
                        </div>
                        <i>至</i>
                        <div class="inputrili" @click="timeShow2">
                            <span>{{ time1}}</span>
                            <img :src="icon">
                        </div>
                        <van-button type="info" size="small" icon="search" @click="search"/>
                    </div>
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :offset="50"
                        :loading-text='loadingText'
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                        <div class="list-item">
                            <div class="item" v-for="(item,index) in list" :key="index">
                                <!-- <van-cell title="更多信息" :icon="icon4"  /> -->
                                <div class="content-plan">
                                    <div class="content-box" @click="xxxq(item.id)">
                                        <p class="p1" v-html="item.newsContent"></p>
                                        <p class="p2"><span>{{item.sendDatetime}}</span><van-icon name="arrow" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-list>
                </van-tab>
            </van-tabs>
            <van-tabs :active="active2" color="#1f6eff" line-width="24%" title-active-color="#1d6fff" title-inactive-color="#434343" key="tab2" @change="changeTab2" v-else>
                <van-tab title="日报">
                    <van-list
                        v-model="loading2"
                        :finished="finished2"
                        :offset="50"
                        :loading-text='loadingText2'
                        finished-text="没有更多了"
                        @load="onLoad2"
                    >
                        <div class="list-item">
                            <div class="item" v-for="(item,index) in list2" :key="index">
                                <van-cell title="日报信息" :icon="icon1"  />
                                <div class="content-plan">
                                    <div class="content-box" @click="xxxq(item.id)">
                                        <p class="p1" v-html="item.newsContent"></p>
                                        <p class="p2"><span>{{item.sendDatetime}}</span><van-icon name="arrow" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-list>
                </van-tab>
                <van-tab title="周报">
                    <van-list
                        v-model="loading2"
                        :finished="finished2"
                        :offset="50"
                        :loading-text='loadingText2'
                        finished-text="没有更多了"
                        @load="onLoad2"
                    >
                        <div class="list-item">
                            <div class="item" v-for="(item,index) in list2" :key="index">
                                <van-cell title="周报信息" :icon="icon2"  />
                                <div class="content-plan">
                                    <div class="content-box" @click="xxxq(item.id)">
                                        <p class="p1" v-html="item.newsContent"></p>
                                        <p class="p2"><span>{{item.sendDatetime}}</span><van-icon name="arrow" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-list>
                </van-tab>
                <van-tab title="月报">
                    <van-list
                        v-model="loading2"
                        :finished="finished2"
                        :offset="50"
                        :loading-text='loadingText2'
                        finished-text="没有更多了"
                        @load="onLoad2"
                    >
                        <div class="list-item">
                            <div class="item" v-for="(item,index) in list2" :key="index">
                                <van-cell title="月报信息" :icon="icon3"  />
                                <div class="content-plan">
                                    <div class="content-box" @click="xxxq(item.id)">
                                        <p class="p1" v-html="item.newsContent"></p>
                                        <p class="p2"><span>{{item.sendDatetime}}</span><van-icon name="arrow" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-list>
                </van-tab>
                <van-tab title="年报">
                    <van-list
                        v-model="loading2"
                        :finished="finished2"
                        :offset="50"
                        :loading-text='loadingText2'
                        finished-text="没有更多了"
                        @load="onLoad2"
                    >
                        <div class="list-item">
                            <div class="item" v-for="(item,index) in list2" :key="index">
                                <van-cell title="年报信息" :icon="icon4"  />
                                <div class="content-plan">
                                    <div class="content-box" @click="xxxq(item.id)">
                                        <p class="p1" v-html="item.newsContent"></p>
                                        <p class="p2"><span>{{item.sendDatetime}}</span><van-icon name="arrow" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-list>
                </van-tab>
            </van-tabs>
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
    name:"Zdxx",
    data() {
        return {
            btnactive:0,
            active:0,
            active2:0,
            pageNumber:1,
            pageSize:15,
            list: [],
            loading: false,
            finished: false,
            loadingText:"加载中...",
            url:"/ZDTZDay",
            icon1:require("../image/trq/rxsxx.png"),//日报
            icon2:require("../image/trq/zxsxx.png"),//周报
            icon3:require("../image/trq/yxsxx.png"),//月报
            icon4:require("../image/trq/nxsxx.png"),//年报
            pageNumber2:1,
            pageSize2:20,
            list2: [],
            loading2: false,
            finished2: false,
            loadingText2:"加载中...",
            url2:'/ZDYXJBDay',
            flag2:false,
            currentDate: new Date((new Date().getFullYear()-1)+"-"+(parseInt(new Date().getMonth())+1).toString().padStart(2,'0')+"-"+(parseInt(new Date().getDate())).toString().padStart(2,'0')),
            currentDate2:new Date(),
            maxDate: new Date(),
            time:(new Date().getFullYear()-1)+"-"+(parseInt(new Date().getMonth())+1).toString().padStart(2,'0')+"-"+(parseInt(new Date().getDate())).toString().padStart(2,'0'),
            time1:new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1).toString().padStart(2,'0')+"-"+(parseInt(new Date().getDate())).toString().padStart(2,'0'),
            isShow:false,
            isShow2:false,
            icon:require("../image/trq/rili.png"),
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/zdhome')
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
        },
        onLoad(){
            if(this.flag){
                this.pageNumber++;
            }else{
                this.pageNumber=this.pageNumber
            }
            this.getlist()
        },
        onLoad2(){
            if(this.flag2){
                this.pageNumber2++;
            }else{
                this.pageNumber2=this.pageNumber2
            }
            
            this.getlist2()
        },
        //简报请求
        getlist2(){
            this.$axios.post(this.url2,{
                DW001:this.$store.getters.getUser.DW001,
                czygl001:this.$store.getters.getUser.CZYGL001,
                pageNumber:this.pageNumber2,
                pageSize:this.pageSize2
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data){
                    this.list2=this.list2.concat(d.data)
                    this.loading2=false;
                    this.finished2=false;
                    this.flag2=true
                }else{
                    this.loading2=false;
                    this.finished2=true;
                    this.flag2=false
                }
                
            }).catch((error)=>{

            })
        },
        //简报下面标签切换
        changeTab2(name,title){
            this.pageNumber2=1
            this.list2=[];
            this.flag2=false
            if(name==0){
                this.url2="/ZDYXJBDay"
            }else if(name==1){
                this.url2="/ZDYXJBWeek"
            }else if(name==2){
                this.url2="/ZDYXJBMonth"
            }else if(name==3){
                this.url2="/ZDYXJBYear"
            }
            this.onLoad2()
        },
        //通知请求
        getlist(){
            let timeArray=this.time.split('-');
            let year=timeArray[0];
            let month=timeArray[1];
            let day=timeArray[2];
            let timeArray1=this.time1.split('-');
            let year1=timeArray1[0];
            let month1=timeArray1[1];
            let day1=timeArray1[2];
            this.$axios.post(this.url,{
                DW001:this.$store.getters.getUser.DW001,
                czygl001:this.$store.getters.getUser.CZYGL001,
                pageNumber:this.pageNumber,
                pageSize:this.pageSize,
                year:year,
                month:month,
                day:day,
                year1:year1,
                month1:month1,
                day1:day1,
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data){
                    this.list=this.list.concat(d.data)
                    this.loading=false;
                    this.finished=false;
                    this.flag=true
                }else{
                    this.loading=false;
                    this.finished=true;
                    this.flag2=false
                }
                
            }).catch((error)=>{

            })
        },
        //通知下面标签切换
        changeTab(name,title){
            this.pageNumber=1
            this.list=[];
            this.flag=false
            if(name==0){
                this.url="/ZDTZDay"
            }else if(name==1){
                this.url="/ZDTZWeek"
            }else if(name==2){
                this.url="/ZDTZMonth"
            }else if(name==3){
                this.url="/ZDTZYear"
            }
            this.onLoad()
        },
        //点击查看详情
        xxxq(id){
            //console.log(DATE1,FL001)
            this.$router.push({
                name:'zdxxxq',
                params:{
                    id:id
                }
            })
        },
        //查看更多查询
        search(){
            this.pageNumber=1
            this.list=[];
            this.flag=false
            this.onLoad();
        }
    },
}
</script>
<style lang="less" scoped>
.zdxx{
    .van-nav-bar{
        background-color: #1f6eff;
        .van-nav-bar__title{
            .van-button{
                height:32px;
                margin:7px 0 0 0;
                line-height:32px;
                padding: 0 16px;
                font-size: 14px;
                &.btn1{
                    border-top-left-radius: 7px;
                    border-bottom-left-radius: 7px;
                    border-right: 0px;
                }
                &.btn2{
                    border-top-right-radius: 7px;
                    border-bottom-right-radius: 7px;
                    border-left: 0px;
                    margin-left: -1px;
                }
            }
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
        padding-bottom: 65px;
        .item{
            margin-top: 0.2rem;
            .van-cell{
                background-color: transparent;
                .van-cell__left-icon{
                    font-size: 18px;
                }
                .van-cell__title{
                    font-size: 0.24rem;
                    color: #303030;
                }
            }
            .content-plan{
                padding: 0 15px;
                height: 1.38rem;
                // background-color: #ffffff;
                .content-box{
                    background-color: #ffffff;
                    height: 100%;
                    border-radius: 7px;
                    padding: 0.2rem 0.2rem 0rem 0.2rem;
                    .p1{
                        margin: 0px;
                        font-size: 0.24rem;
                        line-height: 0.32rem;
                        color: #525252;
                        width: 100%;
                        height: 0.66rem;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                    .p2{
                        margin: 0;
                        margin-top: 0.2rem;
                        color: #b3b3b3;
                        display: flex;
                        align-items: center;
                        justify-content:flex-end;
                        span{
                            font-size: 0.2rem;
                            margin-right: 0.3rem;
                        }
                        .van-icon{
                            font-size: 0.24rem;
                        }
                    }
                }
            }
        }
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
        .van-button{
            min-width:50px;
            .van-button__icon{
                font-size: 0.36rem;
            }
        }
    }
}
.activebutton{
    background-color: #e8f0fd;
    color: #1e70ff;
}
.time{
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    z-index: 9999;
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

