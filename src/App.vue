<template>
    <div id="app">
        <div class="todo-wrapper">
            <div class="todo-container">
                <!--<TodoList />-->
                <todo-list :todos="todos" />
                <div class="todo-create-btn-container">
                    <Modal />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import TodoList from '@/components/TodoList'
    import Modal from '@/components/Modal'

    export default {
        name: 'App',
        components: {
            TodoList,
            Modal
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
        },
        methods: {
            toggleModal () {
                this.isModalOpen = !this.isModalOpen
                console.log(`${this.isModalOpen ? 'Abrindo' : 'Fechando'} modal...`)
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
</style>
