<template lang="pug">
    div
        md-toolbar.md-transparent(md-elevation="0")
            md-button.md-icon-button.md-raised
                .md-icon keyboard_arrow_left
            h3.md-title Editar usuario o grupo        
        .md-layout.md-gutter.md-alignment-center-top
            .md-layout-item.md-layout.md-alignment-center-center.md-size-50
                div(style="width: 25vh; height: 25vh; border-radius:50%; background-color: black")
            .md-layout-item.md-layout.md-alignment-top-center.md-size-25
                .md-layout-item
                    md-field
                        label Id de usuario
                        md-input(v-model="username")
                    md-field
                        label Nombre
                        md-input(v-model="username")
                    md-field
                        label Apellido
                        md-input(v-model="username")
        //- div User {{ $route.params.id }}
            //- $route.params.id
            //- $route.params.action
</template>

<script>
export default {
    data: () => ({
        username: null
    })
}
</script>


