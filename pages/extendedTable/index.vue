<template>
  <div class="mt-n3">
    <div class="extended-table mt-3">
      <extended-table
        title="Extended Table"
        :items="extendedTableItems"
        :headers="extendedTableHeaders"
        :pages="extendedTablePages"
      ></extended-table>
    </div>
  </div>
</template>

<script>
import ExtendedTable from '~/components/tables/ExtendedTable.vue'

export default {
  components: {
    ExtendedTable,
  },
  data() {
    return {
      extendedTableItems: [],
      extendedTableHeaders: [
        {
          text: 'ID',
          value: 'id',
          align: 'start',
          sortable: true,
        },
        {
          text: 'NAME',
          value: 'name',
          align: 'start',
          sortable: true,
        },
        {
          text: 'EMAIL',
          value: 'email',
          align: 'start',
          sortable: true,
        },
        {
          text: 'COUNTRY',
          value: 'country',
          align: 'start',
          sortable: true,
        },
        {
          text: 'SALARY',
          value: 'salary',
          align: 'start',
          sortable: true,
        },
      ],
      extendedTablePages: [10, 20, 50, 100],
    }
  },
  fetch() {
    for (let i = 0; i < 100; i++) {
      this.extendedTableItems[i] = {}
      this.extendedTableItems[i].id = i
      this.extendedTableItems[i].name = 'John Doe'
      this.extendedTableItems[i].email = 'something@gmail.com'
      this.extendedTableItems[i].salary = `${(Math.random() * 10000).toFixed(
        2
      )}$`
      this.extendedTableItems[i].country =
        Math.random() < 0.5 ? 'USA' : 'Germany'
    }
  },
}
</script>

<style scoped lang="scss"></style>
