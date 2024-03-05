<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name:'SingleProject',
    data() {
        return {
            store,
            project: null,
            success: null,
        }
    },
    created() {
        this.getProjectData();
    },
    methods: {
        getProjectData(){
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                if(response.data.success){
                    this.project = response.data.project;
                    this.success = response.data.success;
                }
                else {
                    this.$router.push({ name: 'not-found'});
                }
            });
        },
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
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row" v-if="success == true">
            <div class="col-12">
                <h2 class="text-center pt-5">
                    {{ project.title }}
                </h2>
            </div>
            <div class="row pt-4">
                <div>
                <span class="badge rounded-pill me-2 bg-color-black">
                    {{ project.type.name }}
                </span>
                </div>
            </div>
            <div class="col-6 pt-3">
                <p class="card-text "><strong>Descrizione:</strong> {{project.description}}</p>
                <p class="card-text "><strong>Link:</strong> {{project.link}}</p>
                <p class="card-text"><strong>Tecnologia: </strong> 
                    <span v-for="(technology, index) in project.technologies" :key="index" class="badge rounded-pill me-1 text-white" 
                    :style="{ backgroundColor: getTechnologyColor(technology.slug) }">
                        {{ technology.name }}
                    </span>
                </p>
            </div>
            <div class="col-6 pt-3">
                <img class="w-100" :src="getUrlImg()" alt="{{project.title}}">
            </div>
        </div>
            <h2 class="text-center pt-5" v-if="success == false">
                {{ error}}
            </h2>
    </div>
</template>
<style lang="scss" scoped>
    span.badge.rounded-pill.me-2.bg-color-black {
        background-color:#000;
        color: #fff;
    }
</style>