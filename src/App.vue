<template>
  <div id="app" v-if="imageSrc === ''|| fuckOff_text === ''">
    <Navbar />
    <Loading />
  </div>
  <div id="app" v-else>
    <Navbar />
    <router-view v-on:other_cat="other_cat" v-bind:imageSrc="imageSrc" v-bind:fuckOff_text="fuckOff_text"/>
    
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './components/Navbar.vue';
import Loading from './components/Loading.vue';
export default {
  name: 'app',
  data(){
    return {
      imageSrc:"",
      fuckOff_text: ""
    }
  },
  components:{
    Navbar,
    Loading
  },
  methods:{
    set_data(){
      this.imageSrc = "";
      this.fuckOff_text = "";
      const operations = ["awesome", "because","bucket","bye",
                          "cool", "cup", "diabetes","everyone", 
                          "everything", "family","fyyff", "asshole",
                          "bag", "flying", "horse", "give", "life",
                          "looking", "pink", "programmer", "question",
                          "maybe", "mornin", "no", "fascinating", "retard",
                          "ridiculous", "retard", "sake", "shit", "rtfm",
                          "single", "thanks", "that", "this", "too", "tucker",
                          "what", "zayn", "zero", "back", "bday", "bm", "bus",
                          "chainsaw", "cocksplat", "dalton", "deraat", "equity",
                          "blackadder", "fts", "gfy", "ing", "keep", "king",
                          "linus", "look", "madison", "nugget", "off", "problem",
                          "shakespeare", "shutup", "outside", "think", "thinking",
                          "yoda", "you", "donut"];
      let request = "";
      axios.get("https://api.thecatapi.com/v1/images/search")
      .then((res)=>{
        this.imageSrc = res.data[0].url
      })

      let operation_pos = parseInt(Math.random()*operations.length + 1);
      switch(true){
        case (operation_pos > 38):
          request = `http://foaas.com/${operations[operation_pos]}/Dear Reader/CuteKitten`;
          break;
        default:
          request = `http://foaas.com/${operations[operation_pos]}/CuteKitten`;
      }
      axios.get(request)
      .then(res=>{
        this.fuckOff_text = res.data.message
      })
      .catch(err=>console.log(err))
    },
    other_cat(){
      this.set_data();
    }
  },
  created(){
      this.set_data();
  }
  
}
</script>

<style>
body{
  font-family: "Quicksand", sans-serif;
}
</style>
