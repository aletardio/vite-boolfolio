<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components:{
    AppHeader,
    AppMain
  }
}
</script>
<template lang="">
  <AppHeader/>
  <router-view></router-view>
</template>
<style lang="scss" scoped>
  
</style>