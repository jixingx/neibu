<template>
    <div class="yphgsjzx">
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
        </div>
    </div>
</template>
<script>
export default {
    name:"YphgSjzx",
    data () {
        return {
            cell1:[
                {name:"原油产品",icon:require("../image/yphg/yycp.png"),url:"/yphgsjzxyycp"},
                {name:"硫磺产品",icon:require("../image/yphg/lhcp.png"),url:"/yphgsjzxlhcp"},
                {name:"液化气",icon:require("../image/yphg/yhq.png"),url:"/yphgsjzxyhq"}
                // {name:"其他化工产品",icon:require("../image/yphg/qthgcp.png"),url:"/yphgsjzxqthgcp"}
            ]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/yphghome')
        },
        //点击跳转对应页面
        topath(url){
            //console.log(i)
            this.$router.push(url)
        }
    },
}
</script>
<style lang="less" scoped>
.yphgsjzx{
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
        // padding-top: 46px;
        .content_list1{
            padding-top: 0.28rem;
        }
        .content_list2{
            margin-top: 0.19rem;
        }
    }
}
</style>
