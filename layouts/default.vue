<template>
  <v-app :style="{ backgroundColor: '#f5f6fa' }">
    <base-nav @event:toggleExpandSidebar="toggleExpandSidebar"></base-nav>
    <base-sidebar :expand-sidebar="expandSidebar"></base-sidebar>
    <v-main class="mt-6 ml-6 pl-15 pr-4" :class="{ moveLeft: expandSidebar }">
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
import BaseNav from '~/components/BaseNav.vue'
import BaseSidebar from '~/components/BaseSidebar.vue'
export default {
  components: {
    BaseNav,
    BaseSidebar,
  },
  data() {
    return {
      expandSidebar: false,
    }
  },
  methods: {
    toggleExpandSidebar() {
      this.expandSidebar = !this.expandSidebar
    },
  },
}
</script>
<style lang="scss" scoped>
.moveLeft {
  margin-left: 27em !important;
}
</style>
