<template>
    <div class="trqhtdzlsh">
        <!-- <van-nav-bar
            title="合同量审核"
            :border="false"
            :fixed="true"
            @click-left="onClickLeft"
        /> -->
        <div class="content">
            <div class="input-btn">
                <div class="inputrili" @click="timeShow">
                    <span>{{time}}</span>
                </div>
                <van-button type="info" size="small" @click="SH">审核</van-button>
            </div>
            <div class="content-list">
                <ul  v-if="isTextshow">
                    <li>
                        <div>
                            <img src="../image/trq/zuoyequ.png" alt="" srcset="">
                            <span>单位</span>
                        </div>
                        <div>
                            <img src="../image/trq/shujutongji.png" alt="" srcset="">
                            <span>合同量</span>
                        </div>
                    </li>
                    <li v-for="(item,index) in list" :key="index">
                        <span>{{item.TDW002}}</span>
                        <span>{{item.HTZL | point(4)}}</span>
                    </li>
                    <!-- <li>
                        <span>成都销售部</span>
                        <span>3250&nbsp;万方</span>
                    </li> -->
                </ul>
                <div class="text" v-else>
                    暂无数据
                </div>
            </div>
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
            <van-tabbar-item replace to="/zdhome" v-if="getUser.FLAG!='KQ'">
                <span>终端</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='zhongduan' />
            </van-tabbar-item>
            <van-tabbar-item replace to="/wd">
                <span>我的</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='wode' />
            </van-tabbar-item>
        </van-tabbar>
        <!-- 日期选择器 -->
        <transition>
            <div class="time" v-if="isShow">
                <van-picker
                    show-toolbar
                    title=""
                    :columns="columns"
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
    name:'TrqHtdzlsh',
    data () {
        return {
            tabbarActive:0,
            time:'请选择合同批号',
            icon:require("../image/trq/rili.png"),
            isShow:false,
            isTextshow:true,
            columns: [],
            columnsid:[],
            list:[],
            columIndex:'',
        }
    },
    created () {
        this.getHtph();
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
            // let timer = date.getFullYear() + "-" + m + "-" + d
            this.time=value
            this.isShow=false;
            this.columIndex=index
            this.HtphSearch(index)
            
        },
        //请求合同批号数据
        getHtph(){
            this.$axios.post('/HTCode').then((res)=>{
                // let d=res.data.d
                //d=JSON.parse(d)
                let d=res.data.data
                //console.log(d)
                for (let i = 0; i < d.length; i++) {
                    this.columns.push(d[i].ApprCode)
                    this.columnsid.push(d[i].id)
                }
            }).catch((error)=>{
                console.log(error)
            })
        },
        //请求合同批号点击查询
        HtphSearch(index){
            let id=this.columnsid[index];
            this.$axios.post('/HTSHCX',{
                FLAG:this.$store.getters.getUser.FLAG,
                DW001:this.$store.getters.getUser.DW001,
                id:id
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
                    this.$router.push('/trqhtlcxsh')
                }
            }).catch((error)=>{
                console.log(error)
            })
        },
        //合同量审核
        SH(){
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            let id=this.columnsid[this.columIndex]
            let ApprCode=this.columns[this.columIndex]
            let CZYGL001=this.$store.getters.getUser.CZYGL001
            this.$axios.post('/HTSH',{
                DW001,
                FLAG,
                id,
                ApprCode,
                CZYGL001
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.success){
                    this.$dialog.alert({
                        message: '审核成功'
                        }).then(() => {
                            if(this.$store.getters.getUser.FLAG=="ZYQ"||this.$store.getters.getUser.FLAG=="KQ"){
                                this.$router.push('/trqshxz')
                            }else{
                                this.$router.push('/trqhtlcxsh')
                            }
                    });
                }else{
                    this.$dialog.alert({
                        message: '已审核过'
                        }).then(() => {
                    });
                }
            }).catch((error)=>{ 
                //console.log(error)
            })
        }
    },
    computed: {
        getUser(){
            console.log(this.$store.getters.getUser)
            return this.$store.getters.getUser
        }
    }
}
</script>
<style lang="less" scoped>
.trqhtdzlsh{
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
        padding-bottom: 50px;
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
                width: 2.6rem;
                background-color: #70a1fd;
                border-radius: 2px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                // line-height: 30px;
                padding: 0 0.3rem;
                span{
                    color: #ffffff;
                    font-size: 0.22rem;
                    
                }
                // img{
                //     width: 0.34rem;
                //     height: 0.34rem;
                // }
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
