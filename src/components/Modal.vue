<template>
    <div>
        <div class="app-button" @click="isOpen = true">
            Adicionar uma Tarefa
        </div>
        <div class="modal" :class="{'is-active' : isOpen}">
            <div class="modal-content">
                <span class="close" @click="isOpen = false">&times;</span>
                <slot /><!-- Permite renderizar conteudo dentro do componente -->
            </div>
        </div>
    </div>

</template>

<script>
    export default {

        data () {
            return {
                isOpen: false
            }
        }

        /*props: {
            isOpen: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            closeModal () {
                // this.isOpen = false Causa erro  Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "isOpen"
                this.$emit('modalClosed')
            }
        }*/
    }
</script>

<style scoped lang="scss">
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        line-height: 8px;

        &:hover {
            cursor: pointer;
        }
    }

    .modal {
        display: none;
        position: fixed; // stay in place
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; // enable scroll if needed
        background-color: rgba(0, 0, 0, 0.4);

        &-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            text-align: left;
        }

        &.is-active {
            display: block;
        }
    }
</style>