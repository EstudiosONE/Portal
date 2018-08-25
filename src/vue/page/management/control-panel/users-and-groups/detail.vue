<template lang="pug">
    .md-layout.md-gutter
        .md-layout-item
            md-avatar.md-large
                img(src="https://vuematerial.io/assets/examples/avatar-2.jpg" alt="People")
        .md-layout-item
            md-field.md-layout-item
                    label username
                    md-input(v-model="username")
            md-field.ms-layout-item
                    label username
                    md-input(v-model="username")
        div User {{ $route.params.id }}
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


