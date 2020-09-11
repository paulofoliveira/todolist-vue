
const getUniqueId = () => {
    return Math.random().toString(36).substr(2, 7)
}

const store = {
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


store.dispatch = function (action, payload) {
    if (!this.actions[action]) return
    return this.actions[action](this.state, payload)
}



export default store