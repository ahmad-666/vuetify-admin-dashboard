<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: {
    gradient1: {
      type: String,
      default: '#40AC7D88',
    },
    gradient2: {
      type: String,
      default: '#40AC7D00',
    },
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
    yMin: {
      type: Number,
      default: -100,
    },
    yMax: {
      type: Number,
      default: 100,
    },
  },
  mounted() {
    const ctx = this.$refs.canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, this.gradient1)
    gradient.addColorStop(1, this.gradient2)
    this.datasets.forEach(dataset => (dataset.backgroundColor = gradient))
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.datasets,
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                max: this.yMin,
                min: this.yMax,
              },
            },
          ],
        },
      }
    )
  },
}
</script>

<style lang="scss" scoped></style>
