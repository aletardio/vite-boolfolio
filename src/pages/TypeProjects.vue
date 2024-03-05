<script>
import axios from 'axios';
import { store } from '../store.js'
import ProjectCard from '../components/ProjectCard.vue';


export default {
    name: 'TypeProjects',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects:[],
            types:[],
            store,
            currentPage: 1,
            lastPage: null,
        }
    },
  created() {
    this.getProjects();
    this.getTypes();
  },
  methods: {
    getProjects(page_num){
      axios.get(`${this.store.baseUrl}/api/projects/type/${this.$route.params.slug}`, {
        params: {
            page: page_num
        }
      }).then((response) => {
        this.projects = response.data.results.data;
        this.currentPage = response.data.results.current_page;
        this.lastPage = response.data.results.last_page;
      })
    },
    getTypes(){
      axios.get(`${this.store.baseUrl}/api/types`, {
      }).then((response) => {
        this.types = response.data.results.data;
      })
    }
  },
}
</script>
<template lang="">
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="row">
                    <div>
                        <router-link :to="{ name: 'type-projects', params: { slug: type.slug } }" class="badge rounded-pill me-2 bg-color-black" v-for="type, index in types" :key="index" >
                        {{ type.name }}
                    </router-link>
                    </div>
                </div>
                <div class="row">
                    <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
                </div>
                <div class="row">
                <div class="col-12 d-flex justify-content-center ">
                    
                    <ul class="pagination mt-4">
                        <li>
                            <button :class="currentPage == 1 ? 'disabled' : ''" class="btn btn-sm btn-square btn-page mx-2" @click="getProjects(currentPage - 1)">
                                <i class="fas fa-arrow-left"></i>
                            </button>
                        </li>
                        <li>
                            <button :class="currentPage == lastPage ? 'disabled' : ''" class="btn btn-sm btn-square btn-page" @click="getProjects(currentPage + 1)">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .btn-page {
        background-color: #252525;
        color: #fff;
    }

    a.badge.rounded-pill.me-2.bg-color-black {
    color: white;
    background-color: black;
    text-decoration: none;
        &:hover{
            background-color: rgb(149, 149, 149);
        }
    }
</style>