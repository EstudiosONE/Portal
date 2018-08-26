<template lang="pug">
div
    md-toolbar.md-transparent(md-elevation="0")
        md-button.md-icon-button.md-raised
            .md-icon add
        h3.md-title {{ this.$store.getters['management/ui/lang'].controlPanel.usersAndGroups.title }}
    md-table(v-if="usersAndGroups")
        md-table-row
            md-table-head(style="width: 48px;")
            md-table-head {{ ui.content.table.columnHeaders.name }}
            md-table-head {{ ui.content.table.columnHeaders.type }}
            md-table-head 
        md-table-row(v-for="(item, index) in usersAndGroups" :key="index")
            md-table-cell 
                .md-icon {{ item.icon }}
            md-table-cell {{ item.name }}
            md-table-cell {{ item.type }}
            md-table-cell 
                md-button.md-icon-button(v-on:click="viewRecord(item.name)")
                    .md-icon search
                md-menu
                    md-button.md-icon-button(md-menu-trigger)
                        .md-icon more_vert
                        md-menu-content
                            md-menu-item(v-on:click="editRecord(item.name)")
                                .md-icon edit
                                span {{ item.actions.edit}}
                            md-menu-item(v-on:click="deleteRecord(item.name)")
                                .md-icon delete
                                span {{ item.actions.delete}}
        md-dialog(:md-active.sync="showDeleteDialog")
            md-dialog-title Desea eliminar a {{ this.$store.state.test }}
            md-dialog-content
                b Esta acción no puede deshacerse!!!
                br
                | Si tiene seguridad de lo que está haciendo presione CONFIRMAR
            md-dialog-actions
                md-button(v-on:click="onDeleteCancel") Cancelar
                md-button(v-on:click="onDeleteConfirm") Confirmar
        md-dialog(:md-active.sync="showItemDetail")
            md-dialog-title Editar usuario
            md-dialog-content
                .md-layout.md-gutter
                    .md-layout-item.md-large-size-50
                    .md-layout-item.md-large-size-50
                        md-field
                            md-icon portrait
                            label Usuario
                            md-input
                    .md-layout-item.md-large-size-50
                        md-field
                            md-icon person_outline
                            label Nombre
                            md-input
                    .md-layout-item.md-large-size-50
                        md-field
                            label Apellido
                            md-input
                    .md-layout-item.md-large-size-100
                        md-field
                            label Grupo de usuarios
                            md-select(v-model="data" multiple=true)
                                md-option(value="Administradores") Administradores
                                md-option(value="Usuarios") Usuarios
                
            md-dialog-actions
                md-button(v-on:click="showItemDetail = false") Cancelar
                md-button(v-on:click="showItemDetail = false") Confirmar
</template>
<script>
export default {
    computed:{
        usersAndGroups: function(){
            return this.$store.getters['management/controlPanel/usersAndGroups/records']
        },
        loadding: function() {
            return this.$store.getters['management/controlPanel/usersAndGroups/loadding']
        },
        ui: function(){
            return this.$store.getters['management/ui/lang'].controlPanel.usersAndGroups
        }
    },
    methods: {
        viewRecord: function(id) {
            this.$router.push("users-and-groups/" + id + '/view')
        },
        editRecord: function(id) {
            this.showItemDetail = true
            // this.$router.push("users-and-groups/" + id + '/edit')
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
        showItemDetail: false,
        itemDetailActionName: "",
        user: {
            username: "",
            name: "Administrador",
            surname: "",
            type: "group"
        },
        data:[]
    }),
    mounted() {
        this.$store.dispatch('management/controlPanel/usersAndGroups/getRecords')
    }
}
</script>
<style lang="scss">
</style>
