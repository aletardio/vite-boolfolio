<script>
import axios from 'axios';
import { store } from '../store.js'
import ProjectCard from './ProjectCard.vue';


export default {
    name: 'AppMain',
    components: {
        ProjectCard
    },
    data() {
        return {
            projects:[],
            store
        }
    },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects(){
      axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
        this.projects = response.data.results.data;
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
                        Boolfolio
                    </h2>
                    <p class="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam optio totam esse voluptate placeat, dicta iure debitis quaerat explicabo et quis quisquam dolores, unde ipsa consectetur accusantium vel laudantium in!
                    </p>
                </div>
                <div class="row">
                    <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>