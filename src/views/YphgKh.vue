<template>
    <div class="yphgkh">
        <!-- <van-nav-bar
            title="客户"
            left-arrow
            :border="false"
            :fixed="true"
            :z-index="9999"
            @click-left="onClickLeft"
        /> -->
        <div class="serach">
            <van-search placeholder="请输入客户名称" v-model="value"  background="transparent" @search="search"/>
        </div>
        <div class="content">
            <van-list
                v-model="loading"
                :finished="finished"
                :offset="50"
                :loading-text='loadingText'
                finished-text="没有更多了"
                @load="onLoad"
                v-if="data1Isshow"
                >
                <!-- <van-cell
                    v-for="item in list"
                    :key="item"
                    :title="1"
                    is-link
                /> -->
                <van-cell
                    v-for="(item,index) in list"
                    :key="index"
                    :icon="icon"
                    :title="item.YHMC002"
                    is-link
                    @click="khxq(item.YHMC001)"
                />
            </van-list>
            <div class="text" v-else>
                暂无数据
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"YphgKh",
    data () {
        return {
            value:'',
            currentPage:1,
            activeName:'',
            icon:require("../image/trq/rqlkehu.png"),
            pageNumber:1,
            pageSize:15,
            loading: false,
            finished: false,
            data1Isshow:true,
            loadingText:"加载中...",
            list:[],
            flag:true      
        }
    },
    created() {
        // this.getlist()
    },
    methods: {
        onClickLeft(){
            this.$router.push('/yphghome')
        },
        //默认请求数据
        getlist(){
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            this.$axios.post('/Customer',{
                DW001,
                FLAG,
                pageNumber:this.pageNumber,
                pageSize:this.pageSize
            }).then((res)=>{
                // console.log(res.data)
                let datas=JSON.parse(res.data.d)
                //consoleconsole.log(datas)
                if(datas.data.length>0){
                    this.loading=false;
                    this.finished=false;
                    this.list=this.list.concat(datas.data)
                }else{
                    // this.list=[]
                    this.loading = false;
                    this.finished=true;
                }
            }).catch((error)=>{
                //console.log(error);
            })
        },
        //加载更多效果
        onLoad(){
            if(this.flag){
                this.getlist()
                this.pageNumber++;
            }
        },
        //搜索效果
        search(){
            this.list=[];
            this.pageNumber=1;
            this.flag=false
            this.loading = false;
            this.finished=true;
            if(this.value==""){
                this.$dialog.alert({
                    message: '请输入内容查询'
                });
            }else{
                this.$axios.post('/CustomerMHCX',{
                    inputname:this.value
                }).then((res)=>{
                    let datas=JSON.parse(res.data.d)
                    // alert(datas.data)
                    if(datas.data==null){
                        this.list=[]
                        this.loading = false;
                        this.finished=true;
                        this.data1Isshow=false;
                    }
                    if(datas.data.length>0){
                        this.loading = false;
                        this.finished=true;
                        this.list=datas.data
                        this.data1Isshow=true;
                    }else{
                        this.list=[]
                        this.loading = false;
                        this.finished=true;
                        this.data1Isshow=false;
                    }
                }).catch((error)=>{
                    this.list=[]
                    this.loading = false;
                    this.finished=true;
                    this.data1Isshow=false;
                    // alert(error)
                })
            }
        },
        //点击客户跳转客户详情
        khxq(yhmc001){
            this.$router.push(
                { 
                    name: 'yphgkhdacx', 
                    params: { yhmc001: yhmc001 }
                }
            )
        }
    },
}
</script>
<style lang="less" scoped>
 .yphgkh{
    .van-nav-bar{
        z-index: 9999;
        background-color: #1f6eff;
        .van-nav-bar__title{
            color: #feffff;
        }
        .van-nav-bar__left{
            .van-icon{
                color: #feffff;
            }
        }
    }
    .serach{
        // padding-top: 73px;
        background-color: #1f6eff;
        position: fixed;
        z-index: 999;
        width: 100%;
        top: 12px;
        left: 0;
        .van-search{
            position: static;
            left: 0;
            bottom: 0;
            width: 100%;
            transform: translateY(50%);
            .van-search__content{
                background-color: #fff;
                border-radius:5px;
                .van-cell{
                    color: #2b6fec;
                }
            }
        }
    }
    .content{
        // margin-top: 94px;
        
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        background-color: #fff;
        .van-list{
            .van-cell{
                .van-cell__title{
                    span{
                            width: 5rem;
                            height: 24px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            display: block;
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
