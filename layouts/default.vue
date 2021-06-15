<template>
  <v-app :style="{ backgroundColor: '#f5f6fa' }">
    <base-nav @event:showSidebar="showSidebarHandler"></base-nav>
    <base-sidebar :show-sidebar="showSidebar"></base-sidebar>
    <v-main class="mt-4">
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
      showSidebar: true,
    }
  },
  methods: {
    showSidebarHandler() {
      this.showSidebar = !this.showSidebar
    },
  },
}
</script>
<style></style>
