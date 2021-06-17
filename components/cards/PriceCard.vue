<template>
  <v-hover v-slot="{ hover }">
    <v-card
      light
      color="white"
      class="price-card pa-4 d-flex flex-column justify-center align-center"
      :elevation="!hover ? 2 : 10"
    >
      <v-img
        :src="bgImgSrc"
        width="auto"
        height="15em"
        class="card-bg-img"
      ></v-img>

      <v-card-title class="card-title">
        <h6 class="text-uppercase text-h5 font-weight-bold white--text">
          {{ label }}
        </h6>
      </v-card-title>
      <v-card-text :style="{ marginTop: '10em' }">
        <v-list class="d-flex flex-column align-center">
          <v-list-item
            v-for="feature in features"
            :key="feature.title"
            class="mt-n2"
          >
            <v-list-item-content>
              <v-list-item-title
                class="
                  grey--text
                  text--darken-3
                  font-weight-medium
                  text-subtitle-1
                "
                >{{ feature.value }} {{ feature.title }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div class="price-container mt-4">
          <h6
            class="
              grey--text
              text--darken-4 text-h4
              font-weight-bold
              text-center
            "
          >
            {{ price }}$
          </h6>
          <h6
            class="bg-price text-h1 font-weight-black"
            :style="{ color: themeColor }"
          >
            {{ price }}$
          </h6>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          :style="{ backgroundImage: btnGradient }"
          class="
            mt-4
            rounded-pill
            py-4
            px-8
            text-capitalize
            font-weight-bold
            text-subtitle-2
          "
          dark
          >{{ btnText }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    features: {
      type: Array,
      default: () => {
        return []
      },
    },
    btnText: {
      type: String,
      required: true,
    },
    bgImgSrc: {
      type: String,
      default: '',
    },
    themeColor: {
      type: String,
      required: true,
    },
    btnGradient: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.v-list-item__content {
  padding: 0 !important;
}
.price-card {
  position: relative;
}
.card-bg-img {
  position: absolute;
  left: 0;
  top: 0;
}
.card-title {
  position: absolute;
  left: 0.2em;
  top: 0.2em;
}
.price-container {
  position: relative;
  .bg-price {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1;
  }
}
</style>
