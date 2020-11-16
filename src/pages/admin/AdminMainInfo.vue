<template>
  <div>
    <b-row>
      <b-col cols="7" class="">
        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Шапка сайта - блок</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>

      <b-col cols="7" class="">
        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Интро- блок</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>

      <b-col cols="7" class="">
        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Слайдер - блок</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
      <b-col cols="7" class="">
        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Пожертвования - блок</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
      <b-col cols="7" class="">
        <b-card title="Title" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">Помощь приюту - блок</h6>
          </template>
          <b-card-text>Header and footers using slots.</b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'AdminMainInfo',
};
</script>

<style lang="scss" scoped></style>
