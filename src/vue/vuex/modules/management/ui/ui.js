export default {
    namespaced: true,
    state: {
        ui:{
            menu: {
                drawer: {

                },
                toolbar: {
                    dashboard: {
                        label: "Dashboard",
                        to: "/management/dashboard"
                    }
                }
            }
        },
        es: {
            dashboard: {
                menu: {
                    toolbar: {
                        dashboard: 'Dashboard'
                    }
                }
            },
            controlPanel: {
                menu: {
                    toolbar: {
                        dashboard: 'Dashboard',
                        usersAndGroups: 'Usuarios y Grupos'
                    }
                },
                usersAndGroups: {
                    title: 'Usuarios y Grupos',
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
    mutations: {
        setToolBar: function(state, toolbar){
            state.ui.menu.toolbar = toolbar
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