import Vue from 'vue';
import Buefy from 'buefy';
import router from './router';
import App from './App.vue';
import 'buefy/dist/buefy.css';
//import Router_func from '../src/assets/route_func';



Vue.config.productionTip = false;

Vue.use(Buefy);

initVue();


async function initVue() {
  await initScript().then(async function(r) {
    //var api = r;

    Vue.prototype.$api = r;
    Vue.prototype.$token = "9a056d8d4072e4f865aa7a3e5ff343cfd3b4a9e6ad8b6e9f9b10e302ed15cbd9e1b330b6328dea0b8e184bf3c2bdadaaa86ed97eed0c383cc9b73bef9c98d7c6";

    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  });
}


function initScript(){

  return new Promise(async function(res, rej){
    var url = new URL(window.location.href);

    var config = {
      "host":"http://impact-lab.tools",
      "user_token": url.searchParams.get("token"),
      "app_token": "9a056d8d4072e4f865aa7a3e5ff343cfd3b4a9e6ad8b6e9f9b10e302ed15cbd9e1b330b6328dea0b8e184bf3c2bdadaaa86ed97eed0c383cc9b73bef9c98d7c6",
      "schemaName": "peer"
    };
    var _r = new Router_func(config);
    try{
    await _r.setup();
    }catch(e){
      rej("Error");
    }
    
    res(_r);
    
  });
}

