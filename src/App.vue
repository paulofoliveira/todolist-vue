<template>
    <div id="app">
        <div class="todo-wrapper">
            <div class="todo-container">
                <!--<TodoList />-->
                <todo-list :todos="todos" />
                <div class="todo-create-btn-container">
                    <div class="app-button">
                        Criar
                    </div>
                </div>
            </div>
        </div>
        <div class="modal">
            <div class="modal-content">
                Modal Window
            </div>
        </div>
    </div>
</template>

<script>

    import TodoList from '@/components/TodoList'

    export default {
        name: 'App',
        components: {
            TodoList
        },

        data () {
            return {
                todos: [
                    {
                        _id: '1',
                        title: 'Assistir o Tricolor',
                        description: 'Hoje tem São Paulo!'
                    },
                    {
                        _id: '2',
                        title: 'Estudar VueJS',
                        description: 'É necessário estudar conceitos para evoluir!'
                    },
                    {
                        _id: '3',
                        title: 'Ir ao Mercado',
                        description: 'Preciso comprar algumas coisas'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    $container-bgcolor: #ededed;

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .todo {
        &-wrapper {
            display: flex;

            justify-content: center;
            width: 100%;
        }

        &-container {
            display: flex;
            flex-direction: column;
            width: 400px;
            min-height: 400px;
            background-color: $container-bgcolor;
            border-radius: 5px;
        }

        &-create-btn-container {
            margin: 10px;
        }
    }

    .app-button {
        font-size: 20px;
        padding: 10px;
        border-radius: 5px;
        background-color: #795899;
        color: white;
        font-weight: bold;

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
        }
    }
</style>
