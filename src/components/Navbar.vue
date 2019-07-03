<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="./">
            Peerfinder
        </a>
    </div>
    <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-light" v-on:click="openHistory()">Historie</a>
            <a class="button is-light" v-on:click="closeTool()">Beenden</a>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return{
    }
  },
  methods:{
      closeTool: function(){
        if (confirm("Peerfinder beenden?")) {
            window.open("https://impact-lab.tools","_self");
}
      },
      openHistory: function(){
            this.$router.push({name: 'history'});//, params:{pairs: matchlist}});
      }
  }
}
</script>

<style scoped>
.button:hover{
    background-color:hsl(0, 0%, 21%) !important;
    color:hsl(0, 0%, 96%) !important;
}

</style>