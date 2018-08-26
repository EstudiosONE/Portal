<template lang="pug">
    .page-container
        md-app(md-waterfall md-mode="fixed-last")
            md-app-toolbar.md-large.md-dense.md-primary
                .md-toolbar-row
                    .md-toolbar-section-start
                        md-button.md-icon-button(@click="toggleMenu")
                            md-icon menu
                        span.md-title#app-title iGS Suite | El Descubrimiento RESORT CLUB
                    .md-toolbar-section-end
                        md-button.md-icon-button
                            .md-icon more_vert
                .md-toolbar-row
                    md-tabs.md-primary(md-sync-route=true)
                        md-tab(v-for="(value, index) in this.$store.state.management.ui.ui.menu.toolbar" :md-label="value.label" :to="value.to" :key="index")
            md-app-drawer(:md-active.sync="menuVisible")
                md-toolbar.md-transparent(md-elevation="0")
                    span Navigation
                    .md-toolbar-section-end
                        md-button.md-icon-button.md-dense(@click="toggleMenu")
                            md-icon keyboard_arrow_left
                md-list
                    md-list-item(to="/management/dashboard")
                        md-icon home
                        span.md-list-item-text Dashboard
                    md-list-item(to="/management/hotel")
                        md-icon hotel
                        span.md-list-item-text Hotel
                    md-list-item(to="/management/restaurant")
                        md-icon restaurant
                        span.md-list-item-text Restaurant
                    md-list-item(to="/management/market")
                        md-icon shopping_basket
                        span.md-list-item-text Market
                    md-list-item(to="/management/maintenance")
                        md-icon build
                        span.md-list-item-text Maintenance
                    md-list-item(to="/management/cleaning")
                        md-icon local_florist
                        span.md-list-item-text Cleaning
                    md-list-item(to="/management/web")
                        md-icon cloud_circle
                        span.md-list-item-text Web
                    md-list-item(to="/management/management")
                        md-icon work
                        span.md-list-item-text Management
                    md-list-item(to="/management/control-panel")
                        md-icon settings
                        span.md-list-item-text Control Panel
            md-app-content
                router-view 
</template>

<script>

export default {
    data: () => ({
        menuVisible: false,
        items: [
            { label: 'Home' },
            { label: 'Tareas' }
        ]
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
}
</script>

<style lang="scss">
.page-container{
    position: absolute;
    height: 100%;
    width: 100%;
}
.md-app{
    height: 100%;
}
md-app-content{
    overflow: scroll;
}
.md-toolbar-section-start{
    overflow: hidden;
}
#app-title{
    overflow: hidden;
    text-overflow: ellipsis; 
}
</style>
