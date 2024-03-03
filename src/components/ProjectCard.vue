<script>
import { store } from '../store';
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data(){
        return{
            store
        }
    },
    created() {
    },
    methods: {
        getUrlImg(){
            let image;
            if (this.project.cover_image != null) {
                image = 'storage/' + this.project.cover_image;
            }
            else {
                image = 'img/placeholder.webp';
            }
            return `${this.store.baseUrl}/${image}`;
        }
    }
}
</script>
<template lang="">

<div class="col-4">
    <div class="card my-3 shadow">
        <img class="rounded-top-1":src="getUrlImg()">
        <div class="card-body ">
            <h5 class="card-title text-center my-2">{{project.title}}</h5>
            <p class="card-text "><strong>Descrizione:</strong> {{project.description.substr(0,80)+"..."}}</p>
            <p class="card-text "><strong>Link:</strong> {{project.link.substr(0,30)+"..."}}</p>
        </div>
    </div>
</div>

</template>
<style lang="scss" scoped>
    
</style>