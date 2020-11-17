<template>
  <div>
    <b-row>
      <b-col cols="7" class="">
        <HeaderSection
          :menu="mainPageConfig.menu"
          :logo="mainPageConfig.logo"
          @saveMenu="saveMenu"
        ></HeaderSection>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import HeaderSection from '@/components/ui/admin/HeaderSection';

export default {
  name: 'AdminMainInfo',
  components: {
    HeaderSection,
  },
  data() {
    return {
      mainPageConfig: this.$store.getters.mainPageConfig,
    };
  },
  methods: {
    saveMenu($event) {
      this.mainPageConfig.menu = $event;
    },
  },
};
</script>

<style lang="scss" scoped></style>
