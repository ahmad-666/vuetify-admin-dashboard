<template>
  <v-container class="mt-n2">
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
</template>
<script>
import ChartCard from '~/components/charts/ChartCard.vue'
import BarChart from '~/components/charts/BarChart.vue'
export default {
  components: {
    ChartCard,

    BarChart,
  },
  data() {
    return {
      barChartLabels: ['JAN', 'FEB', 'Mar', 'Apr', 'May', 'Jun'],
      barChartDatasets1: [],
      barChartDatasets2: [],
    }
  },
  fetch() {
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
  },
}
</script>
<style lang="scss" scoped></style>
