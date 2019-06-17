<template>
<div class="container">
    <div class="level">
        <div class="level-item">
            <b-field label="Matching Methode">
                <b-select placeholder="Methode?"
                        v-model="matchOption">
                    <option value="random" aria-role="listitem" selected>Zufällig</option>
                    <option value="bm">Best Match</option>
                    <option value="wm">Worst Match</option>
                </b-select>
            </b-field>
        </div>
        <div class="level-item">
           <b-field label="Filter">
            <b-select placeholder="Filter wählen" v-model="filterOption">
                <option value="kein Filter" selected>kein Filter</option>
                <option value="t1">Test 1</option>
                <option value="t2">Test 2</option>
                <option value="t3">Test 3</option>
            </b-select>
           </b-field>

        </div>    
        <div class="level-item">
            <b-button v-on:click="calculate">Generieren</b-button>
        </div>   
    </div>     
</div>
</template>
<script>
export default {
    name:'calc',
    props:{
        callback: Function,
        peerlist: Array
    },
    data(){
        return{
            matchOption:'',
            filterOption:''
        }
    },
    methods:{
        calculate: function(){
            const options = {method: this.matchOption, filter: this.filterOption};
            let peers = this.peerlist.length > 0 ? this.peerlist: null;
            let matchlist = [];

            //check that the Options Table is filled!
            if(options.method != null && options.filter != null && this.peerlist.length > 0){
                //Peers need to be dividable by two, otherwise there will be someone w/o partner
                if(peers.length %2 === 0){
                    //For now only the Random Option is implemented
                    if (options.method === 'random'){
                        //Sort the peers array randomly.
                        peers = peers.sort(function(a, b){return 0.5 - Math.random()});
                        //Repeat the shifting process until the array is empty
                        do{
                            //Shift two entries out of peers array into matchlist
                            matchlist.push([peers.shift(),peers.shift()]);
                        }while(peers.length > 0);
                    }else if(options.method === 'bm'){

                    }else if(options.method === 'wm'){

                    }
                    console.log(matchlist);
                    
                    this.$router.push({name: 'result', params:{pairs: matchlist}});
                }else{
                    window.alert('Die Anzahl der Liste sind Ungrade!')
                }
                
            }else{
                window.alert('Optionen wurden nicht eingetragen!');
            }
            

        },

        filter: function(_data){
            const filterBy = this.filterOption;
        }
    }
}
</script>

<style scoped>
</style>
