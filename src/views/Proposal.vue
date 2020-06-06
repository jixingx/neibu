<template>
    <div class="proposal">
        <div class="content">
            <table class="table" v-if="list">
                <tr>
                    <th>单位</th>
                    <th>客户名称</th>
                    <th>标题</th>
                    <th>提交时间</th>
                </tr>
                <tr v-for="(item,index) in list" :key="index">
                    <td>{{item.CP002}}</td>
                    <td>{{item.DWRJJ}}</td>
                    <td>{{item.DWYJJ}}</td>
                    <td>{{item.DWNJJ}}</td>
                </tr>
            </table>
            <div class="text" v-else>
                暂无数据
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
    name:"Proposal",
    data() {
        return {
            tabbarActive:0,
            list:[]
        }
    },
    created() {
        this.getlist()
    },
    methods: {
        getlist(){
            this.$axios.post('/GetOptionSugges',{
                "TDW001":this.$store.getters.getUser.DW001
            }).then((res)=>{
                console.log(res)
            }).catch((error)=>{
                console.log(error)
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
.proposal{
    .content{
        padding-bottom: 50px;
        .table{
        border-collapse:collapse;
        border: 0;
        margin-top: 0.3rem;
        width: 100%;
        background-color: #fff;
        tr{
            th{
                width: 25% !important;
            }
            td{
                width: 25% !important;
            }
        }
        tr{
            min-height: 0.78rem;
            // line-height: 0.78rem;
            &:first-child{
                background-color: #e8f0fd;
                color: #696d78;
                font-size: 0.24rem;
                th{
                    line-height: 0.78rem;
                    width: 33.333333%;
                    text-align: left;
                    padding: 0;
                    margin: 0;
                    &:first-child{
                        padding-left:0.32rem;
                        position: relative;
                        .van-icon{
                            position: absolute;
                            font-size: 0.26rem;
                            color: #1f6dff;
                            font-weight: bold;
                            left: 0.16rem;
                            top: 0.26rem;
                        }
                    }
                    &:last-child{
                        position: relative;
                        .van-icon{
                            position: absolute;
                            font-size: 0.26rem;
                            color: #1f6dff;
                            font-weight: bold;
                            right: 0.32rem;
                            top: 0.26rem;
                        }
                    }
                    span{
                        font-size: 0.2rem;
                        // margin-left: 0.16rem;
                    }
                
                }
            }
            td{
                line-height: 0.78rem;
                font-size: 0.26rem;
                color: #2f2f2f;
                font-weight: 400;
                width: 33.333333%;
                &:first-child{
                    padding-left:0.32rem;
                }
            }
        }
    }
    }
    
    .text{
        text-align: center;
        line-height: 30px;
        font-size: 0.2rem;
    }
}
</style>