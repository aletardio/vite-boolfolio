<script>
import axios from 'axios';
import { store } from '../store.js'
import ProjectCard from '../components/ProjectCard.vue';


export default {
    name: 'AppProject',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects:[],
            store,
            currentPage: 1,
            lastPage: null
        }
    },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects(page_num){
      axios.get(`${this.store.baseUrl}/api/projects`, {
        params: {
            page: page_num
        }
      }).then((response) => {
        this.projects = response.data.results.data;
        this.currentPage = response.data.results.current_page;
        this.lastPage = response.data.results.last_page;
      })
    }
  },
}
</script>
<template lang="">
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">
                        Progetti
                    </h2>
                    <p class="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam optio totam esse voluptate placeat, dicta iure debitis quaerat explicabo et quis quisquam dolores, unde ipsa consectetur accusantium vel laudantium in!
                    </p>
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
</style>./AppMain.vue/index.js