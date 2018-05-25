<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <user-list v-else v-bind:users="users"></user-list>
  </div>
</template>

<script>
import axios from 'axios';
import UserList from '@/components/users-list.vue';

export default {
  name: 'UsersPage',
  components: {
    'user-list': UserList
  },
  data: function() {
    return {
      users: []
    };
  },
  methods: {
    loadData: function() {
      var self = this;
      axios.get('https://sheetdb.io/api/v1/5a6df9df4c2eb')
        .then(function(response) {
          self.users = response.data;
        })
    }
  },
  mounted: function () {
    this.loadData();
  }
}
</script>