<template>
  <div class="generalCards d-flex align-stretch flex-wrap">
    <div
      v-for="generalInfoCard in generalInfoCards"
      :key="generalInfoCard.id"
      class="generalCard"
    >
      <general-info-card
        :icon="generalInfoCard.icon"
        :title="generalInfoCard.title"
        :value="generalInfoCard.value"
        :sub-icon="generalInfoCard.subIcon"
        :action-text="generalInfoCard.actionText"
        :icon-gradient="generalInfoCard.iconGradient"
        :btn-action-handler="generalInfoCard.btnActionHandler"
      ></general-info-card>
    </div>
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
        iconGradient:
          'linear-gradient(to right bottom, #08225e, #004c8d, #00769f, #009c90, #13bf6d)',
        subIcon: 'fas fa-users',
        actionText: 'list of users',
        btnActionHandler: () => this.$router.push('/users'),
      },
      {
        id: 2,
        title: 'products',
        value: '250',
        icon: 'fas fa-shopping-basket',
        iconGradient: 'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)',
        subIcon: 'fas fa-shopping-cart',
        actionText: 'list of products',
        btnActionHandler: () => this.$router.push('/products'),
      },
      {
        id: 3,
        title: 'comments',
        value: '1200',
        icon: 'fas fa-comment',
        iconGradient: 'linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)',
        subIcon: 'fas fa-comments',
        actionText: 'list of comments',
        btnActionHandler: () => this.$router.push('/comments'),
      },
      {
        id: 4,
        title: 'followers',
        value: '50000',
        icon: 'fab fa-instagram',
        iconGradient: 'linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)',
        subIcon: 'fas fa-heart',
        actionText: 'see page',
        btnActionHandler: () => this.$router.push('/'),
      },
    ]
  },
}
</script>

<style scoped lang="scss">
.generalCard {
  width: calc((100% - (4 * 3em)) / 4);
  margin: 1.5em;
}
</style>
