<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Отчество</th>
        <th>Аватар</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in users" v-bind:key="index">
        <td># {{ item.id }}</td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.middleName }}</td>
        <td><img :src="item.avatar" alt=""></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="8">
          Всего пользователей: {{ total }}
        </th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: 'UsersTable',
  
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    total: function() {
      return this.users.length;
    }
  }
}
</script>