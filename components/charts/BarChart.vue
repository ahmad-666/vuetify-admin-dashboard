<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  props: {
    gradient1: {
      type: String,
      default: 'transparent',
    },
    gradient2: {
      type: String,
      default: 'transparent',
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
    this.$refs.canvas.style.height = '35em'

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
                max: this.yMax,
                min: this.yMin,
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
