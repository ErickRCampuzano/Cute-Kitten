<template>
    <nav id="Navbar" class="navbar navbar-default navbar-expand-lg">
        <router-link to="/"  class="navbar-brand mx-auto">Cute Kitten</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item"><router-link class="text-muted nav-link"  to="/">Home</router-link></li>
                <li class="nav-item"><router-link class="text-muted nav-link" to="/about">About</router-link></li>
            </ul>
        </div>
        
    </nav>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.navbar-brand{
    color: black;
    font-size: 1.5rem;
}
.nav-item a {
    font-weight: lighter;
}
</style>


