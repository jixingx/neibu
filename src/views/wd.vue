<template>
    <div class="wd">
        <div class="wd-header">
            <div class="wd-header-userimg">
                <img src="../image/wd/touxiang.png" alt="" srcset="">
                <div class="wd-header-xjlogo">
                    <img src="../image/wd/xiangji.png" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="content">
            <template v-for="(item,index) in icons">
                <van-cell :title="item.name" :icon="item.icon" :key="index" :value="item.value" />
            </template>
            
            
        </div>
        <van-tabbar v-model="tabbarActive" :fixed="true" active-color="#1f6eff" v-if="tebbarIsshow">
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
        
        <van-tabbar v-model="tabbarActive2" :fixed="true" v-else>
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
    name:"Wd",
    data () {
        return {
            icons:[
                {name:"姓名",icon:require("../image/wd/xingming.png"),value:""},
                {name:"单位",icon:require("../image/wd/danwei.png"),value:""},
                //{name:"职务",icon:require("../image/wd/zhiwu.png"),value:"老大"},
                {name:"电话",icon:require("../image/wd/dianhua.png"),value:""},
            ],
            tabbarActive:this.$store.getters.getUser!="KQ"?2:3,
            tabbarActive2:2,
            tebbarIsshow:true
        }
    },
    beforeRouteEnter:function(to, from, next) {//进入组件前执行。
        if(from.path=="/khjlhome"||from.path=="/khhome"){
            //this.tebbarIsshow=false
            next(vm=>{
                vm.tebbarIsshow=false
                // vm.tabbarActive2=2
            });
        }else{
            next(vm=>{
                vm.tebbarIsshow=true
                // vm.tabbarActive=3
            });
        }
		// console.log(to);
		// console.log(from);
		// next('/addGoods');//如果加了这句话，就永远进入不了当前组件，因为，无条件跳转到/addGoods
    },
    created () {
      this.getList()  
    },
    methods: {
        getList(){
            this.$axios.post('/Wode',{
                czygl001:this.$store.getters.getUser.CZYGL001
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                this.icons[0].value=d.data[0].CZYGL003
                this.icons[1].value=d.data[0].DW002
                this.icons[2].value=d.data[0].PHONE_NUMBER
            }).catch((error)=>{
                //console.log(error)
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
.wd{
    .wd-header{
        height: 3.88rem;
        background-image: url("../image/wd/bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        margin-bottom: 1.06rem;
        .wd-header-userimg{
            width: 1.63rem;
            height: 1.63rem;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translate(-50%,50%);
            &>img{
                width: 100%;
                height: 100%;
            }
            .wd-header-xjlogo{
                height: 0.58rem;
                width: 0.58rem;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(50%,-50%);
                &>img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .content{
        padding: 0 0.28rem;
        .van-cell{
            margin-bottom: 0.2rem;
            border-radius: 7px;
        }
    }
}
</style>
