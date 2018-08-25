// Imports básicos de Vue
import Vue from 'vue'
import Vuex from 'vuex'

// Imports de módulos
import system from './modules/system/system.js'
import management from './modules/management/management.js'
import portal from './modules/portal/portal.js'

// Insert de vuex en vue
Vue.use(Vuex)

// Export final
export default new Vuex.Store({
    state: {
        test: 'test to data'
    },
    modules: {
        system,
        management,
        portal
    }
})