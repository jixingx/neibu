<template>
    <div class="khhome">
        <!-- <van-nav-bar
            title="客户"
            :fixed="true"
            :z-index="9999"
        > -->
            <!-- <van-icon :name="icon" slot="right" /> -->
            
            <!-- <img src="../image/home/xiaoxi.png" slot="right" @click="tz"/> -->
        <!-- </van-nav-bar> -->
        <div class="content">
            <div class="item-box">
                <div class="item" v-for="(item,index) in list" :key="index">
                    <div class="item-left">
                        <img src="../image/kh/touxiang.png">
                    </div>
                    <div class="item-right">
                        <div class="item-right-text">
                            <h2>{{item.custContName}}</h2>
                            <p>{{item.yhmc002}}</p>
                        </div>
                        <div class="item-right-img">
                            <a :href="'tel:'+item.custContPhone" class="img_phone"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <van-tabbar v-model="tabbarActive" :fixed="true">
            <van-tabbar-item to="/khjlhome" replace>
                <span>首页</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='shouye' />
            </van-tabbar-item>
            
            
            <van-tabbar-item to="/khhome"  replace>
                <span>客户</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='kehu' />
            </van-tabbar-item>
            
            <van-tabbar-item to="/wd" replace>
                <span>我的</span>
                <van-icon slot="icon" size="25px" class="iconfont" class-prefix='icon' name='wode' />
                
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name:"KhHome",
    data () {
        return {
            tabbarActive:1,
            list:[]
        }
    },
    created(){
        this.getDate()
    },
    methods:{
        //请求数据
        getDate:function(){
            let czygl001=this.$store.getters.getUser.CZYGL001
            this.$axios.get('/ManagerCustomerFW?czygl001='+czygl001).then((res)=>{
                //console.log(res.data)
                this.list=res.data.data
            }).catch((error)=>{
            })
        }
    }
}
</script>
<style lang="less" scoped>
.khhome{
    height: 100%;
    width: 100%;
    background-color: #fff;
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
        // padding-top:46px;
        padding-left: 0.32rem;
        padding-right: 0.32rem;
        padding-bottom: 54px;
        .item-box{
            padding:0 0.4rem;
            position:relative;
            z-index:1;
            margin-bottom:0.35;
            background-color:#FFF;
            &::after{
                width:0rem;
                position:absolute;
                border-bottom:1px solid #B2B2B2;
                -webkit-transform:scaleY(.5);
                transform:scaleY(.5);
                -webkit-transform-origin:0 100%;
                transform-origin:0 100%;
            }
            .item{
                padding-top:0.4rem;
                padding-bottom:0.4rem;
                padding-left:0;
                display:flex;
                position:relative;
                overflow:hidden;
                &:not(:last-child):after{
                    margin-left:0;
                    border:1px solid #f0f0f0;
                    position:absolute;
                    -webkit-transform:scaleY(.5);
                    transform:scaleY(.5);
                    -webkit-transform-origin:0 100%;
                    transform-origin:0 100%;
                }
                .item-left{
                    color: #333;
                    font-size: .3rem;
                    white-space: nowrap;
                    display: flex;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                    img{
                        width: 0.86rem;
                        height: 0.86rem;
                        border-radius: 50%;
                    }
                }
                .item-right{
                    padding-top: 0.12rem;
                    text-align: left;
                    margin-left: 0.26rem;
                    -webkit-box-flex: 1;
                    -webkit-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    width: 100%;
                    min-height: 1rem;
                    color: #525252;
                    font-size: .26rem;
                    padding-right: .24rem;
                    display: flex;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: end;
                    justify-content: space-between;
                    -ms-flex-pack: end;
                    
                    .item-right-text{
                        h2{
                            margin: 0;
                            padding: 0;
                            font-size: 0.23rem !important;
                            // margin-bottom: 0.26rem;
                            color: #333333;
                        }
                        p{
                            margin: 0;
                            padding: 0;
                            font-size: 0.19rem !important;
                            color: #bdc1c9;
                        }
                    }
                    .item-right-img{
                        text-align: center;
                        margin-left: 0.53rem;
                        .img_phone{
                            display: block;
                            width: 0.78rem;
                            height: 0.78rem;
                            border-radius: 50%;
                            background-image: url("../image/kh/phone.png");
                            background-color: #3d7efe;
                            background-size: 50% 50%;
                            background-position: center center;
                            background-repeat: no-repeat;
                        }
                    }
                }
            }
        }
    }
}
.item:not(:last-child):after, .item-box:after{
    content: '';
    z-index: 0;
    left: 0;
    height: 1px;
    width: 100%;
    bottom: 0;
}
</style>