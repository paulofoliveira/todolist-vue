<template>
    <Modal ref="modal">
        <form class="app-form">
            <div class="form-control">
                <label class="label">Título</label>
                <input class="form-input" type="text" v-model="form.title">
            </div>
            <div class="form-control">
                <label class="label">Descrição</label>
                <textarea class="form-input" v-model="form.description" cols="30" rows="5"></textarea>
            </div>
            <button type="button" class="app-button is-primary" @click="submitForm">Confirmar</button>
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
                //forceClose: false
            }
        },
        methods: {
            submitForm () {

                let data = {
                    title: this.form.title,
                    description: this.form.description
                }

                // let data = {...this.form}

                if (this.isFormValid) {
                    this.$emit('formSubmitted', data)

                    //this.forceClose = true
                    //this.$nextTick(() => this.forceClose = false)

                    this.modal.closeModal()

                    this.resetForm()
                }

            },
            resetForm () {
                this.form.title = ''
                this.form.description = ''
            }
        },
        computed: {
            isFormValid () {
                return this.form.title && this.form.description
            },
            modal () {
                return this.$refs.modal
            }
        }
    }
</script>