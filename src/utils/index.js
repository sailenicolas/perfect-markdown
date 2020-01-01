import insertContentAtCaret from './insert'
import keyboardListener from './keyboard-listener'
import loader from './loader'
import md from './md'
import scrollLink from './scroll'

const config = {
    insertContentAtCaret: insertContentAtCaret,
    keyboardListener: keyboardListener,
    loader: loader,
    md: md,
    scroll: scroll
}
// without default
export {
    config,
    keyboardListener,
    insertContentAtCaret,
    loader,
    md,
    scrollLink
}
