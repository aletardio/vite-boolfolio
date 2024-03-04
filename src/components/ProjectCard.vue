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
        },
        getTechnologyColor(slug) {
        const colorMap = {
            html: '#F46B22',
            css: '#2D53E5',
            javascript: '#F7E029',
            vuejs: '#41D392',
            php: '#7986B8',
            laravel: '#F33A2E'
        };
        return colorMap[slug] || '#000000'; 
        },
    }
}
</script>
<template lang="">

<div class="col-4">
    <div class="card my-3 shadow">
        <img class="rounded-top-1":src="getUrlImg()">
        <div class="card-body">
            <h5 class="card-title text-center my-2">{{project.title}}</h5>
            <p class="card-text "><strong>Descrizione:</strong> {{project.description.substr(0,70)+"..."}}</p>
            <p class="card-text "><strong>Link:</strong> {{project.link.substr(0,30)+"..."}}</p>
            <p class="card-text"><strong>Tecnologia: </strong> 
                <button v-for="(technology, index) in project.technologies" :key="index" class="btn btn-sm m-1 text-white" 
                :style="{ backgroundColor: getTechnologyColor(technology.slug) }">
                    {{ technology.name }}
                </button>
            </p>
        </div>
    </div>
</div>

</template>
<style lang="scss" scoped>
    // .card.my-3.shadow {
    // height: 450px;
    // }
</style>