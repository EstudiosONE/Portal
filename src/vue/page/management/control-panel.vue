<template lang="pug">
    .control-panel-dashboard
        md-tabs.control-panel-menu.md-primary(md-sync-route = false, md-alignment = "centered")
            md-tab#tab-home(:md-label= "this.$store.getters['management/ui/lang'].controlPanel.menu.dashboard", to='/management/control-panel/dashboard')
            md-tab#tab-pages(:md-label= "this.$store.getters['management/ui/lang'].controlPanel.menu.usersAndGroups", to='/management/control-panel/users-and-groups')
        router-view.content
</template>

<script>
export default {
    computed: {
        tabDashboard: function() {
            return "Hello"
        }
    }
}
</script>