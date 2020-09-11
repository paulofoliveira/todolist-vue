
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
    createTodo (data) {
        data._id = getUniqueId()
        this.state.todos.push(data)
    }
}

export default store