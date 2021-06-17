<template>
  <div class="mt-n3">
    <div class="simple-table mt-4">
      <simple-table
        title="Simple Data"
        :items="simpleTableData"
        :headers="simpleTableHeaders"
      ></simple-table>
    </div>
  </div>
</template>

<script>
import SimpleTable from '~/components/tables/SimpleTable.vue'

export default {
  components: {
    SimpleTable,
  },
  data() {
    return {
      simpleTableData: [],
      simpleTableHeaders: [
        {
          text: 'ID',
          value: 'id',
          align: 'start',
          sortable: false,
        },
        {
          text: 'NAME',
          value: 'name',
          align: 'start',
          sortable: false,
        },
        {
          text: 'EMAIL',
          value: 'email',
          align: 'start',
          sortable: false,
        },
        {
          text: 'COUNTRY',
          value: 'country',
          align: 'start',
          sortable: false,
        },
        {
          text: 'SALARY',
          value: 'salary',
          align: 'start',
          sortable: false,
        },
      ],
    }
  },
  fetch() {
    for (let i = 0; i < 5; i++) {
      this.simpleTableData[i] = {}
      this.simpleTableData[i].id = i
      this.simpleTableData[i].name = 'John Doe'
      this.simpleTableData[i].email = 'something@gmail.com'
      this.simpleTableData[i].salary = `${(Math.random() * 10000).toFixed(2)}$`
      this.simpleTableData[i].country = Math.random() < 0.5 ? 'USA' : 'Germany'
    }
  },
}
</script>

<style scoped lang="scss"></style>
