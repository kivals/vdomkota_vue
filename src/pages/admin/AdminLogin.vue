<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Админ-панель</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >Поле Email не должно быть пустым</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >Введите корректный Email</small
        >
      </div>

      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="password">Пароль</label>
        <small
          v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid"
          >Введите пароль</small
        >
        <small
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid"
          >Поле Password должно быть {{ $v.password.minLength.min }}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'AdminLogin',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
    },
  },
};
</script>

<style scoped>
.auth-card {
  width: 500px;
}
.auth-submit {
  width: 100%;
}

.helper-text.invalid{
  color:#f44336
}
</style>
