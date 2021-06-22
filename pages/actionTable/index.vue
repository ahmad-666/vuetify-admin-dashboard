<template>
  <div class="action-table">
    <action-table
      title="action table"
      :items="actionTableItems"
      :headers="actionTableHeaders"
      :pages="[10, 25, 50, 100]"
    ></action-table>
  </div>
</template>
<script>
import ActionTable from '~/components/tables/ActionTable.vue'

export default {
  components: {
    ActionTable,
  },
  data() {
    return {
      actionTableItems: [],
      actionTableHeaders: [
        {
          text: 'ID',
          value: 'id',
          sortable: true,
          align: 'start',
        },
        {
          text: 'USERNAME',
          value: 'username',
          sortable: true,
          align: 'start',
        },
        {
          text: 'EMAIL',
          value: 'email',
          sortable: true,
          align: 'start',
        },
        {
          text: 'TEL',
          value: 'tel',
          sortable: true,
          align: 'start',
        },
        {
          text: 'ACTIONS',
          value: 'actions',
          sortable: true,
          align: 'start',
        },
      ],
    }
  },
  fetch() {
    for (let i = 0; i < 100; i++) {
      this.actionTableItems[i] = {}
      this.actionTableItems[i].id = i
      this.actionTableItems[i].username = 'username'
      this.actionTableItems[i].email = 'something@gmail.com'
      this.actionTableItems[i].tel = '+123 456 789'
      this.actionTableItems[i].actions = ''
    }
  },
}
</script>
<style lang="sss" scoped></style>
