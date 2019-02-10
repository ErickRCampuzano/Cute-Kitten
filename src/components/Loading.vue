<template>
<div id="LoadingHolder">
    <img v-bind:src="loading"  />
</div>
    
</template>

<script>
import loading from './../assets/images/loading.gif';
export default {
    name:"loading",
    data(){
        return {
            loading
        }
    }
}
</script>

<style scoped>
#LoadingHolder{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
