<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Шапка сайта - блок</h6>
    </template>
    <b-row>
      <!-- ЛОГО -->
      <b-col cols="4">
        <LogoEdit :currentLogo="logo"></LogoEdit>
      </b-col>
      <!-- МЕНЮ -->
      <b-col cols="4">
        <MenuSection
          @saveMenu="$emit('saveMenu', $event)"
          :menu="menu"
        ></MenuSection>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import LogoEdit from '@/components/admin/LogoEdit';
import MenuSection from '@/components/admin/MenuSection';

export default {
  name: 'HeaderSection',
  components: {
    LogoEdit,
    MenuSection,
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
    logo: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
