<script>

import { store } from "../store.js";

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6">
                    <h2 class="ps-4">Boolfolio</h2>
                </div>
                <div class="col-6 d-flex justify-content-center">
                    <ul class="list-unstyled d-flex align-items-center mt-1">
                        <li class="pe-5 fw-bold" v-for="item, index in store.menuItems" :key="index">
                            <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
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


        ul {
            margin: 5px 0;
            a {
                text-decoration: none;
                color: #fff;
    
                &:hover{
                    color: rgb(149, 149, 149);
                }
            }
        }
    }
</style>