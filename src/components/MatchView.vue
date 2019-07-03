<template>
<div>
    <Navbar/>
  <div class="hero is-small is-success">
    <div class="hero-body">
      <h1 class="title">Mix and Match</h1>
      <h2 class="subtitle">Wähle Teilnehmer aus der Gruppe {{selectedGroup}} aus. Aus deiner Auswahl werden Peergruppen erzeugt.</h2>
    </div>
  </div>
  <div class="container">
    <div class="hello">
      <PeerView :callback='updatePeers'/>
    </div>
    <CalcView :callback='updateConfig' :peerlist='selectedPeers'/>
  </div>
</div>
</template>
<script>
import PeerView from '@/components/PeerView';
import CalcView from '@/components/CalcView';
import Navbar from '@/components/Navbar';

export default {
  name: 'MatchView',
  components:{
    PeerView,
    CalcView,
    Navbar,
  },
  props: {
    selectedGroup: String,
    groupId: Number,
  },
  data(){
    return{
      selectedPeers: [],
      selectedConfig: []
    }
  },
  methods:{
    updatePeers: function(newPeers ){
      this.selectedPeers = newPeers;
    },
    updateConfig: function(newConf){
      this.selectedConfig = newConf;
    }
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