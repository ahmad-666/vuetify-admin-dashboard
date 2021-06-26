<template>
  <v-card class="custom-table pb-4" color="cardColor">
    <v-card-title
      class="text-subtitle-1 font-weight-bold titleColor--text text-capitalize"
      >{{ title }}</v-card-title
    >
    <v-card-text class="mt-n4">
      <v-data-table
        v-model="selectedRows"
        class="transparent"
        :items="items"
        :headers="headers"
        hide-default-footer
        :page="page"
        :items-per-page="pageSize"
        :search="search"
        show-select
      >
        <template #top>
          <v-container>
            <v-row justify="start" justify-sm="space-between" no-gutters>
              <v-col cols="12" sm="5" md="4" lg="3">
                <v-select
                  v-model="pageSize"
                  :items="pages"
                  dense
                  outlined
                  color="textColor"
                ></v-select>
                <v-text-field
                  v-model="search"
                  outlined
                  dense
                  placeholder="filter table rows"
                  color="textColor"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="5"
                md="4"
                lg="3"
                class="d-flex flex-wrap justify-end"
              >
                <v-tooltip color="cardColor darken-1" bottom>
                  <template #activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" small v-on="on">
                      <v-icon size="22" color="primary"
                        >mdi-file-excel-outline</v-icon
                      >
                    </v-btn>
                  </template>
                  <p
                    class="
                      text-body-2
                      font-weight-light
                      titleColor--text
                      text-capitalize
                    "
                  >
                    export excel
                  </p>
                </v-tooltip>
                <v-tooltip color="cardColor darken-1" bottom>
                  <template #activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" small v-on="on">
                      <v-icon size="22" color="primary">mdi-file-pdf-outline</v-icon>
                    </v-btn>
                  </template>
                  <p
                    class="
                      text-body-2
                      font-weight-light
                      titleColor--text
                      text-capitalize
                    "
                  >
                    export pdf
                  </p>
                </v-tooltip>
                <v-tooltip color="cardColor darken-1" bottom>
                  <template #activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" small v-on="on">
                      <v-icon size="22" color="primary">mdi-printer</v-icon>
                    </v-btn>
                  </template>
                  <p
                    class="
                      text-body-2
                      font-weight-light
                      titleColor--text
                      text-capitalize
                    "
                  >
                    print
                  </p>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <template #footer>
          <v-container>
            <v-row align="center" justify="space-between">
              <v-col cols="12" lg="3">
                <p
                  class="
                    textColor--text
                    text--darken-2
                    font-weight-light
                    text-body-2 text-capitalize
                  "
                >
                  showing {{ startEntry }} to {{ endEntry }} of
                  {{ totalEntries }} entries
                </p>
              </v-col>
              <v-col cols="12" lg="6" class="d-flex justify-end">
                <v-pagination
                  v-model="page"
                  circle
                  :length="totalPages"
                  :total-visible="5"
                  prev-icon="mdi-chevron-double-left"
                  next-icon="mdi-chevron-double-right"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-container>
        </template>
        <template #item.data-table-select="slotProps">
          <v-checkbox
            v-model="selectedRows"
            color="primary"
            :value="slotProps.item"
          ></v-checkbox>
        </template>
        <template #item.actions>
          <div class="d-flex align-center flex-wrap">
            <v-btn small text>
              <v-icon size="20" color="indigo">mdi-pencil-outline</v-icon>
            </v-btn>
            <v-btn small text>
              <v-icon size="20" color="red">mdi-trash-can-outline</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
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
      default: () => [10, 25, 50, 100],
    },
  },
  data() {
    return {
      page: 1,
      search: '',
      pageSize: this.pages[0],
      selectedRows: [],
    }
  },
  computed: {
    startEntry() {
      return (this.page - 1) * this.pageSize + 1
    },
    endEntry() {
      return (this.page - 1) * this.pageSize + this.pageSize
    },
    totalEntries() {
      return this.items.length
    },
    totalPages() {
      return Math.ceil(this.totalEntries / this.pageSize)
    },
  },
}
</script>
<style lang="scss" scoped></style>
