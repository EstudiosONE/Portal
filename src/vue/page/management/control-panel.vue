<template lang="pug">
    .control-panel-dashboard
        router-view.content
</template>

<script>
export default {
    computed: {
        tabDashboard: function() {
            return "Hello"
        }
    },
    mounted() {
        const toolbarLang = this.$store.getters['management/ui/lang'].controlPanel.menu.toolbar
        const toolbar = {
            dashboard: { 
                label: toolbarLang.dashboard,
                to: '/management/control-panel/dashboard'
            },
            usersAndGroups: { 
                label: toolbarLang.usersAndGroups,
                to: '/management/control-panel/users-and-groups'
            }
        }

        this.$store.commit('management/ui/setToolBar', toolbar)
    }
}
</script>