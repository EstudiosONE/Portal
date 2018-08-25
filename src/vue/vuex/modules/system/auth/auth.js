// Imports de módulos

// Export final
export default {
    namespaced: true,
    state:{
        jwt: {
            token: null,
            claims: {
                // jti (JWT ID) - Id del token almacenado en la db del backend
                jti: null,
                // one - Conjunto de datos del servicio One.iGS
                one_igs:{
                    // user_name - Nombre del usuario
                    user_name: null,
                    // user_surname - Apellido del usuario
                    user_surname: null,
                    // user_id - Id de usuario
                    user_id: null,
                    // user_rights - Permisos
                    user_rights: {
                        portal: true,
                        management: false,
                        management_detail: {
                            control_panel: false,
                            control_panel_detail: {
                                system: false,
                                system_detail: {
                                    users_and_groups: false,
                                    users_and_groups_detail: {
                                        users: false,
                                        users_detail: {
                                            view_list: false,
                                            view_detail: false,
                                            create: false,
                                            modify: false,
                                            delete: false
                                        },
                                        groups: false,
                                        groups_detail: {
                                            view_list: false,
                                            view_detail: false,
                                            create: false,
                                            modify: false,
                                            delete: false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    modules: {

    }
}