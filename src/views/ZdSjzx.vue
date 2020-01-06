<template>
    <div class="zdsjzx">
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
    name:"ZdSjzx",
    data () {
        return {
            cell1:[
                {name:"购进气量",icon:require("../image/zd/gjql.png"),url:'/zdsjzxgfgs'},
                {name:"销售气量",icon:require("../image/zd/xsql.png"),url:'/zdsjzxrxs'}
            ]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/zdhome')
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
.zdsjzx{
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
