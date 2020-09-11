<template>
    <div v-if="!editMode" class="todo-item">
        <div class="todo-item-content">
            <div class="todo-item-content-title">
                {{title}}
            </div>
            <div class="todo-item-content-description">
                {{description}}
            </div>
        </div>
        <button @click="editMode = true" class="app-button is-warning">Editar</button>
        <button @click="deleteTodo" class="app-button is-danger">Excluir
        </button>
    </div>
    <div v-else class="todo-item">
        <form class="app-form">
            <div class="form-control">
                <label class="label">Title</label>
                <input class="form-input" type="text" :value="title">
            </div>
            <div class="form-control form-control-last">
                <label class="label">Description</label>
                <textarea cols="30" rows="2" class="form-input" :value="description"></textarea>
            </div>
            <button @click.prevent="editTodo" class="app-button is-warning">Atualizar</button>
            <button @click.prevent="editMode = false" class="app-button is-danger">Cancelar</button>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                editMode: false
            }
        },
        //props: ['title', 'description']
        props: {
            title: {
                type: String, // Array, Object, String, Number, Boolean, Function...
                required: true
            },
            description: {
                type: String,
                required: false,
                default: 'Default Description'
            }
        },

        methods: {
            editTodo () {
                console.log('Editar tarefa!')
                this.editMode = false
            },
            deleteTodo () {
                console.log('Excluir tarefa!')
            }
        }
    }

</script>

<style scoped lang="scss">
    $item-bgcolor: gray;

    .todo {
        &-item {
            background-color: $item-bgcolor;
            min-height: 70px;
            margin: 10px;
            padding: 10px;
            color: white;
            border-radius: 5px;
            font-size: 23px;

            &-content {
                margin-bottom: 10px;

                &-title {
                    font-weight: bold;
                }
                &-description {
                    font-size: 19px;
                }
            }
        }
    }

    .app-button {
        font-size: 15px;
        &.is-warning {
            margin-right: 5px;
        }
    }
</style>