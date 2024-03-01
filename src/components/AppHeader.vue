<script>
export default {
    name: 'AppHeader'
}
</script>
<template lang="">
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <h2 class="ps-4">Boolfolio</h2>
                </div>
                <div class="col-6 d-flex justify-content-center align-items-center">
                    <ul class="list-unstyled d-flex mt-1">
                        <li>
                            <a class="link-offset-2 link-underline link-underline-opacity-0 pe-5" href="#">Home</a>
                        </li>
                        <li>
                            <a class="link-offset-2 link-underline link-underline-opacity-0 pe-5" href="#">Progetti</a>
                        </li>
                        <li>
                            <a class="link-offset-2 link-underline link-underline-opacity-0 pe-5" href="#">Contatti</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    header{
        background-color: #252525;
        color: #fff;
        padding: 20px 0;

        a {
            color: #fff;

            &:hover{
                color: rgb(149, 149, 149);
            }
        }
    }
</style>