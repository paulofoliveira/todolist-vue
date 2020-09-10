<template>
    <Modal>
        <form class="app-form">
            <div class="form-control">
                <label class="label">Título</label>
                <input class="form-input" type="text" v-model="form.title">
            </div>
            <div class="form-control">
                <label class="label">Descrição</label>
                <textarea class="form-input" v-model="form.description" cols="30" rows="5"></textarea>
            </div>
            <button type="button" class="app-button is-primary" @click="createTodo">Confirmar</button>
        </form>
    </Modal>
</template>

<script>

    import Modal from '@/components/Modal'

    export default {
        components: {
            Modal
        },

        data () {
            return {
                form: {
                    title: '',
                    description: ''
                }
            }
        },
        methods: {
            createTodo () {
                console.log(this.form)
            }
        }
    }
</script>