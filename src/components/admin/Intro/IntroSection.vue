<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Интро - блок</h6>
    </template>
    <b-row>
      <b-col>
        <b-card>
          <template #header>
            <h6 class="mb-0">Другие настройки</h6>
          </template>
          <div>
            <b-form-group
              label-cols="4"
              label-cols-lg="2"
              label="Текст заголовка"
              label-for="input-default"
            >
              <b-form-input id="input-default"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols="4"
              label-cols-lg="2"
              label="Текст кнопки"
              label-for="input-default"
            >
              <b-form-input id="input-default"></b-form-input>
            </b-form-group>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <VideoEdit :introVideo="introVideo"></VideoEdit>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import VideoEdit from '@/components/admin/Intro/VideoEdit';

export default {
  name: 'IntroSection',
  components: {
    VideoEdit,
  },
  props: {
    title: {
      type: String,
      //required: true,
    },
    introVideo: {
      type: String,
    },
    buttonText: {
      type: String,
      // required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
