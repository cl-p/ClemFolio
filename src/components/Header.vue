<template>
    <div class="container">
        <div class="logo-header">
            <router-link to="/" class="text-logo">ClemFolio</router-link>
        </div>
        <div class="nav">
            <router-link to="/curriculum" class="nav-link">Curriculum</router-link>
            <router-link to="/motivations" class="nav-link">Motivations</router-link>
            <router-link to="/projets" class="nav-link">Projets</router-link>
        </div>
    </div>
</template>
<script>
export default {
        name: 'HeaderComponent',
    }

</script>
<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
   
}
.nav{
    width: 75%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    gap: 6%;
    font-family: 'Barlow';
    font-weight: bolder;
    font-size: larger;
}
.logo-header{
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;  
}
.nav-link{
    text-decoration: none;
    color:black;
}
.text-logo{
    font-family: 'Pakades';
    font-size: xx-large;
    text-decoration: none; 
    color: black;
}

@media (max-width: 425px){
    .container{
        flex-direction: column;
        padding: 0px;
    }
    .nav{
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        align-content: center;
    }
   
}

</style>