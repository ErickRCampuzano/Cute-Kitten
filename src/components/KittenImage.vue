<template>
    <div class="KittenImage mx-auto">
        <div class="another-cat-holder">
            <i @click="$emit('other_cat')" class="fa fa-redo mx-auto other"><span>&nbsp Try new cat</span></i>
        </div>
        <p class="centered">
            {{ fuckOff_text }}
        <br />
        <span class="text-muted from"> ~ Cute Kitten</span>
        </p>
        <img v-bind:src="imageSrc" />
        
    </div>
</template>

<script>
export default {
    name: "kittenImage",
    props:[
        "imageSrc",
        "fuckOff_text"
    ],
    methods:{

    }
}
</script>

<style scoped>
.KittenImage{
    position: relative;
    top: .5rem;
    width: 60%;
}
img{
    margin-top:0px;
    width: 100%;
}
.centered{
    position: absolute;
    top: 100%;
    left:50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    font-weight: lighter;
    font-size: 1.75rem;
    color: #000;
    padding: 7px 10px;
}
.from{
    font-size: 1.50rem;
}
.another-cat-holder{
  display: flex;
  cursor: pointer;
  margin-bottom: 1rem;
}
.another-cat-holder i{
  font-size: 1rem;
}
.another-cat-holder i span{
    font-family: "Quicksand";
    font-weight: lighter;
}
@media screen and (max-width:767px){
    .KittenImage{
        width: 100%;
    }
    .centered{
        font-size: 1rem;
    }
    .from{
        font-size: .75rem;
    }
}
</style>



