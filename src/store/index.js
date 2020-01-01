import Vue from 'vue'
import Vuex from 'vuex'
import pfm from './modules/pfm'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        pfm
    }
})
