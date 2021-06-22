<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  props: {
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.$refs.canvas.style.height = '30em'
    // const ctx = this.$refs.canvas.getContext('2d')

    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets,
      },
      {
        responsive: true,
        maintainAspectRatio: false,
      }
    )
  },
}
</script>

<style lang="scss" scoped></style>
