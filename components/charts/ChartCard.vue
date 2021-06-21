<template>
  <v-card color="cardColor" class="line-chart mt-6">
    <v-card-title class="d-flex flex-column align-start">
      <h6
        v-if="title"
        class="
          text-subtitle-1
          titleColor--text
          font-weight-bold
          text-capitalize
        "
      >
        {{ title }}
      </h6>
      <p
        v-if="subTitle"
        class="
          text-caption
          titleColor--text
          text--lighten-2
          font-weight-light
          mt-1
        "
      >
        {{ subTitle }}
      </p>
      <p
        v-if="value"
        class="text-h5 textColor--text text--lighten-1 font-weight-bold mt-2"
      >
        <v-icon v-if="icon" :color="gradient1" size="25" class="mr-2">{{
          icon
        }}</v-icon>
        {{ value }}
      </p>
    </v-card-title>
    <line-chart
      :gradient1="gradient1"
      :gradient2="gradient2"
      :labels="labels"
      :datasets="datasets"
      :y-min="yMin"
      :y-max="yMax"
    ></line-chart>
  </v-card>
</template>
<script>
import LineChart from '~/components/charts/LineChart.vue'

export default {
  components: {
    LineChart,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    value: {
      type: [Number, String],
      default: '',
    },
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
}
</script>
<style lang="scss" scoped></style>
