<template>
    
    <div class="level box is-mobile">
        <div class="level-left">
            <div class="level-item">
            <h2 class="subtitle">{{peerdata.name || _name}}</h2>
            </div>
        </div>
        <div v-if='interactive' class="level-right">
            <div v-on:click='cb(peerdata.id,peerdata.name)' class="level-item">
            <b-checkbox  v-model="peerdata.attending"></b-checkbox>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
  name: 'Peer',
  props: {
    peerdata:{
        id: Number,
        name: String,
        attending: Boolean,
    },
    interactive: Boolean,
    cb: Function
  },
  data() {
      return {
          checkbox: false,
      }
  },
  methods: {
      updateState: function(_id,_name){
          this.checkbox ? this.peerdata.attending = true: this.peerdata.attending = false;
          cb(_id,_name);
      }
  }
}
</script>
