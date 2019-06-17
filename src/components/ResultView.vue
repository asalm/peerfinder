<template>
<div class="container">
    <h1 class="title">Folgende Paare wurden berechnet:</h1>
    <div class="columns is-multiline">
        <div class="column is-6" v-for='peer in peermatch'>
            <div class="box">
            <Peer :peerdata='peer.one'/>
            <Peer :peerdata='peer.two'/>
            </div>
        </div>
     </div>
</div>
</template>

<script>
import Peer from '@/components/Peer';

export default {
    name: 'Results',
    props:{
        pairs: Array
    },
    components:{
        Peer,
    },
    data(){
        return{
            peermatch: [],
        }
    },
    created(){
        this.splitpeers();
    },
    
    methods:{
        splitpeers: function(){
            for(var i = 0; i < this.pairs.length; i++){
                this.peermatch[i] = {
                    one: {
                        id: this.pairs[i][0][0],
                        name:this.pairs[i][0][1]
                        },
                    two: {
                        id: this.pairs[i][1][0],
                        name:this.pairs[i][1][1]}};
                console.log(this.pairs[i][0][1] + " " + this.pairs[i][1][1]);

            }
        }
    }
    
}
</script>

<style>

</style>
