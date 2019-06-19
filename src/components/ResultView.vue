<template>
<div class="container">
    <div class="hero is-small is-success">
        <div class="hero-body">
            <h1 class="title">Peerfinder</h1>
            <h2 class="subtitle">Folgende Paare wurden ermittelt</h2>
        </div>
    </div>
    <section class="section">
    <div class="columns is-multiline">
        <div class="column is-6" v-for='peer in peermatch'>
            <div class="box">
            <Peer :peerdata='peer.one'/>
            <Peer :peerdata='peer.two'/>
            </div>
        </div>
     </div>
    </section>
    <section class="section">
        <div class="level">
            <div class="level-item">
                <router-link to="/"><b-button>zurück</b-button></router-link>
            </div>
            <div class="level-item">
                <b-button v-on:click="printView()">Ansicht drucken</b-button>
            </div>
            <div class="level-item">
                <b-button v-on:click="saveMatches()">Paare speichern</b-button>
            </div>
        </div>
    </section>
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
        },
        printView: function(){
            window.print();
        },
        saveMatches: function(){

            window.alert("Paare wurden erfolgreich gespeichert.");
        }
    }
    
}
</script>

<style>

</style>
