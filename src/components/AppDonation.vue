<template>
  <section class="donation container">
    <app-div-cover
      class="donation__picture"
      :imagePath="imagePath"
    ></app-div-cover>
    <div class="donation__description donation-description">
      <h2 class="donation-description__title">
        In addition, you can make a donation
      </h2>
      <p class="donation-description__bank">
        Name of the bank / Type of bank account
      </p>
      <app-donation-card>8380 2880 8028 8791 7435</app-donation-card>
      <p class="donation-description__text">
        Legal information and lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam.
        Praesent ultrices maximus tortor et vulputate. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  </section>
</template>

<script>
import AppDivCover from '@/components/ui/AppDivCover';
import AppDonationCard from '@/components/ui/AppDonationCard';

export default {
  name: 'donation',
  components: {
    AppDivCover,
    AppDonationCard,
  },
  data() {
    return {
      imagePath: require('@/assets/img/donation/cat.jpg'),
    };
  },
};
</script>

<style lang="scss" scoped>
.donation {
  padding: 75px 0;
  display: flex;
  @media (max-width: $md2+px) {
    flex-direction: column;
    align-items: center;
  }

  &__picture {
    width: 40%;
    min-height: 250px;
    margin-right: 60px;
    @media (max-width: $md2+px) {
      display: none;
    }
  }
  &__description {
    flex: 1 1 30%;
  }
  @media (max-width: $md2+px) {
    padding: 45px 0;
  }
}
.donation-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__title {
    font-size: 35px;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: #545454;
    margin-bottom: 25px;
    @media (max-width: $md1+px) {
      font-size: 30px;
      line-height: 40px;
    }
  }
  &__bank {
    font-size: 15px;
    letter-spacing: 0.06em;
    color: #545454;
    margin-bottom: 13px;
  }
  &__text {
    font-size: 12px;
    line-height: 18px;
    font-style: italic;
    color: #b2b2b2;
  }
}
</style>
