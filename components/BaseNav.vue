<template>
  <div>
    <v-app-bar
      color="transparent"
      fixed
      app
      dense
      class="pl-4 overflow-hidden"
      :class="{ 'collapse-width': scrollPassed }"
      :elevation="0"
    >
      <v-app-bar-nav-icon
        class="primary--text ml-1"
        :class="{ 'ml-1': !isPageRTL, 'mr-4': isPageRTL }"
        @click="toggleShowSidebar"
      ></v-app-bar-nav-icon>
      <v-app-bar-title
        v-if="!isMobile"
        class="
          font-weight-medium
          text-subtitle-1 text-capitalize
          primary--text
          ml-n3 ml-sm-0
        "
        >site name</v-app-bar-title
      >
      <v-spacer></v-spacer>
      <v-btn text small class="mr-n3 ml-sm-0" @click="toggleTheme">
        <v-icon size="20" color="primary">{{ getThemeIcon }}</v-icon>
      </v-btn>
      <v-btn
        text
        small
        class="mr-n3 ml-sm-0 primary--text"
        @click="toggleDirection"
      >
        {{ getDirectionText }}
      </v-btn>
      <v-dialog>
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs" text small v-on="on">
            <v-icon size="20" color="textColor">mdi-card-search-outline</v-icon>
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
            offset-y="6"
            offset-x="18"
            dot
            class="ml-n3 ml-sm-0"
          >
            <v-btn
              v-bind="attrs"
              text
              class="transparent"
              elevation="0"
              small
              v-on="on"
            >
              <v-icon size="20" color="textColor">mdi-bell-ring-outline</v-icon>
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
            class="ml-n3 ml-sm-0"
            small
            v-on="on"
          >
            <v-avatar size="25">
              <v-img src="/imgs/profile.png"></v-img>
            </v-avatar>
            <v-icon size="10" color="textColor">mdi-chevron-down</v-icon>
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
          <v-list-item class="d-block" @click="logoutHandler">
            <v-hover v-slot="{ hover }">
              <v-list-item-content class="pa-0">
                <v-list-item-title
                  class="pa-3 textColor--text text-caption"
                  :class="{ textColor: hover, 'lighten-3': hover }"
                  >logout</v-list-item-title
                >
              </v-list-item-content>
            </v-hover>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      showSearchForm: false,
      notifications: [],
      profileLinks: [
        {
          id: 1,
          route: '/profile/profile',
          text: 'profile',
        },
        {
          id: 2,
          route: '/profile/settings',
          text: 'settings',
        },
      ],
      scrollPassed: false,
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
    getThemeIcon() {
      if (this.$vuetify.theme.dark) return 'mdi-white-balance-sunny'
      else return 'mdi-moon-waning-crescent'
    },
    isPageRTL() {
      return this.$vuetify.rtl
    },
    getDirectionText() {
      if (this.isPageRTL) return 'switch to LTR'
      else return 'switch to RTL'
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
    logoutHandler() {
      this.$router.replace('/')
    },
    scrollHandler() {
      if (window.scrollY > 20) this.scrollPassed = true
      else this.scrollPassed = false
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    toggleDirection() {
      this.$vuetify.rtl = !this.$vuetify.rtl
    },
  },
}
</script>
<style lang="scss" scoped>
.collapse-width {
  width: 10em !important;
}
</style>
