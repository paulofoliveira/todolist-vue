<template>
    <div class="todo-item">
        <div class="todo-item-content">
            <div class="todo-item-content-title">
                Título
            </div>
            <div class="todo-item-content-description">
                Descrição aqui
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