<template>
    <div class="trqhtlcxsh">
        <!-- <van-nav-bar
            title="合同量审核"
            :border="false"
            :fixed="true"
            @click-left="onClickLeft"
        /> -->
        <div class="content">
            <div class="input-btn">
                <div class="inputrili" @click="timeShow">
                    <span>{{ time }}</span>
                </div>
                <van-button type="info" size="small" @click="Serach">查询</van-button>
            </div>
            <div class="table-pad">
                <table class="cxsh-table" v-if="isTextshow">
                    <tr>
                        <td>序号</td>
                        <td>单位</td>
                        <td>审核人</td>
                        <td>审核时间</td>
                        <td>功能</td>
                    </tr>
                    <tr v-for="(item,index) in list" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.TDW002}}</td>
                        <td>{{item.CZYGL003}}</td>
                        <td v-if="item.SPSJ=='0'"></td>
                        <td v-else>{{item.SPSJ | timefliter('yyyy-mm-dd')}}</td>

                        <td v-if="item.PX==0"><van-button type="warning" size="small" @click="cxsh(item.TDW001)">撤销审核</van-button></td>
                        <td v-else><van-button type="default" size="small" disabled>未上报</van-button></td>
                    </tr>
                    <!-- <tr>
                        <td>2</td>
                        <td>成都销售部</td>
                        <td>Gun</td>
                        <td>2018/7/15</td>
                        <td><van-button type="warning" size="small">撤销审核</van-button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>成都销售部</td>
                        <td>Gun</td>
                        <td>2018/7/15</td>
                        <td><van-button type="warning" size="small">撤销审核</van-button></td>
                    </tr> -->
                </table>
                <div class="text" v-else>
                    暂无数据
                </div>
            </div>
            <!-- <div class="page" v-if="isTextshow">
                <van-pagination 
                    v-model="currentPage" 
                    :total-items="24" 
                    :items-per-page="5"
                />
            </div> -->
        </div>
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
    name:'TrqHtlCxsh',
    data () {
        return {
            // currentDate: new Date(),
            time:'请选择合同批号',
            icon:require("../image/trq/rili.png"),
            isShow:false,
            // maxDate: new Date(),
            // currentPage: 1,
            isTextshow:false,
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
            this.$router.push("/trqshxz")
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
        //查询功能
        Serach(){
             // let startTime=this.time.split('-');
            // let year=startTime[0];
            // let month=startTime[1];
            let DW001=this.$store.getters.getUser.DW001
            let FLAG=this.$store.getters.getUser.FLAG
            let id=this.columnsid[this.columIndex]
            this.$axios.post('/YXCHTSHCX',{
                DW001,
                FLAG,
                id
            }).then((res)=>{
                //console.log(res)
                let d=res.data.d
                d=JSON.parse(d)
                // console.log(d)
                if(d.data.length>0){
                    this.isTextshow=true
                    this.list=d.data
                }else{
                    this.isTextshow=false 
                }
            }).catch((error)=>{
                //console.log(error)
            })
        },
        //撤销审核
        cxsh(TDW001){
            let ApprID=this.columnsid[this.columIndex]
            this.$axios.post('/CancelHTSb',{
                ApprID,
                TDW001
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.success){
                    this.$dialog.alert({
                        message: '撤销成功'
                        }).then(() => {
                            this.Serach()
                    });
                }else{
                    this.$dialog.alert({
                        message: '撤销失败'
                        }).then(() => {
                    });
                }
            }).catch((error)=>{ 
                //console.log(error)
            })
        }
    },
}
</script>
<style lang="less" scoped>
.trqhtlcxsh{
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
        // padding-top: 46px;
        .input-btn{
            padding: 0 0.32rem;
            background-color: #e8f0fd;
            height: 1.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .inputrili{
                height: 30px;
                width: 2.6rem;
                background-color: #70a1fd;
                border-radius: 2px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 0.3rem;
                span{
                    color: #ffffff;
                    font-size: 0.22rem;
                    
                }
                img{
                    width: 0.34rem;
                    height: 0.34rem;
                }
            }
        }
        .table-pad{
            padding: 0 0.32rem;
            .cxsh-table{
                width: 100%;
                border-collapse: collapse;
                tr{
                    line-height: 0.9rem;
                    margin-bottom: 0.2rem;
                    display: flex;
                    td{
                        text-align: center;
                        font-size: 0.22rem;
                        color: #2b2b2b;
                        padding: 0;
                        // width: 20%;
                        &:nth-child(1){
                                flex:1;
                        }
                        &:nth-child(2){
                            flex:2;
                        }
                        &:nth-child(3){
                            flex:1;
                        }
                        &:nth-child(4){
                            flex:2;
                        }
                        &:nth-child(5){
                            flex:2;
                        }
                        // .van-button--small{
                        //     height: 28px;
                        //     padding: 0 2px;
                        //     line-height: 26px;
                        // }
                    }
                    &:first-child{
                        display: flex;
                        margin-bottom: 0;
                        td{
                            font-size: 0.24rem;
                            color: #7a7a7a;
                            padding: 0;
                            &:nth-child(1){
                                flex:1;
                            }
                            &:nth-child(2){
                                flex:2;
                            }
                            &:nth-child(3){
                                flex:1;
                            }
                            &:nth-child(4){
                                flex:2;
                            }
                            &:nth-child(5){
                                flex:2;
                            }
                        }
                    } 
                    &:not(:first-child){
                        background-color: #fff;
                        border-radius: 7px;
                    }
                }
            }
        }
        .page{
            padding: 0 0.32rem;
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
