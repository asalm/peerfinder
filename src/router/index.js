import Vue from 'vue'
import Router from 'vue-router'
import MatchView from '@/components/MatchView'
import ResultView from '@/components/ResultView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: MatchView
    },
    {
        path: '/result',
        name: 'result',
        component: ResultView,
        props: true
    }
  ]
})