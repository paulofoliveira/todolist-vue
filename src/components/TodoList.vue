<template>
    <div class="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
</template>

<script>

    import TodoItem from '@/components/TodoItem'

    export default {
        components: {
            TodoItem
        }
    }
</script>
