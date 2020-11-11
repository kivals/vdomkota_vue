<template>
  <section class="about container">
    <app-div-cover
      class="about__picture"
      :imagePath="shelterCatImg"
    ></app-div-cover>
    <div class="about__info">
      <div class="about__title">
        {{ shelterTitle }}
      </div>
      <div class="about__text">
        <p>
          {{ shelterInfo }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import AppDivCover from '@/components/ui/AppDivCover';

export default {
  name: 'AppAbout',
  components: {
    AppDivCover,
  },
  props: {
    shelterCatImg: {
      type: String,
      required: true,
    },
    shelterTitle: {
      type: String,
      required: true,
    },
    shelterInfo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: $md2+px) {
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  &__picture {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    @media (max-width: $md2+px) {
      width: 250px;
      height: 250px;
    }
    @media (max-width: $md3+px) {
      margin-bottom: 25px;
    }
  }

  &__info {
    flex: 0 0 50%;
  }

  &__title {
    margin-bottom: 25px;
    font-size: 35px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: #545454;
    @media (max-width: $md2+px) {
      margin-bottom: 15px;
      font-size: 25px;
      line-height: 35px;
      letter-spacing: 0.05em;
    }
    @media (max-width: $md2+px) {
      text-align: center;
    }
  }

  &__text {
    font-size: 15px;
    line-height: 24px;
    color: #4c4c4c;
    p {
      margin-bottom: 20px;
      &:last-child {
        margin: 0;
      }
    }
    @media(max-width: $md2+px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>
