<template>
  <v-card color="cardColor" class="pa-4">
    <v-card-title
      class="pa-0 titleColor--text text-subtitle-1 font-weight-bold"
      >{{ title }}</v-card-title
    >
    <v-data-table
      :items="items"
      :headers="headers"
      :search="tableFilter"
      :items-per-page="pageSize"
      :hide-default-footer="true"
      :page="page"
      class="mt-4 transparent"
    >
      <template #top>
        <div
          class="
            topTable
            d-flex
            flex-column flex-md-row
            justify-md-space-between
          "
        >
          <div class="page-size-select">
            <v-select
              v-model="pageSize"
              :items="pages"
              outlined
              dense
            ></v-select>
          </div>

          <div class="filter-input">
            <v-text-field
              v-model="tableFilter"
              outlined
              label="filter table rows"
              dense
            ></v-text-field>
          </div>
        </div>
      </template>
      <template #footer>
        <div
          class="
            tableFooter
            d-flex
            flex-column flex-md-row
            justify-md-space-between
            align-md-center
            mt-4
          "
        >
          <p class="font-weight-light text-body-2 flex-shrink-0">
            Showing
            {{ startText }}
            to
            {{ endText }}
            of {{ totalEntries }} entries
          </p>
          <v-spacer></v-spacer>
          <v-pagination
            v-model="page"
            class="mt-4 mt-md-0"
            :length="totalPages"
            :total-visible="5"
          ></v-pagination>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    pages: {
      type: Array,
      default: () => [10, 20, 50, 100],
    },
  },
  data() {
    return {
      tableFilter: '',
      page: 1,
      pageSize: 10,
    }
  },
  computed: {
    totalEntries() {
      return this.items.length
    },
    totalPages() {
      return Math.ceil(this.items.length / this.pageSize)
    },
    startText() {
      return (this.page - 1) * this.pageSize + 1
    },
    endText() {
      return (this.page - 1) * this.pageSize + this.pageSize
    },
  },
}
</script>
<style lang="scss" scoped>
.filter-input {
  width: 30em;
}
.page-size-select {
  width: 15em;
}
</style>
