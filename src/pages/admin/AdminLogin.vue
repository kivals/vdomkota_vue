<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Админ-панель</span>
      <div class="input-field">
        <input id="email" type="text" />
        <label for="email">Email</label>
        <small class="helper-text invalid"
          >Поле Email не должно быть пустым</small
        >
      </div>

      <div class="input-field">
        <input id="password" type="password" />
        <label for="password">password</label>
        <small class="helper-text invalid"
          >Поле password не должно быть пустым</small
        >
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AdminLogin',
};
</script>

<style scoped>
.auth-card {
  width: 500px;
}
.auth-submit {
  width: 100%;
}
</style>
