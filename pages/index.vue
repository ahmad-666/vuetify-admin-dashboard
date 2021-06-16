<template>
  <div>
    <div class="generalCards d-flex align-stretch flex-wrap mt-n4">
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
          :action-link="generalInfoCard.actionLink"
        ></general-info-card>
      </div>
    </div>
    <div class="price-cards mt-4 d-flex align-stretch flex-wrap">
      <div
        v-for="priceCard in priceCards"
        :key="priceCard.id"
        class="price-card"
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
      </div>
    </div>
    <div class="simple-table mt-4">
      <simple-table
        title="Simple Data"
        :items="simpleTableData"
        :headers="simpleTableHeaders"
      ></simple-table>
    </div>
    <div class="extended-table mt-6">
      <extended-table
        title="Extended Table"
        :items="extendedTableItems"
        :headers="extendedTableHeaders"
        :pages="extendedTablePages"
      ></extended-table>
    </div>
    <div class="line-chart">
      <line-chart></line-chart>
    </div>
  </div>
</template>

<script>
import GeneralInfoCard from '~/components/cards/GeneralInfoCard.vue'
import PriceCard from '~/components/cards/PriceCard.vue'
import SimpleTable from '~/components/tables/SimpleTable.vue'
import ExtendedTable from '~/components/tables/ExtendedTable.vue'
import LineChart from '~/components/charts/LineChart.vue'
export default {
  components: {
    GeneralInfoCard,
    PriceCard,
    SimpleTable,
    ExtendedTable,
    LineChart,
  },
  data() {
    return {
      generalInfoCards: [],
      priceCards: [],
      simpleTableData: [],
      simpleTableHeaders: [
        {
          text: 'ID',
          value: 'id',
          align: 'start',
          sortable: false,
        },
        {
          text: 'NAME',
          value: 'name',
          align: 'start',
          sortable: false,
        },
        {
          text: 'EMAIL',
          value: 'email',
          align: 'start',
          sortable: false,
        },
        {
          text: 'COUNTRY',
          value: 'country',
          align: 'start',
          sortable: false,
        },
        {
          text: 'SALARY',
          value: 'salary',
          align: 'start',
          sortable: false,
        },
      ],
      extendedTableItems: [],
      extendedTableHeaders: [
        {
          text: 'ID',
          value: 'id',
          align: 'start',
          sortable: true,
        },
        {
          text: 'NAME',
          value: 'name',
          align: 'start',
          sortable: true,
        },
        {
          text: 'EMAIL',
          value: 'email',
          align: 'start',
          sortable: true,
        },
        {
          text: 'COUNTRY',
          value: 'country',
          align: 'start',
          sortable: true,
        },
        {
          text: 'SALARY',
          value: 'salary',
          align: 'start',
          sortable: true,
        },
      ],
      extendedTablePages: [10, 20, 50, 100],
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
    for (let i = 0; i < 5; i++) {
      this.simpleTableData[i] = {}
      this.simpleTableData[i].id = i
      this.simpleTableData[i].name = 'John Doe'
      this.simpleTableData[i].email = 'something@gmail.com'
      this.simpleTableData[i].salary = `${(Math.random() * 10000).toFixed(2)}$`
      this.simpleTableData[i].country = Math.random() < 0.5 ? 'USA' : 'Germany'
    }
    for (let i = 0; i < 100; i++) {
      this.extendedTableItems[i] = {}
      this.extendedTableItems[i].id = i
      this.extendedTableItems[i].name = 'John Doe'
      this.extendedTableItems[i].email = 'something@gmail.com'
      this.extendedTableItems[i].salary = `${(Math.random() * 10000).toFixed(
        2
      )}$`
      this.extendedTableItems[i].country =
        Math.random() < 0.5 ? 'USA' : 'Germany'
    }
  },
}
</script>

<style scoped lang="scss">
.generalCard {
  width: calc((100% - (4 * 3em)) / 4);
  margin: 1.5em;
}
.price-card {
  width: calc((100% - (4 * 3em)) / 4);
  margin: 1.5em;
}
</style>
