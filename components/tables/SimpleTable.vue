<template>
  <v-card light class="pa-4">
    <v-card-title
      class="pa-0 text-subtitle-1 font-weight-bold grey--text text--darken-3"
      >{{ title }}</v-card-title
    >
    <v-data-table
      :headers="headers"
      :items="items"
      :hide-default-footer="true"
      :page="1"
      :items-per-page="items.length"
      class="mt-2"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped></style>
