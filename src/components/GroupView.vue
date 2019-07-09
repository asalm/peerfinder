<template>
<div>
    <Navbar/>
    <div class="hero is-small is-success">
        <div class="hero-body">
            <h1 class="title">Gruppe auswählen</h1>
            <h2 class="subtitle">Wähle die Gruppe aus, für die Peergruppen erzeugt werden sollen.</h2>
        </div>
    </div>
    <div class="container">
        <section class="section">
        <div class="columns is-multiline">
                <div class="column is-3" v-for='group in groups' v-bind:key="group.id">
                    <Group :gdata='group'/>
                </div>
        </div>
        </section>
    </div>
</div>
</template>
<script>
import Group from '@/components/Group';
import Navbar from '@/components/Navbar';

export default {
  name: 'GroupView',
  components:{
      Group,
      Navbar
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

  },
  created(){
      console.log(this.$api.usr);
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