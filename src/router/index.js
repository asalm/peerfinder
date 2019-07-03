import Vue from 'vue'
import Router from 'vue-router'
import MatchView from '@/components/MatchView'
import ResultView from '@/components/ResultView'
import GroupView from '@/components/GroupView'
import HistoryView from '@/components/HistoryView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: GroupView
    },
    {
      path: '/match',
      name: 'match',
      component: MatchView,
      props: true
    },
    {
        path: '/result',
        name: 'result',
        component: ResultView,
        props: true
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
      props: true
    }
  ]
})