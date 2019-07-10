<template>
    
    <div v-on:click='redirect()' class="level box is-mobile">
        <div class="level-left">
            <div class="level-item">
            <h2 class="subtitle">{{gdata.Name}}</h2>
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <h2 class="subtitle">{{gdata.iliasID}}</h2>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  name: 'Group',
  props: {
    gdata:{
        id: Number,
        Name: String,
        iliasID: Number,
    },
  },
  data() {
      return{

      }
  },
  created(){
  },
  methods: {
      redirect: function(){
        this.$router.push({name: 'match', params:{selectedGroup: this.gdata.Name,groupId: this.gdata.iliasID}});
    }
  }
}
</script>
<style scoped>
.box:hover{
    box-shadow: 0px 0px 13px -4px rgba(0,0,0,0.65);
}
</style>

