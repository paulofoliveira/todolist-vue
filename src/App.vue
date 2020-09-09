<template>
    <div id="app">
        <div class="todo-wrapper">
            <div class="todo-container">
                <div class="todo-list">
                    <div class="todo-item">
                        <div class="todo-item-content">
                            <div class="todo-item-content-title">
                                Fazer caminhada
                            </div>
                            <div class="todo-item-content-description">
                                Faz bem para a saúde!
                            </div>
                        </div>
                    </div>
                    <div class="todo-item">
                        <div class="todo-item-content">
                            <div class="todo-item-content-title">
                                Ir ao mercado
                            </div>
                            <div class="todo-item-content-description">
                                Precisa comprar algumas coisas que estão faltando =/
                            </div>
                        </div>
                    </div>
                    <div class="todo-item">
                        <div class="todo-item-content">
                            <div class="todo-item-content-title">
                                Estudar VueJS
                            </div>
                            <div class="todo-item-content-description">
                                Para evoluir é preciso estudar os conceitos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    $container-bgcolor: #ededed;
    $item-bgcolor: gray;

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
            width: 400px;
            min-height: 400px;
            background-color: $container-bgcolor;
            border-radius: 5px;
        }

        &-item {
            background-color: $item-bgcolor;
            min-height: 70px;
            margin: 10px;
            padding: 10px;
            color: white;
            border-radius: 5px;
            font-size: 23px;

            &-content {
                &-title {
                    font-weight: bold;
                }
                &-description {
                    font-size: 19px;
                }
            }
        }
    }
</style>
