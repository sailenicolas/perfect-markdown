const mutations = {
    SET_EDITOR_SPLIT_TYPE(state, split = true) {
        state.editorIsSplit = split
    },
    SET_EDITOR_FULLSCREEN_TYPE(state, split = true) {
        state.editorIsFullscrean = split
    },
    SET_TEXTAREA_CONTENT(state, content = '') {
        state.textareaContent = content
    },
    SET_ICON_CONFIG(state, content = '') {
        state.iconText = content
    },
    SET_MARKDOWN_CONFIG(state, content = '') {
        state.markConfig = content
    },
    SET_HELP(state, content = '') {
        state.help = content
    }
}

export default mutations
