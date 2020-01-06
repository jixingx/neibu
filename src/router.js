import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import Home from './views/Home.vue'
import KhjlHome from './views/KhjlHome.vue'
import KhHome from './views/KhHome.vue'
import TrqHome from './views/TrqHome.vue'
import TrqKh from './views/TrqKh.vue'
import TrqRqlCxsh from './views/TrqRqlCxsh.vue'
import TrqYjhCxsh from './views/TrqYjhCxsh.vue'
import TrqYjhbbCxsh from './views/TrqYjhbbCxsh.vue'
import TrqRqlSh from './views/TrqRqlSh.vue'
import TrqHtlCxsh from './views/TrqHtlCxsh.vue'
import TrqHtdzlsh from './views/TrqHtdzlsh.vue'
import TrqHtyqlsh from './views/TrqHtyqlsh.vue'
import TrqNjhsh from './views/TrqNjhsh.vue'
import TrqNjhCxsh from './views/TrqNjhCxsh.vue'
import TrqYdbbsh from './views/TrqYdbbsh.vue'
import TrqYjhsh from './views/TrqYjhsh.vue'
import TrqShxz from './views/TrqShxz.vue'
import TrqSjzx from './views/TrqSjzx.vue'
import TrqSjzxfdw from './views/TrqSjzxfdw.vue'
import TrqSjzxfss from './views/TrqSjzxfss.vue'
import TrqSjzxfbk from './views/TrqSjzxfbk.vue'
import TrqSjzxfhy from './views/TrqSjzxfhy.vue'
import TrqSjzxfdq from './views/TrqSjzxfdq.vue'
import TrqSjzxkzdkf from './views/TrqSjzxkzdkf.vue'
import TrqKhdacx from './views/TrqKhdacx.vue'
import TrqSjzxzd from './views/TrqSjzxzd.vue'
import TrqXx from './views/TrqXx.vue'
import TrqXxxq from './views/TrqXxxq.vue'
import YphgShxz from './views/YphgShxz.vue'
import YphgShnjhsh from './views/YphgShnjhsh.vue'
import YphgNjhcxsh from './views/YphgNjhcxsh.vue'
import YphgShydbbsh from './views/YphgShydbbsh.vue'
import YphgYdbbcxsh from './views/YphgYdbbcxsh.vue'
import YphgYjhcxsh from './views/YphgYjhcxsh.vue'
import YphgShyjhsh from './views/YphgShyjhsh.vue'
import YphgHome from './views/YphgHome.vue'
import YphgKh from './views/YphgKh.vue'
import YphgKhdacx from './views/YphgKhdacx.vue'
import YphgSjzx from './views/YphgSjzx.vue'
import YphgSjzxyycp from './views/YphgSjzxyycp.vue'
import YphgSjzxlhcp from './views/YphgSjzxlhcp.vue'
import YphgSjzxyhq from './views/YphgSjzxyhq.vue'
import YphgSjzxqthgcp from './views/YphgSjzxqthgcp.vue'
import YphgXx from './views/YphgXx.vue'
import YphgXxxq from './views/YphgXxxq.vue'
import ZdRxssh from './views/ZdRxssh.vue'
import ZdRxscxsh from './views/ZdRxscxsh.vue'
import ZdShydbbsh from './views/ZdShydbbsh.vue'
import ZdYdbbcxsh from './views/ZdYdbbcxsh.vue'
import ZdShyjhsh from './views/ZdShyjhsh.vue'
import ZdYjhcxsh from './views/ZdYjhcxsh.vue'
import ZdShnjhsh from './views/ZdShnjhsh.vue'
import ZdNjhcxsh from './views/ZdNjhcxsh.vue'
import ZdHome from './views/ZdHome.vue'
import ZdKh from './views/ZdKh.vue'
import ZdKhdacx from './views/ZdKhdacx.vue'
import ZdSjzx from './views/ZdSjzx.vue'
import ZdSjzxgfgs from './views/ZdSjzxgfgs.vue'
import ZdSjzxrxs from './views/ZdSjzxrxs.vue'
import Zdshxz from './views/Zdshxz.vue'
import ZdXx from './views/ZdXx.vue'
import ZdXxxq from './views/ZdXxxq.vue'
import wd from './views/wd.vue'
Vue.use(Router)

