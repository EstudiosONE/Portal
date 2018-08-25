// Imports de módulos


// Export final
export default {
    namespaced: true,
    state: {
        loadding: false,
        records: null,
        selectedRecord: {

        },
        temporalRecord: {

        }
    },
    getters: {
        loadding: function(state){
            return state.loadding
        },
        records: function(state){
            return state.records
        }
    },
    mutations: {
        loadding: function(state, value){
            state.loadding = value
        },
        records: function(state, list){
            state.records = list
        }
    },
    actions: {
        async getRecords({commit, rootGetters}){
            commit('loadding', true)
            let dbrecords = [
                {
                    'name': 'Administradores',
                    'type': 'group'
                },
                                {
                    'name': 'Soporte',
                    'type': 'user'
                },
                {
                    'name': 'Usuario',
                    'type': 'user'
                }
            ]
            let list = []
            const actions = rootGetters['management/ui/lang'].controlPanel.usersAndGroups.content.table.actions
            dbrecords.forEach(function(element){
                let icon = ''
                let name = element.name
                let type = ''
                switch(element.type){
                    case 'group':
                        icon = 'group'
                        type = 'Grupo'
                        break
                    case 'user':
                        icon = 'person'
                        type = 'Usuario'
                }

                list.push({ 'icon': icon, 'name': name, 'type': type, 'actions': actions })            
            })
            commit('records', list)
            commit('loadding', false)
        }
    },
    modules: {
        
    }
}