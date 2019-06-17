import Vue from 'vue';
import Buefy from 'buefy';
import router from './router';
import App from './App.vue';
import 'buefy/dist/buefy.css';
import Router_func from '../src/assets/route_func';

var url = new URL(window.location.href);

//Router Config Stuff
let ParentMachine = 'https://www.impact-lab.tools/';
let usr_tkn = url.searchParams.get("token")
let app_tkn = 'b66a5b3de8326e342b6f9e744fb732780901b4f7a37ae1f4ab9a4cae2ef48142209a47109cdf8e20ba9ba4b1c93aa4f3f649bd1ad0c0a222f4cea5cb89283eac';
var rr;

Vue.config.productionTip = false;

Vue.use(Buefy);

initVue();


async function initVue() {

  //await initScript().then(async function(r) {

    rr = r;

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


}
*/