let router=new Router({
  // mode:"history",
  routes: [
    {
      path:'/',
      redirect:'/trqhome'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/khjlhome',
      name: 'khjlhome',
      component: KhjlHome
    },
    {
      path: '/khhome',
      name: 'khhome',
      component: KhHome
    },
    {
      path: '/trqhome',
      name: 'trqhome',
      component: TrqHome
    },
    {
      path: '/trqkh',
      name: 'trqkh',
      component: TrqKh
    },
    {
      path: '/trqrqlcxsh',
      name: 'trqrqlcxsh',
      component: TrqRqlCxsh
    },
    {
      path: '/trqyjhcxsh',
      name: 'trqyjhcxsh',
      component: TrqYjhCxsh
    },
    {
      path: '/trqyjhbbcxsh',
      name: 'trqyjhbbcxsh',
      component: TrqYjhbbCxsh
    },
    {
      path: '/trqkhdacx',
      name: 'trqkhdacx',
      component: TrqKhdacx
    },
    {
      path: '/trqnjhsh',
      name: 'trqnjhsh',
      component: TrqNjhsh
    },
    {
      path: '/trqnjhcxsh',
      name: 'trqnjhcxsh',
      component: TrqNjhCxsh
    },
    {
      path: '/trqrqlsh',
      name: 'trqrqlsh',
      component: TrqRqlSh
    },
    {
      path: '/trqhtdzlsh',
      name: 'trqhtdzlsh',
      component: TrqHtdzlsh
    },
    {
      path: '/trqhtlcxsh',
      name: 'trqhtlcxsh',
      component: TrqHtlCxsh
    },
    {
      path: '/trqhtyqlsh',
      name: 'trqhtyqlsh',
      component: TrqHtyqlsh
    },
    {
      path: '/trqydbbsh',
      name: 'trqydbbsh',
      component: TrqYdbbsh
    },
    {
      path: '/trqyjhsh',
      name: 'trqyjhsh',
      component: TrqYjhsh
    },
    {
      path: '/trqsjzx',
      name: 'trqsjzx',
      component: TrqSjzx
    },
    {
      path: '/trqshxz',
      name: 'trqshxz',
      component: TrqShxz
    },
    {
      path: '/trqsjzxfdw',
      name: 'trqsjzxfdw',
      component: TrqSjzxfdw
    },
    {
      path: '/trqsjzxfss',
      name: 'trqsjzxfss',
      component: TrqSjzxfss
    },
    {
      path: '/trqsjzxfbk',
      name: 'trqsjzxfbk',
      component: TrqSjzxfbk
    },
    {
      path: '/trqsjzxfhy',
      name: 'trqsjzxfhy',
      component: TrqSjzxfhy
    },
    {
      path: '/trqsjzxfdq',
      name: 'trqsjzxfdq',
      component: TrqSjzxfdq
    },
    {
      path: '/trqsjzxkzdkf',
      name: 'trqsjzxkzdkf',
      component: TrqSjzxkzdkf
    },
    {
      path: '/trqsjzxzd',
      name: 'trqsjzxzd',
      component: TrqSjzxzd
    },
    {
      path: '/trqxx',
      name: 'trqxx',
      component: TrqXx
    },
    {
      path: '/trqxxxq',
      name: 'trqxxxq',
      component: TrqXxxq
    },
    {
      path: '/yphgshxz',
      name: 'yphgshxz',
      component: YphgShxz
    },
    {
      path: '/yphgshnjhsh',
      name: 'yphgshnjhsh',
      component: YphgShnjhsh
    },
    {
      path: '/yphgnjhcxsh',
      name: 'yphgnjhcxsh',
      component: YphgNjhcxsh
    },
    {
      path: '/yphgshydbbsh',
      name: 'yphgshydbbsh',
      component: YphgShydbbsh
    },
    {
      path: '/yphgydbbcxsh',
      name: 'yphgydbbcxsh',
      component: YphgYdbbcxsh
    },
    {
      path: '/yphgshyjhsh',
      name: 'yphgshyjhsh',
      component: YphgShyjhsh
    },
    {
      path: '/yphgyjhcxsh',
      name: 'yphgyjhcxsh',
      component: YphgYjhcxsh
    },
    {
      path: '/yphghome',
      name: 'yphghome',
      component: YphgHome
    },
    {
      path: '/yphgkh',
      name: 'yphgkh',
      component: YphgKh
    },
    {
      path: '/yphgkhdacx',
      name: 'yphgkhdacx',
      component: YphgKhdacx
    },
    {
      path: '/yphgsjzx',
      name: 'yphgsjzx',
      component: YphgSjzx
    },
    {
      path: '/yphgsjzxyycp',
      name: 'yphgsjzxyycp',
      component: YphgSjzxyycp
    },
    {
      path: '/yphgsjzxlhcp',
      name: 'yphgsjzxlhcp',
      component: YphgSjzxlhcp
    },
    {
      path: '/yphgsjzxyhq',
      name: 'yphgsjzxyhq',
      component: YphgSjzxyhq
    },
    {
      path: '/yphgsjzxqthgcp',
      name: 'yphgsjzxqthgcp',
      component: YphgSjzxqthgcp
    },
    {
      path: '/yphgxx',
      name: 'yphgxx',
      component: YphgXx
    },
    {
      path: '/yphgxxxq',
      name: 'yphgxxxq',
      component: YphgXxxq
    },
    {
      path: '/zdrxssh',
      name: 'zdrxssh',
      component: ZdRxssh
    },
    {
      path: '/zdrxscxsh',
      name: 'zdrxscxsh',
      component: ZdRxscxsh
    },
    {
      path: '/zdshydbbsh',
      name: 'zdshydbbsh',
      component: ZdShydbbsh
    },
    {
      path: '/zdydbbcxsh',
      name: 'zdydbbcxsh',
      component: ZdYdbbcxsh
    },
    {
      path: '/zdshnjhsh',
      name: 'zdshnjhsh',
      component: ZdShnjhsh
    },
    {
      path: '/zdnjhcxsh',
      name: 'zdnjhcxsh',
      component: ZdNjhcxsh
    },
    {
      path: '/zdshyjhsh',
      name: 'zdshyjhsh',
      component: ZdShyjhsh
    },
    {
      path: '/zdyjhcxsh',
      name: 'zdyjhcxsh',
      component: ZdYjhcxsh
    },
    {
      path: '/zdhome',
      name: 'zdhome',
      component: ZdHome
    },
    {
      path: '/zdkh',
      name: 'zdkh',
      component: ZdKh
    },
    {
      path: '/zdkhdacx',
      name: 'zdkhdacx',
      component: ZdKhdacx
    },
    {
      path: '/zdsjzx',
      name: 'zdsjzx',
      component: ZdSjzx
    },
    {
      path: '/zdsjzxgfgs',
      name: 'zdsjzxgfgs',
      component: ZdSjzxgfgs
    },
    {
      path: '/zdsjzxrxs',
      name: 'zdsjzxrxs',
      component: ZdSjzxrxs
    },
    {
      path: '/zdshxz',
      name: 'zdshxz',
      component: Zdshxz
    },
    {
      path: '/zdxx',
      name: 'zdxx',
      component: ZdXx
    },
    {
      path: '/zdxxxq',
      name: 'zdxxxq',
      component: ZdXxxq
    },
    {
      path: '/wd',
      name: 'wd',
      component: wd
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
    //let user=JSON.parse(localStorage.getItem('user'))
    let username=getUrlParam('name')
    if(to.path=="/trqhome"){
      // if(user.iskhjl=="0"){
      //   next()
      // }else{
      //   next('/khjlhome')
      // }
      
      axios.post('/Login',{"username":username}).then((res)=>{
        //console.log(res.data.d)
        let reuslt=JSON.parse(res.data.d);
        //console.log(reuslt)
        
          let user=reuslt.data
          
            
          
          
          localStorage.setItem("user",JSON.stringify(user))
          // console.log(user)
          //this.$store.dispatch("acUser",user)
          if(user.iskhjl=="0"){
            next()
          }else{
            next('/khjlhome')
          }
        
      }).catch((error)=>{
        console.log(error)
      })
    }else{
      next()
    }
    
    
    // next()
})
function getUrlParam (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]); return null;
} 
export default router;