<script>
export default {
    name: 'AppLoader'
}
</script>
<template lang="">
    <div class="centered-loader">
        <span class="loader"></span>
    </div>
</template>
<style lang="scss" scoped>

.centered-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #252525;
    display: flex;
    justify-content: center;
    align-items: center;

        .loader {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: inline-block;
        border-top: 3px solid #fff;
        border-right: 3px solid transparent;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        }
    
        @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        } 
    }
</style>