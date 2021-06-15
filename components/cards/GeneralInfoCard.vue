<template>
  <v-card color="white" light class="pa-4 pb-0">
    <v-card-text class="d-flex justify-space-between align-center pa-0 pb-8">
      <div
        class="icon rounded-circle d-flex justify-center align-center"
        :style="{ backgroundImage: iconGradient }"
      >
        <v-icon size="20" color="white">{{ icon }}</v-icon>
      </div>
      <div>
        <p
          class="
            text-body-2
            grey--text
            text--darken-1
            font-weight-light
            text-capitalize text-right
          "
        >
          {{ title }}
        </p>
        <p class="text-h5 grey--text text--darken-3 font-weight-light">
          {{ value }}
        </p>
      </div>
    </v-card-text>
    <v-card-actions class="py-2 px-0 border-top-light">
      <v-btn
        text
        class="d-flex align-center grey--text"
        @click="btnActionHandler"
      >
        <v-icon size="12">{{ subIcon }}</v-icon>
        <p class="ml-2 text-capitalize text-caption font-weight-light">
          {{ actionText }}
        </p>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    subIcon: {
      type: String,
      required: true,
    },
    actionText: {
      type: String,
      required: true,
    },
    iconGradient: {
      type: String,
      default: 'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)',
    },
    btnActionHandler: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
<style lang="scss" scoped>
.icon {
  width: 3.5em;
  height: 3.5em;
}
</style>
