<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(0,0,255,.2)',
            borderColor: 'crimson',
            data: [0, 10, 5, 2, 20, 30],
            fill: 'start',
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                max: 50,
                min: -20,
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
