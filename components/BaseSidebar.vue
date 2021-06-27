<template>
  <div @mouseenter="showScroll = true" @mouseleave="showScroll = false">
    <v-navigation-drawer
      v-model="isShowSidebar"
      floating
      :hide-overlay="true"
      color="blue-grey darken-4"
      :app="isMobile"
      dark
      fixed
      :bottom="isMobile"
      width="30em"
      class="pa-4 mySidebar elevation-10 admin-side-bar"
      :class="{
        mySidebarPos: !isMobile,
        'ml-4': !isMobile && !isRtl,
        'mr-4': !isMobile && isRtl,
        'rounded-lg': !isMobile,
        'show-scrollbar': isMobile ? true : showScroll,
      }"
      :mini-variant="!isShowSidebar"
      :expand-on-hover="!showSidebar && !isMobile"
      mini-variant-width="85"
    >
      <nuxt-link to="/" class="d-flex align-center my-2">
        <img src="/imgs/logo.png" alt="imgs/logo.png" class="logo" />
        <p
          v-if="showSidebar || showScroll"
          class="text-body-2 white--text ml-4"
        >
          Site Name
        </p>
      </nuxt-link>
      <v-divider class="my-6"> </v-divider>
      <v-list class="mt-n6">
        <template v-for="sidebarItem in sidebarItems">
          <v-list-item
            v-if="!sidebarItem.items"
            :key="sidebarItem.text"
            nuxt
            :to="sidebarItem.route"
            exact-active-class="activeClass"
          >
            <v-list-item-icon>
              <v-icon size="20">{{ sidebarItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="ml-2">
              <v-list-item-title>
                <p class="font-weight-light text-uppercase text-caption">
                  {{ sidebarItem.text }}
                </p>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-else
            :key="sidebarItem.text"
            exact-active-class="activeClass"
          >
            <v-list-item-icon>
              <v-icon
                size="20"
                :class="{
                  'orange--text': isListOpen(sidebarItem.items),
                }"
                >{{ sidebarItem.icon }}</v-icon
              >
            </v-list-item-icon>
            <v-list-item-content class="ml-2">
              <v-list-item-title>
                <v-list-group
                  :value="isListOpen(sidebarItem.items)"
                  color="orange"
                >
                  <template #activator>
                    <p
                      class="font-weight-light text-caption text-uppercase"
                      :style="{ width: '100%' }"
                      :class="{
                        'orange--text': isListOpen(sidebarItem.items),
                      }"
                    >
                      {{ sidebarItem.text }}
                    </p>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="item in sidebarItem.items"
                      :key="item.text"
                      nuxt
                      :to="item.route"
                      exact-active-class="activeClass"
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          class="font-weight-light text-caption text-uppercase"
                        >
                          {{ item.text }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-list-group>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  props: {
    showSidebar: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // sidebarModel: !this.$vuetify.breakpoint.mobile,
      sidebarItems: [
        {
          id: 1,
          text: 'dashboard',
          route: '/',
          icon: 'mdi-view-dashboard-outline',
        },
        {
          id: 2,
          text: 'cards',
          icon: 'mdi-card-bulleted-outline',
          items: [
            {
              text: 'info card',
              route: '/infoCard',
            },
            {
              text: 'pricing card',
              route: '/pricingCard',
            },
          ],
        },
        {
          id: 3,
          text: 'tables',
          icon: 'mdi-table-edit',
          items: [
            {
              text: 'simple table',
              route: '/simpleTable',
            },
            {
              text: 'extended table',
              route: '/extendedTable',
            },
            {
              text: 'action table',
              route: '/actionTable',
            },
          ],
        },
        {
          id: 4,
          text: 'charts',
          icon: 'mdi-chart-bar-stacked',
          items: [
            {
              text: 'line chart',
              route: '/lineChart',
            },
            {
              text: 'bar chart',
              route: '/barChart',
            },
            {
              text: 'doughnut chart',
              route: '/doughnutChart',
            },
          ],
        },
        {
          id: 5,
          text: 'form elements',
          icon: 'mdi-form-select',
          route: '/form',
        },
        {
          id: 6,
          text: 'profile',
          icon: 'mdi-account-check-outline',
          route: '/profile',
        },
        {
          id: 7,
          text: 'tickets',
          icon: 'mdi-ticket-confirmation-outline',
          items: [
            {
              text: 'all tickets',
              route: '/tickets',
            },
            {
              text: 'send ticket',
              route: '/sendTicket',
            },
          ],
        },
      ],
      showScroll: false,
      mobileShowSidebar: false,
    }
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    },
    isShowSidebar: {
      get() {
        if (!this.isMobile) return true
        return this.showSidebar
      },
      set(val) {
        return val
      },
    },
    isRtl() {
      return this.$vuetify.rtl
    },
  },
  methods: {
    isListOpen(items) {
      return items.filter(item => item.route === this.$route.fullPath).length
    },
  },
}
</script>
<style scoped lang="scss">
.v-list-item__content {
  padding: 0 !important;
}
.mySidebar {
  // background: #212529 linear-gradient(180deg, #21242a, #212529) repeat-x !important;
  background-image: linear-gradient(
    to bottom,
    #551fb5,
    #5a27b6,
    #5e2db6,
    #6334b7,
    #673ab7
  );
}
.mySidebarPos {
  top: 7em !important;
  height: calc(100% - 8em) !important;
}
body[dir='rtl'] {
  .mySidebarPos {
    right: 0;
  }
}
.logo {
  width: 50px;
  height: 50px;
}
.activeClass {
  color: orange !important;
  position: relative;
  &::before {
    display: none;
  }
}
.v-list-item--link:before {
  display: none;
}
</style>
