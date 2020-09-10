<template>
    <div class="todo-item">
        <div class="todo-item-content">
            <div class="todo-item-content-title">
                {{title}}
            </div>
            <div class="todo-item-content-description">
                {{description}}
            </div>
        </div>
        <button @click="editTodo" class="app-button is-warning">Editar</button>
        <button @click="deleteTodo" class="app-button is-danger">Excluir</button>
    </div>
</template>

<script>
    export default {
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
                alert('Editar tarefa!')
            },
            deleteTodo () {
                alert('Excluir tarefa!')
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