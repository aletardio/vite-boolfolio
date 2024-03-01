<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    }
}
</script>
<template lang="">
    <div class="card">
        <img class="card-img-top" :src="project.cover_image" alt="">
        <div class="card-body">
            <h4>
                {{ project.title}}
            </h4>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>