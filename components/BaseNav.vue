<template>
  <v-app-bar
    color="transparent"
    fixed
    app
    dense
    class="pl-4"
    :elevation="0"
    collapse
    collapse-on-scroll
    :width="!isScrolled ? '' : '60px'"
  >
    <v-app-bar-nav-icon @click="toggleShowSidebar"></v-app-bar-nav-icon>
    <v-app-bar-title
      v-if="!isMobile"
      class="font-weight-medium text-subtitle-1 titleColor--text ml-n6 ml-sm-0"
      >Site Name</v-app-bar-title
    >
    <v-spacer></v-spacer>
    <v-switch
      v-model="darkMode"
      label="dark mode"
      class="d-flex justify-center align-center mt-5"
      color="secondary"
      @change="changeDarkMode"
    ></v-switch>

    <v-dialog>
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" text v-on="on">
          <v-icon size="20" color="grey">fas fa-search</v-icon>
        </v-btn>
      </template>
      <v-form class="cardColor pa-3" @submit.prevent="searchHandler">
        <v-text-field
          v-model="search"
          class="transparent"
          placeholder="Search"
          height="100%"
        ></v-text-field>
      </v-form>
    </v-dialog>
    <v-menu offset-y>
      <template #activator="{ attrs, on }">
        <v-badge
          color="red"
          dark
          offset-y="10"
          offset-x="25"
          dot
          class="ml-n6 ml-sm-0"
        >
          <v-btn
            v-bind="attrs"
            text
            class="transparent"
            elevation="0"
            v-on="on"
          >
            <v-icon size="20" color="grey">fas fa-bell</v-icon>
          </v-btn>
        </v-badge>
      </template>
      <v-list :elevation="3" width="25em" color="cardColor">
        <v-list-item
          v-for="notification in notifications"
          :key="notification.id"
          class="d-block"
        >
          <v-hover v-slot="{ hover }">
            <nuxt-link :to="notification.route">
              <v-list-item-content class="pa-0">
                <v-list-item-title
                  class="text-caption textColor--text pa-2"
                  :class="{ textColor: hover, 'lighten-3': hover }"
                  >{{ notification.text }}</v-list-item-title
                >
              </v-list-item-content>
            </nuxt-link>
          </v-hover>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template #activator="{ attrs, on }">
        <v-btn
          v-bind="attrs"
          color="transparent"
          text
          class="ml-n6 ml-sm-0"
          v-on="on"
        >
          <v-avatar size="25">
            <v-img src="/imgs/profile.png"></v-img>
          </v-avatar>
          <v-icon size="10" color="grey darken-1">fas fa-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list width="15em" color="cardColor">
        <v-list-item
          v-for="profileLink in profileLinks"
          :key="profileLink.id"
          class="d-block"
        >
          <v-hover v-slot="{ hover }">
            <nuxt-link :to="profileLink.route">
              <v-list-item-content class="pa-0">
                <v-list-item-title
                  class="pa-3 textColor--text text-caption"
                  :class="{ textColor: hover, 'lighten-3': hover }"
                  >{{ profileLink.text }}</v-list-item-title
                >
              </v-list-item-content>
            </nuxt-link>
          </v-hover>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  // props:{
  //     showSidebar:{
  //         type: Boolean,
  //         required:true
  //     }
  // },
  data() {
    return {
      darkMode: false,
      search: '',
      showSearchForm: false,
      notifications: [],
      profileLinks: [
        {
          id: 1,
          route: '/profile',
          text: 'profile',
        },
        {
          id: 2,
          route: '/logout',
          text: 'logout',
        },
      ],
      isScrolled: false,
    }
  },
  fetch() {
    this.notifications = [
      {
        id: 1,
        text: 'Mike John responded to your email',
        route: '/notification/1',
      },
      {
        id: 2,
        text: 'Mike John responded to your email',
        route: '/notification/2',
      },
      {
        id: 3,
        text: 'Mike John responded to your email',
        route: '/notification/3',
      },
      {
        id: 4,
        text: 'Mike John responded to your email',
        route: '/notification/4',
      },
      {
        id: 5,
        text: 'Mike John responded to your email',
        route: '/notification/5',
      },
    ]
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  },
  methods: {
    searchHandler() {},
    toggleShowSidebar() {
      this.$emit('event:toggleShowSidebar')
    },
    changeDarkMode(val) {
      this.$vuetify.theme.dark = val
    },
    scrollHandler(e) {
      if (window.scrollY < 20) this.isScrolled = false
      else this.isScrolled = true
    },
  },
}
</script>
<style lang="scss" scoped></style>
