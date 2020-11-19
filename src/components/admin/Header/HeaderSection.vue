<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Шапка сайта - блок</h6>
    </template>
    <b-row>
      <!-- ЛОГО -->
      <b-col cols="12" md="6">
        <LogoEdit
          @saveLogo="$emit('saveLogo', $event)"
          :currentLogo="logo"
        ></LogoEdit>
      </b-col>
      <!-- МЕНЮ -->
      <b-col cols="12" md="6">
        <MenuSection
          @saveMenu="$emit('saveMenu', $event)"
          :menu="menu"
        ></MenuSection>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import LogoEdit from '@/components/admin/Header/LogoEdit';
import MenuSection from '@/components/admin/Header/MenuSection';

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
