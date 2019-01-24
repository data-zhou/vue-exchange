<template>
    <div class="dialogbox" v-show="showMask">
        <span class="dialogtext">{{}}提示错误</span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showMask: false,
        }
    },
    props: {
        value: {}    // 注意此处获取的value对应的就是组件标签中的v-model
    },
    mounted(){
        // this.showMask = true
        //this.showMask = this.value;    // 在生命周期中，把获取的value值获取给showMash
        // this.out();
        // setTimeout(function () {
        //     this.showMask = false;
        //     console.log(11135)
        // }, 3000)
    },
    methods:{
        out(){
            // this.showMask = true
            setTimeout(function () {
                this.showMask = false;
                // console.log(123456)
            }, 3000)
        }
    }
    // ,
    // watch:{
    //     value(newVal, oldVal){
    //         this.showMask = newVal;     // 监测value的变化，并赋值。
    //     },
    //     showMask(val) {
    //         this.$emit('input', val);    // 此处监测showMask目的为关闭弹窗时，重新更换value值，注意emit的事件一定要为input。
    //     }
    // }
}
</script>
<style>
.dialogbox{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.dialogtext{
    display: inline-block;
    padding: 8px 26px;
    color:#fff;
    background-color: rgba(255, 0, 0, 0.2);
    border-radius: 5px;
}
</style>