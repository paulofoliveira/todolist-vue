<template>
    <Modal ref="modal">
        <form class="app-form">
            <div class="form-control">
                <label class="label">Título</label>
                <input type="text" class="form-input" v-model="form.title">
            </div>
            <div class="form-control">
                <label class="label">Descrição</label>
                <textarea class="form-input form-control-last " v-model="form.description" cols="30" rows="5"></textarea>
            </div>
            <div class="app-error">
                <div class="form-error">
                    {{formError}}
                </div>
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
                },
                formError: ''
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
                else {
                    this.formError = 'É necessário informar o Título e a Descrição acima de 3 e 5 caracteres'
                }

            },
            resetForm () {
                this.form.title = ''
                this.form.description = ''
                this.formError = ''
            }
        },
        computed: {
            isFormValid () {
                return this.form.title.length >= 3 && this.form.description.length >= 5
            },
            modal () {
                return this.$refs.modal
            }
        }
    }
</script>

<style scoped>
    .form-error {
        margin-bottom: 10px;
    }
</style>