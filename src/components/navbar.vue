<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" active-class="active" to="/" class="nav-item">
          <a class="nav-link" >
            Список пользователей
          </a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style>

</style>
