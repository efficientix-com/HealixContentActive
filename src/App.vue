<template>
  <div id="app">
    <router-view>
      <FinancialsViewVue/>
    </router-view>
    
    
    
  </div>
</template>

<script>
import FinancialsViewVue from './views/FinancialsView.vue'

export default {
  name: 'App',
  components: {

    FinancialsViewVue
  }
}
</script>

<style lang="scss">
@import './assets/scss/generalStyles.scss';
@import './assets/scss/Datatable.scss'
</style>
