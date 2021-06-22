<template>
  <div>
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
            icon="fas fa-chart-line"
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
            icon="fas fa-chart-line"
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
  </div>
</template>

<script>
import ChartCard from '~/components/charts/ChartCard.vue'
import LineChart from '~/components/charts/LineChart.vue'

export default {
  components: {
    ChartCard,
    LineChart,
  },
  data() {
    return {
      lineChartLabels: [],
      lineChartDatasets1: [],
      lineChartDatasets2: [],
      lineChartDatasets3: [],
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
  },
}
</script>

<style scoped lang="scss"></style>
