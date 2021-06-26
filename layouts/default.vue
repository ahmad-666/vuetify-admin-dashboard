<template>
  <v-app :style="{ backgroundColor: getBackgroundColor }">
    <base-nav @event:toggleShowSidebar="toggleShowSidebar"></base-nav>

    <base-sidebar :show-sidebar="showSidebar"></base-sidebar>
    <v-overlay
      v-if="isMobile && showSidebar"
      color="rgb(0,0,0)"
      opacity=".65"
      @click.native="hideOverlay"
    ></v-overlay>
    <v-main
      class="mt-6"
      :class="{
        moveLeft: showSidebar && !isMobile,
        'ml-15': !isMobile,
        'pl-15': !isMobile,
        'pr-4': !isMobile,
        'px-2': isMobile,
      }"
    >
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
      showSidebar: false,
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
    getBackgroundColor() {
      return !this.$vuetify.theme.dark
        ? this.$vuetify.theme.themes.light.backgroundColor
        : this.$vuetify.theme.themes.dark.backgroundColor
    },
    isVuetifyThemeDark() {
      return this.$vuetify.theme.dark
    },
    vuexTheme() {
      return this.$store.getters['theme/getTheme']
    },
  },
  watch: {
    isVuetifyThemeDark(isDark) {
      if (isDark) {
        this.$store.dispatch('theme/setTheme', 'dark')
        this.$vuetify.theme.dark = true
      } else {
        this.$store.dispatch('theme/setTheme', 'light')
        this.$vuetify.theme.dark = false
      }
    },
    async vuexTheme(theme) {
      if (!theme || theme === 'dark') {
        await this.$store.dispatch('theme/setTheme', 'dark')
        this.$vuetify.theme.dark = true
      } else {
        await this.$store.dispatch('theme/setTheme', 'light')
        this.$vuetify.theme.dark = false
      }
    },
  },
  mounted() {
    this.$store.dispatch('theme/autoTheme')
  },
  methods: {
    toggleShowSidebar() {
      this.showSidebar = !this.showSidebar
    },
    toggleDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    hideOverlay() {
      this.showSidebar = false
    },
  },
}
</script>
<style lang="scss" scoped>
.moveLeft {
  margin-left: 27em !important;
}
.mySwitch {
  width: 30em;
}
</style>
