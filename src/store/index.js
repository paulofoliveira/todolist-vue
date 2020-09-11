
const getUniqueId = () => {
    return Math.random().toString(36).substr(2, 7)
}

const store = {

    dispatch: function (action, payload) {

        if (!this.actions[action])
            throw new Error(`Action ${action} is not defined in the store`)

        return this.actions[action](this.state, payload)
    },

    state: {
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
    },

    actions: {
        createTodo (state, todo) {
            todo._id = getUniqueId()
            state.todos.push(todo)
        }
    }

}

export default store