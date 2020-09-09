<template>
    <div class="todo-list">
        <!--<TodoItem v-bind:title="todos[0].title" v-bind:description="todos[0].description" />
        <TodoItem v-bind:title="todos[1].title" v-bind:description="todos[1].description" />
        <TodoItem v-bind:title="todos[2].title" v-bind:description="todos[2].description" />-->

        <TodoItem v-for="todo in todos" :key="todo._id" :title="todo.title" :description="todo.description"></TodoItem>

        <!--<TodoItem :title="'Estudar VueJS'" :description="'É necessário estudar conceitos para evoluir!'" />
        <TodoItem :title="todoTitle" :description="todoDescription" />-->
    </div>
</template>

<script>

    import TodoItem from '@/components/TodoItem'

    export default {
        components: {
            TodoItem
        },
        props: {
            todos: {
                required: true,
                type: Array
            }
        }
    }
</script>

<style scoped>
    .todo-list {
        flex: 1;
    }
</style>
