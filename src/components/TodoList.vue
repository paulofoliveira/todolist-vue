<template>
    <div class="todo-list">
        <TodoItem v-bind:title="'Assistir o Tricolor'" v-bind:description="'Hoje tem São Paulo!'" />
        <TodoItem :title="'Estudar VueJS'" :description="'É necessário estudar conceitos para evoluir!'" />
        <TodoItem :title="todoTitle" :description="todoDescription" />
    </div>
</template>

<script>

    import TodoItem from '@/components/TodoItem'

    export default {
        components: {
            TodoItem
        },
        data () {
            return {
                todoTitle: 'Ir ao Mercado',
                todoDescription: 'Preciso comprar algumas coisas'
            }
        }
    }
</script>
