<template>
  <div>
    <Navbar />
    <br>
    <br>
    <br>

    <div id="app" class="container">

      <router-view/>

    </div> <!-- /container -->

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',

  components: {
    'Navbar': Navbar
  }
}
</script>
