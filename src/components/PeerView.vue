<template>
<div class="container">
    <div class="column is-12">
        {{activeArray}}
        <div class="columns is-multiline">
            <div class="column is-3" v-for='peer in peers'>
                <Peer :peerdata='peer' :cb='updateList' interactive/>
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
        callback: Function
    },
    components: {
        Peer
    },
    created(){
        this.peers.forEach(peer => {
            this.attendingList.set(peer.id,peer.name);
        });
        for(let [k,v] of this.attendingList){
            this.activeArray.push([k,v]);
        }
    },
    data(){
        return{
            peers: [
            {
                id: 0,
                name : 'Hannes',
                attending : true
            },{
                id: 1,
                name : 'Jochen',
                attending : true
            },{
                id: 2,
                name : 'Timon',
                attending : true
            },{
                id: 3,
                name : 'Patrick',
                attending : true
            },{
                id: 4,
                name : 'Markus',
                attending : true
            },{
                id: 5,
                name : 'Tjark',
                attending : true
            },{
                id: 6,
                name : 'Arion',
                attending : true
            },{
                id: 7,
                name : 'Carsten',
                attending : true
            },{
                id: 8,
                name : 'Patrick',
                attending : true
            },{
                id: 9,
                name : 'Markus',
                attending : true
            },{
                id: 10,
                name : 'Tjark',
                attending : true
            },{
                id: 11,
                name : 'Arion',
                attending : true
            },{
                id: 12,
                name : 'Carsten',
                attending : false
            }],
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
    }
}
</script>
<style scoped>
</style>