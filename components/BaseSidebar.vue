<template>
  <v-navigation-drawer
    v-model="sidebarModel"
    color="teal accent-4"
    dark
    fixed
    width="30em"
    class="py-2 px-4 mySidebar mySidebarPos ml-4 rounded-lg"
    :expand-on-hover="!expandSidebar"
  >
    <v-list>
      <v-list-item v-for="sidebarItem in sidebarItems" :key="sidebarItem.id">
        <v-list-item-icon>
          <v-icon size="18">{{ sidebarItem.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="ml-2">
          <v-list-item-title>
            <nuxt-link v-if="!sidebarItem.items" :to="sidebarItem.route">
              <p
                class="font-weight-light text-uppercase text-body-2 white--text"
              >
                {{ sidebarItem.text }}
              </p>
            </nuxt-link>
            <v-list-group v-else>
              <template #activator>
                <v-list-item-content>
                  <v-list-item-title
                    class="
                      font-weight-light
                      text-body-2
                      white--text
                      text-uppercase
                    "
                    >{{ sidebarItem.text }}</v-list-item-title
                  >
                </v-list-item-content>
              </template>
              <v-list>
                <v-list-item v-for="item in sidebarItem.items" :key="item.text">
                  <nuxt-link :to="item.route">
                    <v-list-item-content>
                      <v-list-item-title
                        class="
                          font-weight-light
                          text-body-2
                          white--text
                          text-uppercase
                        "
                      >
                        {{ item.text }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </nuxt-link>
                </v-list-item>
              </v-list>
            </v-list-group>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    expandSidebar: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      sidebarModel: true,
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
          ],
        },
        {
          id: 5,
          text: 'form elements',
          icon: 'fas fa-edit',
          route: '/form',
        },
      ],
    }
  },
}
</script>
<style scoped lang="scss">
.v-list-item__content {
  padding: 0 !important;
}
.mySidebar {
  background-image: linear-gradient(0deg, #ff6491, #ff8d72) !important;
}
.mySidebarPos {
  top: 7em !important;
  height: calc(100% - 8em) !important;
}
</style>
