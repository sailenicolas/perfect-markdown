import MarkdownIt from 'markdown-it'
import store from '../store/index'
// 初始化md
const markConfig = store.getters['pfm/getMarkConfig']
const md = new MarkdownIt(markConfig)

// a link target
const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
}
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const aIndex = tokens[idx].attrIndex('target')
    if (aIndex < 0) {
        // tokens[idx].attrPush(['target', '_blank']) // keep default blank
    } else {
        // tokens[idx].attrs[aIndex][1] = '_blank' // keep attrs
    }
    return defaultRender(tokens, idx, options, env, self)
}
md.init = function (config) {
    const mergeConfig = Object.assign(markConfig.installConfig, markConfig.config)
    for (const key in mergeConfig) {
        if (markConfig.plugins[key]) {
            mergeConfig[key] && md.use(markConfig.plugins[key])
            // add container
            if (key === 'container') {
                md.use(markConfig.plugins[key], 'hljs-left') /* align left */
                md.use(markConfig.plugins[key], 'hljs-center') /* align center */
                md.use(markConfig.plugins[key], 'hljs-right') /* align right */
            }
        }
    }
}

export default md
