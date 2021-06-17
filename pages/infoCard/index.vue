<template>
  <div class="mt-n3">
    <v-container>
      <v-row>
        <v-col
          v-for="generalInfoCard in generalInfoCards"
          :key="generalInfoCard.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
        >
          <general-info-card
            :icon="generalInfoCard.icon"
            :title="generalInfoCard.title"
            :value="generalInfoCard.value"
            :sub-icon="generalInfoCard.subIcon"
            :action-text="generalInfoCard.actionText"
            :icon-gradient="generalInfoCard.iconGradient"
            :action-link="generalInfoCard.actionLink"
          ></general-info-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import GeneralInfoCard from '~/components/cards/GeneralInfoCard.vue'

export default {
  components: {
    GeneralInfoCard,
  },
  data() {
    return {
      generalInfoCards: [],
    }
  },
  fetch() {
    this.generalInfoCards = [
      {
        id: 1,
        title: 'users',
        value: '10000',
        icon: 'fas fa-user',
        iconGradient: 'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)',
        subIcon: 'fas fa-users',
        actionText: 'list of users',
        actionLink: '/users',
      },
      {
        id: 2,
        title: 'products',
        value: '250',
        icon: 'fas fa-shopping-basket',
        iconGradient: 'linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)',
        subIcon: 'fas fa-shopping-cart',
        actionText: 'list of products',
        actionLink: '/products',
      },
      {
        id: 3,
        title: 'comments',
        value: '1200',
        icon: 'fas fa-comment',
        iconGradient: 'linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)',
        subIcon: 'fas fa-comments',
        actionText: 'list of comments',
        actionLink: '/comments',
      },
      {
        id: 4,
        title: 'followers',
        value: '50000',
        icon: 'fab fa-instagram',
        iconGradient: 'linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)',
        subIcon: 'fas fa-heart',
        actionText: 'see page',
        actionLink: '/',
      },
    ]
  },
}
</script>

<style scoped lang="scss"></style>
