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
    <v-container class="mt-4">
      <v-row>
        <v-col
          v-for="priceCard in priceCards"
          :key="priceCard.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
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
    <div class="simple-table mt-4">
      <simple-table
        title="Simple Data"
        :items="simpleTableData"
        :headers="simpleTableHeaders"
      ></simple-table>
    </div>
    <div class="extended-table mt-4">
      <extended-table
        title="Extended Table"
        :items="extendedTableItems"
        :headers="extendedTableHeaders"
        :pages="extendedTablePages"
      ></extended-table>
    </div>
    <div class="action-table mt-4">
      <action-table
        title="action table"
        :items="actionTableItems"
        :headers="actionTableHeaders"
        :pages="[10, 25, 50, 100]"
      ></action-table>
    </div>
    <div class="mt-4">
      <chart-card title="title of chart">
        <line-chart
          gradient1="#40AC7D33"
          gradient2="#40AC7D00"
          :labels="lineChartLabels"
          :datasets="lineChartDatasets1"
          :y-min="-10"
          :y-max="40"
        ></line-chart>
      </chart-card>
    </div>

    <v-container class="mt-4">
      <v-row>
        <v-col cols="12" md="6">
          <chart-card
            title="title of chart"
            sub-title="subtitle of chart"
            icon="mdi-chart-line"
            value="$100000"
            color="#e91e6333"
          >
            <line-chart
              gradient1="#e91e6333"
              gradient2="#e91e6300"
              :labels="lineChartLabels"
              :datasets="lineChartDatasets2"
              :y-min="-10"
              :y-max="40"
            ></line-chart>
          </chart-card>
        </v-col>
        <v-col cols="12" md="6">
          <chart-card
            title="title of chart"
            sub-title="subtitle of chart"
            icon="mdi-chart-line"
            value="$100000"
            color="#ff174455"
          >
            <line-chart
              gradient1="#ff174455"
              gradient2="#673ab700"
              :labels="lineChartLabels"
              :datasets="lineChartDatasets3"
              :y-min="-10"
              :y-max="40"
            ></line-chart>
          </chart-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-4">
      <v-row>
        <v-col cols="12" md="6">
          <chart-card
            title="title of chart"
            sub-title="subtitle of chart"
            icon="mdi-chart-bar-stacked"
            value="$100000"
            color="#e91e6333"
          >
            <bar-chart
              gradient1="#00e5ff44"
              gradient2="#00e5ff00"
              :labels="barChartLabels"
              :datasets="barChartDatasets1"
              :y-min="0"
              :y-max="100"
            ></bar-chart>
          </chart-card>
        </v-col>
        <v-col cols="12" md="6">
          <chart-card
            title="title of chart"
            sub-title="subtitle of chart"
            icon="mdi-chart-bar-stacked"
            value="$100000"
            color="#ff174455"
          >
            <bar-chart
              gradient1="#ff174444"
              gradient2="#ff174400"
              :labels="barChartLabels"
              :datasets="barChartDatasets2"
              :y-min="0"
              :y-max="100"
            ></bar-chart>
          </chart-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-4">
      <v-row>
        <v-col cols="12" md="6">
          <chart-card
            title="title of chart"
            sub-title="subtitle of chart"
            icon="mdi-chart-pie"
            value="$100000"
            color="#e91e6333"
          >
            <doughnut-chart
              :labels="doughnutChartLabels"
              :datasets="doughnutChartDatasets1"
            ></doughnut-chart>
          </chart-card>
        </v-col>
        <v-col cols="12" md="6">
          <chart-card
            title="title of chart"
            sub-title="subtitle of chart"
            icon="mdi-chart-pie"
            value="$100000"
            color="#ff174455"
          >
            <doughnut-chart
              :labels="doughnutChartLabels"
              :datasets="doughnutChartDatasets2"
            ></doughnut-chart>
          </chart-card>
        </v-col>
      </v-row>
    </v-container>

    <v-card class="mt-4" color="cardColor">
      <v-card-title class="text-body-1 font-weight-bold titleColor--text"
        >Form Elements</v-card-title
      >
      <v-card-text>
        <v-form
          ref="formRef"
          v-model="isFormValid"
          @submit.prevent="submitHandler"
        >
          <v-container>
            <v-row justify="space-between" dense>
              <v-col cols="12" sm="6" md="4" lg="3">
                <v-text-field
                  v-model="name"
                  :rules="[formRules.required]"
                  outlined
                  placeholder="enter name"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3">
                <v-text-field
                  v-model="email"
                  :rules="[formRules.required, formRules.isEmail]"
                  outlined
                  placeholder="enter email"
                  dense
                  type="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3">
                <v-text-field
                  v-model="password"
                  :rules="[formRules.minLength]"
                  outlined
                  placeholder="enter password"
                  type="password"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="12">
                <v-textarea
                  v-model="message"
                  :rules="[formRules.required]"
                  auto-grow
                  no-resize
                  outlined
                  placeholder="enter message"
                  dense
                  height="10em"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="12" sm="6" md="4" lg="3">
                <v-select
                  v-model="interests"
                  :items="interestsItems"
                  label="select one field"
                  :rules="[formRules.required]"
                  outlined
                  dense
                ></v-select>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col
                v-for="checkbox in checkboxes"
                :key="checkbox.value"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                xl="2"
              >
                <v-checkbox
                  v-model="colors"
                  :value="checkbox.value"
                  color="orange orange-darken-1"
                  :label="checkbox.label"
                  dense
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-radio-group v-model="gender" row mandatory>
              <v-row dense>
                <v-col
                  v-for="radio in radios"
                  :key="radio.value"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                  xl="2"
                >
                  <v-radio
                    color="teal lighten-2"
                    :value="radio.value"
                    :label="radio.label"
                    dense
                  ></v-radio>
                </v-col>
              </v-row>
            </v-radio-group>
            <v-row dense>
              <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                <v-switch
                  v-model="toggleModel"
                  color="pink lighten-1"
                  label="toggle me"
                  dense
                ></v-switch>
              </v-col>
            </v-row>
            <v-btn
              class="primary white--text text-body-2 py-4 px-8 primary-gradient"
              type="submit"
              :loading="formLoading"
            >
              Submit
            </v-btn>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ActionTable from '~/components/tables/ActionTable.vue'
