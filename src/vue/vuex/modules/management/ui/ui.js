export default {
    namespaced: true,
    state: {
        es: {
            controlPanel: {
                menu: {
                    dashboard: 'Dashboard',
                    usersAndGroups: 'Usuarios y Grupos'
                },
                usersAndGroups: {
                    title: 'USUARIOS Y GRUPOS',
                    content: {
                        table: {
                            columnHeaders: {
                                name: 'Nombre:',
                                type: 'Tipo:'
                            },
                            actions: {
                                view: 'Ver',
                                edit: 'Editar',
                                delete: 'Eliminar'
                            }
                        }
                    }
                }
            }
        },
        en: {
            controlPanel: {
                menu: {
                    dashboard: 'Dashboard',
                    usersAndGroups: 'Users and Groups'
                },
                usersAndGroups: {
                    title: 'USERS AND GROUPS',
                    content: {
                        table: {
                            columnHeaders: {
                                name: 'Name:',
                                type: 'Type:'
                            },
                            actions: {
                                view: 'View',
                                edit: 'Edit',
                                delete: 'Delete'
                            }
                        }
                    }
                }
            }
        }
    },
    getters: {
        lang: (state, rootState) => {
            let lang = localStorage.getItem('lang')
            if(!lang) {
                lang = 'es'
                localStorage.setItem('lang', lang)
            }
            switch(lang){
                case 'es': return state.es
                case 'en': return state.en
            }
        }
    },
    actions: {
        lang(getters){
            return getters['lang']
        }
    },
    modules: {
    }
}