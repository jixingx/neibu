<template>
    <div class="yphgshxz">
        <!-- <van-nav-bar
            title="审核"
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
    name:"YphgShxz",
    data () {
        return {
            cell1:[
                // {name:"年计划审核",icon:require("../image/trq/njhsh.png"),url:"/zdshnjhsh"},
                {name:"月度报表审核",icon:require("../image/trq/ydbbsh.png"),url:"/zdshydbbsh"},
                {name:"月计划审核",icon:require("../image/trq/yjhsh.png"),url:"/zdshyjhsh"},
                {name:"日销售审核",icon:require("../image/trq/rqlsh.png"),url:"/zdrxssh"},
            ]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push('/zdhome')
        },
        topath(url){
            //console.log(i)
            this.$router.push(url)
        }
    },
}
</script>
<style lang="less" scoped>
.yphgshxz{
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
