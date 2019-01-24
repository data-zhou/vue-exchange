<template>
    <div class="c2c-trans">
    <v-header></v-header>
        <div>
            c2c交易
        </div>
    <v-footer></v-footer>
    </div>
</template>
<script>
import header from '../header/header.vue'
import footer from '../footer/footer.vue'
export default {
    name:'c2c-trans',
    components: {
        "v-header":header,
        "v-footer":footer
    }
}
</script>
<style>

</style>