<template>
    <div class="icon-box">
        <template v-if="customLeftToolbar"> </template>
        <template v-else>
            <slot name="toolbarLeftBefore"></slot>
            <span
                v-tooltip.top-center="'Negrita'"
                @click="clickHandler('bold', 'insert')"
            ><i class="iconfont icon-bold"></i
            ></span>
            <span
                v-tooltip.top-center="'Cursiva'"
                @click="clickHandler('italic', 'insert')"
            ><i class="iconfont icon-italic"></i
            ></span>
            <span
                class="menu"
                v-tooltip.top-center="'Titulo'"
                @click="clickHandler('title', 'menu')"
                @mouseenter="showTitleMenu"
                @mouseleave="hideTitleMenu"
            >
                <i class="iconfont icon-title"></i>
                <transition name="fade">
                    <ul
                        v-show="titleMenuShow"
                        :class="['icon-menu']"
                        @mouseenter="showTitleMenu"
                        @mouseleave="hideTitleMenu"
                    >
                        <li @click="clickHandler('title1', 'insert')">
                            Título Primario
                        </li>
                        <li @click="clickHandler('title2', 'insert')">
                            Título secundario
                        </li>
                        <li @click="clickHandler('title3', 'insert')">
                            Título terciario
                        </li>
                        <li @click="clickHandler('title4', 'insert')">
                            Título Cuarto
                        </li>
                        <li @click="clickHandler('title5', 'insert')">
                            Título Quinto
                        </li>
                    </ul>
                </transition>
            </span>
            <span
                v-tooltip.top-center="'Subrayar'"
                @click="clickHandler('underline', 'insert')"
            ><i class="iconfont icon-underline"></i
            ></span>
            <span
                v-tooltip.top-center="'Tachado'"
                @click="clickHandler('throughline', 'insert')"
            ><i class="iconfont icon-strike"></i
            ></span>
            <span
                v-tooltip.top-center="'Marca'"
                @click="clickHandler('mark', 'insert')"
            ><i class="iconfont icon-mark"></i
            ></span>
            <span
                v-tooltip.top-center="'Subíndice'"
                @click="clickHandler('sub', 'insert')"
            ><i class="iconfont icon-sub"></i
            ></span>
            <span
                v-tooltip.top-center="'Superíndice'"
                @click="clickHandler('sup', 'insert')"
            ><i class="iconfont icon-sup"></i
            ></span>
            <span
                v-tooltip.top-center="'Justificado Izquierda'"
                @click="clickHandler('left', 'insert')"
            ><i class="iconfont icon-left"></i
            ></span>
            <span
                v-tooltip.top-center="'Justificado Centro'"
                @click="clickHandler('center', 'insert')"
            ><i class="iconfont icon-center"></i
            ></span>
            <span
                v-tooltip.top-center="'Justificado derecha'"
                @click="clickHandler('right', 'insert')"
            ><i class="iconfont icon-right"></i
            ></span>
            <span
                v-tooltip.top-center="'Cita'"
                @click="clickHandler('quotation', 'insert')"
            ><i class="iconfont icon-quotation"></i
            ></span>
            <span
                v-tooltip.top-center="'Lista desordenada'"
                @click="clickHandler('ul', 'insert')"
            ><i class="iconfont icon-ul"></i
            ></span>
            <span
                v-tooltip.top-center="'Lista ordenada'"
                @click="clickHandler('ol', 'insert')"
            ><i class="iconfont icon-ol"></i
            ></span>
            <span
                v-tooltip.top-center="'Bloque de código'"
                @click="clickHandler('code', 'insert')"
            ><i class="iconfont icon-code"></i
            ></span>
            <span
                v-tooltip.top-center="'Forma'"
                @click="clickHandler('table', 'insert')"
            ><i class="iconfont icon-table"></i
            ></span>
            <span
                v-tooltip.top-center="'Enlace'"
                @click="clickHandler('link', 'pop')"
            ><i class="iconfont icon-link"></i
            ></span>
            <span
                v-tooltip.top-center="'Imágenes'"
                class="menu"
                @click="clickHandler('image', 'menu')"
                @mouseenter="showImageMenu"
                @mouseleave="hideImageMenu"
            >
                <i class="iconfont icon-image"></i>
                <transition name="fade">
                    <ul
                        v-show="imageMenuShow"
                        :class="['icon-menu']"
                        @mouseenter="showImageMenu"
                        @mouseleave="hideImageMenu"
                    >
                        <li @click="addImgFromLink">
                            De la red
                        </li>
                        <li>
                            <input
                                type="file"
                                accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
                                @change="e => addImgFromLocal(e)"
                                multiple="multiple"
                            />Sube localmente
                        </li>
                    </ul>
                </transition>
            </span>
            <span
                v-tooltip.top-center="'Adjunto'"
                @click="clickHandler('file', 'menu')"
                @mouseenter="showFileMenu"
                @mouseleave="hideFileMenu"
            >
                <i class="iconfont icon-attachment"></i>
                <transition name="fade">
                    <ul
                        v-show="fileMenuShow"
                        :class="['icon-menu']"
                        @mouseenter="showFileMenu"
                        @mouseleave="hideFileMenu"
                    >
                        <li @click="addFileFromLink">
                            De la red
                        </li>
                        <li>
                            <input
                                type="file"
                                accept="*"
                                @change="e => addFileFromLocal(e)"
                            />Subir localmente
                        </li>
                    </ul>
                </transition>
            </span>
            <span
                v-tooltip.top-center="'Limpiar'"
                @click="clickHandler('clear', 'clear')"
            >
                <i class="iconfont icon-trash"></i>
            </span>
            <slot name="toolbarLeftAfter"></slot>
            <div v-show="imagePopShow" class="image-pop">
                <div class="dialog">
                    <div class="input-box">
                        <input
                            placeholder="Nombre de la imagen"
                            v-model="imageName"
                            type="text"
                        />
                    </div>
                    <div class="input-box">
                        <input
                            placeholder="Enlace de imagen"
                            v-model="imageUrl"
                            type="text"
                        />
                    </div>
                    <div class="btn-box">
                        <div @click="closePop('imagePopShow')">Cancelar</div>
                        <div
                            class="confirm"
                            @click="clickHandler('image', 'insert')"
                        >
                            Ok
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="linkPopShow" class="link-pop">
                <div class="dialog">
                    <div class="input-box">
                        <input
                            placeholder="Nombre de la imagen"
                            v-model="imageName"
                            type="text"
                        />
                    </div>
                    <div class="input-box">
                        <input
                            placeholder="Enlace de imagen"
                            v-model="imageUrl"
                            type="text"
                        />
                    </div>
                    <div class="btn-box">
                        <div @click="closePop('imagePopShow')">Cancelar</div>
                        <div
                            class="confirm"
                            @click="clickHandler('image', 'insert')"
                        >
                            Ok
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="filePopShow" class="file-pop">
                <div class="dialog">
                    <div class="input-box">
                        <input
                            v-model="fileName"
                            placeholder="Nombre del archivo adjunto"
                            type="text"
                        />
                    </div>
                    <div class="input-box file-box">
                        <input
                            placeholder="Enlace adjunto"
                            v-model="fileUrl"
                            type="text"
                        />
                    </div>
                    <div class="btn-box">
                        <div @click="closePop('filePopShow')">Cancelar</div>
                        <div
                            class="confirm"
                            @click="clickHandler('file', 'insert')"
                        >
                            Confirmar
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import { insertContentAtCaret } from '../../utils/'
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            imageMenuShow: false,
            fileMenuShow: false,
            titleMenuShow: false,
            menuShowTimer: null,
            linkPopShow: false,
            imagePopShow: false,
            filePopShow: false,
            fileName: '[Accesorio]',
            fileUrl: '',
            imageName: '',
            imageUrl: '',
            linkName: '',
            linkUrl: '',
            imgIndex: 0
        }
    },
    props: {
        dom: {
            default: () => {}
        },
        lang: {
            type: String,
            default: 'es-ES'
        },
        customLeftToolbar: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapGetters({
            iconText: 'pfm/getIconText'
        })

    },

    methods: {
        clickHandler(icon, type) {
            if (type === 'menu') {
                this.menuHandler(icon)
            } else if (type === 'pop') {
                this.popHandler(icon)
            } else if (type === 'upload') {
                this.uploadHanler(icon)
            } else if (type === 'insert') {
                if (icon.includes('title')) {
                    this.titleMenuShow = false
                }
                this.insertHandler(icon)
            } else if (type === 'clear') {
                this.clearContent(icon)
            } else {
            }
        },
        menuHandler(icon) {},
        popHandler(icon) {
            if (icon === 'link') {
                this.linkPopShow = true
            }
        },
        insertHandler(icon) {
            let payload = {}
            if (icon === 'image') {
                payload = { name: this.imageName, url: this.imageUrl }
            } else if (icon === 'file') {
                payload = { name: this.fileName, url: this.fileUrl }
            } else if (icon === 'link') {
                payload = { name: this.linkName, url: this.linkUrl }
            } else {
                // default
            }
            insertContentAtCaret(this.dom, icon, payload, this)
            this[icon + 'PopShow'] = false
        },
        uploadHanler(icon) {
            this.filePopShow = true
        },
        showImageMenu() {
            clearTimeout(this.menuShowTimer)
            this.imageMenuShow = true
        },
        hideImageMenu() {
            this.menuShowTimer = setTimeout(() => {
                this.imageMenuShow = false
            }, 100)
        },
        showFileMenu() {
            clearTimeout(this.fileMenuShowTimer)
            this.fileMenuShow = true
        },
        hideFileMenu() {
            this.fileMenuShowTimer = setTimeout(() => {
                this.fileMenuShow = false
            }, 100)
        },
        showTitleMenu() {
            clearTimeout(this.titleMenuShowTimer)
            this.titleMenuShow = true
        },
        hideTitleMenu() {
            this.titleMenuShowTimer = setTimeout(() => {
                this.titleMenuShow = false
            }, 100)
        },
        addImgFromLink() {
            this.imagePopShow = true
        },
        addFileFromLink() {
            this.filePopShow = true
        },
        addImgFromLocal(e) {
            const files = e.target.files
            const multiple = files.length > 1
            if (files.length > 0) {
                [].forEach.call(files, (item, index) => {
                    this.imgAddHandler(item, multiple)
                })
            }

            e.target.value = '' // input初始化
        },
        imgAddHandler(file, multiple) {
            this.imgIndex++
            this.$emit('addImg', this.imgIndex, file, multiple)
        },
        addFileFromLocal(e) {
            // 文件上传目前支持单个
            const file = e.target.files[0]
            file && this.$emit('addFile', file)
        },
        closePop(pop) {
            this[pop] = false
        },
        clearContent(icon) {
            this.setTextareaContent('') // clear content
            this.dom().focus() // focus
        },

        ...mapActions({ setTextareaContent: 'pfm/setTextareaContent' })
    }
}
</script>
<style lang="less" scoped>
.icon-box {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    i {
        font-size: 18px;
        cursor: pointer;
    }
    span {
        position: relative;
        padding: 6px;
        &:hover {
            background: #e9e8e8;
        }
    }
    .icon-menu {
        display: block;
        position: absolute;
        top: 60px;
        left: -40px;
        z-index: 99;
        width: 120px;
        box-shadow: 0 0px 3px #ccc;
        line-height: 1.5;
        background: #fff;
        padding: 20px 0;
        &.fade-enter-active,
        &.fade-leave-active {
            opacity: 1;
        }

        &.fade-enter,
        &.fade-leave-active {
            opacity: 0;
        }
        li {
            position: relative;
            text-align: center;
            &:hover {
                background: #e9e8e8;
            }
            input {
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
            }
        }
    }
    .image-pop,
    .link-pop,
    .file-pop {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1600;
        -webkit-transition: all 0.1s linear 0s;
        transition: all 0.1s linear 0s;
        .dialog {
            position: fixed;
            box-sizing: border-box;
            text-align: center;
            width: 34%;
            left: 34%;
            height: auto;
            padding: 40px;
            top: 25%;
            -webkit-transition: all 0.1s linear 0s;
            transition: all 0.1s linear 0s;
            z-index: 3;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 0px 5px rgba(255, 255, 255, 0.157),
                0 0px 5px rgba(255, 255, 255, 0.227);
            color: #333;
            font-size: 14px;
            input {
                height: 36px;
                line-height: 36px;
                width: 100%;
            }
            .input-box {
                padding: 6px;
            }
            .btn-box {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                > div {
                    flex: 1;
                    border: 1px solid #ccc;
                    height: 36px;
                    line-height: 36px;
                    margin: 6px;
                    &.confirm {
                        background: #409eff;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
