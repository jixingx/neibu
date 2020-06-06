<template>
    <div class="trqxx">
        <!-- <van-nav-bar
            title="营销简报"
            left-arrow
            :border="false"
            :fixed="true"
            @click-left="onClickLeft"
        /> -->
        <div class="content">
            <van-tabs class="vantabs1" v-model="active2" background="#1f6eff" title-active-color="#f9ffff" title-inactive-color="#f9ffff" :border="false" :sticky="true" :offset-top="46">
                <van-tab title="通知">
                    <van-tabs class="vantabs2" v-model="active" background="#1f6eff" title-active-color="#f9ffff" title-inactive-color="#f9ffff" :border="false"  :sticky="true" :offset-top="90">
                        <van-tab title="当天">
                            <div class="list-item" v-if="data1Isshow2">
                                <div class="item" v-for="(item,index) in list2" :key="index">
                                    <van-cell v-if="item.FL001==1" title="日销售信息" :icon="icon1"  />
                                    <van-cell v-else-if="item.FL001==10" title="城市燃气销售信息" :icon="icon2"  />
                                    <van-cell v-else-if="item.FL001==11" title="直供工业销售信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==100" title="月销售信息" :icon="icon4"  />
                                    <van-cell v-else-if="item.FL001==600" title="合同签订信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==700" title="合同执行信息" :icon="icon3"  />
                                    <div class="content-plan">
                                        <div class="content-box" @click="xxxq(item.DATE1,item.FL001)">
                                            <p class="p1">{{item.NR}}</p>
                                            <p class="p2"><span>{{item.DATE1 | timetxt }}</span><van-icon name="arrow" /></p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="text" v-else>
                                暂无数据
                            </div>
                            <div>2</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div>1</div><div>1</div>
                            <div class="page" v-if="pageIsshow2">
                                <van-pagination 
                                    v-model="currentPage2" 
                                    :total-items="totalItems2" 
                                    :items-per-page="pageSize2"
                                    @change="changeIndex2"
                                />
                            </div>
                        </van-tab>
                        <van-tab title="一周内">
                            <div class="list-item" v-if="data1Isshow3">
                                <div class="item" v-for="(item,index) in list3" :key="index">
                                    <van-cell v-if="item.FL001==1" title="日销售信息" :icon="icon1"  />
                                    <van-cell v-else-if="item.FL001==10" title="城市燃气销售信息" :icon="icon2"  />
                                    <van-cell v-else-if="item.FL001==11" title="直供工业销售信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==100" title="月销售信息" :icon="icon4"  />
                                    <van-cell v-else-if="item.FL001==600" title="合同签订信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==700" title="合同执行信息" :icon="icon3"  />
                                    <div class="content-plan">
                                        <div class="content-box" @click="xxxq(item.DATE1,item.FL001)">
                                            <p class="p1">{{item.NR}}</p>
                                            <p class="p2"><span>{{item.DATE1 | timetxt }}</span><van-icon name="arrow" /></p>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div class="text" v-else>
                                暂无数据
                            </div>
                            <div class="page" v-if="pageIsshow3">
                                <van-pagination 
                                    v-model="currentPage3" 
                                    :total-items="totalItems3" 
                                    :items-per-page="pageSize3"
                                    @change="changeIndex3"
                                />
                            </div>
                        </van-tab>
                        <van-tab title="一月内">
                            <div class="list-item" v-if="data1Isshow4">
                                <div class="item" v-for="(item,index) in list4" :key="index">
                                    <van-cell v-if="item.FL001==1" title="日销售信息" :icon="icon1"  />
                                    <van-cell v-else-if="item.FL001==10" title="城市燃气销售信息" :icon="icon2"  />
                                    <van-cell v-else-if="item.FL001==11" title="直供工业销售信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==100" title="月销售信息" :icon="icon4"  />
                                    <van-cell v-else-if="item.FL001==600" title="合同签订信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==700" title="合同执行信息" :icon="icon3"  />
                                    <div class="content-plan">
                                        <div class="content-box" @click="xxxq(item.DATE1,item.FL001)">
                                            <p class="p1">{{item.NR}}</p>
                                            <p class="p2"><span>{{item.DATE1 | timetxt }}</span><van-icon name="arrow" /></p>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div class="text" v-else>
                                暂无数据
                            </div>
                            <div class="page" v-if="pageIsshow4">
                                <van-pagination 
                                    v-model="currentPage4" 
                                    :total-items="totalItems4" 
                                    :items-per-page="pageSize4"
                                    @change="changeIndex4"
                                />
                            </div>
                        </van-tab>
                        <van-tab title="更多">
                        <div class="input-btn">
                                <div class="inputrili" @click="timeShow">
                                    <span>{{ time | timefliter('yyyy-mm-dd')}}</span>
                                    <img :src="icon">
                                </div>
                                <i>至</i>
                                <div class="inputrili" @click="timeShow2">
                                    <span>{{ time1}}</span>
                                    <img :src="icon">
                                </div>
                                <van-button type="info" size="small" icon="search" @click="search"/>
                            </div>
                            <van-list
                            v-model="loading"
                            :finished="finished"
                            :offset="50"
                            :loading-text='loadingText'
                            finished-text="没有更多了"
                            @load="onLoad"
                            v-if="data1Isshow"
                            >
                                <div class="list-item">
                                    <div class="item" v-for="(item,index) in list" :key="index">
                                        <van-cell v-if="item.FL001==1" title="日销售信息" :icon="icon1"  />
                                        <van-cell v-else-if="item.FL001==10" title="城市燃气销售信息" :icon="icon2"  />
                                        <van-cell v-else-if="item.FL001==11" title="直供工业销售信息" :icon="icon3"  />
                                        <van-cell v-else-if="item.FL001==100" title="月销售信息" :icon="icon4"  />
                                        <van-cell v-else-if="item.FL001==600" title="合同签订信息" :icon="icon3"  />
                                        <van-cell v-else-if="item.FL001==700" title="合同执行信息" :icon="icon3"  />
                                        <div class="content-plan">
                                            <div class="content-box" @click="xxxq(item.DATE1,item.FL001)">
                                                <p class="p1">{{item.NR}}</p>
                                                <p class="p2"><span>{{item.DATE1 | timetxt }}</span><van-icon name="arrow" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </van-list>
                            
                            <div class="text" v-else>
                                暂无数据
                            </div>
                            <!-- <div class="page" v-if="pageIsshow">
                                <van-pagination 
                                    v-model="currentPage" 
                                    :total-items="totalItems" 
                                    :items-per-page="pageSize"
                                    @change="changeIndex"
                                />
                            </div> -->
                        </van-tab>
                    </van-tabs>
                </van-tab>
                <van-tab title="简报">
                    <van-tabs class="vantabs2" v-model="active" background="#1f6eff" title-active-color="#f9ffff" title-inactive-color="#f9ffff" :border="false"  :sticky="true" :offset-top="90">
                        <van-tab title="当天1">
                            <div class="list-item" v-if="data1Isshow2">
                                <div class="item" v-for="(item,index) in list2" :key="index">
                                    <van-cell v-if="item.FL001==1" title="日销售信息" :icon="icon1"  />
                                    <van-cell v-else-if="item.FL001==10" title="城市燃气销售信息" :icon="icon2"  />
                                    <van-cell v-else-if="item.FL001==11" title="直供工业销售信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==100" title="月销售信息" :icon="icon4"  />
                                    <van-cell v-else-if="item.FL001==600" title="合同签订信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==700" title="合同执行信息" :icon="icon3"  />
                                    <div class="content-plan">
                                        <div class="content-box" @click="xxxq(item.DATE1,item.FL001)">
                                            <p class="p1">{{item.NR}}</p>
                                            <p class="p2"><span>{{item.DATE1 | timetxt }}</span><van-icon name="arrow" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text" v-else>
                                暂无数据
                            </div>
                            <div class="page" v-if="pageIsshow2">
                                <van-pagination 
                                    v-model="currentPage2" 
                                    :total-items="totalItems2" 
                                    :items-per-page="pageSize2"
                                    @change="changeIndex2"
                                />
                            </div>
                        </van-tab>
                        <van-tab title="一周内">
                            <div class="list-item" v-if="data1Isshow3">
                                <div class="item" v-for="(item,index) in list3" :key="index">
                                    <van-cell v-if="item.FL001==1" title="日销售信息" :icon="icon1"  />
                                    <van-cell v-else-if="item.FL001==10" title="城市燃气销售信息" :icon="icon2"  />
                                    <van-cell v-else-if="item.FL001==11" title="直供工业销售信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==100" title="月销售信息" :icon="icon4"  />
                                    <van-cell v-else-if="item.FL001==600" title="合同签订信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==700" title="合同执行信息" :icon="icon3"  />
                                    <div class="content-plan">
                                        <div class="content-box" @click="xxxq(item.DATE1,item.FL001)">
                                            <p class="p1">{{item.NR}}</p>
                                            <p class="p2"><span>{{item.DATE1 | timetxt }}</span><van-icon name="arrow" /></p>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div class="text" v-else>
                                暂无数据
                            </div>
                            <div class="page" v-if="pageIsshow3">
                                <van-pagination 
                                    v-model="currentPage3" 
                                    :total-items="totalItems3" 
                                    :items-per-page="pageSize3"
                                    @change="changeIndex3"
                                />
                            </div>
                        </van-tab>
                        <van-tab title="一月内">
                            <div class="list-item" v-if="data1Isshow4">
                                <div class="item" v-for="(item,index) in list4" :key="index">
                                    <van-cell v-if="item.FL001==1" title="日销售信息" :icon="icon1"  />
                                    <van-cell v-else-if="item.FL001==10" title="城市燃气销售信息" :icon="icon2"  />
                                    <van-cell v-else-if="item.FL001==11" title="直供工业销售信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==100" title="月销售信息" :icon="icon4"  />
                                    <van-cell v-else-if="item.FL001==600" title="合同签订信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==700" title="合同执行信息" :icon="icon3"  />
                                    <div class="content-plan">
                                        <div class="content-box" @click="xxxq(item.DATE1,item.FL001)">
                                            <p class="p1">{{item.NR}}</p>
                                            <p class="p2"><span>{{item.DATE1 | timetxt }}</span><van-icon name="arrow" /></p>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div class="text" v-else>
                                暂无数据
                            </div>
                            <div class="page" v-if="pageIsshow4">
                                <van-pagination 
                                    v-model="currentPage4" 
                                    :total-items="totalItems4" 
                                    :items-per-page="pageSize4"
                                    @change="changeIndex4"
                                />
                            </div>
                        </van-tab>
                        <van-tab title="一年内">
                        <div class="input-btn">
                                <div class="inputrili" @click="timeShow">
                                    <span>{{ time | timefliter('yyyy-mm-dd')}}</span>
                                    <img :src="icon">
                                </div>
                                <i>至</i>
                                <div class="inputrili" @click="timeShow2">
                                    <span>{{ time1}}</span>
                                    <img :src="icon">
                                </div>
                                <van-button type="info" size="small" icon="search" @click="search"/>
                            </div>
                            <div class="list-item" v-if="data1Isshow">
                                <div class="item" v-for="(item,index) in list" :key="index">
                                    <van-cell v-if="item.FL001==1" title="日销售信息" :icon="icon1"  />
                                    <van-cell v-else-if="item.FL001==10" title="城市燃气销售信息" :icon="icon2"  />
                                    <van-cell v-else-if="item.FL001==11" title="直供工业销售信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==100" title="月销售信息" :icon="icon4"  />
                                    <van-cell v-else-if="item.FL001==600" title="合同签订信息" :icon="icon3"  />
                                    <van-cell v-else-if="item.FL001==700" title="合同执行信息" :icon="icon3"  />
                                    <div class="content-plan">
                                        <div class="content-box" @click="xxxq(item.DATE1,item.FL001)">
                                            <p class="p1">{{item.NR}}</p>
                                            <p class="p2"><span>{{item.DATE1 | timetxt }}</span><van-icon name="arrow" /></p>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div class="text" v-else>
                                暂无数据
                            </div>
                            <div class="page" v-if="pageIsshow">
                                <van-pagination 
                                    v-model="currentPage" 
                                    :total-items="totalItems" 
                                    :items-per-page="pageSize"
                                    @change="changeIndex"
                                />
                            </div>
                        </van-tab>
                    </van-tabs>
                </van-tab>   
            </van-tabs>    
            
            
        </div>
        <!-- 日期选择器 -->
        <transition>
            <div class="time" v-if="isShow">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    @cancel="close"
                    @confirm="DeterTime"
                />
            </div>
        </transition>
        <transition>
            <div class="time" v-if="isShow2">
                <van-datetime-picker
                    v-model="currentDate2"
                    type="date"
                    @cancel="close2"
                    @confirm="DeterTime2"
                />
            </div>
        </transition>
        <!-- 遮罩层 -->
        <van-overlay
        :show="isShow"
        @click="isShow = false"
        />
        <van-overlay
        :show="isShow2"
        @click="isShow2 = false"
        />
    </div>
