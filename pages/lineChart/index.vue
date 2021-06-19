<template>
  <v-card color="cardColor" class="line-chart mt-n0">
    <v-card-title class="font-weight-bold text-subtitle-1 titleColor--text"
      >Title Of Chart</v-card-title
    >
    <line-chart
      gradient1="#40AC7D88"
      gradient2="#40AC7D00"
      :labels="lineChartLabels"
      :datasets="lineChartDatasets"
      :y-min="-20"
      :y-max="50"
    ></line-chart>
  </v-card>
</template>

<script>
import LineChart from '~/components/charts/LineChart.vue'
export default {
  components: {
    LineChart,
  },
  data() {
    return {
      lineChartLabels: [],
      lineChartDatasets: [],
    }
  },
  fetch() {
    this.lineChartLabels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ]
    this.lineChartDatasets = [
      {
        label: 'My First dataset',
        borderColor: '#40AC7D',
        data: [0, 10, 5, 2, 20, 30],
        fill: 'start',
      },
    ]
  },
}
</script>

<style scoped lang="scss"></style>
