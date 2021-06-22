<template>
  <v-navigation-drawer
    v-model="isShowSidebar"
    :hide-overlay="true"
    color="teal accent-4"
    :app="isMobile"
    dark
    fixed
    :bottom="isMobile"
    width="30em"
    class="py-2 px-4 mySidebar"
    :class="{
      mySidebarPos: !isMobile,
      'ml-4': !isMobile,
      'rounded-lg': !isMobile,
    }"
    :expand-on-hover="!showSidebar && !isMobile"
  >
    <v-list>
      <template v-for="sidebarItem in sidebarItems">
        <v-list-item
          v-if="!sidebarItem.items"
          :key="sidebarItem.text"
          nuxt
          :to="sidebarItem.route"
          exact-active-class="activeClass"
        >
          <v-list-item-icon>
            <v-icon size="15">{{ sidebarItem.icon }}</v-icon>
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
              size="15"
              :color="isListOpen(sidebarItem.items) ? getActiveColor : 'white'"
              >{{ sidebarItem.icon }}</v-icon
            >
          </v-list-item-icon>
          <v-list-item-content class="ml-2">
            <v-list-item-title>
              <v-list-group :value="isListOpen(sidebarItem.items)">
                <template #activator>
                  <p
                    class="font-weight-light text-caption text-uppercase"
                    :style="{ width: '100%' }"
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
</template>
<script>
import colors from 'vuetify/lib/util/colors'
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
          icon: 'fas fa-columns',
        },
        {
          id: 2,
          text: 'cards',
          icon: 'fas fa-pager',
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
          icon: 'fas fa-table',
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
          icon: 'fas fa-chart-bar',
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
          icon: 'fas fa-edit',
          route: '/form',
        },
        {
          id: 6,
          text: 'profile',
          icon: 'fas fa-user',
          route: '/profile',
        },
      ],
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
    getActiveColor() {
      return colors.pink.darken2
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
  background-image: linear-gradient(0deg, #0098f0, #00f2c3) !important;
}
.mySidebarPos {
  top: 7em !important;
  height: calc(100% - 8em) !important;
}
.activeClass {
  color: #c2185b !important;
  position: relative;
  &::before {
    display: none;
  }
}
.v-list-item--link:before {
  display: none;
}
</style>
