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
      ]
    }
  },
  methods:{
      getGroup: async function(){
          var p_group =  await this.$api.db.group.get({},this.$apptkn);
        console.log("Returned Values Length: ",p_group.data.length);
        for(var i = 0; i < p_group.data.length; i++){
          this.groups.push({"Name":p_group.data[i].Name.toString(),"id":parseInt(p_group.data[i].id),"iliasID":parseInt(p_group.data[i].iliasID)});
        }
      },
      getUsers: async function(grr){
          /*
          console.log(grr.data.length);
          for(var i = 0; i < grr.data.length; i++){
              var g_count = await this.$api.db.user.get({"g_id":grr.data[i].iliasID.toString()});
              console.log("hehe",g_count);
          }
          console.log(grr.data[0].Name);*/

      }
  },
  created(){
     this.getGroup();
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