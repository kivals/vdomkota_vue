<template>
  <b-card>
    <template #header>
      <h6 class="mb-0">Интро - блок</h6>
    </template>
    <b-row>
      <b-col cols="12" md="5">
        <IntroTitle
          @saveIntroTitle="$emit('saveIntroTitle', $event)"
          :introText="introText"
          :introButtonText="introButtonText"
        ></IntroTitle>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <VideoEdit
          @saveVideo="$emit('saveVideo', $event)"
          :introVideo="introVideo"
        ></VideoEdit>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import VideoEdit from '@/components/admin/Intro/VideoEdit';
import IntroTitle from '@/components/admin/Intro/IntroTitle';

export default {
  name: 'IntroSection',
  components: {
    VideoEdit,
    IntroTitle,
  },
  props: {
    introText: {
      type: String,
    },
    introVideo: {
      type: String,
    },
    introButtonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
