export default {
    setEditorSplitType(context, split) {
        context.commit('SET_EDITOR_SPLIT_TYPE', split)
    },
    setEditorFullscreenType(context, fullscrean) {
        context.commit('SET_EDITOR_FULLSCREEN_TYPE', fullscrean)
    },
    setTextareaContent(context, content) {
        context.commit('SET_TEXTAREA_CONTENT', content)
    },
    setIconText(context, content) {
        context.commit('SET_ICON_CONFIG', content)
    },
    setMarkConfig(context, content) {
        context.commit('SET_MARKDOWN_CONFIG', content)
    },
    setHelp(context, content) {
        context.commit('SET_HELP', content)
    }
}
