<template>
  <v-card color="cardColor" class="pa-4">
    <v-data-table
      :items="ticketItems"
      :headers="ticketHeaders"
      class="transparent mt-4"
      :search="tableFilter"
      :items-per-page="pageSize"
      :hide-default-footer="true"
      :page="page"
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
          <div
            class="
              left
              pageSizeSelect
              d-flex
              flex-column flex-md-row
              align-md-center
            "
          >
            <v-select
              v-model="pageSize"
              :items="pages"
              outlined
              dense
            ></v-select>
            <v-text-field
              v-model="tableFilter"
              outlined
              label="filter table rows"
              dense
              class="ml-0 ml-md-6"
            ></v-text-field>
          </div>

          <div class="right btns mb-4 mb-md-0">
            <v-btn
              color="teal accent-4"
              class="pa-3 text-body-2 white--text"
              @click="newTicketHandler"
              >New Ticket</v-btn
            >
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
            circle
            class="mt-4 mt-md-0"
            :length="totalPages"
            :total-visible="5"
          ></v-pagination>
        </div>
      </template>
      <template #[`item.status`]="{ item }">
        <p
          v-if="item.status === 'seen'"
          class="
            text-caption
            pa-1
            text-center
            rounded-lg
            white--text
            success
            statusText
          "
        >
          {{ item.status }}
        </p>
        <p
          v-else
          class="
            text-caption
            pa-1
            text-center
            rounded-lg
            white--text
            error
            statusText
          "
        >
          {{ item.status }}
        </p>
      </template>
      <template #item.subject="slotProps">
        <nuxt-link
          :to="`/tickets/${slotProps.item.id}`"
          class="secondary--text"
          >{{ slotProps.value }}</nuxt-link
        >
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      ticketItems: [],
      ticketHeaders: [
        {
          text: 'ID',
          value: 'id',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Subject',
          value: 'subject',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Date',
          value: 'date',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Writer',
          value: 'writer',
          sortable: true,
          align: 'start',
        },
        {
          text: 'Status',
          value: 'status',
          sortable: true,
          align: 'start',
          width: '10em',
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: true,
          align: 'start',
        },
      ],
      pageSize: 10,
      pages: [10, 25, 50, 100],
      page: 1,
      tableFilter: '',
      ticketsTotalLength: 0,
    }
  },
  fetch() {
    for (let i = 0; i < 100; i++) {
      this.ticketItems[i] = {}
      this.ticketItems[i].id = i
      this.ticketItems[i].subject = 'subject value'
      this.ticketItems[i].date = new Date().toDateString()
      this.ticketItems[i].writer = 'writer name'
      this.ticketItems[i].status = Math.random() < 0.5 ? 'seen' : 'not seen'
      this.ticketItems[i].actions = 'actions values'
    }
    this.ticketsTotalLength = this.ticketItems.length
  },
  computed: {
    totalEntries() {
      return this.ticketItems.length
    },
    totalPages() {
      return Math.ceil(this.ticketItems.length / this.pageSize)
    },
    startText() {
      return (this.page - 1) * this.pageSize + 1
    },
    endText() {
      return (this.page - 1) * this.pageSize + this.pageSize
    },
  },
  methods: {
    newTicketHandler() {
      this.$router.push('/sendTicket')
    },
  },
}
</script>
<style lang="scss" scoped></style>
