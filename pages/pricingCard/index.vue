<template>
  <div class="mt-n3">
    <v-container>
      <v-row>
        <v-col
          v-for="priceCard in priceCards"
          :key="priceCard.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
        >
          <price-card
            :label="priceCard.label"
            :price="priceCard.price"
            :features="priceCard.features"
            btn-text="get started"
            :bg-img-src="priceCard.bgImgSrc"
            :theme-color="priceCard.themeColor"
            :btn-gradient="priceCard.btnGradient"
          ></price-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PriceCard from '~/components/cards/PriceCard.vue'

export default {
  components: {
    PriceCard,
  },
  data() {
    return {
      priceCards: [],
    }
  },
  fetch() {
    this.priceCards = [
      {
        id: 1,
        label: 'basic',
        price: 20,
        features: [
          { title: 'messages', value: 10 },
          { title: 'emails', value: 30 },
          { title: 'support', value: 5 },
        ],
        bgImgSrc: '/imgs/cards/card-success.png',
        themeColor: '#3BD2C0',
        btnGradient: 'linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)',
      },
      {
        id: 2,
        label: 'mid',
        price: 50,
        features: [
          { title: 'messages', value: 20 },
          { title: 'emails', value: 60 },
          { title: 'support', value: 10 },
        ],
        bgImgSrc: '/imgs/cards/card-warning.png',
        themeColor: '#FF8C72',
        btnGradient: 'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)',
      },
      {
        id: 3,
        label: 'pro',
        price: 100,
        features: [
          { title: 'messages', value: 100 },
          { title: 'emails', value: 150 },
          { title: 'support', value: 25 },
        ],
        bgImgSrc: '/imgs/cards/card-danger.png',
        themeColor: '#F03431',
        btnGradient: 'linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)',
      },
      {
        id: 4,
        label: 'ultimate',
        price: 200,
        features: [
          { title: 'messages', value: 100 },
          { title: 'emails', value: 300 },
          { title: 'support', value: 50 },
        ],
        bgImgSrc: '/imgs/cards/card-primary.png',
        themeColor: '#BA54F5',
        btnGradient: 'linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)',
      },
    ]
  },
}
</script>

<style scoped lang="scss"></style>
