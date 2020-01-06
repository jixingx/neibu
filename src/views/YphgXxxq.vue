<template>
    <div class="yphgxxxq">
        <!-- <van-nav-bar
            title="数据中心"
            left-arrow
            :border="false"
            :fixed="true"
            @click-left="onClickLeft"
        /> -->
        <div class="content">
             <!-- <div class="item">
                <van-cell title="5月19日 周日 下午5:26"/>
                <div class="content-plan">
                    <div class="content-box">
                        <p class="p1">
                            截至当天收盘，纽约商品交易所8月交货的轻质原油期货价格上涨0.17美元，收于每桶57.83美元，涨幅为0.29美元收于每桶57.83美元，涨幅为0.29美元
                            截至当天收盘，纽约商品交易所8月交货的轻质原油期货价格上涨0.17美元，收于每桶57.83美元，涨幅为0.29美元收于每桶57.83美元，涨幅为0.29美元
                        </p>
                        
                    </div>
                </div>
            </div> -->
            <div class="item" v-for="(item,index) in list" :key="index">
                <van-cell :title="item.sendDatetime"/>
                <div class="content-plan">
                    <div class="content-box">
                        <p class="p1" v-html="item.newsContent">
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"YphgXxxq",
    data () {
        return {
            list:[]
        }   
    },
    created () {
        this.getlist();
    },
    methods: {
        onClickLeft(){
            this.$router.push('/yphgxx')
        },
        //默认请求数据
        getlist(){
            this.$axios.post('/CPDetails',{
                id:this.$route.params.id
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                console.log(d)
                this.list=d.data
            }).catch((error)=>{
                console.log(error)
            })
        }
    },
}
</script>
<style lang="less" scoped>
.yphgxxxq{
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
        // padding: 46px;
        padding-left: 0.32rem;
        padding-right: 0.32rem;
        .item{
            .van-cell{
                background-color: transparent;
                .van-cell__title{
                    font-size: 0.23rem;
                    color: #808080;
                }
            }
            .content-plan{
                
                // height: 1.38rem;
                // background-color: #ffffff;
                .content-box{
                    background-color: #ffffff;
                    // height: 100%;
                    border-radius: 7px;
                    padding: 0.18rem 0.3rem;
                    .p1{
                        margin: 0px;
                        font-size: 0.24rem;
                        line-height: 0.36rem;
                        color: #4e4e4e;
                        width: 100%;
                    }
                    
                }
            }
        }
    }
}
</style>

