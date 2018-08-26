<template lang="pug">
    .app
        link(rel='stylesheet', href='https://fonts.googleapis.com/icon?family=Material+Icons')
        router-view 
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    body{
        // Configuracion de pantalla
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;

        // Margenes
        margin: 0;
        overflow: hidden;
        .app{
            // Configuracion de pantalla
            display: grid;
            position: relative;
            width: 100%;
            height: 100%;

            // Configuracion de grilla
        }

        // Fuentes
        font-family: 'product_sansregular';
    }
</style>
