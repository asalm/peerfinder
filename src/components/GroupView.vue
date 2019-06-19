<template>
<div class="container">
    <div class="hero is-small is-success">
        <div class="hero-body">
            <h1 class="title">Peerfinder</h1>
            <h2 class="subtitle">Gruppe auswählen</h2>
        </div>
    </div>
    <section class="section">
    <div class="columns is-multiline">
            <div class="column is-3" v-for='group in groups'>
                <Group :gdata='group'/>
            </div>
    </div>
    </section>
</div>
</template>
<script>
import Group from '@/components/Group';

export default {
  name: 'GroupView',
  components:{
      Group
  },
  props: {
    //msg: String
  },
  data(){
    return{
      groups:[
          {
              name:'abcefg',
              members:3,
              id:33222
          },
          {
              name:'ijklmo',
              members:33,
              id:132
          },
          {
              name:'pqrst',
              members:11,
              id:111,
          },
          {
              name:'uvwxyz',
              members:8,
              id:12
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

CalcView {
  margin-bottom:4em;
}
</style>