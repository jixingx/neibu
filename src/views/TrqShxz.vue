<template>
    <div class="trqshxz">
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
    name:"TrqShxz",
    data () {
        return {
            cell1:[
                {name:"日气量审核",icon:require("../image/trq/rqlsh.png"),url:"/trqrqlsh"},
                {name:"月计划审核",icon:require("../image/trq/yjhsh.png"),url:"/trqyjhsh"},
                {name:"月度报表审核",icon:require("../image/trq/ydbbsh.png"),url:"/trqydbbsh"},
                {name:"年计划审核",icon:require("../image/trq/njhsh.png"),url:"/trqnjhsh"},
                // {name:"合同应签量审核",icon:require("../image/trq/htyqlsh.png"),url:"/trqsjzxfdq"},
                {name:"合同量审核",icon:require("../image/trq/htdzlsh.png"),url:"/trqhtdzlsh"}
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
}
</script>
<style lang="less" scoped>
.trqshxz{
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
