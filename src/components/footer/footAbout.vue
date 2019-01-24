<template>
    <div class="about">
        <v-header></v-header>
        <div class="safety-wrapper box-bgshadow">
            <el-tabs v-model="activeName">
                <el-tab-pane label="公司简介" name="first">11</el-tab-pane>
                <el-tab-pane label="联系我们" name="second">22</el-tab-pane>
                <el-tab-pane label="加入我们" name="third">33</el-tab-pane>
                <el-tab-pane label="法律声明" name="fourth">44</el-tab-pane>
                <el-tab-pane label="注册指南" name="fivth">55</el-tab-pane>
                <el-tab-pane label="交易指南" name="six">66</el-tab-pane>
            </el-tabs>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
import header from '../header/header.vue'
import footer from '../footer/footer.vue'
 
export default {
    name:'safety',
    components: {
        "v-header":header,
        "v-footer":footer
    },
    data (){
        return {
            activeName:'first',
            // activeName: this.$route.query.tabView
        }
    },
    mounted:function(){
        if(this.activeName == true){
            this.activeName='first'
        }
    },
    methods: {
        
    }

}
</script>
<style>

</style>