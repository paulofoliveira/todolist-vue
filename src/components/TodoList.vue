<template>
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
</template>

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