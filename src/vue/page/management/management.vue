<template lang="pug">
    .page-container
        md-app(md-waterfall md-mode="fixed-last")
            md-app-toolbar.md-large.md-dense.md-primary
                .md-toolbar-row
                    .md-toolbar-section-start
                        md-button.md-icon-button(@click="toggleMenu")
                            md-icon menu
                        span.md-title iGS Suite | El Descubrimiento RESORT CLUB
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
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCPersistentDrawer, MDCPersistentDrawerFoundation, util} from '@material/drawer';
import {MDCRipple} from '@material/ripple';
let drawer;

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
    // mounted(){
    //     drawer = new MDCPersistentDrawer(document.querySelector('.mdc-drawer--persistent'));
    //     drawer.open = true;
    //     document.querySelector('.one-top-app-bar-button-menu').addEventListener('click', () => drawer.open = !drawer.open);
    //     let oneDrawerListItems = document.querySelectorAll(".one-drawer-list-item")
    //     oneDrawerListItems.forEach(function(element) {
    //         if (element){
    //             MDCRipple.attachTo(element);
    //         } 
    //     });
    //     // this.$router.push('/management/dashboard')
    // }
}
</script>

<style lang="scss">
// @import "src/styles/style";
// @import "@material/list/mdc-list";
.page-container{
    position: absolute;
    height: 100%;
    width: 100%;
}
.md-app{
    // position: absolute;
    height: 100%;
}
md-app-content{
    overflow: scroll;
}

// .management{
//     display: grid;
//     grid-template-columns: auto 1fr;
//     grid-template-rows: 64px 1fr; 
//     position: relative;
//     height: 100%;
//     .one-top-app-bar{
//         grid-column: 1 / span 2;
//         grid-row: 1;
//         border-bottom: 1px solid #e4e4e4;
//         @include mdc-top-app-bar-ink-color($clr-blue-grey-900);
//         @include mdc-top-app-bar-icon-ink-color($clr-blue-grey-900);
//         @include mdc-top-app-bar-fill-color($clr-white);
//     }
//     .one-drawer{
//         grid-column: 1 / span 1;
//         grid-row: 2;
//     }
//     .one-content{
//         grid-column: 2 / span 1;
//         grid-row: 2;
//     }
// }
// router-link{
//     @include mdc-ripple-surface
// }
// .router-link-active{
//     @extend .mdc-list-item--selected
// }
// .mdc-drawer{
//     height: 100%;
// }
// .icon-content{
//     display: grid;
//     grid-template-rows: auto;
//     grid-template-columns: auto auto;
//     align-items: center;
//     .icon-content__graphic{
//         width: 48px;
//         height: 48px;
//         padding: 12px;
//     }
// }
</style>
