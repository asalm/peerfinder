<template>
<div>
    <Navbar/>
    <div class="hero is-small is-success">
        <div class="hero-body">
            <h1 class="title">Ergebnis</h1>
            <h2 class="subtitle">Folgende Paare wurden ermittelt. </h2>
        </div>
    </div>
    <div class="container"> 
        <section class="section">
        <div class="columns is-multiline">
            <div class="column is-6" v-for='peer in peermatch' v-bind:key='peer.key'>
                <div class="box" >
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
</div>
</template>

<script>
import Peer from '@/components/Peer';
import Navbar from '@/components/Navbar';

import printJS from 'print-js';


export default {
    name: 'Results',
    props:{
        pairs: Array
    },
    components:{
        Peer,
        Navbar,
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
            }
        },
        printView: function(){
            //window.print();
            printJS({
                printable: this.peermatch,
                properties: [
                    {fields: 'one', displayName: 'Partner 1'},
                    {fields: 'two', displayName: 'Partner 2'},
                ],
                type: 'json'
            });
        },
        saveMatches: function(){

            window.alert("Paare wurden erfolgreich gespeichert.");
        }
    }
    
}
</script>

<style>

</style>
