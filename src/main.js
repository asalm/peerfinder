import Vue from 'vue';
import Buefy from 'buefy';
import router from './router';
import App from './App.vue';
import 'buefy/dist/buefy.css';
//import Router_func from '../src/assets/route_func';

var url = new URL(window.location.href);

//Router Config Stuff
let ParentMachine = 'https://www.impact-lab.tools/';
let usr_tkn = url.searchParams.get("token")
let app_tkn = '9a056d8d4072e4f865aa7a3e5ff343cfd3b4a9e6ad8b6e9f9b10e302ed15cbd9e1b330b6328dea0b8e184bf3c2bdadaaa86ed97eed0c383cc9b73bef9c98d7c6';
var rr;

Vue.config.productionTip = false;

Vue.use(Buefy);

initVue();


async function initVue() {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  //});


}
/*
function initScript(){


  return new Promise(async function(res, rej){


    var config = {
      "host" : ParentMachine,
      "user_token" : usr_tkn,
      "app_token" : app_tkn,
      "schemaName" : "peerf"
    };

    var _r = new Router_func(config);
    await _r.setup();
    res(_r);

  });


}*/
