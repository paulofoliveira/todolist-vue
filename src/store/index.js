
import Vue from 'vue'

const MY_TODOS_KEY = 'my_todos'

const getUniqueId = () => {
    return Math.random().toString(36).substr(2, 7)
}

const INITIAL_DATA = {
    todos: [
        {
            _id: getUniqueId(),
            title: 'Assistir o Tricolor',
            description: 'Hoje tem São Paulo!'
        },
        {
            _id: getUniqueId(),
            title: 'Estudar VueJS',
            description: 'É necessário estudar conceitos para evoluir!'
        },
        {
            _id: getUniqueId(),
            title: 'Ir ao Mercado',
            description: 'Preciso comprar algumas coisas'
        }
    ]
}

const store = {

    persistData (value) {
        let valueToString = JSON.stringify(value)
        localStorage.setItem(MY_TODOS_KEY, valueToString)
    },

    dispatch: function (action, payload) {

        if (!this.actions[action])
            throw new Error(`Action ${action} is not defined in the store`)

        const result = this.actions[action](this.state, payload)

        if (!result) return

        this.persistData(result)
        return result
    },

    state: {
        todos: []
    },

    actions: {

        initialStore (state) {

            const todos = localStorage.getItem(MY_TODOS_KEY)
            Vue.set(state, 'todos', !todos ? INITIAL_DATA.todos : JSON.parse(todos))

            return state.todos
        },
        createTodo (state, todo) {

            todo._id = getUniqueId()
            state.todos.push(todo)

            return state.todos
        },

        updateTodo (state, todo) {
            let index = state.todos.findIndex(p => p._id === todo._id)

            //state.todos[index] = todo
            Vue.set(state.todos, index, todo)

            return state.todos
        },

        deleteTodo (state, id) {
            let index = state.todos.findIndex(p => p._id === id)
            state.todos.splice(index, 1)

            return state.todos
        }
    }

}

export default store