<template>
    <div class="trqsjzx">
        <!-- <van-nav-bar
            title="数据中心"
            :border="false"
            :fixed="true"
            @click-left="onClickLeft"
        /> -->
        <div class="content">
            <div class="content_list1">
                <template v-for="(item,index) in cell1">
                    <van-cell :title="item.name" :icon="item.icon" is-link :key="index" @click="topath(item.url)"/>
                </template>
                
            </div>
            <div class="content_list2">
                <template v-for="(item,index) in cell2">
                    <van-cell :title="item.name" :icon="item.icon" is-link :key="index" @click="topath(item.url)"/>
                </template>
                
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
    </div>
</template>
<script>
export default {
    name:"trqsjzx",
    data () {
        return {
            tabbarActive:0,
            cell1:[
                {name:"分省市",icon:require("../image/trq/fenshengshi.png"),url:"/trqsjzxfss"},
                {name:"分版块",icon:require("../image/trq/fenbankuai.png"),url:"/trqsjzxfbk"},
                {name:"分行业",icon:require("../image/trq/fenhangye.png"),url:"/trqsjzxfhy"},
                {name:"分单位",icon:require("../image/trq/fendanwei.png"),url:"/trqsjzxfdw"},
                {name:"分地区",icon:require("../image/trq/fendiqu.png"),url:"/trqsjzxfdq"},
            ],
            cell2:[
                {name:"可中断客户",icon:require("../image/trq/kzdkh.png"),url:"/trqsjzxkzdkf"},
                {name:"终端",icon:require("../image/trq/zhongduan.png"),url:"/trqsjzxzd"}
            ]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/trqhome')
        },
        topath(url){
            //console.log(i)
            this.$router.push(url)
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
.trqsjzx{
    .van-nav-bar{
        .van-nav-bar__title{
            color:#303030;
            font-weight: bold;
        }
        .van-nav-bar__left{
            .van-icon{
                // color: #2a2a2a;
                font-weight: bold;
            }
        }
    }
    .content{
        padding-bottom: 50px;
        .content_list1{
            padding-top: 0.28rem;
        }
        .content_list2{
            margin-top: 0.19rem;
        }
    }
}
</style>
