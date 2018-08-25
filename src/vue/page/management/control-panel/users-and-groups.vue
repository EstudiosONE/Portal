<template lang="pug">
    .control-panel__users-and-groups
        .o-title
            .o-title-label
                | {{ this.$store.getters['management/ui/lang'].controlPanel.usersAndGroups.title }}
            .o-title-actions
        .o-content
            .o-table
                .o-table-title
                    span
                    span {{ this.$store.getters['management/ui/lang'].controlPanel.usersAndGroups.content.table.columnHeaders.name }}
                    span {{ this.$store.getters['management/ui/lang'].controlPanel.usersAndGroups.content.table.columnHeaders.type }}
                    span 
                .o-table-content
                    md-progress-bar.o-table-loadding(v-if="loadding", md-mode="indeterminate")
                    .o-table-content-row(v-if='usersAndGroups', v-for="u in usersAndGroups")
                        md-icon.md-primary {{ u.icon }}
                        span {{ u.name }}
                        span {{ u.type }}
                        .o-actions
                            md-button.md-icon-button.md-primary(v-on:click="viewRecord(u.name)")
                                md-icon search
                            md-menu
                                md-button.md-icon-button.md-primary(md-menu-trigger)
                                    md-icon more_vert
                                md-menu-content
                                    md-menu-item(v-on:click="editRecord(u.name)")
                                        md-icon edit
                                        span {{ u.actions.edit }}
                                    md-menu-item(v-on:click="deleteRecord(u.name)")
                                        md-icon delete
                                        span {{ u.actions.delete }}
        md-dialog(:md-active.sync="showDeleteDialog")
            md-dialog-title Desea eliminar a {{ this.$store.state.test }}
            md-dialog-content
                b Esta acción no puede deshacerse!!!
                br
                | Si tiene seguridad de lo que está haciendo presione CONFIRMAR
            md-dialog-actions
                md-button(v-on:click="onDeleteCancel") Cancelar
                md-button(v-on:click="onDeleteConfirm") Confirmar



</template>
<script>
export default {
    computed:{
        usersAndGroups: function(){
            return this.$store.getters['management/controlPanel/usersAndGroups/records']
        },
        loadding: function() {
            return this.$store.getters['management/controlPanel/usersAndGroups/loadding']
        }

    },
    methods: {
        viewRecord: function(id) {
            this.$router.push("users-and-groups/" + id + '/view')
        },
        editRecord: function(id) {
            this.$router.push("users-and-groups/" + id + '/edit')
        },
        deleteRecord: function(id) {
            this.idToDelete = id
            this.showDeleteDialog = true
        },
        onDeleteConfirm: function() {
            this.showDeleteDialog = false
            this.idToDelete = null
        },
        onDeleteCancel: function() {
            this.showDeleteDialog = false
            this.idToDelete = null
        }
    },
    data: () => ({
        active: true,
        showDeleteDialog: false,
        idToDelete: null,
    }),
    mounted() {
        this.$store.dispatch('management/controlPanel/usersAndGroups/getRecords')
    }
}
</script>
<style lang="scss">
@import 'src/styles/colors';
.control-panel__users-and-groups{
    margin: auto 12px;
    .o-title{
        margin: 24px auto;
        display: grid;
        grid-template-areas: "title actions";
        .o-title-label{
            grid-area: title;
            font-size: 24px;
            font-weight: normal;
            color: $clr-blue-grey-800;
        }
        .o-title-actions{
            grid-area: actions;
        }
    }
    .o-content{
        .o-table-row{
            display: grid;
            grid-template-columns: 1fr 4fr 2fr 3fr;
            grid-template-rows: auto;
        }
        .o-table{
            display: grid;
            grid-template-areas:
            "title"
            "content"; 
            .o-table-title{
                grid-area: title;
                @extend .o-table-row;
                height: 48px;
                align-items: center;
                border-bottom: 1px solid $clr-blue;
            }
            .o-table-content{
                grid-area: content;
                .o-table-content-row{
                    height: 48px;
                    @extend .o-table-row;
                    align-items: center;
                    border-bottom: 1px solid $clr-grey-300;
                    background-color: $clr-white;
                    transition: box-shadow .125s; 
                    position: relative;
                }
            }
        }
    }
}
</style>
