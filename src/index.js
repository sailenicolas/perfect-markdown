/**
 * perfect markdown
 */
import editor from './views/editor'
import markdownIt from './utils/md'
import pfm from './store/modules/pfm'
const pmdEditor = {
    markdownIt: markdownIt,
    editor: editor,
    install: function (Vue, options = {}) {
        Vue.component('pmd', editor)
        options.store && options.store.registerModule('pfm', pfm)
    }
}

export default pmdEditor
