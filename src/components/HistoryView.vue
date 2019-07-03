<template>
<div>
    <Navbar/>
    <div class="hero is-small is-success">
        <div class="hero-body">
            <h1 class="title">Historie</h1>
            <h2 class="subtitle">Erstellte Paar für die Gruppe werden angezeigt.</h2>
        </div>
    </div>
    <div class="container">
        <section class="section">
        <div class="columns is-multiline">
                <div class="column is-3" v-for='result in results' v-bind:key='result.key'>
                    <div class="box">
                        <b>{{result.name}}</b><br>
                        {{result.count}} Teilnehmer<br>
                        {{result.date}}                    
                    </div>
                </div>
        </div>
        </section>
    </div>
</div>
</template>
<script>
//import Group from '@/components/Group';
import Navbar from '@/components/Navbar';

export default {
  name: 'GroupView',
  components:{
      //Group,
      Navbar
  },
  props: {
    //msg: String
  },
  data(){
    return{
      results:[
          {
              name:'abcefg',
              count:3,
              date: '11.10.2022',
              key: 1
          },
          {
              name:'ijklmo',
              count:33,
              date: '13.09.2020',
              key: 2
          },
          {
              name:'pqrst',
              count:11,
              date: '11.01.2021',
              key: 3
          },
          {
              name:'uvwxyz',
              count:8,
              date: '12.12.2020',
              key: 4
          }
      ]
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>