</template>
<script>
export default {
    name:"TrqXx",
    data() {
        return {
            active:0,
            active2:0,
            tabbarActive:1,
            icon1:require("../image/trq/rxsxx.png"),//日销售
            icon2:require("../image/trq/csrqxsxx.png"),//城市燃气销售信息
            icon3:require("../image/trq/zggyxsxx.png"),//直供工业销售信息
            icon4:require("../image/trq/yxsxx.png"),//月销售信息
            icon5:require("../image/trq/htqdxx.png"),//合同签订信息
            icon6:require("../image/trq/htzxxx.png"),//合同执行信息
            currentDate: new Date((new Date().getFullYear())-1+"-01-01"),
            currentDate2:new Date(),
            maxDate: new Date(),
            time:new Date().getFullYear()-1+"-01-01",
            time1:new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1).toString().padStart(2,'0')+"-"+(parseInt(new Date().getDate())).toString().padStart(2,'0'),
            //time1:new Date().getFullYear()-1+"-01-09",
            icon:require("../image/trq/rili.png"),
            isShow:false,
            isShow2:false,
            list:[],
            list2:[],
            list3:[],
            list4:[],
            loading: false,
            finished: false,
            data1Isshow:true,
            loadingText:"加载中...",
        }
    },
    created() {
        this.getlist()
        this.getlist2()
        this.getlist3()
        this.getlist4()
    },
    methods: {
        onClickLeft(){
            this.$router.push('/trqhome')
        },
        //点击日期弹出选择时间框
        timeShow(){
            this.isShow=true;
        },
        timeShow2(){
            this.isShow2=true;
        },
        //日历点击取消按钮
        close(){
            this.isShow=false;
        },
        close2(){
            this.isShow2=false;
        },
        //日历点击确认
        DeterTime(value){
            // console.log(value)
            let date = value;
            let m = date.getMonth() + 1;
            let d = date.getDate();
            if (m >= 1 && m <= 9) {
                m = "0" + m;
            }
            if (d >= 0 && d <= 9) {
                d = "0" + d;
            }
            let timer = date.getFullYear() + "-" + m + "-" + d
            this.time=timer
            this.isShow=false;
        },
        DeterTime2(value){
            // console.log(value)
            let date = value;
            let m = date.getMonth() + 1;
            let d = date.getDate();
            if (m >= 1 && m <= 9) {
                m = "0" + m;
            }
            if (d >= 0 && d <= 9) {
                d = "0" + d;
            }
            let timer = date.getFullYear() + "-" + m + "-" + d
            this.time1=timer
            this.isShow2=false;
        },
        //默认请求数据（更多查询）
        getlist(){
            //console.log(this.time)
            let intime=this.time.split('-');
            let year=intime[0];
            let month=intime[1];
            let day=intime[2];
            let intime1=this.time1.split('-');
            let year1=intime1[0];
            let month1=intime1[1];
            let day1=intime1[2];
            this.$axios.post('/TRQYXJB',{
                type:'100',
                year,
                month,
                day,
                year1,
                month1,
                day1,
                pageNumber:this.pageNumber,
                pageSize:this.pageSize
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data.length>0){
                    this.list=d.data;
                    this.totalItems=d.count[0].Column1
                    this.data1Isshow=true;
                    this.pageIsshow=true;

                }else{
                    this.list=[];
                    this.currentPage=1
                    this.data1Isshow=false;
                    this.pageIsshow=false;
                }
                
            }).catch((error)=>{ 
                //console.log(error)
            })
        },
        //点击页码效果
        changeIndex(index){
            //console.log(index)
            this.pageNumber=index;
            this.getlist()
        },
        //默认请求数据(当天)
        getlist2(){
            this.$axios.post('/TRQYXJB',{
                type:'1',
                year:'',
                month:'',
                day:'',
                year1:'',
                month1:'',
                day1:'',
                pageNumber:this.pageNumber2,
                pageSize:this.pageSize2
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data.length>0){
                    this.list2=d.data;
                    this.totalItems2=d.count[0].Column1
                    this.data1Isshow2=true;
                    this.pageIsshow2=true;

                }else{
                    this.list2=[];
                    this.currentPage2=1
                    this.data1Isshow2=false;
                    this.pageIsshow2=false;
                }
                
            }).catch((error)=>{ 
                //console.log(error)
            })
        },
        //点击页码效果
        changeIndex2(index){
            //console.log(index)
            this.pageNumber2=index;
            this.getlist2()
        },
        //默认请求数据(周)
        getlist3(){
            this.$axios.post('/TRQYXJB',{
                type:'7',
                year:'',
                month:'',
                day:'',
                year1:'',
                month1:'',
                day1:'',
                pageNumber:this.pageNumber3,
                pageSize:this.pageSize3
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data.length>0){
                    this.list3=d.data;
                    this.totalItems3=d.count[0].Column1
                    this.data1Isshow3=true;
                    this.pageIsshow3=true;

                }else{
                    this.list3=[];
                    this.currentPage3=1
                    this.data1Isshow3=false;
                    this.pageIsshow3=false;
                }
                
            }).catch((error)=>{ 
                //console.log(error)
            })
        },
        //点击页码效果
        changeIndex3(index){
            //console.log(index)
            this.pageNumber3=index;
            this.getlist3()
        },
        //默认请求数据(月)
        getlist4(){
            this.$axios.post('/TRQYXJB',{
                type:'30',
                year:'',
                month:'',
                day:'',
                year1:'',
                month1:'',
                day1:'',
                pageNumber:this.pageNumber4,
                pageSize:this.pageSize4
            }).then((res)=>{
                let d=res.data.d
                d=JSON.parse(d)
                //console.log(d)
                if(d.data.length>0){
                    this.list4=d.data;
                    this.totalItems4=d.count[0].Column1
                    this.data1Isshow4=true;
                    this.pageIsshow4=true;

                }else{
                    this.list4=[];
                    this.currentPage4=1
                    this.data1Isshow4=false;
                    this.pageIsshow4=false;
                }
                
            }).catch((error)=>{ 
                //console.log(error)
            })
        },
        //点击页码效果
        changeIndex4(index){
            //console.log(index)
            this.pageNumber4=index;
            this.getlist4()
        },
        //更多查询
        search(){
            let Btime1=this.time.replace(/-/ig,'');
            let Btime2=this.time1.replace(/-/ig,'');
            //console.log(Btime1,Btime2)
            if(Btime1>Btime2){
                this.$dialog.alert({
                    message: '开始时间不能大于结束时间'
                })
            }else{
                this.currentPage=1
                this.getlist()
            }
            
        },
        //点击查看详情
        xxxq(DATE1,FL001){
            //console.log(DATE1,FL001)
            this.$router.push({
                name:'trqxxxq',
                params:{
                    DATE1,
                    FL001
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.trqxx{
    .van-nav-bar{
        background-color: #1f6eff;
        .van-nav-bar__title{
            color:#fffaff;
            font-weight: bold;
        }
        .van-nav-bar__left{
            .van-icon{
                color: #fffaff;
                font-weight: bold;
            }
        }
    }
    .content{
        // padding-top: 45px;
        
        padding-bottom: 65px;
        .item{
            margin-top: 0.2rem;
            .van-cell{
                background-color: transparent;
                .van-cell__left-icon{
                    font-size: 18px;
                }
                .van-cell__title{
                    font-size: 0.24rem;
                    color: #303030;
                }
            }
            .content-plan{
                padding: 0 15px;
                height: 1.38rem;
                // background-color: #ffffff;
                .content-box{
                    background-color: #ffffff;
                    height: 100%;
                    border-radius: 7px;
                    padding: 0.2rem 0.2rem 0rem 0.2rem;
                    .p1{
                        margin: 0px;
                        font-size: 0.24rem;
                        line-height: 0.32rem;
                        color: #525252;
                        width: 100%;
                        height: 0.66rem;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                    .p2{
                        margin: 0;
                        margin-top: 0.2rem;
                        color: #b3b3b3;
                        display: flex;
                        align-items: center;
                        justify-content:flex-end;
                        span{
                            font-size: 0.2rem;
                            margin-right: 0.3rem;
                        }
                        .van-icon{
                            font-size: 0.24rem;
                        }
                    }
                }
            }
        }
        .input-btn{
            padding: 0 0.32rem;
            background-color: #e8f0fd;
            height: 1.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            i{
                font-style: inherit;
                font-size: 0.24rem;
            }
            .inputrili{
                height: 30px;
                width: 1.8rem;
                background-color: #70a1fd;
                border-radius: 2px;
                display: flex;
                justify-content: space-between;
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
        .van-button{
            min-width:50px;
            .van-button__icon{
                font-size: 0.36rem;
            }
        }
    }
    .time{
        position: fixed;
        bottom: 0px;
        left: 0;
        width: 100%;
        z-index: 9999;
    }
    .page{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 99;
        margin-top: 0.66rem;
        // padding-left: 0.34rem;
        // padding-right: 0.34rem;
        padding-bottom: 0.16rem;
        .van-pagination{
            padding-left: 0.34rem;
            padding-right: 0.34rem;
        }
    }
    .text{
        text-align: center;
        line-height: 30px;
        font-size: 0.2rem;
    }
}
// .vantabs1{
//     position: fixed;
//     width: 100%;
//     left: 0;
//     top: 46px;
//     // z-index:9999;
// }
// .vantabs2{
//     position: fixed;
//     width: 100%;
//     left: 0;
//     top:90px;
// }
// .van-tab__pane{
//     padding-top:44px;
// }
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

