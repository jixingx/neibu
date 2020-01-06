<template>
  <div id="app">
    
    <router-view></router-view>
    
  </div>
</template>
<script>
export default {
  created() {
      this.getUser();
  },  
  methods: {
      getUser(){
        let username=this.getUrlParam('name')
        // console.log(username)
        this.$axios.post('/Login',{"username":username}).then((res)=>{
          //console.log(res.data.d)
          let reuslt=JSON.parse(res.data.d);
          console.log(reuslt)
          
            let user=reuslt.data
            
              
            
            
            //localStorage.setItem("user",JSON.stringify(user))
            // console.log(user)
            this.$store.dispatch("acUser",user)
          
        }).catch((error)=>{
          console.log(error)
        })
      },
      getUrlParam (name) {
          var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
          var r = window.location.search.substr(1).match(reg);
          if (r != null) return decodeURIComponent(r[2]); return null;
      } 
  },
}
</script>

<style lang="less">
html{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  font-size: 16px;
}
#app{
  width: 100%;
  height: 100%;
}
[v-cloak]{
    display: none
}

</style>
