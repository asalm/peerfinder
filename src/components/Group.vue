<template>
    
    <div v-on:click='redirect()' class="level box is-mobile">
        <div class="level-left">
            <div class="level-item">
            <h2 class="subtitle">{{gdata.name}}</h2>
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <h2 class="subtitle">{{gdata.members}}</h2>
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
        name: String,
        members: Number,
    },
  },
  data() {
      return{

      }
  },
  methods: {
      redirect: function(){
        window.alert("redirect");
        this.$router.push({name: 'match', params:{selectedGroup: this.gdata.name,groupId: this.gdata.id}});
    }
  }
}
</script>