import GeneralInfoCard from '~/components/cards/GeneralInfoCard.vue'
import PriceCard from '~/components/cards/PriceCard.vue'
import SimpleTable from '~/components/tables/SimpleTable.vue'
import ExtendedTable from '~/components/tables/ExtendedTable.vue'
import ChartCard from '~/components/charts/ChartCard.vue'
import LineChart from '~/components/charts/LineChart.vue'
import BarChart from '~/components/charts/BarChart.vue'
import DoughnutChart from '~/components/charts/DoughnutChart.vue'

export default {
  components: {
    GeneralInfoCard,
    PriceCard,
    SimpleTable,
    ExtendedTable,
    ChartCard,
    ActionTable,
    LineChart,
    BarChart,
    DoughnutChart,
  },
  data() {
    return {
      isFormValid: true,
      formLoading: false,
      name: '',
      email: '',
      password: '',
      message: '',
      interests: '',
      interestsItems: [
        { text: 'HTML', value: 'html' },
        { text: 'CSS', value: 'css' },
        { text: 'JAVASCRIPT', value: 'js' },
      ],
      checkboxes: [
        {
          label: 'red-color',
          value: 'red',
        },
        {
          label: 'blue-color',
          value: 'blue',
        },
        {
          label: 'green-color',
          value: 'green',
        },
        {
          label: 'orange-color',
          value: 'orange',
        },
      ],
      colors: [],
      radios: [
        {
          label: 'female',
          value: 'female',
        },
        {
          value: 'male',
          label: 'male',
        },
      ],
      gender: '',
      toggleModel: true,
      generalInfoCards: [],
      priceCards: [],
      simpleTableData: [],
      toggle: true,
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
      lineChartLabels: [],
      lineChartDatasets1: [],
      lineChartDatasets2: [],
      lineChartDatasets3: [],
      actionTableItems: [],
      actionTableHeaders: [
        {
          text: 'ID',
          value: 'id',
          sortable: true,
          align: 'start',
        },
        {
          text: 'USERNAME',
          value: 'username',
          sortable: true,
          align: 'start',
        },
        {
          text: 'EMAIL',
          value: 'email',
          sortable: true,
          align: 'start',
        },
        {
          text: 'TEL',
          value: 'tel',
          sortable: true,
          align: 'start',
        },
        {
          text: 'ACTIONS',
          value: 'actions',
          sortable: true,
          align: 'start',
        },
      ],
      barChartLabels: ['JAN', 'FEB', 'Mar', 'Apr', 'May', 'Jun'],
      barChartDatasets1: [],
      barChartDatasets2: [],
      doughnutChartLabels: ['JAN', 'FEB', 'MAR'],
      doughnutChartDatasets1: [],
      doughnutChartDatasets2: [],
    }
  },
  fetch() {
    this.generalInfoCards = [
      {
        id: 1,
        title: 'users',
        value: '10000',
        icon: 'mdi-account-circle-outline',
        iconGradient: 'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)',
        subIcon: 'mdi-account-group-outline',
        actionText: 'list of users',
        actionLink: '/users',
      },
      {
        id: 2,
        title: 'products',
        value: '250',
        icon: 'mdi-basket-outline',
        iconGradient: 'linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)',
        subIcon: 'mdi-basket-plus-outline',
        actionText: 'list of products',
        actionLink: '/products',
      },
      {
        id: 3,
        title: 'comments',
        value: '1200',
        icon: 'mdi-comment-account-outline',
        iconGradient: 'linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)',
        subIcon: 'mdi-comment-multiple-outline',
        actionText: 'list of comments',
        actionLink: '/comments',
      },
      {
        id: 4,
        title: 'followers',
        value: '50000',
        icon: 'mdi-instagram',
        iconGradient: 'linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)',
        subIcon: 'mdi-heart-outline',
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
    for (let i = 0; i < 100; i++) {
      this.actionTableItems[i] = {}
      this.actionTableItems[i].id = i
      this.actionTableItems[i].username = 'username'
      this.actionTableItems[i].email = 'something@gmail.com'
      this.actionTableItems[i].tel = '+123 456 789'
      this.actionTableItems[i].actions = ''
    }
    this.lineChartLabels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ]
    this.lineChartDatasets1 = [
      {
        label: 'My First dataset',
        borderColor: '#40AC7D',
        data: [0, 10, 5, 2, 20, 30],
        fill: 'start',
        borderWidth: 2,
      },
    ]
    this.lineChartDatasets2 = [
      {
        label: 'My First dataset',
        borderColor: '#673ab7',
        data: [0, 10, 5, 2, 20, 30],
        fill: 'start',
        borderWidth: 2,
      },
    ]
    this.lineChartDatasets3 = [
      {
        label: 'My First dataset',
        borderColor: '#e91e63',
        data: [0, 10, 5, 2, 20, 30],
        fill: 'start',
        borderWidth: 2,
      },
    ]
    this.barChartDatasets1 = [
      {
        label: 'label of bar chart',
        borderWidth: 3,
        // backgroundColor: ['red', 'blue'],
        borderColor: '#00acc1',
        data: [10, 50, 25, 75, 90, 60],
      },
    ]
    this.barChartDatasets2 = [
      {
        label: 'label of bar chart',
        borderWidth: 3,
        // backgroundColor: gradient,
        borderColor: '#e53935',
        data: [10, 50, 25, 75, 90, 60],
      },
    ]
    this.doughnutChartDatasets1 = [
      {
        label: 'label of pie chart',
        borderWidth: 0,
        backgroundColor: ['#ffa000', '#00bfa5', '#f50057'],
        borderColor: 'transparent',
        data: [50, 100, 25],
      },
    ]
    this.doughnutChartDatasets2 = [
      {
        label: 'label of pie chart',
        borderWidth: 0,
        backgroundColor: ['#5e35b1', '#76ff03', '#3f51b5'],
        borderColor: 'transparent',
        data: [25, 50, 100],
      },
    ]
  },
  computed: {
    formRules() {
      return {
        required: val => {
          if (!val || !val.trim().length) return 'field is required'
          return true
        },
        isEmail: val => {
          if (!val.includes('@')) return 'enter valid email'
          return true
        },
        minLength: val => {
          if (val.trim().length < 6) return 'min length is 6'
          return true
        },
      }
    },
  },
  methods: {
    submitHandler() {
      this.$refs.formRef.validate()
      if (this.isFormValid) {
        this.formLoading = true
        setTimeout(() => {
          this.formLoading = false
        }, 2000)
      }
    },
  },
}
</script>

<style scoped lang="scss"></style>
