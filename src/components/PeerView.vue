<template>
<div class="container">
    <div class="column is-12">
        <div class="columns is-multiline">
            <div class="column is-3" v-for='peer in peers' v-bind:key='peer.id'>
                <Peer :peerdata='peer' :cb='updateList' interactive />
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Peer from '../components/Peer.vue';


export default {
    name: 'peerview',
    props:{
        callback: Function,
        group: Number,
    },
    components: {
        Peer
    },
    created(){
        this.getData();
        /*
        var p_peers =  await this.$api.db.users.get({"g_id":parseInt(this.$props.group)},this.$apptkn);


        this.peers.forEach(peer => {
            this.attendingList.set(peer.id,peer.name);
        });
        for(let [k,v] of this.attendingList){
            this.activeArray.push([k,v]);
        }
        */
    },
    data(){
        return{
            peers: [
                /*
            {
                id: 0,
                name : 'A',
                attending : true
            },{
                id: 1,
                name : 'B',
                attending : true
            },{
                id: 2,
                name : 'C',
                attending : true
            },{
                id: 3,
                name : 'D',
                attending : true
            },{
                id: 4,
                name : 'E',
                attending : true
            },{
                id: 5,
                name : 'F',
                attending : true
            },{
                id: 6,
                name : 'G',
                attending : true
            },{
                id: 7,
                name : 'H',
                attending : true
            },{
                id: 8,
                name : 'I',
                attending : true
            },{
                id: 9,
                name : 'J',
                attending : true
            },{
                id: 10,
                name : 'K',
                attending : true
            },{
                id: 11,
                name : 'L',
                attending : true
            },{
                id: 12,
                name : 'M',
                attending : true
            }*/],
            attendingList: new Map(),
            activeArray: []
        }
    },
    computed: {
    },
    methods:{
        updateList: function(id,name){
            if(this.attendingList.has(id)){
                this.attendingList.delete(id);
            
            }else{
               this.attendingList.set(id,name);
            }
            this.activeArray = [];
            for(let [k,v] of this.attendingList){
                this.activeArray.push([k,v]);
            }
            this.callback(this.activeArray);
        },
        getMapValue: function() {
            return Array.from(this.attendingList.key);
        },
        getData: async function() {
            var p_peers =  await this.$api.db.user.get({
                "g_id":parseInt(this.group)},
                this.$apptkn
            );
            console.log(p_peers.data);
            for(var i = 0; i < p_peers.data.length; i++){
                this.peers.push({
                    "name":p_peers.data[i].username.toString(),
                    "id":parseInt(p_peers.data[i].id),
                    "attending":true
                });
            }

            this.peers.forEach(peer => {
                this.attendingList.set(peer.id,peer.name);
            });
            for(let [k,v] of this.attendingList){
                this.activeArray.push([k,v]);
            }
        }
    }
}
</script>
<style scoped>
</style>