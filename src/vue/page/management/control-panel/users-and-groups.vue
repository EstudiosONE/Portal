<template lang="pug">
div
    md-speed-dial.md-bottom-right(md-event="click" md-direction="top")
                md-speed-dial-target.md-primary
                    md-icon.md-morph-initial add
                    md-icon.md-morph-final edit
                md-speed-dial-content
                    md-button.md-icon-button(@click="showNewGroup = true")
                        md-icon group
                    md-button.md-icon-button
                        md-icon person
    md-toolbar.md-transparent(md-elevation="0")
        h3.md-title {{ this.$store.getters['management/ui/lang'].controlPanel.usersAndGroups.title }}
    md-table(v-if="usersAndGroups")
        md-table-row
            md-table-head(style="width: 48px;")
            md-table-head {{ ui.content.table.columnHeaders.name }}
            md-table-head.md-small-hide {{ ui.content.table.columnHeaders.type }}
            md-table-head 
        md-table-row(v-for="(item, index) in usersAndGroups" :key="index")
            md-table-cell 
                .md-icon {{ item.icon }}
            md-table-cell {{ item.name }}
            md-table-cell.md-small-hide {{ item.type }}
            md-table-cell.action-cell 
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
            md-dialog-title Editar usuario {{ temporal.user.name }} {{ temporal.user.surname }}
            md-dialog-content
                .md-layout.md-gutter.md-alignment-center-top
                    .md-layout-item.md-size-50
                        .profile-picture
                            md-icon#profile-picture-icon portrait
                    .md-layout-item.md-size-50.md-layout
                        .md-layout-item.md-size-100
                            md-field
                                md-icon portrait
                                label Usuario
                                md-input#user-dialog-input-user(v-model="temporal.user.user")
                            md-button.md-raised Restablecer password
                            //- md-field
                            //-     md-icon phone
                            //-     label Celular
                            //-     md-input(v-model="temporal.user.phone")
                    .md-layout-item.md-size-100
                        md-field
                            md-icon mail
                            label Mail
                            md-input(v-model="temporal.user.mail")
                    .md-layout-item.md-size-50
                        md-field
                            md-icon person_outline
                            label Nombre
                            md-input(v-model="temporal.user.name")
                    .md-layout-item.md-size-50
                        md-field
                            label Apellido
                            md-input(v-model="temporal.user.surname")
                    .md-layout-item.md-size-50
                        md-field
                            md-icon location_city
                            label Nacionalidad
                            md-select(v-model="temporal.user.nationality" multiple=false)
                                md-option(value="URU") Uruguay
                    .md-layout-item.md-size-50
                        md-field
                            label Tipo de documento
                            md-select(v-model="temporal.user.documentType" multiple=false)
                                md-option(value="ci") Cedula de identidad
                                md-option(value="ps") Pasaporte
                    .md-layout-item.md-size-100
                        md-field
                            md-icon call_to_action
                            label Documento de identidad
                            md-input(v-model="temporal.user.document")
                    .md-layout-item.md-size-100
                        md-field
                            md-icon group
                            label Grupo de usuarios
                            md-select(v-model="temporal.user.userGroups" multiple=true)
                                md-option(value="Administradores") Administradores
                                md-option(value="Usuarios") Usuarios
                
            md-dialog-actions
                md-button(v-on:click="showItemDetail = false") Cancelar
                md-button(v-on:click="showItemDetail = false") Confirmar
        md-dialog(:md-active.sync="showNewGroup")
            md-dialog-title Nuevo grupo
            md-dialog-content
                .md-layout.md-gutter.md-alignment-center-top
                    .md-layout-item.md-size-50
                        .profile-picture
                            md-icon#profile-picture-icon group
                    .md-layout-item.md-size-50.md-layout
                        .md-layout-item.md-size-100
                            md-field
                                md-icon portrait
                                label Grupo
                                md-input#user-dialog-input-user(v-model="temporal.group.id")
                    .md-layout-item.md-size-100
                        md-list(md-expand-single=true)
                            md-list-item(md-expand  v-for="(group, index) in temporal.rights" :key="index")
                                span.md-list-item-text {{ group.groupName }}
                                md-list(slot="md-expand")
                                    md-checkbox(v-model="temporal.group.rights" :value="right.code" v-for="(right, index) in group.right" :key="index") {{ right.name }}
            md-dialog-actions
                md-button(v-on:click="showNewGroup = false") Cancelar
                md-button(v-on:click="showNewGroup = false") Confirmar


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
        },
        getCountries (searchTerm) {
            this.countries = new Promise(resolve => {
                window.setTimeout(() => {
                    if (!searchTerm) {
                        resolve(this.countryList)
                    } 
                    else {
                        const term = searchTerm.toLowerCase()
                        resolve(this.countryList.filter(({ name }) => name.toLowerCase().includes(term)))
                    }
                }, 500)
            })
        }
    },
    data: () => ({
        active: true,
        showDeleteDialog: false,
        idToDelete: null,
        showItemDetail: false,
        showNewGroup: false,
        itemDetailActionName: "",
        temporal:{
            group: {
                id: null,
                rights: [

                ]
            },
            rights: [
                {
                    groupName: 'Hotel',
                    right: [
                        {
                            name: 'Reservas',
                            code: '9000.0001.0001.0000.0000'
                        },
                    ]
                },
                {
                    groupName: 'Restaurant',
                    right: [
                        {
                            name: 'Reservas',
                            code: '9000.0001.0001.0000.0000'
                        },
                    ]
                },
                {
                    groupName: 'Hotel',
                    right: [
                        {
                            name: 'Reservas',
                            code: '9000.0001.0001.0000.0000'
                        },
                    ]
                },
                {
                    groupName: 'Hotel',
                    right: [
                        {
                            name: 'Reservas',
                            code: '9000.0001.0001.0000.0000'
                        },
                    ]
                },
                {
                    groupName: 'Hotel',
                    right: [
                        {
                            name: 'Reservas',
                            code: '9000.0001.0001.0000.0000'
                        },
                    ]
                },
                {
                    groupName: 'Hotel',
                    right: [
                        {
                            name: 'Reservas',
                            code: '9000.0001.0001.0000.0000'
                        },
                    ]
                },
                {
                    groupName: 'Hotel',
                    right: [
                        {
                            name: 'Reservas',
                            code: '9000.0001.0001.0000.0000'
                        },
                    ]
                },
                {
                    groupName: 'Hotel',
                    right: [
                        {
                            name: 'Reservas',
                            code: '9000.0001.0001.0000.0000'
                        },
                    ]
                },
                {
                    groupName: 'Hotel',
                    right: [
                        {
                            name: 'Reservas',
                            code: '9000.0001.0001.0000.0000'
                        },
                    ]
                },
                {
                    groupName: 'Hotel',
                    right: [
                        {
                            name: 'Reservas',
                            code: '9000.0001.0001.0000.0000'
                        },
                    ]
                },
                {
                    groupName: 'System',
                    right: [
                        {
                            name: 'Crear nuevo usuario',
                            code: '9000.9000.0001.0001.0001'
                        },
                        {
                            name: 'Editar usuario',
                            code: '9000.9000.0001.0001.0002'
                        },
                        {
                            name: 'Eliminar usuario',
                            code: '9000.9000.0001.0001.0003'
                        }
                    ]
                }
            ],
            user: {
                user: '47378274',
                name: 'Diego',
                surname: 'Rodríguez',
                phone: '097453186',
                mail: 'diegorrod91@gmail.com',
                nationality: null,
                documentType: null,
                document: null,
                userGroups: []
            }
        },
        value: null,
      
        data:[]
    }),
    mounted() {
        this.$store.dispatch('management/controlPanel/usersAndGroups/getRecords')
    }
}
</script>
<style lang="scss">
.profile-picture{
    width: 96px;
    height: 96px;
    background-color: #448AFF;
    border-radius: 50%;
    margin: 24px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    #profile-picture-icon{
        color: white;
        margin: auto auto;
        font-size: 36px!important;
    }
}
.action-cell{
    .md-table-cell-container{
        display: flex;
        justify-content: flex-end;
    }
}
</style>
