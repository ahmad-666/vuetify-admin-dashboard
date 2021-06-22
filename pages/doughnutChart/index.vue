<template>
  <v-container class="mt-n2">
    <v-row>
      <v-col cols="12" md="6">
        <chart-card
          title="title of chart"
          sub-title="subtitle of chart"
          icon="fas fa-chart-pie"
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
          icon="fas fa-chart-pie"
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
</template>
<script>
import ChartCard from '~/components/charts/ChartCard.vue'
import DoughnutChart from '~/components/charts/DoughnutChart.vue'
export default {
  components: {
    ChartCard,

    DoughnutChart,
  },
  data() {
    return {
      doughnutChartLabels: ['JAN', 'FEB', 'MAR'],
      doughnutChartDatasets1: [],
      doughnutChartDatasets2: [],
    }
  },
  fetch() {
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
}
</script>
<style lang="scss" scoped></style>
