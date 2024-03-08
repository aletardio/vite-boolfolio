<script>
import AppContactForm from '../components/AppContactForm.vue'

export default {
    name: 'AppContactUs',
    components: {
        AppContactForm
    }
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="h1 my-5 text-center">
                        Contatti
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <strong>Indirizzo:</strong> Casetta di pan di zenzero <br><br>
                            <strong>Città:</strong> La città dei sogni
                        </div>
                        <div class="col-12 col-md-6">
                            <strong>Telefono:</strong> Il mio telefono <br><br>
                            <strong>Email:</strong> La mia mail
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <AppContactForm />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>