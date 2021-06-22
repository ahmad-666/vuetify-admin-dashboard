<template>
  <v-card color="cardColor" class="line-chart mt-0 pb-4">
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
        <v-icon v-if="icon" :color="color" size="25" class="mr-2">{{
          icon
        }}</v-icon>
        {{ value }}
      </p>
    </v-card-title>

    <slot> </slot>
  </v-card>
</template>
<script>
export default {
  components: {},
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
    color: {
      type: String,
      default: '#aaa',
    },
  },
}
</script>
<style lang="scss" scoped></style>
